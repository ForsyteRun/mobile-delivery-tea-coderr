import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

interface IconButtonProps {
  icon: keyof typeof MaterialIcons.glyphMap,
  label: string,
  onPress: () => void
}

const IconButton: FC<IconButtonProps> = ({ icon, label, onPress }) => {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  )
}

export default IconButton


const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});