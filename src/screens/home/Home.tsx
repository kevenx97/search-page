'use client'

import Image from 'next/image'
import { TextField } from '@/components/TextField'
import styles from './home.module.css'

export function Home() {
  const onChangeText = (text: string) => {
    console.log('text', text)
  }

  return (
    <>
      <Image
        src="/google-logo.svg"
        alt="Google Logo"
        width={100}
        height={24}
        priority
      />
      <TextField name="search" value="" onChange={onChangeText} />
    </>
  )
}