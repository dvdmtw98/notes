import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { Date } from "./Date"

interface Options {
  links: Record<string, Record<string, string>>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ cfg, allFiles, displayClass }: QuartzComponentProps) => {
    const date = new globalThis.Date()
    const year = date.getFullYear()
    const today = <Date date={date} locale={cfg.locale} />
    const links = opts?.links ?? []

    return (
      <footer class={`${displayClass ?? ""}`}>
        <ul>
          {Object.entries(links).map(([name, details]) => (
            <li>
              <a href={details.url} target="_blank" rel="noreferrer noopener">
                <i class={details.icon}></i> {name}
              </a>
            </li>
          ))}
        </ul>

        <div class="footer-text">
          <span class="line-group line-1">
            © 2023-{year}{" "}David Varghese.{" "}
            <a href="https://quartz.jzhao.xyz/" target="_blank" rel="noreferrer noopener">
              Quartz v{version}
            </a>.
          </span>
          <span class="line-group line-2">
            {" "}Licensed{" "}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer noopener">
              CC BY-NC-SA 4.0
            </a>.
          </span>
          <span class="line-group line-3">
            Total Pages: {allFiles.length}. Last updated: {today}.
          </span>
        </div>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
