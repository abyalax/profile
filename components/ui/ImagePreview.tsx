import Image from "next/image"
import { ImageProps } from "next/image"

const ImagePreview = (props : ImageProps) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image {...props} />
}

export default ImagePreview