import { createFileRoute } from '@tanstack/react-router'
import Index from '../../components/pages/main/index'

export const Route = createFileRoute('/_main/')({
  component: Index,
})
