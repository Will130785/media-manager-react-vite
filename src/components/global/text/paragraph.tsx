import type { ReactNode } from 'react'

interface IParagraphProps {
  children: ReactNode
}

const Paragraph = ({ children }: IParagraphProps) => {
  return <p>{children}</p>
}

export default Paragraph
