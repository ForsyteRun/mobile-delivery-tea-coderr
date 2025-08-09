import cn from 'clsx'
import { Controller, FieldValues } from "react-hook-form"
import { Text, TextInput, View } from "react-native"
import { IField } from "./field.interface"

const FormFields = <T extends FieldValues>({
  control,
  name,
  rules,
  className,
  ...rest
}: IField<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) =>
        <View className='relative'>
          <View className={cn('bg-white, w-full border rounded', error ? 'border-red-500' : 'border-gray-500')}>
            <TextInput
              value={value || ''}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize='none'
              placeholderTextColor={'#A1A1A1'}
              className='text-black text-xl'
              {...rest}
            />
          </View>
          {error && <Text className="absolute top-full text-red-500">{error.message}</Text>}
        </View>
      } />

  )
}

export default FormFields
