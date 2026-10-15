import type { ChangeEvent } from 'react'

interface ITextInputProps {
  value: string
  id: string
  name: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ value, id, name, onChangeHandler }: ITextInputProps) => {
  return (
    <input
      type="text"
      value={value}
      id={id}
      name={name}
      onChange={onChangeHandler}
    />
  )
}

export default TextInput
