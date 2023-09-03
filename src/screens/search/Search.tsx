'use client'

import { useEffect, useRef, useState } from 'react'
import { Navbar, Logo, TextField, SkeletonLine } from '@/components'
import { SearchPageProps } from '@/app/search/[text]/types'
import { Animals, getAnimals } from '@/utils/animals'
import createArray from '@/utils/createArray'
import styles from './search.module.scss'
import { Card, List } from './components'

export function Search({ params }: SearchPageProps) {
  const value = params.text
  const [loading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState(value)
  const [animals, setAnimals] = useState<Animals[]>([])
  const [animal, setAnimal] = useState<Animals | null>(null)
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  const renderSkeletons = (length: number) => {
    return createArray(length).map((_, index) => (
      <div className={styles.mb} key={index}>
        <SkeletonLine widthPercentage={'30%'} height={16} />
        <SkeletonLine widthPercentage={'40%'} height={20} />
        <SkeletonLine widthPercentage={'60%'} height={16} />
      </div>
    ))
  }

  const selectListItem = (animal: Animals) => {
    setAnimal(animal)
  }

  const renderList = (data: Animals[], text: string) => {
    return (
      <div className={styles.listContainer}>
        {!animals.length && <p>No results found for: <b>{text}</b></p>}
        <List data={animals} onSelectListItem={selectListItem} />
      </div>
    )
  }
  
  const renderCard = () => {
    if (!loading && animal) {
      return (
        <div className={styles.cardContainer}>
          <Card data={animal} />
        </div>
      )
    }
  }

  useEffect(() => {
    debounceTimeout.current = setTimeout(() => {
      if (searchValue.length) {
        setAnimal(null)
        setLoading(true)
        getAnimals(searchValue)
          .then((data) => setAnimals(data))
          .finally(() => setLoading(false))
      }
    }, 600)

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    }
  }, [searchValue])

  return (
    <div className={styles.container}>
      <Navbar>
        <div className={styles.field}>
          <Logo width={150} height={60} />
          <TextField name="search" value={searchValue} setValue={setSearchValue} />
        </div>
      </Navbar>
      <section className={styles.section}>
        {loading && renderSkeletons(6)}
        <div className={styles.content}>
          {!loading && renderList(animals, searchValue)}
          {renderCard()}
        </div>
      </section>
    </div>
  )
}