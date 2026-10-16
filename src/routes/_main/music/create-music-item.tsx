import { createFileRoute } from '@tanstack/react-router'
import CreateMusicItem from '../../../components/pages/main/music/createMusicItem/createMusicItem'

export const Route = createFileRoute('/_main/music/create-music-item')({
  component: CreateMusicItem,
})
