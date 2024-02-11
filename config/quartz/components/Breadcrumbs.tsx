import { QuartzPluginData } from "../plugins/vfile"
import { classNames } from "../util/lang"
import { FullSlug, SimpleSlug, resolveRelative } from "../util/path"
import breadcrumbsStyle from "./styles/breadcrumbs.scss"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

type CrumbData = {
  displayName: string
  path: string
}

const titleCaseTransform = (displayName: string) => {

    const filterWords = ["and"];

	const words = displayName.split("-");
	const titleCaseWords = words.map((word) => {
		if (filterWords.includes(word)) {
			return word
		} 
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
	});
	const result = titleCaseWords.join(" ");
	displayName = result;

    return displayName;
}

interface BreadcrumbOptions {
  /**
   * Symbol between crumbs
   */
  spacerSymbol: string
  /**
   * Name of first crumb
   */
  rootName: string
  /**
   * Whether to look up frontmatter title for folders (could cause performance problems with big vaults)
   */
  resolveFrontmatterTitle: boolean
  /**
   * Whether to display breadcrumbs on root `index.md`
   */
  hideOnRoot: boolean
  /**
   * Whether to display the current page in the breadcrumbs.
   */
  showCurrentPage: boolean
}

const defaultOptions: BreadcrumbOptions = {
  spacerSymbol: "❯",
  rootName: "Home",
  resolveFrontmatterTitle: true,
  hideOnRoot: true,
  showCurrentPage: true,
}

function formatCrumb(displayName: string, baseSlug: FullSlug, currentSlug: SimpleSlug): CrumbData {
  return {
    displayName: titleCaseTransform(displayName),
    path: resolveRelative(baseSlug, currentSlug),
  }
}

export default ((opts?: Partial<BreadcrumbOptions>) => {
  // Merge options with defaults
  const options: BreadcrumbOptions = { ...defaultOptions, ...opts }

  // computed index of folder name to its associated file data
  let folderIndex: Map<string, QuartzPluginData> | undefined

  function Breadcrumbs({ fileData, allFiles, displayClass }: QuartzComponentProps) {
    // Hide crumbs on root if enabled
    if (options.hideOnRoot && fileData.slug === "index") {
      return <></>
    }

    // Format entry for root element
    const firstEntry = formatCrumb(options.rootName, fileData.slug!, "/" as SimpleSlug)
    const crumbs: CrumbData[] = [firstEntry]

    if (!folderIndex && options.resolveFrontmatterTitle) {
      folderIndex = new Map()
      // construct the index for the first time
      for (const file of allFiles) {
        if (file.slug?.endsWith("index")) {
          const folderParts = file.slug?.split("/")
          // 2nd last to exclude the /index
          const folderName = folderParts?.at(-2)
          if (folderName) {
            folderIndex.set(folderName, file)
          }
        }
      }
    }

    // Split slug into hierarchy/parts
    const slugParts = fileData.slug?.split("/")
    if (slugParts) {
      // full path until current part
      let currentPath = ""
      for (let i = 0; i < slugParts.length - 1; i++) {
        let curPathSegment = slugParts[i]

        // Try to resolve frontmatter folder title
        const currentFile = folderIndex?.get(curPathSegment)
        if (currentFile) {
          const title = currentFile.frontmatter!.title
          if (title !== "index") {
            curPathSegment = title
          }
        }

        // Add current slug to full path
        currentPath += slugParts[i] + "/"

        // Format and add current crumb
        const crumb = formatCrumb(curPathSegment, fileData.slug!, currentPath as SimpleSlug)
        crumbs.push(crumb)
      }

      // Add current file to crumb (can directly use frontmatter title)
      if (options.showCurrentPage && slugParts.at(-1) !== "index") {
        crumbs.push({
          displayName: fileData.frontmatter!.title,
          path: "",
        })
      }
    }

    return (
      <nav class={classNames(displayClass, "breadcrumb-container")} aria-label="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <div class="breadcrumb-element">
            <a href={crumb.path}>{crumb.displayName}</a>
            {index !== crumbs.length - 1 && <p>{` ${options.spacerSymbol} `}</p>}
          </div>
        ))}
      </nav>
    )
  }
  Breadcrumbs.css = breadcrumbsStyle
  return Breadcrumbs
}) satisfies QuartzComponentConstructor