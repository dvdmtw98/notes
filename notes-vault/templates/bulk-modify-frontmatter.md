<%*
const reorderKeys = (frontmatter, newKeysOrder) => {
    const reorderedTempObject = {};

    if (!frontmatter.hasOwnProperty("tags")) {
        console.log(frontmatter["title"]);
    }

    // Populate the temporary object with properties in the desired order
    newKeysOrder.forEach(key => {
        if (Object.prototype.hasOwnProperty.call(frontmatter, key)) {
            reorderedTempObject[key] = frontmatter[key];
        }
    });

    // Remove all properties from the original object
    Object.keys(frontmatter).forEach(key => {
        delete frontmatter[key];
    });

    // Reassign properties to the original object in the new order
    Object.keys(reorderedTempObject).forEach(key => {
        frontmatter[key] = reorderedTempObject[key];
    });
}

await Promise.all(
    app.vault.getMarkdownFiles().map(async file => {
        if (!file["path"].startsWith("templates/")) {
            try {
                await app.fileManager.processFrontMatter(file, (frontmatter) => {
                    // const newKeysOrder = ['title', 'description', 'tags', 'date', 'updated']
                    // reorderKeys(frontmatter, newKeysOrder);

                    if (!frontmatter.hasOwnProperty("tags")) {
                        console.log(frontmatter["title"]);
                    }
                });
            } catch (err) {
                console.error(`Failed to process ${file.path}\n${err}`);
            }
        }
    })
);
-%>
