import type { ReactNode } from 'react'

interface IHeadingProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

const Heading = ({ type, children }: IHeadingProps) => {
  if (type === 'h1') {
    return <h1 className="text-2xl font-bold">{children}</h1>
  }
  if (type === 'h2') {
    return <h2 className="text-xl font-bold">{children}</h2>
  }
  if (type === 'h3') {
    return <h3 className="text-lg font-bold">{children}</h3>
  }
  if (type === 'h4') {
    return <h4 className="font-bold">{children}</h4>
  }
  if (type === 'h5') {
    return <h5 className="text-sm font-bold">{children}</h5>
  }
  if (type === 'h6') {
    return <h6 className="text-xs font-bold">{children}</h6>
  }
}

export default Heading
