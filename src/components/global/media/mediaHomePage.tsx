import { Link } from '@tanstack/react-router'
import type { IBook, IGame, IMovie, IMusic } from '../../../types'
import Heading from '../text/heading'
import Paragraph from '../text/paragraph'
import { CirclePlus } from 'lucide-react'

interface IMediaHomePage {
  title: 'Music' | 'Movie' | 'Game' | 'Book'
  mediaItems: IMusic[] | IMovie[] | IGame[] | IBook[] | undefined
}

const getCreateItemLink = (title: 'Music' | 'Movie' | 'Game' | 'Book') => {
  if (title === 'Music') {
    return '/music/create-music-item'
  }
  if (title === 'Movie') {
    return '/movies/create-movie'
  }
  if (title === 'Game') {
    return '/games/create-game'
  }
  if (title === 'Book') {
    return '/books/create-book'
  }
  return '/music/create-music-item'
}

const getItemLink = (title: 'Music' | 'Movie' | 'Game' | 'Book') => {
  if (title === 'Music') {
    return '/music/music-item/$id'
  }
  if (title === 'Movie') {
    return '/movies/movie/$id'
  }
  if (title === 'Game') {
    return '/games/game/$id'
  }
  if (title === 'Book') {
    return '/books/book/$id'
  }
  return '/music/music-item/$id'
}

const MediaHomePage = ({ title, mediaItems }: IMediaHomePage) => {
  return (
    <div>
      <div className="flex gap-2 items-center my-6">
        <Heading type="h1">{title} Library</Heading>
        <Link to={getCreateItemLink(title)}>
          <CirclePlus />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {mediaItems && mediaItems.length ? (
          mediaItems.map((mediaItem) => (
            <Link
              className="border rounded-xl p-4 flex justify-between gap-2"
              to={getItemLink(title)}
              params={{ id: mediaItem.id }}
              key={mediaItem.id}
            >
              {'artist' in mediaItem ? (
                <p className="text-xs">{mediaItem.artist}</p>
              ) : null}
              {'director' in mediaItem ? (
                <p className="text-xs">{mediaItem.director}</p>
              ) : null}
              {'developer' in mediaItem ? (
                <p className="text-xs">{mediaItem.developer}</p>
              ) : null}
              {'author' in mediaItem ? (
                <p className="text-xs">{mediaItem.author}</p>
              ) : null}
              <p className="text-xs">{mediaItem.title}</p>
            </Link>
          ))
        ) : (
          <Paragraph>No Music</Paragraph>
        )}
      </div>
    </div>
  )
}

export default MediaHomePage
