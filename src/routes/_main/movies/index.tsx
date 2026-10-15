import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/movies/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/movies/"!</div>
}
