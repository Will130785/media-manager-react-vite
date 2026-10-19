import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

interface IMediaTypeLinkProps {
  to: '/music' | '/movies' | '/games' | '/books'
  children: ReactNode
}

const MediaTypeLink = ({ to, children }: IMediaTypeLinkProps) => {
  return (
    <div className="p-10 w-full border">
      <Link to={to}>{children}</Link>
    </div>
  )
}

export default MediaTypeLink
