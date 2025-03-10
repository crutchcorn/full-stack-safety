import * as v from "valibot";

export const bodySchema = v.object({
  message: v.string(),
})

export const responseSchema = v.string()
