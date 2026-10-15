import type { ReactNode } from 'react'

interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
}

const Button = ({ type, disabled, children }: IButtonProps) => {
  return (
    <button type={type} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
