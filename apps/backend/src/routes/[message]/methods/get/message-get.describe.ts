import {describeRoute} from "hono-openapi";
import {resolver} from "hono-openapi/valibot";
import {responseSchema} from "./message-get.schema.ts";

export const messageGetDescribe = describeRoute({
  description: 'Whatever you say, I can say better',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'text/plain': {schema: resolver(responseSchema)},
      },
    },
  },
})
