import createClient from 'openapi-fetch'
import type { paths } from './schemas/people'

type GetPathReqBody<
  TKey extends keyof paths,
  TMethod extends keyof paths[TKey],
> =
  Required<paths[TKey][TMethod]> extends { requestBody: infer TRequestBody }
    ? TRequestBody extends { content: infer TContent }
      ? TContent extends { 'application/json': infer TJson }
        ? TJson
        : never
      : never
    : never

type GetPathReqParams<
  TKey extends keyof paths,
  TMethod extends keyof paths[TKey],
> =
  Required<paths[TKey][TMethod]> extends { parameters: infer TParameters }
    ? TParameters extends { path: infer TPath }
      ? TPath
      : never
    : never

type GetReqProps<
  TKey extends keyof paths,
  TMethod extends keyof paths[TKey],
> = GetPathReqBody<TKey, TMethod> & GetPathReqParams<TKey, TMethod>

interface BaseNetworkProp {
  baseUrl: string
  signal?: AbortSignal
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
}

const client = createClient<paths>()

function getBaseFetchOptions({ baseUrl, body, signal }: BaseNetworkProp) {
  return {
    baseUrl,
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    signal: AbortSignal.any([
      // Add timeout to fetch
      AbortSignal.timeout(1000),
      // Manual cancelation
      ...(signal ? [signal] : []),
    ]),
  }
}

export type HobbyCreatePayload = GetReqProps<'/{person_id}/hobbies', 'post'>

export type createPersonHobbies = Awaited<
  ReturnType<typeof createPersonHobbies>
>

export async function createPersonHobbies({
  baseUrl,
  signal,
  person_id,
  new_hobbies,
  ...props
}: BaseNetworkProp & HobbyCreatePayload) {
  const { data, error } = await client.POST('/{person_id}/hobbies', {
    params: {
      path: {
        person_id,
      },
    },
    ...getBaseFetchOptions({ baseUrl, signal, body: { new_hobbies } }),
    ...props,
  })

  if (error) throw error
  if (!data) throw 'No data returned from API'

  // Here, we can map our API responses to whatever data would make most sense to return from the server
  const { hobbies } = data

  return hobbies
}
