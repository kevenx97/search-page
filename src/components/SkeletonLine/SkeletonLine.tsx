'use client'

import styles from './skeletonLine.module.scss'

interface SkeletonLineProps {
  widthPercentage?: string
  height?: number
}

export const SkeletonLine = ({
  widthPercentage: width,
  height,
}: SkeletonLineProps) => (
  <div style={{ width, height }} className={styles.container}></div>
)
