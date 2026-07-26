import { Link } from 'react-router-dom'
import Container from './Container'
import SectionHeading from './SectionHeading'
import NazarBoncuguIcon from './NazarBoncuguIcon'
import { siteImages } from '../data/images'
import { useTranslation } from '../i18n/useTranslation'

function MenuPreviewSection() {
  const { t } = useTranslation()

  const quickHighlights = [
    t.menuPreview.categories.breakfast,
    t.menuPreview.categories.waffles,
    t.menuPreview.categories.cakes,
    t.menuPreview.categories.iceCream,
    t.menuPreview.categories.hotDrinks,
    t.menuPreview.categories.coldDrinks,
  ]

  return (
    <section
      id="category-preview"
      className="border-b border-black/5 bg-[#f7f3ee] py-14 sm:py-16 md:py-18"
    >
      <Container>
        <div className="max-w-[56rem]">
          <SectionHeading
            eyebrow={t.menuPreview.eyebrow}
            eyebrowIcon={
              <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />
            }
            title={t.menuPreview.title}
            description={t.menuPreview.description}
          />
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch lg:gap-8">
          <div className="flex h-full min-h-full flex-col justify-between lg:max-w-xl">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#877050] sm:text-[11px]">
                {t.menuPreview.featuredCategories}
              </p>

              <div className="mt-3.5 flex max-w-[33rem] flex-wrap gap-2 sm:gap-2.5">
                {quickHighlights.map((label) => (
                  <div
                    key={label}
                    className="rounded-full border border-[#877050]/10 bg-white px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#6a5743] shadow-[0_5px_14px_rgba(0,0,0,0.035)] sm:px-3.5 sm:text-[9px] md:px-4 md:text-[10px]"
                  >
                    {label}
                  </div>
                ))}

                <div className="rounded-full border border-dashed border-[#877050]/22 bg-[#efe5d7] px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#7a664f] sm:px-3.5 sm:text-[9px] md:px-4 md:text-[10px]">
                  {t.menuPreview.moreInMenu}
                </div>
              </div>
            </div>

            <div className="mt-7 min-h-[230px] rounded-[1.5rem] border border-black/5 bg-white px-5 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.04)] sm:mt-8 sm:min-h-[240px] sm:rounded-[1.65rem] sm:px-6 sm:py-6 lg:mt-6 lg:min-h-[260px]">
              <div className="flex h-full max-w-[30rem] flex-col justify-center">
                <p className="text-[13px] leading-7 text-neutral-600 sm:text-[14px] md:text-[15px]">
                  {t.menuPreview.cardDescription}
                </p>

                <div className="mt-5">
                  <Link
                    to="/menu"
                    className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#2f2a72] to-[#3d3890] px-4 py-3 text-center text-[10px] font-bold uppercase tracking-[0.095em] !text-white shadow-[0_8px_20px_rgba(47,42,114,0.28)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105 sm:w-auto sm:min-h-[46px] sm:px-5 sm:text-[11px] md:px-6 md:text-[12px]"
                  >
                    {t.menuPreview.exploreFullMenu}
                  </Link>
                </div>

                <p className="mt-3 max-w-[24rem] text-[11px] leading-5 text-neutral-400 sm:text-[12px]">
                  {t.menuPreview.bottomNote}
                </p>
              </div>
            </div>
          </div>

          <div className="flex h-full flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="group relative h-52 overflow-hidden rounded-[1.6rem] shadow-[0_16px_34px_rgba(0,0,0,0.08)] sm:h-44 sm:rounded-[2rem]">
                <img
                  src={siteImages.menu.breakfast}
                  alt={t.menuPreview.imageLabels.breakfastMoments}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.18))]" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#5d4b38] shadow-[0_8px_16px_rgba(0,0,0,0.08)] sm:px-4 sm:text-[10px]">
                  {t.menuPreview.imageLabels.breakfastMoments}
                </div>
              </div>

              <div className="group relative h-52 overflow-hidden rounded-[1.6rem] shadow-[0_16px_34px_rgba(0,0,0,0.08)] sm:h-44 sm:rounded-[2rem]">
                <img
                  src={siteImages.menu.cakes}
                  alt={t.menuPreview.imageLabels.sweetCravings}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.14))]" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#5d4b38] shadow-[0_8px_16px_rgba(0,0,0,0.08)] sm:px-4 sm:text-[10px]">
                  {t.menuPreview.imageLabels.sweetCravings}
                </div>
              </div>
            </div>

            <div className="group relative h-[17rem] overflow-hidden rounded-[1.6rem] shadow-[0_16px_34px_rgba(0,0,0,0.08)] sm:min-h-[12.25rem] sm:flex-1 sm:rounded-[2rem]">
              <img
                src={siteImages.menu.coldDrinks}
                alt={t.menuPreview.imageLabels.drinksMore}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_48%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.36))]" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/82 sm:text-[11px]">
                  {t.menuPreview.imageLabels.drinksMore}
                </p>
                <p className="mt-2 max-w-[30rem] text-[13px] leading-6 text-white/86 sm:text-[14px] sm:leading-7">
                  {t.menuPreview.drinksDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default MenuPreviewSection