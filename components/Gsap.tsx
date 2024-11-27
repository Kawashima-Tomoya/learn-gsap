'use client'

import { gsap } from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

export function Gsap() {
  const textRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    // eslint-disable-next-line no-console
    console.log('マウントされました')

    gsap.to(textRef.current, {
      x: '20%',
      color: 'red',
      duration: '2',
    })
  }, [])

  return (<div ref={textRef}>じーさっぷ</div>)
}
