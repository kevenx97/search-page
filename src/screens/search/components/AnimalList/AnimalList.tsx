'use client'

import { Animals } from '@/utils/animals'
import styles from './animal-list.module.scss'

interface AnimalListProps {
  data: Animals[],
  onSelectAnimalListItem: (animal: Animals) => void,
}

export function AnimalList({ data, onSelectAnimalListItem }: AnimalListProps) {

  const renderItemAnimalList = () => {
    return data.map((item) => (
      <li key={item.id}>
        <a target="_blank" href={item.url}>{item.url}</a>
        <p onClick={() => onSelectAnimalListItem(item)}>{item.title}</p>
        <span>{item.description}</span>
      </li>
    ))
  }
  const renderEmptyListMessage = () => {
    if (!data.length) {
      return (
        <ul className={styles.container}>
          <p>
            Try looking for: 
            <b> insect, fish, horse, bear, lion, cat...</b>
          </p>
        </ul>
      )
    }
  }
  return (
    <ul className={styles.container}>
      {renderEmptyListMessage()}
      {renderItemAnimalList()}
    </ul>
  )
}