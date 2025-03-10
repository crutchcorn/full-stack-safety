import * as v from "valibot";

export const paramSchema = v.object({
  message: v.string(),
})

export const responseSchema = v.string()
