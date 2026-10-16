import { createFileRoute } from '@tanstack/react-router'
import MusicItem from '../../../../components/pages/main/music/musicItem/musicItem'

export const Route = createFileRoute('/_main/music/music-item/$id')({
  component: MusicItem,
})
