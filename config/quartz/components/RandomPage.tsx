// @ts-ignore
import randomPageScript from "./scripts/randompage.inline"
import styles from "./styles/randompage.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const RandomPage: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <button class={classNames(displayClass, "randompage")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="randomIcon"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path
          d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM352 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM128 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
        />
      </svg>
    </button>
  )
}

RandomPage.beforeDOMLoaded = randomPageScript
RandomPage.css = styles

export default (() => RandomPage) satisfies QuartzComponentConstructor
