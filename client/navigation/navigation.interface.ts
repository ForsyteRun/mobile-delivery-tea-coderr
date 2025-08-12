export interface IRouteLinkData {
  index: '/';
  Home: '/Home';
  Favorites: '/Favorites';
  Search: '/Search';
  Cart: '/Cart';
  Auth: '/Auth';
}

export type IRouteHref = IRouteLinkData[keyof IRouteLinkData];
export type IRoute = { route: keyof IRouteLinkData }