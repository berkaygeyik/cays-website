import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { menuData } from '../data/menu'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'

function MenuCategoryPage() {
  const { slug } = useParams()
  const { t, language } = useTranslation()

  const section = useMemo(
    () => menuData.find((item) => item.slug === slug),
    [slug],
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  usePageMeta(
    section
      ? `${section.category[language]} | Cays`
      : `${t.menuCategoryPage.notFound.title} | Cays`,
    section?.description[language],
  )

  if (!section) {
    return (
      <section className="bg-[#f7f3ee] py-24 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2.5">
              <NazarBoncuguIcon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />

              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-brand-dark)]/60">
                {t.menuCategoryPage.notFound.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
              {t.menuCategoryPage.notFound.title}
            </h1>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-black/65">
              {t.menuCategoryPage.notFound.description}
            </p>

            <Link
              to="/menu"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-black/10 bg-[var(--color-text)] px-6 py-3 text-sm font-semibold tracking-[0.02em] !text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-black"
            >
              {t.menuCategoryPage.backToMenu}
            </Link>
          </div>
        </Container>
      </section>
    )
  }

  const galleryImages =
    section.images && section.images.length > 0
      ? section.images
      : [section.image]

  const primaryImage = galleryImages[0]
  const secondaryImages = galleryImages.slice(1, 3)

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-24 pt-28 md:pb-28 md:pt-32">
        <Container>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 text-[0.88rem] font-medium text-black/58 transition-colors duration-300 hover:text-black"
          >
            <span>←</span>
            <span>{t.menuCategoryPage.backToMenu}</span>
          </Link>

          <div className="mt-10 max-w-3xl">
            <div className="flex items-center gap-2.5">
              <NazarBoncuguIcon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />

              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-brand-dark)]/58">
                {t.menuCategoryPage.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-tight sm:text-5xl md:text-6xl">
              {section.category[language]}
            </h1>

            <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-black/64 md:text-[1.04rem]">
              {section.description[language]}
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start xl:grid-cols-[minmax(0,1fr)_460px] xl:gap-14">
            <div className="border-t border-[#e5ddd2]">
              {section.items.map((item, index) => (
                <article
                  key={`${section.slug}-${index}`}
                  className="group relative border-b border-[#e9e1d6] py-7 transition-colors duration-300 hover:bg-white/28 md:py-8"
                >
                  <div className="grid gap-4 md:grid-cols-[1fr_auto] md:gap-8">
                    <div className="min-w-0 pr-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <div className="flex items-center gap-3">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-accent-gold)]/80 transition-transform duration-300 group-hover:scale-110" />

                          <h2 className="text-[1.08rem] font-semibold tracking-tight text-[var(--color-text)] sm:text-[1.18rem]">
                            {item.name[language]}
                          </h2>
                        </div>

                        {index < 2 && (
                          <span className="rounded-full border border-[#d7c5aa] bg-[#f4ead9] px-3 py-[0.36rem] text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/88">
                            {t.menuCategoryPage.popular}
                          </span>
                        )}
                      </div>

                      <p className="mt-3 max-w-2xl pl-[22px] text-[14.5px] leading-7 text-black/58 md:text-[15px]">
                        {item.description[language]}
                      </p>
                    </div>

                    <div className="md:pl-6 md:text-right">
                      <div className="inline-flex items-center rounded-full border border-[#e0d5c6] bg-white/72 px-4 py-2 text-[0.98rem] font-semibold tracking-[0.01em] text-[var(--color-brand-dark)] shadow-[0_4px_14px_rgba(0,0,0,0.02)]">
                        € {item.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="space-y-5">
                {primaryImage && (
                  <div className="relative overflow-hidden rounded-[30px] border border-[#e2d8cb] bg-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.035)]">
                    <img
                      src={primaryImage}
                      alt={`${section.category[language]} ${t.menuCategoryPage.imageAlt.main}`}
                      className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] xl:h-[390px]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.08))]" />
                  </div>
                )}

                {secondaryImages.length > 0 && (
                  <div className="grid grid-cols-2 gap-5">
                    {secondaryImages.map((image, index) => (
                      <div
                        key={`${section.slug}-image-${index + 1}`}
                        className="relative overflow-hidden rounded-[26px] border border-[#e2d8cb] bg-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
                      >
                        <img
                          src={image}
                          alt={`${section.category[language]} ${index + 2}`}
                          loading="lazy"
                          decoding="async"
                          className="h-[220px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] xl:h-[240px]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.08))]" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default MenuCategoryPage