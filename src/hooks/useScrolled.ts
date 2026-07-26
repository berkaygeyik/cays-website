import { useEffect, useState } from 'react'

export function useScrolled(threshold: number) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const checkScroll = () => {
      ticking = false
      setIsScrolled(window.scrollY > threshold)
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(checkScroll)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}
