import * as v from 'valibot'

// TODO: Move this to a `packages/types` shared package so that FE and BE can use alike
const HobbySchema = v.object({
  name: v.string(),
  id: v.string(),
})

export const bodySchema = v.object({
  new_hobbies: v.array(HobbySchema),
})

export const paramSchema = v.object({
  person_id: v.string(),
})

export const responseSchema = v.object({ hobbies: v.array(HobbySchema) })

export type ResponseSchemaType = v.InferOutput<typeof responseSchema>
