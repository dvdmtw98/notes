import { Options } from "../components/Explorer";

const customTextTransform = (displayName: string) => {

    const filterWords = ["and", "of", "a", "in", "on", "the", "for", "to"]
    const upperWords = ["AWS", "GCP", "AI", "ML", "SQL", "CSS", "PL", "DB"]
    const specialWords: { [key: string]: string } = {
        javascript: "JavaScript",
        typescript: "TypeScript",
        nodejs: "Node.js",
        nosql: "NoSQL",
        powershell: "PowerShell",
        aspnet: "ASP.NET",
        devops: "DevOps",
        github: "GitHub",
        csharp: "CSharp",
        ffmpeg: "FFmpeg"
    }

    // Split on space and hyphen
    const words = displayName.split(/[-\s]+/);

    const transformedWords = words.map((word) => {
        const lowerWord = word.toLowerCase()

        if (specialWords[lowerWord]) {
            return specialWords[lowerWord]
        }

        if (upperWords.includes(word.toUpperCase())) {
            return word.toUpperCase()
        }

        if (filterWords.includes(lowerWord)) {
            return lowerWord
        }

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })

    return transformedWords.join(" ")
}

const textTransformNode: Options["mapFn"] = (node) => {

    if (node.isFolder === true) {
        const filterWords = ["and", "of", "a", "in", "on", "the", "for", "to"]
        const upperWords = ["AWS", "GCP", "AI", "ML", "SQL", "CSS", "PL", "DB"]
        const specialWords: { [key: string]: string } = {
            javascript: "JavaScript",
            typescript: "TypeScript",
            nodejs: "Node.js",
            nosql: "NoSQL",
            powershell: "PowerShell",
            aspnet: "ASP.NET",
            devops: "DevOps",
            github: "GitHub",
            csharp: "CSharp",
            ffmpeg: "FFmpeg"
        }

        // Split on space and hyphen
        const words = node.displayName.split(/[-\s]+/);

        const transformedWords = words.map((word) => {
            const lowerWord = word.toLowerCase()

            if (specialWords[lowerWord]) {
                return specialWords[lowerWord]
            }

            if (upperWords.includes(word.toUpperCase())) {
                return word.toUpperCase()
            }

            if (filterWords.includes(lowerWord)) {
                return lowerWord
            }

            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        })

        node.displayName = transformedWords.join(" ")
    }

    return node;
}


export { textTransformNode, customTextTransform }
