import { http, HttpResponse } from "msw";
import { setupWorker } from 'msw/browser'
import { peopleHandlers, getAbsolutePeoplePath } from "./people-mocks";
import { returnJSON } from "./json";

/**
 * This only works like this if you're using Vitest browser mode.
 * 
 * If you're using JSDom, you'll need to import from `msw/node` and mock the FE differently
 */
export const worker = setupWorker(...peopleHandlers)

export function mockEndpoint(
  path: string,
  body: object,
  type: "get" | "post" | "put" | "delete" = "get",
) {
  worker.use(http[type](getAbsolutePeoplePath(path), returnJSON(body)));
}

export function mockEndpointWithPromise(
  path: string,
  bodyPromise: Promise<object>,
) {
  worker.use(
    http.get(getAbsolutePeoplePath(path), async () => {
      const body = await bodyPromise;
      return HttpResponse.json(body);
    }),
  );
}
