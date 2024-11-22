// @ts-ignore
import backtotopScript from "./scripts/backtotop.inline"
import backtotopStyle from "./styles/backtotop.scss"
import { QuartzComponentConstructor } from "./types"

function BackToTop() {
  return (
    <>
      <div id="scrollAnchor"></div>
      <button id="scrollToTop" class="scroll-to-top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  )
}

BackToTop.css = backtotopStyle
BackToTop.afterDOMLoaded = backtotopScript

export default (() => BackToTop) satisfies QuartzComponentConstructor
