import { Image } from "expo-image"
import { FC } from "react"
import { StyleSheet } from "react-native"

interface ImageViewerProps {
  source: string
  selectedImage?: string
}

const ImageViewer: FC<ImageViewerProps> = ({ source, selectedImage }) => {
  const src = selectedImage ? { uri: selectedImage } : source;
  return (
    <Image source={src} style={styles.image} />
  )
}

export default ImageViewer

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})