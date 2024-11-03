export { Description } from "./description"
export { FrontMatter } from "./frontmatter"
export { GitHubFlavoredMarkdown } from "./gfm"
export { CreatedModifiedDate } from "./lastmod"
export { Latex } from "./latex"
export { HardLineBreaks } from "./linebreaks"
export { CrawlLinks } from "./links"
export { ObsidianFlavoredMarkdown } from "./ofm"
export { OxHugoFlavouredMarkdown } from "./oxhugofm"
export { SyntaxHighlighting } from "./syntax"
export { TableOfContents } from "./toc"
export { ImageZoom } from "./imagezoom"

import rehypeExternalLinks from 'rehype-external-links'
import { QuartzTransformerPlugin } from "../types"

export const ExternalLinks: QuartzTransformerPlugin = () => {
    return {
        name: "ExternalLinks",
        htmlPlugins() {
            return [[rehypeExternalLinks, { rel: ['noopener', 'noreferrer'], target: ['_blank'] }]]
        },
    }
}
