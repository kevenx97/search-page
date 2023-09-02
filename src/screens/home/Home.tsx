'use client'

import Image from 'next/image'
import { useState } from 'react'
import { TextField } from '@/components/TextField'
import styles from './home.module.scss'
import { Navbar } from '@/components/Navbar'

export function Home() {
  const [seachEnabled, setSeachEnabled] = useState(false)
  const onChangeText = (text: string) => {
    if (text.length) {
      setSeachEnabled(true)
    } else {
      setSeachEnabled(false)
    }
  }

  return (
    <section className={styles.container}>
      <Navbar>
        <div className={styles.title}>
          <h1>Search App</h1>
          <span>Next JS</span>
        </div>
      </Navbar>
      <Image
        src="/google-logo.svg"
        alt="Google Logo"
        width={350}
        height={120}
        priority
      />
      <TextField name="search" value="" onChange={onChangeText} />
      <button disabled={!seachEnabled} aria-label="Buscar" className={styles.searchButton}>Buscar</button>
    </section>
  )
}