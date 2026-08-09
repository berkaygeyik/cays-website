import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'
import logo from '../assets/cays-logo-cleaned.png'
import heroImage from '../assets/hero.png'
import { useTranslation } from '../i18n/useTranslation'

interface HeroProps {
  scrollTargetId?: string
}

const HEADER_OFFSET = 80
const SCROLL_DURATION = 1200

const easeInOutCubic = (t: number) => {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2
}

function Hero({ scrollTargetId = 'featured-section' }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const animationFrameRef = useRef<number | null>(null)
  const prefersReducedMotionRef = useRef(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      prefersReducedMotionRef.current = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
    }

    const timeout = window.setTimeout(() => {
      setIsVisible(true)
    }, prefersReducedMotionRef.current ? 0 : 120)

    return () => {
      window.clearTimeout(timeout)

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  const smoothScrollTo = (targetY: number, duration = SCROLL_DURATION) => {
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current)
    }

    if (prefersReducedMotionRef.current) {
      window.scrollTo(0, targetY)
      return
    }

    const startY = window.scrollY
    const distance = targetY - startY
    const startTime = performance.now()

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startY + distance * easedProgress)

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(step)
      } else {
        animationFrameRef.current = null
      }
    }

    animationFrameRef.current = window.requestAnimationFrame(step)
  }

  const handleScrollDown = () => {
    const target = document.getElementById(scrollTargetId)

    if (!target) return

    const targetY = Math.max(
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
      0,
    )

    smoothScrollTo(targetY)
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[12%_center] md:bg-center"
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.42),rgba(0,0,0,0.5),rgba(0,0,0,0.58))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.42),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,214,153,0.10),transparent_42%)]" />

      <div className="relative flex min-h-[100svh] items-center justify-center text-center">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center pt-24 md:pt-32">
            <p
              className={`mb-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-white/80 transition-all duration-700 md:text-sm ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
            >
              {t.hero.eyebrow}
            </p>

            <div
              className={`relative transition-all duration-700 delay-100 ${
                isVisible
                  ? 'translate-y-0 scale-100 opacity-100'
                  : 'translate-y-5 scale-[0.98] opacity-0'
              }`}
            >
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[240px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.45) 24%, rgba(135,112,80,0.35) 48%, rgba(135,112,80,0.12) 68%, transparent 78%)',
                  opacity: 0.55,
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(135,112,80,0.20) 42%, transparent 72%)',
                  opacity: 0.45,
                }}
              />

              <div
                className="pointer-events-none absolute left-1/2 top-[35%] h-[180px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.12) 58%, transparent 78%)',
                  opacity: 0.35,
                }}
              />

              <img
                src={logo}
                alt={t.hero.logoAlt}
                className="relative z-10 h-16 w-auto object-contain md:h-24 lg:h-28"
              />
            </div>

            <p
              className={`mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/90 transition-all duration-700 delay-200 md:text-2xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }`}
            >
              {t.hero.description}
            </p>

            <div
              className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-300 sm:gap-5 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-5 opacity-0'
              }`}
            >
              <Link
                to="/menu"
                className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/95 bg-white px-8 py-4 text-sm font-extrabold uppercase tracking-[0.14em] text-[#111111] shadow-[0_8px_22px_rgba(255,255,255,0.16)] transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#f5f5f5] hover:shadow-[0_10px_26px_rgba(255,255,255,0.22)]"
              >
                {t.hero.exploreMenu}
              </Link>

              <Link
                to="/reservations/table"
                className="inline-flex min-w-[190px] items-center justify-center rounded-full border border-white/90 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.10em] !text-white backdrop-blur-sm transition-all duration-300 visited:!text-white hover:-translate-y-[1px] hover:bg-white/[0.08] hover:!text-white hover:![box-shadow:0_10px_26px_rgba(255,255,255,0.16)] active:!text-white focus:!text-white"
                style={{
                  color: '#ffffff',
                  boxShadow: '0 8px 22px rgba(255,255,255,0.10)',
                }}
              >
                {t.hero.bookTable}
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <button
        type="button"
        aria-label={t.hero.scrollLabel}
        onClick={handleScrollDown}
        className={`absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/85 transition-all duration-700 delay-500 hover:text-white ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
        }`}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-white/75">
          {t.hero.discoverMore}
        </span>

        <span className="flex h-14 w-8 items-start justify-center rounded-full border border-white/35 bg-white/5 p-1 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
          <span className="mt-1 h-2.5 w-1 animate-[bounce_1.8s_infinite] rounded-full bg-white/85" />
        </span>
      </button>
    </section>
  )
}

export default Hero