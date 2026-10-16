import { createFileRoute } from '@tanstack/react-router'
import UpdateMusicItem from '../../../../components/pages/main/music/updateMusicItem/updateMusicItem'

export const Route = createFileRoute('/_main/music/update-music-item/$id')({
  component: UpdateMusicItem,
})
