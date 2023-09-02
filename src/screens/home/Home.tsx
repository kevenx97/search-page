'use client'

import Image from 'next/image'
import { TextField } from '@/components/TextField'
import styles from './home.module.scss'

export function Home() {
  const onChangeText = (text: string) => {
  }

  return (
    <section className={styles.container}>
      <Image
        className={styles.logo}
        src="/google-logo.svg"
        alt="Google Logo"
        width={350}
        height={120}
        priority
      />
      <TextField name="search" value="" onChange={onChangeText} />
    </section>
  )
}