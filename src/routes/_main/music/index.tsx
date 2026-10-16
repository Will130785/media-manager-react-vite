import { createFileRoute } from '@tanstack/react-router'
import Index from '../../../components/pages/main/music/index'

export const Route = createFileRoute('/_main/music/')({
  component: Index,
})
