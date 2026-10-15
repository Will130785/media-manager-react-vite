import TextInput from '../../../global/inputs/textInput'
import { useMusicForm } from './useMusicForm'
import Button from '../../../global/buttons/button'
import DateInput from '../../inputs/dateInput'
import type { IMovie, IMusic } from '../../../../types'

const MusicForm = (musicData?: IMusic, id?: string) => {
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
