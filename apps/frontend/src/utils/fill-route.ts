type GetRouteParams<T extends string> = T extends `:${infer Name}/${infer Rest}`
  ? Record<Name, string | number> & GetRouteParams<Rest>
  : T extends `:${infer OnlyName}`
    ? Record<OnlyName, string | number>
    : T extends `${string}/${infer MoreRest}`
      ? GetRouteParams<MoreRest>
      : Record<never, never>;

export function fillRoute<Route extends string>(
  route: Route,
  params: GetRouteParams<Route>,
) {
  const routeSegments = route.split("/");
  return routeSegments
    .map((routeSegment) => {
      if (!routeSegment.startsWith(":")) return routeSegment;
      const paramName = routeSegment.replace(/^:/, "") as keyof typeof params;
      return `${params[paramName]}`;
    })
    .join("/");
}
