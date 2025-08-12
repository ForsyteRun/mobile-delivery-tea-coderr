import type { IRouteHref } from '@/navigation/navigation.interface';
import { FontAwesome } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable } from 'react-native';
import type { IMenuItem } from './menu-item.interface';

interface IMenuItemProps extends IMenuItem {
  currentRoute: string,
  nav: (route: IRouteHref) => void
}
const MenuItem: FC<IMenuItemProps> = ({ icon, path, currentRoute, nav }) => {
  const isActive = currentRoute === `${path}`

  console.log(currentRoute, path);

  return (
    <Pressable onPress={() => nav(path)} className='px-8 py-4'>
      <FontAwesome name={icon} size={35} color={isActive ? '#47AA52' : '#374151'} />
    </Pressable>
  )
}

export default MenuItem