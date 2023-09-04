'use client'

import { Navbar, Logo, TextField, SkeletonLine } from '@/components'
import { SearchPageProps } from '@/app/search/[text]/types'
import createArray from '@/utils/createArray'
import { AnimalCard, AnimalList } from './components'
import { useSearch } from './hooks/useSearch'
import styles from './search.module.scss'

export function Search({ params }: SearchPageProps) {
  const decodedString = decodeURIComponent(params.text)
  // eslint-disable-next-line prettier/prettier
  const {
    loading,
    animal,
    animals,
    setAnimal,
    searchValue,
    setSearchValue
  } = useSearch(decodedString)

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
      return <AnimalList data={animals} onSelectAnimalListItem={setAnimal} />
    }
  }
  const renderCard = () => {
    if (!loading && animal) {
      return <AnimalCard data={animal} onClose={() => setAnimal(null)} />
    }
  }
  const renderNoResultsMessage = () => {
    if (!loading && !animals.length && !!searchValue.length) {
      return (
        <p>
          No results found for:
          <b> {searchValue}</b>
        </p>
      )
    }
  }
  return (
    <div className={styles.container}>
      <Navbar>
        <div className={styles.field}>
          <Logo width={150} height={60} />
          <TextField
            name="search"
            value={searchValue}
            onChange={setSearchValue}
          />
        </div>
      </Navbar>
      <section className={styles.section}>
        {renderSkeletons(6)}
        {renderNoResultsMessage()}
        <div className={styles.content}>
          <div className={styles.leftContent}>{renderList()}</div>
          <div className={styles.rightContent}>{renderCard()}</div>
        </div>
      </section>
    </div>
  )
}
