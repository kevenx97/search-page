'use client'

import Image from 'next/image'
import { Animals } from '@/utils/animals'
import styles from './card.module.scss'

interface CardProps {
  data: Animals,
}

export function Card({ data }: CardProps) {
  return (
    <div className={styles.container}>
      <Image
        src={data.image}
        alt={data.title}
        width={600}
        height={300}
        layout="responsive"
        priority
      />
      <a target="_blank" href={data.url}>{data.url}</a>
      <p>{data.title}</p>
      <span>{data.description}</span>
    </div>
  )
}