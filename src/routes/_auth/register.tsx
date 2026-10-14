import { createFileRoute } from '@tanstack/react-router'
import Register from '../../components/pages/auth/register/register'

export const Route = createFileRoute('/_auth/register')({
  component: Register,
})
