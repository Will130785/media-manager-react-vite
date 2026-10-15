import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/games/update-game/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/games/update-game/$id"!</div>
}
