import type { ChangeEvent } from 'react'

interface IPasswordInputProps {
  value: string
  id: string
  name: string
  placeholder?: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput = ({
  value,
  id,
  name,
  placeholder,
  onChangeHandler,
}: IPasswordInputProps) => {
  return (
    <input
      className="p-2 w-full focus:outline-amber-400 border-[0.1px] rounded-lg"
      type="password"
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default PasswordInput
