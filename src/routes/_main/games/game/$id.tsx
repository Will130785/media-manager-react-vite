import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/games/game/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/games/game/$id"!</div>
}
