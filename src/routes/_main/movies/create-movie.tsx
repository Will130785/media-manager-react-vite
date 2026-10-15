import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/movies/create-movie')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/movies/create-movie"!</div>
}
