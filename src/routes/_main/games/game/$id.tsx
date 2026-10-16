import { createFileRoute } from '@tanstack/react-router'
import Game from '../../../../components/pages/main/games/game/game'

export const Route = createFileRoute('/_main/games/game/$id')({
  component: Game,
})
