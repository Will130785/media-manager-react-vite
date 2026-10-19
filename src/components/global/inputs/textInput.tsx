import type { ChangeEvent } from 'react'

interface ITextInputProps {
  value: string
  id: string
  name: string
  placeholder?: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({
  value,
  id,
  name,
  placeholder,
  onChangeHandler,
}: ITextInputProps) => {
  return (
    <input
      className="p-2 w-full focus:outline-amber-400 border-[0.1px] rounded-lg"
      type="text"
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

export default TextInput
