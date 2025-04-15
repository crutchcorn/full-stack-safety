import { Hono } from 'hono'
import { personHobbiesPost } from './methods/post/person__[person_id]__hobbies.post.ts'

export const personHobbiesApp = new Hono().route('/', personHobbiesPost)
