import { useParams } from '@tanstack/react-router'
import ErrorText from '../../../../global/alerts/errorText'
import LoadingText from '../../../../global/alerts/loadingText'
import Heading from '../../../../global/text/heading'
import { useMovie } from './useMovie'
import Actions from '../../../../global/media/actions'
import Paragraph from '../../../../global/text/paragraph'

const Movie = () => {
  const { id } = useParams({ from: '/_main/movies/movie/$id' })
  const { data, isLoading, isError, handleDeleteMovie } = useMovie(id)

  if (isLoading) {
    return <LoadingText />
  }

  if (isError) {
    return <ErrorText />
  }

  return (
    <div>
      <div className="my-6">
        <Heading type="h1">{data?.title}</Heading>
        <Heading type="h6">{data?.director}</Heading>
      </div>
      <div className="my-6 flex gap-2">
        <Heading type="h4">Release Date:</Heading>
        <Paragraph>{data?.dateOfRelease}</Paragraph>
      </div>
      <div className="my-6 flex gap-2">
        <Heading type="h4">Barcode:</Heading>
        <Paragraph>{data?.barcode}</Paragraph>
      </div>
      <Actions
        editUrl="/movies/update-movie/$id"
        id={data?.id ?? ''}
        deleteHandler={handleDeleteMovie}
      />
    </div>
  )
}

export default Movie
