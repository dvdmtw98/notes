// @ts-ignore
import textRevealScript from "./scripts/textreveal.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const TextReveal: QuartzComponent = () => {
  return <></>
}

TextReveal.beforeDOMLoaded = textRevealScript

export default (() => TextReveal) satisfies QuartzComponentConstructor
