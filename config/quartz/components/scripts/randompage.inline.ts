import { FullSlug, getFullSlug, pathToRoot, simplifySlug } from "../../util/path";

const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
}

// Exclude pages that has tag ending in "exclude" or has frontmatter password or passphrase
const isPostValid = (fileData: any): boolean => {
    const hasExcludeTag = fileData.tags?.some((tag: string) => tag.endsWith("exclude"));
    const hasPassword = fileData.frontmatter?.password || fileData.frontmatter?.passphrase;
    return !hasExcludeTag && !hasPassword;
}

// Returns a random slug that isn't the current slug
const getRandomSlug = (allPosts: string[], currentSlug: string): string | null => {
    if (allPosts.length === 0 || (allPosts.length === 1 && allPosts[0] === currentSlug)) {
        return null;
    }

    let newSlug = allPosts[getRandomInt(allPosts.length)];
    while (newSlug === currentSlug) {
        newSlug = allPosts[getRandomInt(allPosts.length)];
    }
    return newSlug;
}

// Main function to navigate to the random page
const navigateToRandomPage = async () => {
    // Get the current slug
    const fullSlug = getFullSlug(window);
    const currentSlug = simplifySlug(fullSlug);

    // Fetch all slugs (filtered for private pages)
    const data = await fetchData;
    const allPosts = Object.keys(data)
        .filter((slug) => isPostValid(data[slug]))
        .map((slug) => simplifySlug(slug as FullSlug));

    // Select a random slug
    const newSlug = getRandomSlug(allPosts, currentSlug);
    // Because of filtering no new pages is available
    if (!newSlug) return;

    // Construct the URL to navigate to the page
    const newPageUrl = newSlug === '' || newSlug === '/'
        ? pathToRoot(fullSlug)
        : `${pathToRoot(fullSlug)}/${newSlug}`;

    window.scrollTo(0, 0);
    window.location.href = newPageUrl;
}

document.addEventListener("nav", () => {
    const button = document.querySelector(".randompage") as HTMLElement;
    if (button) {
        button.addEventListener("click", navigateToRandomPage);
    }
});
