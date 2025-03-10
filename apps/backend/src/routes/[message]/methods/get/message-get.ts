import {Hono} from "hono";
import {validator} from "hono-openapi/valibot";
import {paramSchema} from "./message-get.schema.ts";
import {messageGetDescribe} from "./message-get.describe.ts";

export const messageGet = new Hono()
  .get('/',
    messageGetDescribe,
    validator('param', paramSchema),
    (c) => {
      const param = c.req.valid('param')
      return c.text(param.message)
    })
