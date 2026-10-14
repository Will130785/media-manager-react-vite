import { createFileRoute } from '@tanstack/react-router'
import MainLayout from '../components/layouts/mainLayout/mainLayout'

export const Route = createFileRoute('/_main')({
  component: MainLayout,
})
