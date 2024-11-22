export { FrontMatter } from "./frontmatter"
export { GitHubFlavoredMarkdown } from "./gfm"
export { Citations } from "./citations"
export { CreatedModifiedDate } from "./lastmod"
export { Latex } from "./latex"
export { Description } from "./description"
export { CrawlLinks } from "./links"
export { ObsidianFlavoredMarkdown } from "./ofm"
export { OxHugoFlavouredMarkdown } from "./oxhugofm"
export { SyntaxHighlighting } from "./syntax"
export { TableOfContents } from "./toc"
export { HardLineBreaks } from "./linebreaks"
export { RoamFlavoredMarkdown } from "./roam"
export { ImageZoom } from "./imagezoom"
export { PageAnimation } from "./pageanimation"

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
