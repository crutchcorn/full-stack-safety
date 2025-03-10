import * as v from "valibot";

export const querySchema = v.object({
  name: v.optional(v.string()),
})

export const responseSchema = v.string()
