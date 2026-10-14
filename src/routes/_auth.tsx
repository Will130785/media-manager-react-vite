import { createFileRoute } from '@tanstack/react-router'
import AuthLayout from '../components/layouts/authLayout/authLayout'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})
