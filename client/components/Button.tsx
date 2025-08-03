import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FC } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface IButtonProps {
  label: string
  theme?: 'primary'
  onPress?: () => void
}
const Button: FC<IButtonProps> = ({ label, theme, onPress }) => {
  if (theme === 'primary') {
    return (
      <View style={[styles.container, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
        <Pressable style={[styles.button, { backgroundColor: '#fff' }]} onPress={onPress}>
          <FontAwesome name='picture-o' size={24} style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View >
    )
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => alert('pressed')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
})