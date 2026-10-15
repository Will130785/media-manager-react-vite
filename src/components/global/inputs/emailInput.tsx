import type { ChangeEvent } from 'react'

interface IEmailInputProps {
  value: string
  id: string
  name: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const EmailInput = ({ value, id, name, onChangeHandler }: IEmailInputProps) => {
  return (
    <input
      type="email"
      value={value}
      id={id}
      name={name}
      onChange={onChangeHandler}
    />
  )
}

export default EmailInput
