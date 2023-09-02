'use client'

import { ChangeEvent, useState } from 'react'
import { SearchIcon, CloseIcon } from '@/components/icons'
import styles from './TextField.module.scss'

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

  const onClearText = () => {
    setInputValue('')
    onChange('')
  }

  const renderClearButton = (value: string) => {
    if (!value.length) return
    return (
      <button className={`${styles.float} ${styles.right}`} onClick={onClearText}>
        <CloseIcon />
      </button>
    )
  }

  return (
    <div className={styles.container}>
      <SearchIcon className={`${styles.float} ${styles.left}`} />
      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={onChangeText}
        className={styles.input}
      />
      {renderClearButton(inputValue)}
    </div>
  )
}