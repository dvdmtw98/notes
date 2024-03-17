<%*
await Promise.all(
  app.vault.getMarkdownFiles().map(async file => {
    try {
      await app.fileManager.processFrontMatter(file, (frontmatter) => {
        if (!frontmatter["updated"]) {
          // tp.file.creation_date("YYYY-MM-DD HH:mm:ss ZZ");
          frontmatter["updated"] = frontmatter["date"]
        }
      });
    } catch (err) {
      console.error(`Failed to process ${file.path}\n\n${err}`);
    }
  })
);
-%>

[DEMO: How to setup and run your first Templater JS "script"](https://github.com/SilentVoid13/Templater/discussions/187)

[Templater Script Snippets](https://zachyoung.dev/posts/templater-snippets#run-obsidian-frontmatter-formatter-on-every-file)
