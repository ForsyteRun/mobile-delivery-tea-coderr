import { IRouteHref } from "@/navigation/navigation.interface";
import { usePathname, useRouter } from "expo-router";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MenuItem from "./MenuItem";
import { menuItems } from "./menu-item";

const MenuBottom = () => {
  const currentRoute = usePathname()

  const router = useRouter();

  const { bottom } = useSafeAreaInsets()

  console.log(currentRoute, 77);

  const nav = (route: IRouteHref) => {
    router.navigate(`${route}`);
  };

  return (
    <View className="flex-row justify-between h-[14%] absolute bottom-0 w-full border-t border-t-solid border-t-[#bbbbbb] bg-white" style={{ paddingBottom: bottom + 20 }}>
      {
        menuItems.map(item => <MenuItem key={item.icon} {...item} currentRoute={currentRoute} nav={nav} />)
      }
    </View>
  )
}

export default MenuBottom
