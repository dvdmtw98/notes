import rehypeExternalLinks from 'rehype-external-links'
import { QuartzTransformerPlugin } from "../types"

export const ExternalLinks: QuartzTransformerPlugin = () => {
  return {
    name: "ExternalLinks",
    htmlPlugins() {
      return [[rehypeExternalLinks, {rel: ['noopener', 'noreferrer'], target: ['_blank']}]]
    },
  }
}
