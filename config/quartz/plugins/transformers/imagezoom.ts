import { CSSResource, JSResource } from "../../util/resources"
import { QuartzTransformerPlugin } from "../types"
// @ts-ignore
import imagezoom from "../../components/scripts/imagezoom.inline.ts"

export const ImageZoom: QuartzTransformerPlugin = () => {
    return {
        name: "ImageZoom",
        externalResources() {
            const js: JSResource[] = []

            const css: CSSResource[] = [
                {
                    content: `
                        article img {
                            cursor: pointer;
                            transition: transform 0.3s ease;
                        }

                        .popped-image {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%) scale(1);
                            max-width: none;
                            max-height: 80%;
                            z-index: 10;
                            cursor: grab;
                            transition: transform 0.3s ease;
                        }

                        .blur-background {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.5);
                            backdrop-filter: blur(6px);
                            display: none;
                            z-index: 5;
                        }
                    `,
                    inline: true,
                },
            ]

            js.push({
                script: imagezoom,
                loadTime: "afterDOMReady",
                contentType: "inline"
            })

            return { css, js }
        }
    }
}
