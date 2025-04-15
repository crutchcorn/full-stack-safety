import { describeRoute } from 'hono-openapi'
import { resolver } from 'hono-openapi/valibot'
import { responseSchema } from './person__[person_id]__hobbies.post.schema.ts'

export const personHobbiesPostDescribe = describeRoute({
  description: "Return what's said to the user",
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: resolver(responseSchema) },
      },
    },
  },
})
