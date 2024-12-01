import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { textTransformNode } from "./quartz/util/custom"

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
                inputPosition: 'top'
            }
        }),
        Component.BackToTop()
    ],
    footer: Component.Footer({
        links: {
            GitHub: "https://github.com/dvdmtw98",
            LinkedIn: "https://www.linkedin.com/in/david-varghese",
            Discord: "https://discordapp.com/users/757082677483536404",
            Blog: "https://blog.davidvarghese.net",
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
        Component.DesktopOnly(Component.Explorer({ mapFn: textTransformNode }))
    ],
    right: [
        Component.TableOfContents(),
        Component.Graph({
            localGraph: {
                linkDistance: 90,
                fontSize: 0.7,
                showTags: false

            },
            globalGraph: {
                linkDistance: 90,
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
        Component.DesktopOnly(Component.Explorer({ mapFn: textTransformNode })),
    ],
    right: [],
}
