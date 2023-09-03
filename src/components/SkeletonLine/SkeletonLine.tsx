'use client'

import styles from './skeletonLine.module.scss'

interface SkeletonLineProps {
  widthPercentage?: string,
  height?: number,
}

export function SkeletonLine({ widthPercentage: width, height }: SkeletonLineProps) {
  return (
    <div style={{ width, height }} className={styles.container}></div>
  )
}