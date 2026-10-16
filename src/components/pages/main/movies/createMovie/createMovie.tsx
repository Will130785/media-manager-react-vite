import MovieForm from '../../../../global/forms/movieForm/movieForm'
import Heading from '../../../../global/text/heading'

const CreateMovie = () => {
  return (
    <div>
      <div>
        <Heading type="h1">Create Movie</Heading>
      </div>
      <MovieForm />
    </div>
  )
}

export default CreateMovie
