'use client'

import { useRef, useState, KeyboardEvent, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { TextField, Navbar, Logo } from '@/components'
import styles from './home.module.scss'

export function Home() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter' && buttonRef.current) {
        buttonRef.current.click()
      }
    },
    [],
  )

  const handleChange = useCallback(
    (text: string) => {
      setSearchValue(text)
    },
    [setSearchValue],
  )

  const onSubmit = () => {
    router.push(`search/${searchValue}`)
  }

  return (
    <section className={styles.container}>
      <Navbar>
        <div className={styles.title}>
          <h1>Search App</h1>
          <span>Next JS</span>
        </div>
      </Navbar>
      <Logo width={350} height={120} />
      <TextField
        name="search"
        value={searchValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button
        aria-label="Buscar"
        disabled={!searchValue.length}
        className={styles.searchButton}
        onClick={onSubmit}
        ref={buttonRef}
      >
        Buscar
      </button>
    </section>
  )
}
