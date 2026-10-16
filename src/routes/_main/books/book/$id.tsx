import { createFileRoute } from '@tanstack/react-router'
import Book from '../../../../components/pages/main/books/book/book'

export const Route = createFileRoute('/_main/books/book/$id')({
  component: Book,
})
