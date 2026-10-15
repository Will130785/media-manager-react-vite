import type { ChangeEvent } from 'react'

interface IPasswordInputProps {
  value: string
  id: string
  name: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput = ({
  value,
  id,
  name,
  onChangeHandler,
}: IPasswordInputProps) => {
  return (
    <input
      type="password"
      value={value}
      id={id}
      name={name}
      onChange={onChangeHandler}
    />
  )
}

export default PasswordInput
