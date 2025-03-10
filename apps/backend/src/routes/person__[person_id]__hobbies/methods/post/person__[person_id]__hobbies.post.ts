import { Hono } from 'hono'
import { validator } from 'hono-openapi/valibot'
import { bodySchema, paramSchema, type ResponseSchemaType } from './person__[person_id]__hobbies.post.schema.ts'
import { personHobbiesPostDescribe } from './person__[person_id]__hobbies.post.describe.ts'

export const personHobbiesPost = new Hono()
  .post('/',
    personHobbiesPostDescribe,
    validator('param', paramSchema),
    validator('json', bodySchema),
    (c) => {
      const body = c.req.valid('json')
      const _params = c.req.valid('param')
      return c.json({
        hobbies: body.new_hobbies
      } satisfies ResponseSchemaType)
    })
