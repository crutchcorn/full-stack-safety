import {describeRoute} from "hono-openapi";
import {resolver} from "hono-openapi/valibot";
import {responseSchema} from "./index-get.schema.ts";

export const indexGetDescribe = describeRoute({
  description: 'Say hello to the user',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'text/plain': {schema: resolver(responseSchema)},
      },
    },
  },
})
