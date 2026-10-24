import TextInput from '../../../global/inputs/textInput'
import { useGameForm } from './useGameForm'
import Button from '../../../global/buttons/button'
import DateInput from '../../inputs/dateInput'
import type { IGame } from '../../../../types'
import Paragraph from '../../text/paragraph'
import FormFieldAlert from '../../alerts/FormFieldAlert'
import SelectInput from '../../inputs/selectInput'
import { GAME_PLATFORM_OPTIONS } from '../../../../constants'

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
          <div className="my-6">
            <TextInput
              value={field.state.value ?? ''}
              id="developer"
              name="developer"
              placeholder="Developer"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <gameForm.Field
        name="title"
        validators={{
          onChange: ({ value }) => (!value ? 'Title is required' : undefined),
        }}
        children={(field) => (
          <div className="my-6">
            <TextInput
              value={field.state.value ?? ''}
              id="title"
              name="title"
              placeholder="Title"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <FormFieldAlert field={field} />
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
          <div className="my-6">
            <SelectInput
              value={field.state.value ?? ''}
              id="platform"
              name="platform"
              placeholder="Platform"
              onSelectHandler={(e) => field.handleChange(e.target.value)}
              options={GAME_PLATFORM_OPTIONS}
            />
            <FormFieldAlert field={field} />
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
          <div className="my-6">
            <DateInput
              value={field.state.value ?? ''}
              id="dateOfRelease"
              name="dateOfRelease"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <Paragraph>Date of Release</Paragraph>
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <gameForm.Field
        name="barcode"
        validators={{
          onChange: ({ value }) => (!value ? 'Barcode is required' : undefined),
        }}
        children={(field) => (
          <div className="my-6">
            <TextInput
              value={field.state.value ?? ''}
              id="barcode"
              name="barcode"
              placeholder="Barcode"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <gameForm.Subscribe
        selector={(state) => [state.isSubmitting, state.canSubmit]}
        children={([isSubmitting, canSubmit]) => (
          <div className="my-6">
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : id ? 'Update Game' : 'Create Game'}
            </Button>
          </div>
        )}
      />
    </form>
  )
}

export default GameForm
