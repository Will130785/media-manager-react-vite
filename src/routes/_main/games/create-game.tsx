import { createFileRoute } from '@tanstack/react-router'
import CreateGame from '../../../components/pages/main/games/createGame/createGame'

export const Route = createFileRoute('/_main/games/create-game')({
  component: CreateGame,
})
