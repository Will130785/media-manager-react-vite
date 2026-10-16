import TextInput from '../../../global/inputs/textInput'
import { useMusicForm } from './useMusicForm'
import Button from '../../../global/buttons/button'
import DateInput from '../../inputs/dateInput'
import type { IMusic } from '../../../../types'
import Paragraph from '../../text/paragraph'

interface IMusicFormProps {
  musicData?: IMusic
  id?: string
}

const MusicForm = ({ musicData, id }: IMusicFormProps) => {
  const { musicForm } = useMusicForm(musicData, id)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        musicForm.handleSubmit()
      }}
    >
      <musicForm.Field
        name="artist"
        validators={{
          onChange: ({ value }) => (!value ? 'Artist is required' : undefined),
        }}
        children={(field) => (
          <div>
            <TextInput
              value={field.state.value ?? ''}
              id="artist"
              name="artist"
              placeholder="Artist"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <musicForm.Field
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
              placeholder="Title"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <musicForm.Field
        name="type"
        validators={{
          onChange: ({ value }) => (!value ? 'Type is required' : undefined),
        }}
        children={(field) => (
          <div>
            <TextInput
              value={field.state.value ?? ''}
              id="type"
              name="type"
              placeholder="Type"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <musicForm.Field
        name="dateOfRelease"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Date of release is required' : undefined,
        }}
        children={(field) => (
          <div>
            <DateInput
              value={field.state.value ?? ''}
              id="dateOfRelease"
              name="dateOfRelease"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <Paragraph>Date of Release</Paragraph>
          </div>
        )}
      />
      <musicForm.Field
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
              placeholder="Barcode"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
          </div>
        )}
      />
      <musicForm.Subscribe
        selector={(state) => [state.isSubmitting, state.canSubmit]}
        children={([isSubmitting, canSubmit]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting
              ? '...'
              : id
                ? 'Update Music Item'
                : 'Create Music Item'}
          </Button>
        )}
      />
    </form>
  )
}

export default MusicForm
