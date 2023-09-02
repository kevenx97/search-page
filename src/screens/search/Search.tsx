'use client'

import { useState } from 'react'
import { TextField } from '@/components/TextField'
import { Navbar } from '@/components/Navbar'
import { Logo } from '@/components/Logo'
import { SearchPageProps } from '@/app/search/[text]/types'
import styles from './search.module.scss'

export function Search({ params }: SearchPageProps) {
  const value = params.text
  const [searchValue, setSearchValue] = useState(value)

  return (
    <div className={styles.container}>
      <Navbar>
        <div className={styles.field}>
          <Logo width={150} height={60} />
          <TextField name="search" value={searchValue} setValue={setSearchValue} />
        </div>
      </Navbar>
      <section>
      </section>
    </div>
  )
}