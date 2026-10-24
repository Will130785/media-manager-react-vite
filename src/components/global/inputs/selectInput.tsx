import type { ChangeEvent } from 'react'

interface ISelectInputProps {
  placeholder: string
  options: {
    text: string
    value: string
  }[]
  value: string
  id: string
  name: string
  onSelectHandler: (e: ChangeEvent<HTMLSelectElement>) => void
}

const SelectInput = ({
  placeholder,
  options,
  value,
  onSelectHandler,
}: ISelectInputProps) => {
  return (
    <select onChange={onSelectHandler} value={value}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
