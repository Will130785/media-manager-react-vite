import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/movies/movie/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/movies/movie/$id"!</div>
}
