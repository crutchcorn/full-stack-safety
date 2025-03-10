import { handle } from 'hono/aws-lambda'
import {app} from "./shared.ts";

export const handler = handle(app)
