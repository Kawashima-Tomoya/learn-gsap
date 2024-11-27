'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, { useRef } from 'react'

export function UseGsap() {
  const textRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      // eslint-disable-next-line no-console
      console.log('マウントされました')

      gsap.to(textRef.current, {
        x: '20%',
        color: 'red',
        duration: '2',
      })
    },
  )

  return (<div ref={textRef}>じーさっぷ</div>)
}
