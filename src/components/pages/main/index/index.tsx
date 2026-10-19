import { BookText, Clapperboard, Gamepad2, Music } from 'lucide-react'
import MediaTypeLink from './mediaTypeLink'

const Index = () => {
  return (
    <div>
      <div className="flex flex-col">
        <MediaTypeLink to="/music">
          <Music />
        </MediaTypeLink>
        <MediaTypeLink to="/movies">
          <Clapperboard />
        </MediaTypeLink>
        <MediaTypeLink to="/games">
          <Gamepad2 />
        </MediaTypeLink>
        <MediaTypeLink to="/books">
          <BookText />
        </MediaTypeLink>
      </div>
    </div>
  )
}

export default Index
