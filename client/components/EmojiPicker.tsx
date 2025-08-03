import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React, { FC, PropsWithChildren } from 'react'
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'

interface IEmojiPickerProps {
  isVisible: boolean
  onClose: () => void
}
const EmojiPicker: FC<PropsWithChildren<IEmojiPickerProps>> = ({ isVisible, onClose, children }) => {
  return (
    <View>
      <Modal visible={isVisible} animationType='slide' transparent>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>
              EmojiPicker
            </Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  )
}

export default EmojiPicker

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    height: "25%",
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },
  content: {
    height: '16%',
    width: '100%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
})