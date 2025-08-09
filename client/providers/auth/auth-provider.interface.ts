import { IUser } from "@/types/user.interface"
import { Dispatch, SetStateAction } from "react"

export type TUserStateData = IUser | null

export interface IContext {
  user: TUserStateData
  setUser: Dispatch<SetStateAction<TUserStateData>>
} 