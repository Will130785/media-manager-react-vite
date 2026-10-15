import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/music/music-item/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/music/music-item/$id"!</div>
}
