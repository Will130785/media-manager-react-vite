import TextInput from '../../../global/inputs/textInput'
import { useGameForm } from './useGameForm'
import Button from '../../../global/buttons/button'
import DateInput from '../../inputs/dateInput'
import type { IGame } from '../../../../types'

interface IGameFormProps {
  gameData?: IGame
  id?: string
}

const GameForm = ({ gameData, id }: IGameFormProps) => {
  const { gameForm } = useGameForm(gameData, id)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        gameForm.handleSubmit()
      }}
    >
      <gameForm.Field
        name="developer"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Developer is required' : undefined,
        }}
        children={(field) => (
          <div>
            <TextInput
              value={field.state.value ?? ''}
              id="developer"
              name="developer"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <gameForm.Field
        name="title"
        validators={{
          onChange: ({ value }) => (!value ? 'Title is required' : undefined),
        }}
        children={(field) => (
          <div>
            <TextInput
              value={field.state.value ?? ''}
              id="title"
              name="title"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <gameForm.Field
        name="platform"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Platform is required' : undefined,
        }}
        children={(field) => (
          <div>
            <TextInput
              value={field.state.value ?? ''}
              id="platform"
              name="platform"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <gameForm.Field
        name="dateOfRelease"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Date of release is required' : undefined,
        }}
        children={(field) => (
          <div>
            <DateInput
              value={''}
              id="dateOfRelease"
              name="dateOfRelease"
              onChangeHandler={(e) =>
                field.handleChange(new Date(e.target.value))
              }
            />
          </div>
        )}
      />
      <gameForm.Field
        name="barcode"
        validators={{
          onChange: ({ value }) => (!value ? 'Barcode is required' : undefined),
        }}
        children={(field) => (
          <div>
            <TextInput
              value={field.state.value ?? ''}
              id="barcode"
              name="barcode"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <gameForm.Subscribe
        selector={(state) => [state.isSubmitting, state.canSubmit]}
        children={([isSubmitting, canSubmit]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? '...' : id ? 'Update Game' : 'Create Game'}
          </Button>
        )}
      />
    </form>
  )
}

export default GameForm
