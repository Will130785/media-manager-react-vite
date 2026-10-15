import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/books/create-book')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/books/create-book"!</div>
}
