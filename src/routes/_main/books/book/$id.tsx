import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/books/book/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/books/book/$id"!</div>
}
