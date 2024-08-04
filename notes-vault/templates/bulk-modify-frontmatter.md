<%*
await Promise.all(
  app.vault.getMarkdownFiles().map(async file => {
    try {
      await app.fileManager.processFrontMatter(file, (frontmatter) => {
        if (!frontmatter["updated"]) {
          frontmatter["updated"] = frontmatter["date"]
        }
      });
    } catch (err) {
      console.error(`Failed to process ${file.path}\n\n${err}`);
    }
  })
);
-%>

[Templater Script Snippets](https://zachyoung.dev/posts/templater-snippets#run-obsidian-frontmatter-formatter-on-every-file)
