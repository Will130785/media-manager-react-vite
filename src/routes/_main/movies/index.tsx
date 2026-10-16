import { createFileRoute } from '@tanstack/react-router'
import Index from '../../../components/pages/main/movies/index'

export const Route = createFileRoute('/_main/movies/')({
  component: Index,
})
