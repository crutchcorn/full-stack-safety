import {describeRoute} from "hono-openapi";
import {resolver} from "hono-openapi/valibot";
import {responseSchema} from "./index-post.schema.ts";

export const indexPostDescribe = describeRoute({
  description: 'Return what\'s said to the user',
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'text/plain': {schema: resolver(responseSchema)},
      },
    },
  },
})
