import { setupWorker } from 'msw/browser'
import { peopleHandlers } from './people-mocks'

/**
 * This only works like this if you're using Vitest browser mode.
 *
 * If you're using JSDom, you'll need to import from `msw/node` and mock the FE differently
 */
export const worker = setupWorker(...peopleHandlers)
