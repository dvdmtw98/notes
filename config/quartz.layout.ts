import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";
import { Options } from "./quartz/components/ExplorerNode";

const titleCaseTransform: Options["mapFn"] = (node) => {

  const filterWords = ["and", "of", "a", "in", "on", "the", "for", "to"];

  if (node.file === null) {
    const words = node.displayName.split("-");
    const titleCaseWords = words.map((word) => {
      if (filterWords.includes(word)) {
        return word
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    });
    const result = titleCaseWords.join(" ");
    node.displayName = result;
  }

  return node.displayName;
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [
    Component.Comments({
      provider: 'giscus',
      options: {
        repo: 'dvdmtw98/notes',
        repoId: 'R_kgDOItAF1Q',
        category: 'Comments',
        categoryId: 'DIC_kwDOItAF1c4Cc4nH',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        inputPosition: 'top'
      }
    }),
  ],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/dvdmtw98",
      LinkedIn: "https://www.linkedin.com/in/david-varghese",
      Blog: "https://blog.davidvarghese.dev",
      Medium: "https://david-varghese.medium.com",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ mapFn: titleCaseTransform }))
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    Component.Graph({
      localGraph: {
        scale: 2,
        linkDistance: 45,
        fontSize: 0.3,
        showTags: false

      },
      globalGraph: {
        linkDistance: 30,
        fontSize: 0.6,
        showTags: false
      }
    })
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta()
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({ mapFn: titleCaseTransform })),
  ],
  right: [],
}


