import {Hono} from "hono";
import {validator} from "hono-openapi/valibot";
import {bodySchema} from "./index-post.schema.ts";
import {indexPostDescribe} from "./index-post.describe.ts";

export const indexPost = new Hono()
  .post('/',
    indexPostDescribe,
    validator('json', bodySchema),
    (c) => {
      const body = c.req.valid('json')
      return c.text(body.message)
    })
