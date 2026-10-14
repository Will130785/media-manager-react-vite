import type { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
}

const Button = ({ children }: IButtonProps) => {
  return <button>{children}</button>
}

export default Button
