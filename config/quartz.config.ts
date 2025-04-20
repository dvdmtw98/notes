import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
    configuration: {
        pageTitle: "Digital Archive",
        pageTitleSuffix: "",
        enableSPA: true,
        enablePopovers: true,
        analytics: null,
        locale: "en-US",
        baseUrl: "notes.davidvarghese.net",
        ignorePatterns: ["private", "templates", ".obsidian"],
        defaultDateType: "modified",
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: false,
            typography: {
                title: "Pacifico",
                header: "Geist",
                body: "Inter",
                code: "Fira Code",
            },
            colors: {
                lightMode: {
                    light: "#faf8f8",
                    lightgray: "#e5e5e5",
                    gray: "#b8b8b8",
                    darkgray: "#4e4e4e",
                    dark: "#2b2b2b",
                    secondary: "#284b63",
                    tertiary: "#84a59d",
                    highlight: "rgba(143, 159, 169, 0.15)",
                    textHighlight: "#fff23688",
                },
                darkMode: {
                    light: "#181818",
                    lightgray: "#393639",
                    gray: "#646464",
                    darkgray: "#d4d4d4",
                    dark: "#ebebec",
                    secondary: "#8FD9C3",
                    tertiary: "#3A8E73",
                    highlight: "rgba(143, 159, 169, 0.15)",
                    textHighlight: "#A6BF4B88",
                },
            },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "git", "filesystem"],
            }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({
                enableInHtmlEmbed: false,
                enableCheckbox: true
            }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents({ maxDepth: 5 }),
            Plugin.CrawlLinks({
                markdownLinkResolution: "shortest",
                openLinksInNewTab: true,
                lazyLoad: true
            }),
            Plugin.Description(),
            Plugin.Latex({ renderEngine: "katex" }),
            Plugin.ImageZoom(),
            Plugin.PageAnimation()
        ],
        filters: [Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.NotFoundPage(),
            // Comment out CustomOgImages to speed up build time
            Plugin.CustomOgImages({
                colorScheme: "darkMode",
            }),
        ],
    },
}

export default config
