import { paths } from '../../services/schemas/people'
import { createOpenApiHttp } from 'openapi-msw'

// Should be replaced with an env var of some kind
const baseUrl = 'https://example.com'

export const http = createOpenApiHttp<paths>({
  baseUrl,
})

// The default mocks that can be replaced on a test-by-test basis
export const peopleHandlers = [
  http.post('/{person_id}/hobbies', async ({ response }) => {
    return response(200).json({
      hobbies: [
        {
          id: '1',
          name: 'Tennis',
        },
      ],
    })
  }),
]
