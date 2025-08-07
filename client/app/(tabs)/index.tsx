import Button from '@/components/Button';
import CircleButton from '@/components/CircleButton';
import EmojiList from '@/components/EmojiList';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiSticker from '@/components/EmojiSticker';
import IconButton from '@/components/IconButton';
import ImageViewer from '@/components/ImageViewer';
import domtoimage from 'dom-to-image';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { useRef, useState } from 'react';
import { ImageSourcePropType, Platform, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { captureRef } from "react-native-view-shot";

const source = require('@/assets/images/background-image.png');

export default function Index() {
  const [appOptions, setAppOptions] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [openedEmojiPicker, setOpenedEmojiPicker] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const [status, requestPermission] = MediaLibrary.usePermissions();
  const ref = useRef<View>(null)

  if (status === null) {
    requestPermission();
  }

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setAppOptions(true)
    } else {
      alert('You did not select any image.')
    }
  }

  const takePicture = async () => {
    console.log(Platform.OS);

    if (Platform.OS !== 'web') {
      try {
        const localUri = await captureRef(ref, {
          height: 440,
          quality: 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!');
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(ref.current, {
          quality: 0.95,
          width: 320,
          height: 440,
        });

        let link = document.createElement('a');
        link.download = 'sticker-smash.jpeg';
        link.href = dataUrl;
        link.click();
      } catch (e) {
        console.log(e);
      }
    }
  };

  const onReset = () => {
    setPickedEmoji(undefined)
    setSelectedImage(undefined)
    setAppOptions(false)
  }

  const onAddSticker = () => {
    setOpenedEmojiPicker(true)
  }

  const onClose = () => {
    setOpenedEmojiPicker(false)
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <View ref={ref} collapsable={false} style={styles.imageContainer}>
        <ImageViewer source={source} selectedImage={selectedImage} />
        {pickedEmoji && <EmojiSticker source={pickedEmoji} size={40} />}
      </View>
      {
        appOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon='refresh' label='reset' onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon='save-alt' label='save' onPress={takePicture} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button theme='primary' label="Choose a photo" onPress={pickImageAsync} />
            <Button label="Use this photo" onPress={() => setAppOptions(true)} />
          </View>
        )
      }
      <EmojiPicker isVisible={openedEmojiPicker} onClose={onClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerContainer: {
    flex: 0.3,
    alignItems: 'center',
  },
});