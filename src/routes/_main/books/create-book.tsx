import { createFileRoute } from '@tanstack/react-router'
import CreateBook from '../../../components/pages/main/books/createBook/createBook'

export const Route = createFileRoute('/_main/books/create-book')({
  component: CreateBook,
})
