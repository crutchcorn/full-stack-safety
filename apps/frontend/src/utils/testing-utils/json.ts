import { HttpResponse, ResponseResolver } from "msw";

export function returnJSON(json: object) {
  return (() => {
    return HttpResponse.json(json);
  }) as ResponseResolver;
}
