import { version } from "../../package.json";
// @ts-ignore
import commentsScript from "./scripts/comments.inline";
import style from "./styles/footer.scss";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div class="giscus" style={{ marginBlock: "2rem" }} ></div>
        <p>
            © 2022-{year} David Varghese. Created with <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>.
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link} target="_blank" rel="noreferrer noopener">{text}</a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

    Footer.beforeDOMLoaded = commentsScript
    Footer.css = style
    return Footer
}) satisfies QuartzComponentConstructor
