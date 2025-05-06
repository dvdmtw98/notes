// @ts-ignore
import imageZoomScript from "./scripts/imagezoom.inline"
import styles from "./styles/imagezoom.scss"
import { QuartzComponent, QuartzComponentConstructor } from "./types"

const ImageZoom: QuartzComponent = () => {
  return <></>
}

ImageZoom.beforeDOMLoaded = imageZoomScript
ImageZoom.css = styles

export default (() => ImageZoom) satisfies QuartzComponentConstructor
