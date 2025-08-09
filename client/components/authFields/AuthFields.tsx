import FormFields from "@/components/field/Field";
import { IAuthFormData } from "@/types/auth.interface";
import { FC } from "react";
import { Control } from "react-hook-form";
import { View } from "react-native";
import { validEmail } from "./email.regex";

interface IFieldProps {
  control: Control<IAuthFormData>
}

const AuthFields: FC<IFieldProps> = ({ control }) => {
  return (
    <View className="w-9/12 flex flex-col gap-8 my-4" >
      <FormFields<IAuthFormData>
        control={control}
        name="email"
        placeholder="enter email"
        keyboardType='email-address'
        rules={{
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Invalid email address'
          }
        }}
      />
      <FormFields<IAuthFormData>
        control={control}
        name="password"
        placeholder="enter password"
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters' }
        }}
      />
    </View>
  )
}

export default AuthFields