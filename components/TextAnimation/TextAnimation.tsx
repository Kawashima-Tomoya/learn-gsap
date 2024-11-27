'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import './TextAnimation.css'

export function TextAnimation() {
  const textWrapper = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      gsap.to('.text', {
        delay: 0.2,
        duration: 0.5,
        ease: 'power2.out', // 型がリテラル型なので注意
        stagger: 0.05,
        y: 0,
      })
    },
    // scopeで親を指定すると子孫はuseRefでアクセスせずそのまま操作できる
    { scope: textWrapper },
  )

  return (
    <div ref={textWrapper} className="text_wrapper">
      <span className="text">P</span>
      <span className="text">L</span>
      <span className="text">A</span>
      <span className="text">Y</span>
      <span className="text">&nbsp;</span>
      <span className="text">T</span>
      <span className="text">O</span>
      <span className="text">&nbsp;</span>
      <span className="text">E</span>
      <span className="text">N</span>
      <span className="text">J</span>
      <span className="text">O</span>
      <span className="text">Y</span>
    </div>
  )
}
