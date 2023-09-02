'use client'

import styles from './footer.module.scss'

export function Footer() {
  return (
    <div className={styles.container}>
      <div>
        <p>©️ Google 2023</p>
      </div>
      <div className={styles.center}>
        <p>version: 0.1.0</p>
      </div>
    </div>
  )
}