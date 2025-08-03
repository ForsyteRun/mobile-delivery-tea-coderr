import React, { FC } from 'react';
import { ImageSourcePropType } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

interface EmojiStickerProps {
  source: ImageSourcePropType
  size: number
}

const EmojiSticker: FC<EmojiStickerProps> = ({ source, size }) => {
  const imageSize = useSharedValue(size)
  const offsetX = useSharedValue(0)
  const offsetY = useSharedValue(0)

  const startOffsetX = useSharedValue(0)
  const startOffsetY = useSharedValue(0)

  const gesture = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (imageSize.value !== size * 2) {
        imageSize.value = imageSize.value * 2
      } else {
        imageSize.value = Math.round(imageSize.value / 2)
      }
    })

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(imageSize.value),
      height: withSpring(imageSize.value),
    }
  })

  const panGesture = Gesture.Pan()
    .onStart((e) => {
      startOffsetX.value = offsetX.value
      startOffsetY.value = offsetY.value
    })
    .onChange((e) => {
      offsetX.value = e.translationX + startOffsetX.value
      offsetY.value = e.translationY + startOffsetY.value
    })

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offsetX.value,
        },
        {
          translateY: offsetY.value,
        },
      ]
    }
  })

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[containerStyle, { top: '-50%' }]}>
        <GestureDetector gesture={gesture}>
          <Animated.Image source={source} resizeMode={'contain'} style={[imageStyle, { width: size, height: size }]} />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  )
}

export default EmojiSticker