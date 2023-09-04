'use client'

import { ChangeEvent } from 'react'
import { SearchIcon, CloseIcon } from '@/components/icons'
import styles from './textField.module.scss'

interface TextFieldProps {
  name: string
  value: string
  setValue: (text: string) => void
}

export function TextField({ name, value, setValue }: TextFieldProps) {
  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setValue(text)
  }
  const onClearText = () => {
    setValue('')
  }
  const renderClearButton = () => {
    if (value.length) {
      return (
        <button
          aria-label="Limpar"
          className={`${styles.float} ${styles.right}`}
          onClick={onClearText}
        >
          <CloseIcon />
        </button>
      )
    }
  }
  return (
    <div className={styles.container}>
      <SearchIcon className={`${styles.float} ${styles.left}`} />
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChangeText}
        className={styles.input}
        aria-label="Campo de pesquisa"
      />
      {renderClearButton()}
    </div>
  )
}
