'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import TextPlugin from 'gsap/dist/TextPlugin'
import { useRef } from 'react'

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)

export function PinAnimation() {
  const pinRef1 = useRef(null)
  const pinRef2 = useRef(null)
  const pinRef3 = useRef(null)
  const textRef = useRef(null)

  useGSAP(() => {
    gsap.to(pinRef1.current, {
      background: '#fff', // 背景色白
      color: '#000', // テキストカラー黒
      scrollTrigger: {
        trigger: pinRef1.current,
        pin: true,
        scrub: true,
      },
    })
    gsap.to(pinRef2.current, {
      background: '#fff', // 背景色白
      color: '#000', // テキストカラー黒
      scrollTrigger: {
        trigger: pinRef2.current,
        pin: true,
        scrub: true,
      },
    })
    gsap.to(pinRef3.current, {
      background: '#fff', // 背景色白
      color: '#000', // テキストカラー黒
      scrollTrigger: {
        trigger: pinRef3.current,
        pin: true,
        scrub: true,
      },
    })
    gsap.to(textRef.current, {
      autoAlpha: 1,
      text: 'section 2',
      scrollTrigger: {
        trigger: pinRef2.current,
        scrub: true,
      },
    })
  },
  )

  return (
    <div>
      <div ref={pinRef1} className="flex h-screen w-full items-center justify-center bg-blue-500">
        <p className="text-[100px]">section 1</p>
      </div>
      <div ref={pinRef2} className="flex h-screen w-full items-center justify-center bg-slate-700">
        <p ref={textRef} className="w-[400px] text-[100px]"></p>
      </div>
      <div ref={pinRef3} className="flex h-screen w-full items-center justify-center bg-green-500">
        <p className="text-[100px]">section 3</p>
      </div>

    </div>
  )
}
