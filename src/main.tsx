import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createRouter,
  createHashHistory,
  RouterProvider,
} from '@tanstack/react-router'
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
