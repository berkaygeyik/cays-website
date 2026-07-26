import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n/useTranslation'
import type { MenuSection } from '../types/menu'

interface MenuCategoryCardProps {
  section: MenuSection
}

function MenuCategoryCard({ section }: MenuCategoryCardProps) {
  const { t, language } = useTranslation()

  return (
    <Link
      to={`/menu/${section.slug}`}
      className="group relative block overflow-hidden rounded-[24px] border border-[#e2d6c7] bg-[#fbf7f2] shadow-[0_8px_22px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ccb89c] hover:shadow-[0_16px_34px_rgba(0,0,0,0.07)] sm:rounded-[28px]"
    >
      <div className="relative flex min-h-[360px] flex-col sm:min-h-[216px] sm:block">
        <div className="relative h-[170px] w-full overflow-hidden rounded-t-[24px] sm:absolute sm:inset-y-0 sm:right-0 sm:h-auto sm:w-[44%] sm:rounded-r-[28px] sm:rounded-t-none">
          <img
            src={section.image}
            alt={section.category[language]}
            className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/16 via-transparent to-transparent sm:bg-gradient-to-l sm:from-transparent sm:via-[rgba(255,255,255,0.02)] sm:to-[rgba(247,243,238,0.06)]" />
        </div>

        <div className="relative z-10 flex flex-1 flex-col bg-[#fcf8f3] px-5 py-5 sm:absolute sm:inset-y-0 sm:left-0 sm:w-[61%] sm:bg-transparent sm:p-0">
          <svg
            viewBox="0 0 760 220"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-[calc(100%+84px)] sm:block"
            aria-hidden="true"
          >
            <path
              d="
                M 28 0
                H 580
                A 140 140 0 0 1 580 220
                H 28
                A 28 28 0 0 1 0 192
                V 28
                A 28 28 0 0 1 28 0
                Z
              "
              fill="#fcf8f3"
            />

            <path
              d="M 579 0 A 140 140 0 0 1 579 220"
              fill="none"
              stroke="rgba(0,0,0,0.05)"
              strokeWidth="1.2"
            />

            <path
              d="M 572 10 A 132 132 0 0 1 572 210"
              fill="none"
              stroke="rgba(0,0,0,0.026)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative flex h-full flex-col sm:px-8 sm:py-7">
            <h3 className="text-[1.35rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-text)] sm:text-[1.55rem] md:text-[1.68rem]">
              {section.category[language]}
            </h3>

            <p className="mt-3 max-w-[22rem] text-[14px] leading-6 text-black/62 transition-colors duration-300 group-hover:text-black/70 sm:text-[14.5px]">
              {section.description[language]}
            </p>

            <div className="mt-auto pt-5">
              <span className="inline-flex items-center gap-2 text-[14px] font-semibold tracking-[0.01em] text-[var(--color-accent-blue)] sm:text-[14.5px]">
                <span className="transition-opacity duration-300 group-hover:opacity-80">
                  {t.menuPage.card.viewCategory}
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MenuCategoryCard