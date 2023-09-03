'use client'

import { Animals } from '@/utils/animals'
import styles from './list.module.scss'

interface ListProps {
  data: Animals[],
  onSelectListItem: (animal: Animals) => void,
}

export function List({ data, onSelectListItem }: ListProps) {

  const renderItemList = () => {
    if (!data.length) {
      return (
        <p>Try looking for: <b>insect, fish, horse, bear, lion, cat...</b></p>
      )
    }
    return data.map((item) => (
      <li key={item.id}>
        <a target="_blank" href={item.url}>{item.url}</a>
        <p onClick={() => onSelectListItem(item)}>{item.title}</p>
        <span>{item.description}</span>
      </li>
    ))
  }

  return (
    <ul className={styles.container}>
      {renderItemList()}
    </ul>
  )
}