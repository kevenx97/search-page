'use client'

import { useEffect, useRef, useState } from 'react'
import { Navbar, Logo, TextField, SkeletonLine } from '@/components'
import { SearchPageProps } from '@/app/search/[text]/types'
import { Animals, getAnimals } from '@/utils/animals'
import createArray from '@/utils/createArray'
import styles from './search.module.scss'
import { Card, List } from './components'

export function Search({ params }: SearchPageProps) {
  const [loading, setLoading] = useState(true)
  const [animals, setAnimals] = useState<Animals[]>([])
  const [searchValue, setSearchValue] = useState(params.text || '')
  const [animal, setAnimal] = useState<Animals | null>(null)
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  const renderSkeletons = (length: number) => {
    if (loading) {
      return createArray(length).map((_, index) => (
        <div className={styles.skeletonContent} key={index}>
          <SkeletonLine widthPercentage={'40%'} height={16} />
          <SkeletonLine widthPercentage={'70%'} height={20} />
          <SkeletonLine widthPercentage={'100%'} height={16} />
        </div>
      ))
    }
  }

  const renderList = () => {
    if (!loading) {
      return (
        <div className={styles.listContainer}>
          {!animals.length && !!searchValue.length && (
            <p>
              No results found for: 
              <b> {searchValue}</b>
            </p>
          )}
          <List 
            data={animals} 
            onSelectListItem={(animal: Animals) => setAnimal(animal)} 
          />
        </div>
      )
    }
  }
  
  const renderCard = () => {
    if (!loading && animal) {
      return (
        <>
          <div className={styles.cardContainer}>
            <Card data={animal} onClose={() => setAnimal(null)} />
          </div>
          <div className={styles.background}></div>
        </>
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
        {renderSkeletons(6)}
        <div className={styles.content}>
          {renderList()}
          {renderCard()}
        </div>
      </section>
    </div>
  )
}