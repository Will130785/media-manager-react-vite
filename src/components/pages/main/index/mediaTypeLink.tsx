import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'

interface IMediaTypeLinkProps {
  to: '/music' | '/movies' | '/games' | '/books'
  title: string
  children: ReactNode
}

const MediaTypeLink = ({ to, title, children }: IMediaTypeLinkProps) => {
  return (
    <Link to={to} className="p-10 w-full border flex gap-4">
      {children}
      <p>{title} Library</p>
    </Link>
  )
}

export default MediaTypeLink
