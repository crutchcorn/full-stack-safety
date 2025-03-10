import {Hono} from 'hono'
import { personHobbiesApp } from './routes/person__[person_id]__hobbies/person__[person_id]__hobbies.app.ts'

const app = new Hono()
  .route("/:person_id/hobbies", personHobbiesApp)

export {app}
