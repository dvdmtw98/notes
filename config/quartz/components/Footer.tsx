import { version } from "../../package.json";
import { i18n } from "../i18n";
import style from "./styles/footer.scss";
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types";
// @ts-ignore
import commentsScript from "./scripts/comments.inline";

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <div class="giscus" style={{ marginBlock: "2rem" }} ></div>
        <p>
            © 2022-{year} David Varghese.
            &thinsp;{i18n(cfg.locale).components.footer.createdWith}{" "}
            <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
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
