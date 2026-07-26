import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  eyebrowIcon?: ReactNode
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  eyebrowIcon,
}: SectionHeadingProps) {
  const isCentered = align === 'center'
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        isInView
          ? 'translate-y-0 opacity-100'
          : 'translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
      } ${isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}
    >
      <div
        className={`flex items-center gap-3 ${
          isCentered ? 'justify-center' : 'justify-start'
        }`}
      >
        {eyebrowIcon ?? (
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-accent-blue)]" />
        )}

        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#877050]">
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-[2.6rem] md:leading-[1.1]">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-neutral-600">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading