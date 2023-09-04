'use client'

import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { SearchIcon, CloseIcon } from '@/components/icons'
import styles from './text-field.module.scss'
import { useDebounce } from '@/hooks/useDebounce'

interface TextFieldProps {
  name: string
  value: string
  onChange: (text: string) => void
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}

export function TextField({
  name,
  value,
  onChange,
  onKeyDown,
}: TextFieldProps) {
  const [state, setState] = useState(value)
  const debouncedValue = useDebounce(state, 600)

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    setState(text)
  }
  const onClearText = () => {
    setState('')
  }

  useEffect(() => {
    onChange(debouncedValue)
  }, [debouncedValue, onChange])

  const renderClearButton = () => {
    if (state.length) {
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
        value={state}
        onKeyDown={onKeyDown}
        onChange={onChangeText}
        className={styles.input}
        aria-label="Campo de pesquisa"
      />
      {renderClearButton()}
    </div>
  )
}
