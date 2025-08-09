export interface IRouteLinkData {
  Home: undefined;
  Auth: undefined;
}

export interface IRoute {
  route: keyof IRouteLinkData;
}