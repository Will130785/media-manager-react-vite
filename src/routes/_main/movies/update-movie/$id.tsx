import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/movies/update-movie/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/movies/update-movie/$id"!</div>
}
