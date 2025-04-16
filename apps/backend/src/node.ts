import { serve } from '@hono/node-server'
import { openAPISpecs } from 'hono-openapi'
import { Scalar } from '@scalar/hono-api-reference'
import { app } from './shared.ts'
import { openAPIOptions } from './constants/open-api.ts'

app.get('/openapi', openAPISpecs(app, openAPIOptions))

app.get(
  '/docs',
  Scalar({
    theme: 'saturn',
    url: '/openapi',
  }),
)

const PORT = 3030

serve({
  fetch: app.fetch,
  port: PORT,
})

console.log(`Server running at http://localhost:${PORT}`)
