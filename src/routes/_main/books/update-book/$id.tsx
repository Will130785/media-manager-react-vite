import { createFileRoute } from '@tanstack/react-router'
import UpdateBook from '../../../../components/pages/main/books/updateBook/updateBook'

export const Route = createFileRoute('/_main/books/update-book/$id')({
  component: UpdateBook,
})
