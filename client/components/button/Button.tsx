import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'
import { IButton } from './button.interaface'

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, ...rest }) => {
  return (
    <Pressable className={cn('my-4 mx-2 py-2 px-4 bg-rose-400 rounded', className)} {...rest}>
      <Text className="text-center text-black ">{children}</Text>
    </Pressable>
  )
}

export default Button