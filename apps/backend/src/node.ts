import { serve } from '@hono/node-server'
import { app } from './shared.ts'
import { openAPISpecs } from 'hono-openapi'
import { Scalar } from '@scalar/hono-api-reference'
import { openAPIOptions } from './constants/open-api.ts'

app.get('/openapi', openAPISpecs(app, openAPIOptions))

app.get(
  '/docs',
  Scalar({
    theme: 'saturn',
    url: '/openapi',
  }),
)
serve(app)
