import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/music/create-music-item')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/music/create-music-item"!</div>
}
