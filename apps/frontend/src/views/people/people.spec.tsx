import { describe, expect, it } from 'vitest'
import { renderContainer } from '../../utils/testing-utils/render-container'
import { PeopleView } from './people.view'
import { screen, waitFor } from '@testing-library/react'
import { worker } from '../../utils/testing-utils/server'
import { userEvent } from '@vitest/browser/context'
import { http } from '../../utils/testing-utils/people-mocks.ts'

const user = userEvent.setup()

describe('PeopleView', () => {
  it('Should allow the user to add a hobby to their person', async () => {
    worker.use(
      http.post('/{person_id}/hobbies', ({ response }) =>
        response(200).json({
          hobbies: [
            {
              id: '0',
              name: 'Go to the gym',
            },
          ],
        }),
      ),
    )

    renderContainer(<PeopleView />)

    expect(screen.getByText('There are no hobbies')).toBeInTheDocument()

    await user.type(screen.getByLabelText('New hobby name'), 'Do something fun')

    await user.click(screen.getByText('Add hobby'))

    await waitFor(() =>
      expect(screen.getByText('Go to the gym')).toBeInTheDocument(),
    )
  })
})
