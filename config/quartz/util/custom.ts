import { Options } from "../components/ExplorerNode";

const textTransform = (displayName: string) => {

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
        csharp: "CSharp"
    }

    const words = displayName.split("-")

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

    if (node.file === null) {
        node.displayName = textTransform(node.displayName);
    }

    return node.displayName;
}


export { textTransformNode, textTransform }
