import { Hobby } from "../types/hobby";
import { fillRoute } from "../utils/fill-route";

async function unwrapNetworkResponse<T = any>(response: Response) {
  const data = await response.json();
  if (!response.ok) {
    throw data;
  }
  // We don't need to check if the status is 2xx here, because Axios already does.
  return data as T;
}

interface BaseNetworkProp {
  baseUrl: string;
  signal?: AbortSignal;
  body?: any;
}

type Method = "GET" | "POST" | "PATCH" | "DELETE";

async function makeNetworkRequest({
  method,
  baseUrl,
  relativeUrl,
  body,
  signal,
}: BaseNetworkProp & {
  method: Method;
  relativeUrl: string;
}): Promise<Response> {
  return await fetch(baseUrl + relativeUrl, {
    method: method,
    body: JSON.stringify(body),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    signal: AbortSignal.any([
      // Add timeout to fetch
      AbortSignal.timeout(1000),
      // Manual cancelation
      ...(signal ? [signal] : []),
    ]),
  });
}

/**
 * By convention, each network request has up to three different items:
 *
 * - {{name}}Url: The URL with `/:params/` interpolated routes
 * - {{name}}ResType: The response type from the server on success
 * - {{name}}ReqType: The request type the server expects JSON-ified on `body`
 */
export const createPersonHobbiesUrl = "/people/:person_id/hobbies";

export type createPersonHobbiesResType = {
  hobbies: Hobby[];
};

export interface HobbyCreatePayload {
  person_id: string;
  new_hobbies: Hobby[];
}

export interface createPersonHobbiesReqType
  extends BaseNetworkProp,
    HobbyCreatePayload {}
export async function createPersonHobbies({
  baseUrl,
  signal,
  person_id,
  new_hobbies,
  ...props
}: createPersonHobbiesReqType) {
  const pathUrl = fillRoute(createPersonHobbiesUrl, {
    person_id,
  });
  const response = await makeNetworkRequest({
    method: "POST",
    baseUrl: baseUrl,
    relativeUrl: pathUrl,
    signal,
    body: new_hobbies,
    ...props,
  });

  // Here, we can map our API responses to whatever data would make most sense to return from the server
  const { hobbies } =
    await unwrapNetworkResponse<createPersonHobbiesResType>(response);

  return hobbies;
}
