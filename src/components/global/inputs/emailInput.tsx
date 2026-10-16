import type { ChangeEvent } from 'react'

interface IEmailInputProps {
  value: string
  id: string
  name: string
  placeholder?: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const EmailInput = ({
  value,
  id,
  name,
  placeholder,
  onChangeHandler,
}: IEmailInputProps) => {
  return (
    <input
      type="email"
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default EmailInput
