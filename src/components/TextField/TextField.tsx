'use client'

import { ChangeEvent, useState } from "react"

interface TextFieldProps {
  name: string
  value: string
  onChange: (text: string) => void
}

export function TextField({ name, value, onChange }: TextFieldProps) {
  const [inputValue, setInputValue] = useState(value || '')

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setInputValue(text)
    onChange(text)
  }

  return (
    <input 
      type="text"
      name={name}
      value={inputValue}
      onChange={onChangeText}
    />
  )
}