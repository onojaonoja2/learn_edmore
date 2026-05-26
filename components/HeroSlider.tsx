'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/online_learning1.png', alt: 'Online learning session' },
  { src: '/oline_learning2.png', alt: 'Student online learning' },
  { src: '/class_learning1.png', alt: 'Classroom learning' },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative flex justify-center">
      <div className="relative h-72 w-72 md:h-96 md:w-96">
        <div className="absolute -top-4 right-8 h-full w-full rounded-[2rem] bg-primary-container/40" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                i === current
                  ? 'w-6 bg-primary'
                  : 'w-2 bg-outline-variant'
              }`}
            />
          ))}
        </div>
      </div>
      <span className="absolute -left-2 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-tertiary-fixed text-lg animate-bounce">
        💡
      </span>
      <span className="absolute -bottom-2 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-fixed/50 text-lg">
        ✨
      </span>
    </div>
  )
}
