import type { ReactNode } from 'react'

interface IHeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

const Paragraph = ({ type, children }: IHeadingProps) => {
  if (type === 'h1') {
    return <h1>{children}</h1>
  }
  if (type === 'h2') {
    return <h1>{children}</h1>
  }
  if (type === 'h3') {
    return <h1>{children}</h1>
  }
  if (type === 'h4') {
    return <h1>{children}</h1>
  }
  if (type === 'h5') {
    return <h1>{children}</h1>
  }
  if (type === 'h6') {
    return <h1>{children}</h1>
  }
}

export default Paragraph
