'use client'

import Image from 'next/image'
import { Animals } from '@/utils/animals'
import { CloseIcon } from '@/components/icons'
import styles from './card.module.scss'

interface CardProps {
  data: Animals,
  onClose: () => void
}

export function Card({ data, onClose }: CardProps) {
  return (
    <div className={styles.container}>
      <button
        aria-label="Botão voltar" 
        className={styles.backButton}
        onClick={onClose} 
      >
        <CloseIcon />
      </button>
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