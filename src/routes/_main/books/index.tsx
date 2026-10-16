import { createFileRoute } from '@tanstack/react-router'
import Index from '../../../components/pages/main/books/index'

export const Route = createFileRoute('/_main/books/')({
  component: Index,
})
