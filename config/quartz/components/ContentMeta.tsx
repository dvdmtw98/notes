import { Date, getDate } from "./Date"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import readingTime from "reading-time"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"
import style from "./styles/contentMeta.scss"

interface ContentMetaOptions {
  /**
   * Whether to display reading time
   */
  showReadingTime: boolean,
  repoLink: string,
  branch: string,
  rootDirectory: string
}

const defaultOptions: ContentMetaOptions = {
  showReadingTime: true,
  repoLink: "github.com",
  branch: "main",
  rootDirectory: "content"
}

export default ((opts?: Partial<ContentMetaOptions>) => {
  // Merge options with defaults
  const options: ContentMetaOptions = { ...defaultOptions, ...opts }

  function ContentMetadata({ cfg, fileData, displayClass }: QuartzComponentProps) {
    const text = fileData.text

    if (text) {
      let modifiedSegment: (string | JSX.Element) = ""
      let createdSegment: (string | JSX.Element) = ""

      if (fileData.dates) {
        // For backward compatibility, just in case this is used somewhere else
        const cfgDefaultDataType = cfg.defaultDateType

        if (fileData.dates.created) {
          cfg.defaultDateType = "created"
          createdSegment = <Date date={getDate(cfg, fileData)!} locale={cfg.locale} />
        }

        if (fileData.dates.modified) {
          cfg.defaultDateType = "modified"
          modifiedSegment = <Date date={getDate(cfg, fileData)!} locale={cfg.locale} />
        }

        cfg.defaultDateType = cfgDefaultDataType
      }

      // Display reading time if enabled
      var readingTimeStr: string = ""
      if (options.showReadingTime) {
        const { minutes, words: _words } = readingTime(text)
        const displayedTime = i18n(cfg.locale).components.contentMeta.readingTime({
          minutes: Math.ceil(minutes),
        })
        readingTimeStr = `${_words} words, ${displayedTime}`
      }

      const sourcefilePath = `${options?.rootDirectory}/${fileData.relativePath}`
      const sourceViewUrl = `${options?.repoLink}/blob/${options?.branch}/${sourcefilePath!}`
      const blameViewUrl = `${options?.repoLink}/blame/${options?.branch}/${sourcefilePath!}`

      const gitHistoryBasePath = options?.repoLink.replace("github.com", "github.githistory.xyz")
      const historyViewUrl = `${gitHistoryBasePath}/commits/${options?.branch}/${sourcefilePath!}`

      return (
        <div>
          <p style={{ margin: '0' }}>
            <a href={sourceViewUrl} target="_blank" rel="noreferrer noopener">Source</a>{" "}•{" "}
            <a href={blameViewUrl} target="_blank" rel="noreferrer noopener">Blame</a>{" "}•{" "}
            <a href={historyViewUrl} target="_blank" rel="noreferrer noopener">Git History</a>
          </p>
          <p style={{ margin: '0' }} class={classNames(displayClass, "content-meta")}>
            <span>Created: {createdSegment} • Modified: {modifiedSegment}</span>
          </p>
          <p style={{ margin: '0' }} class={classNames(displayClass, "content-meta")}>
            <span>{readingTimeStr}</span>
          </p>
        </div>
      )
    } else {
      return null
    }
  }

  ContentMetadata.css = style
  return ContentMetadata
}) satisfies QuartzComponentConstructor
