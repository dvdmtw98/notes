import { version } from "../../package.json"
import { i18n } from "../i18n"
import style from "./styles/footer.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  const Footer: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <p>
          © {year}{" "}
          <a href="https://www.linkedin.com/in/david-varghese/" target="_blank" rel="noreferrer noopener">
            David Varghese
          </a>.
          Licensed{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noreferrer noopener">
            CC BY 4.0
          </a>.{" "}
          <a href="https://quartz.jzhao.xyz/" target="_blank" rel="noreferrer noopener">
            Quartz v{version}
          </a>.
        </p>

        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link} target="_blank" rel="noreferrer noopener">
                {text}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
