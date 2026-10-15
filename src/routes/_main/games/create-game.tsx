import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/games/create-game')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/games/create-game"!</div>
}
