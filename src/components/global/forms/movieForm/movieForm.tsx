import TextInput from '../../../global/inputs/textInput'
import { useMovieForm } from './useMovieForm'
import Button from '../../../global/buttons/button'
import DateInput from '../../inputs/dateInput'
import type { IMovie } from '../../../../types'
import Paragraph from '../../text/paragraph'
import FormFieldAlert from '../../alerts/FormFieldAlert'
import SelectInput from '../../inputs/selectInput'
import { MOVIE_TYPE_OPTIONS } from '../../../../constants'

interface IMovieFormProps {
  movieData?: IMovie
  id?: string
}

const MovieForm = ({ movieData, id }: IMovieFormProps) => {
  const { movieForm } = useMovieForm(movieData, id)
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        movieForm.handleSubmit()
      }}
    >
      <movieForm.Field
        name="director"
        validators={{
          onChange: ({ value }) =>
            !value ? 'Director is required' : undefined,
        }}
        children={(field) => (
          <div className="my-6">
            <TextInput
              value={field.state.value ?? ''}
              id="director"
              name="director"
              placeholder="Director"
              onChangeHandler={(e) => field.handleChange(e.target.value)}
            />
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <movieForm.Field
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
      <movieForm.Field
        name="type"
        validators={{
          onChange: ({ value }) => (!value ? 'Type is required' : undefined),
        }}
        children={(field) => (
          <div className="my-6">
            <SelectInput
              value={field.state.value ?? ''}
              id="type"
              name="type"
              placeholder="Type"
              onSelectHandler={(e) => field.handleChange(e.target.value)}
              options={MOVIE_TYPE_OPTIONS}
            />
            <FormFieldAlert field={field} />
          </div>
        )}
      />
      <movieForm.Field
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
      <movieForm.Field
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
      <movieForm.Subscribe
        selector={(state) => [state.isSubmitting, state.canSubmit]}
        children={([isSubmitting, canSubmit]) => (
          <div className="my-6">
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : id ? 'Update Movie' : 'Create Movie'}
            </Button>
          </div>
        )}
      />
    </form>
  )
}

export default MovieForm
