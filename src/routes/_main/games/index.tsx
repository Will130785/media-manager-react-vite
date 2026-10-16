import { createFileRoute } from '@tanstack/react-router'
import Index from '../../../components/pages/main/games/index'

export const Route = createFileRoute('/_main/games/')({
  component: Index,
})
