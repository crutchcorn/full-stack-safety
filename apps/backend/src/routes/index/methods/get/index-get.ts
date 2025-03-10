import {Hono} from "hono";
import {validator} from "hono-openapi/valibot";
import {querySchema} from "./index-get.schema.ts";
import {indexGetDescribe} from "./index-get.describe.ts";

export const indexGet = new Hono()
  .get('/',
    indexGetDescribe,
    validator('query', querySchema),
    (c) => {
      const query = c.req.valid('query')
      return c.text(`Hello ${query?.name ?? 'Hono'}!`)
    })
