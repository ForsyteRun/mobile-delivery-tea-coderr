import * as SplashScreen from 'expo-splash-screen';
import { FC, PropsWithChildren, createContext, useEffect, useState } from "react";
import { IContext, TUserStateData } from "./auth-provider.interface";

SplashScreen.preventAutoHideAsync();

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<TUserStateData>(null)

  useEffect(() => {
    SplashScreen.hideAsync();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider