import { BookText, Clapperboard, Gamepad2, Music } from 'lucide-react'
import MediaTypeLink from './mediaTypeLink'

const Index = () => {
  return (
    <div>
      <div className="flex flex-col">
        <MediaTypeLink to="/music" title="Music">
          <Music />
        </MediaTypeLink>
        <MediaTypeLink to="/movies" title="Movie">
          <Clapperboard />
        </MediaTypeLink>
        <MediaTypeLink to="/games" title="Game">
          <Gamepad2 />
        </MediaTypeLink>
        <MediaTypeLink to="/books" title="Book">
          <BookText />
        </MediaTypeLink>
      </div>
    </div>
  )
}

export default Index
