import { Hono } from 'hono'
import { personHobbiesApp } from './routes/person__[person_id]__hobbies/person__[person_id]__hobbies.app.ts'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

app.route('/:person_id/hobbies', personHobbiesApp)

export { app }
