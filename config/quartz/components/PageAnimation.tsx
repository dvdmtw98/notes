// @ts-ignore
import pageAnimationScript from "./scripts/pageanimation.inline"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const PageAnimation: QuartzComponent = () => {
  return <></>
}

PageAnimation.beforeDOMLoaded = pageAnimationScript
PageAnimation.css = `
#quartz-body > * > * {
  opacity: 0;
}
`

export default (() => PageAnimation) satisfies QuartzComponentConstructor
