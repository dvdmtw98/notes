import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { textTransformNode } from "./quartz/util/custom"

const contentMetaConfig = {
    repoLink: "https://github.com/dvdmtw98/notes",
    branch: "main",
    rootDirectory: "notes-vault"
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    afterBody: [
        Component.Backlinks(),
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
                inputPosition: 'top',
            }
        }),
        Component.BackToTop(),
        Component.ImageZoom()
    ],
    footer: Component.Footer({
        links: {
            GitHub: { url: "https://github.com/dvdmtw98", icon: "fa-brands fa-github" },
            LinkedIn: { url: "https://www.linkedin.com/in/david-varghese", icon: "fa-brands fa-linkedin" },
            Discord: { url: "https://discordapp.com/users/757082677483536404", icon: "fa-brands fa-discord" },
            Blog: { url: "https://blog.davidvarghese.net", icon: "fa-brands fa-blogger-b" },
            Medium: { url: "https://david-varghese.medium.com", icon: "fa-brands fa-medium" },
        },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [
        Component.ConditionalRender({
            component: Component.Breadcrumbs(),
            condition: (page) => page.fileData.slug !== "index",
        }),
        Component.ArticleTitle(),
        Component.ContentMeta(contentMetaConfig),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                { Component: Component.Search() },
                { Component: Component.Darkmode() },
                { Component: Component.RandomPage() },
                { Component: Component.ReaderMode() }
            ],
            gap: "1rem"
        }),
        Component.Explorer({
            folderClickBehavior: "collapse",
            mapFn: textTransformNode
        })
    ],
    right: [
        Component.TableOfContents(),
        Component.Graph({
            localGraph: {
                linkDistance: 80,
                fontSize: 0.7,
                showTags: false

            },
            globalGraph: {
                linkDistance: 250,
                repelForce: 1,
                centerForce: 0.6,
                fontSize: 0.3,
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
        Component.ContentMeta(contentMetaConfig)
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Flex({
            components: [
                { Component: Component.Search() },
                { Component: Component.Darkmode() },
                { Component: Component.RandomPage() },
                { Component: Component.ReaderMode() }
            ],
            gap: "1rem"
        }),
        Component.Explorer({
            folderClickBehavior: "collapse",
            mapFn: textTransformNode
        })
    ],
    right: [],
}
