'use client'

import Image from 'next/image'

interface LogoProps {
  width: number
  height: number
}

export function Logo({ width, height }: LogoProps) {
  return (
    <Image
      src="/google-logo.svg"
      alt="Google Logo"
      width={width}
      height={height}
      priority
    />
  )
}