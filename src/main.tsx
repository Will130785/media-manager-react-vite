import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createRouter,
  createHashHistory,
  RouterProvider,
} from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import { routeTree } from './routeTree.gen.ts'

const router = createRouter({
  history: createHashHistory(),
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
