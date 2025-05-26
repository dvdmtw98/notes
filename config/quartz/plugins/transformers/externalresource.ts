import { QuartzTransformerPlugin } from "../types"

export const ExternalResource: QuartzTransformerPlugin = () => {
    return {
        name: "ExternalResource",
        externalResources() {
            return {
                css: [
                    {
                        content: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",
                        inline: false
                    },
                ],
                js: [],
            }
        },
    }
}
