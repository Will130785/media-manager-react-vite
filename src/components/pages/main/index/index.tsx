import { Link } from '@tanstack/react-router'
import Heading from '../../../global/text/heading'

const Index = () => {
  return (
    <div>
      <div>
        <Heading type="h1">Media Manager</Heading>
      </div>
      <div className="flex flex-col">
        <Link to={'/music'}>Music</Link>
        <Link to={'/movies'}>Movies</Link>
        <Link to={'/games'}>Games</Link>
        <Link to={'/books'}>Books</Link>
      </div>
    </div>
  )
}

export default Index
