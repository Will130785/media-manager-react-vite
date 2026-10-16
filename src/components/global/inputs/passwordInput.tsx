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
