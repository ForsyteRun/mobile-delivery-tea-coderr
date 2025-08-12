import type { IRouteHref } from '@/navigation/navigation.interface';
import type { IconFontAwesomeType } from '@/types/icon.interface';

export interface IMenuItem {
  icon: IconFontAwesomeType,
  path: IRouteHref
}
