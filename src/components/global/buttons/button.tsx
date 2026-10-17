import type { ReactNode } from 'react'

interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
  children: ReactNode
}

const Button = ({ type, disabled, children }: IButtonProps) => {
  return (
    <button
      className="p-2 bg-amber-400 hover:bg-amber-500 text-white w-full rounded-full cursor-pointer"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
