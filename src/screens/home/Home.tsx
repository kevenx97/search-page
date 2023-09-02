'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { TextField } from '@/components/TextField'
import styles from './home.module.scss'
import { Navbar } from '@/components/Navbar'
import { Logo } from '@/components/Logo'

export function Home() {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState('')

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
      <TextField name="search" value={searchValue} setValue={setSearchValue} />
      <button
        aria-label="Buscar"
        disabled={!searchValue.length}
        className={styles.searchButton}
        onClick={onSubmit}
      >
        Buscar
      </button>
    </section>
  )
}