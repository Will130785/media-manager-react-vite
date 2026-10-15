import type { ChangeEvent } from 'react'

interface IDateInputProps {
  value: string
  id: string
  name: string
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

const DateInput = ({ value, id, name, onChangeHandler }: IDateInputProps) => {
  return (
    <input
      type="date"
      value={value}
      id={id}
      name={name}
      onChange={onChangeHandler}
    />
  )
}

export default DateInput
