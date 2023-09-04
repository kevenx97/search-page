'use client'

import Image from 'next/image'
import { MenuIcon } from '@/components/icons'
import styles from './navbar.module.scss'

interface NavbarProps {
  children: React.ReactNode
}

export function Navbar({ children }: NavbarProps) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <div className={styles.center}>
        <MenuIcon className={styles.menu} />
        <Image
          className={styles.avatar}
          src="/avatar.jpeg"
          alt="Avatar"
          width={40}
          height={40}
          priority
        />
      </div>
    </div>
  )
}
