import Loader from "@/components/Loader";
import AuthFields from "@/components/authFields/AuthFields";
import Button from "@/components/button/Button";
import { IAuthFormData } from "@/types/auth.interface";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Pressable, Text, View } from 'react-native';

const Auth = () => {
  const [isReg, setIsReg] = useState(false);
  const { handleSubmit, reset, control } = useForm<IAuthFormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<IAuthFormData> = (data) => {
    console.log(data);
  }

  const isLoading = false;
  return (
    <View className="flex-1 items-center justify-center gap-4 mx-4">
      <View className="w-9/12">
        <Text className="text-center text-black text-3xl font-medium">{isReg ? 'Register' : 'Auth'}</Text>
      </View>
      <AuthFields control={control} />
      <Pressable className="flex-row items-center gap-1" onPress={() => setIsReg(prev => !prev)}>
        <Text>{isReg ? "Already have an account?" : "Don't have an account?"}</Text>
        <Text className="text-green-700 font-medium">{isReg ? "Login" : "Register"}</Text>
      </Pressable>
      {isLoading ? <Loader /> : <Button onPress={handleSubmit(onSubmit)} className="w-9/12 py-4 ronded">Submit</Button>}
    </View >
  )
}

export default Auth