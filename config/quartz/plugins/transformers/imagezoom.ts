import { JSResource } from "../../util/resources";
import { QuartzTransformerPlugin } from "../types";
// @ts-ignore
import imagezoom from "../../components/scripts/imagezoom.inline.ts";

export const ImageZoom: QuartzTransformerPlugin = () => {
    return {
        name: "ImageZoom",
        externalResources() {
            const js: JSResource[] = []

            js.push({
                script: imagezoom,
                loadTime: "afterDOMReady",
                contentType: "inline"
            })

            return { js }
        }
    }
}