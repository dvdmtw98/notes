import { CSSResource, JSResource } from "../../util/resources"
import { QuartzTransformerPlugin } from "../types"
// @ts-ignore
import pageanimation from "../../components/scripts/pageanimation.inline"

export const PageAnimation: QuartzTransformerPlugin = () => {
    return {
        name: "PageAnimation",
        externalResources() {
            const js: JSResource[] = []

            const css: CSSResource[] = [
                {
                    content: `
                        #quartz-body > * > * {
                            opacity: 0;
                        }
                    `,
                    inline: true,
                },
            ]

            js.push({
                script: pageanimation,
                loadTime: "beforeDOMReady",
                contentType: "inline"
            })

            return { css, js }
        }
    }
}
