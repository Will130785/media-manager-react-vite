import { createFileRoute } from '@tanstack/react-router'
import UpdateGame from '../../../../components/pages/main/games/updateGame/updateGame'

export const Route = createFileRoute('/_main/games/update-game/$id')({
  component: UpdateGame,
})
