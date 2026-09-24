import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { siteImages } from '../data/images'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'

type GalleryItem = {
  title: {
    en: string
    de: string
  }
  pin: {
    en: string
    de: string
  }
  imageIndex: number
  span?: 'default' | 'wide' | 'tall'
  objectPosition?: string
}

function GalleryPage() {
  const { t, language } = useTranslation()

  usePageMeta(`${t.galleryPage.title} | Cays`, t.galleryPage.description)

  const getGalleryImage = (index: number) => {
    return (
      siteImages.gallery[index] ??
      siteImages.gallery[index % siteImages.gallery.length]
    )
  }

  const galleryItems: GalleryItem[] = [
    {
      title: {
        en: 'Warm café interior',
        de: 'Warme Café-Atmosphäre',
      },
      pin: {
        en: 'Interior',
        de: 'Interieur',
      },
      imageIndex: 7,
      span: 'wide',
      objectPosition: 'object-[center_48%]',
    },
    {
      title: {
        en: 'Ice cream moment',
        de: 'Eiscreme-Moment',
      },
      pin: {
        en: 'Ice Cream',
        de: 'Eiscreme',
      },
      imageIndex: 1,
      objectPosition: 'object-[center_45%]',
    },
    {
      title: {
        en: 'Signature iced drink',
        de: 'Signature Iced Drink',
      },
      pin: {
        en: 'Cold Drink',
        de: 'Kaltgetränk',
      },
      imageIndex: 6,
      objectPosition: 'object-[center_48%]',
    },
    {
      title: {
        en: 'Relaxed café corner',
        de: 'Entspannte Café-Ecke',
      },
      pin: {
        en: 'Interior',
        de: 'Interieur',
      },
      imageIndex: 10,
      objectPosition: 'object-[center_50%]',
    },
    {
      title: {
        en: 'Fresh waffle plate',
        de: 'Frische Waffel',
      },
      pin: {
        en: 'Waffle',
        de: 'Waffel',
      },
      imageIndex: 4,
      objectPosition: 'object-center',
    },
    {
      title: {
        en: 'Cake on the counter',
        de: 'Kuchen an der Theke',
      },
      pin: {
        en: 'Cake',
        de: 'Kuchen',
      },
      imageIndex: 8,
      span: 'wide',
      objectPosition: 'object-[center_48%]',
    },
    {
      title: {
        en: 'Chocolate waffle pour',
        de: 'Waffel mit Schokolade',
      },
      pin: {
        en: 'Waffle',
        de: 'Waffel',
      },
      imageIndex: 11,
      objectPosition: 'object-center',
    },
    {
      title: {
        en: 'Spaghetti ice cream',
        de: 'Spaghetti-Eis',
      },
      pin: {
        en: 'Ice Cream',
        de: 'Eiscreme',
      },
      imageIndex: 12,
      objectPosition: 'object-[center_46%]',
    },
    {
      title: {
        en: 'Fresh citrus drink',
        de: 'Frischer Zitrusdrink',
      },
      pin: {
        en: 'Cold Drink',
        de: 'Kaltgetränk',
      },
      imageIndex: 17,
      objectPosition: 'object-[center_48%]',
    },
    {
      title: {
        en: 'Strawberry cake',
        de: 'Erdbeerkuchen',
      },
      pin: {
        en: 'Cake',
        de: 'Kuchen',
      },
      imageIndex: 20,
      objectPosition: 'object-[center_48%]',
    },
    {
      title: {
        en: 'Our gelato counter',
        de: 'Unsere Eistheke',
      },
      pin: {
        en: 'Ice Cream',
        de: 'Eiscreme',
      },
      imageIndex: 23,
      objectPosition: 'object-[center_55%]',
    },
    {
      title: {
        en: 'Dipped waffle cones',
        de: 'Getunkte Waffelhörnchen',
      },
      pin: {
        en: 'Ice Cream',
        de: 'Eiscreme',
      },
      imageIndex: 24,
      objectPosition: 'object-[center_60%]',
    },
    {
      title: {
        en: 'Fresh cheese board',
        de: 'Frische Käseplatte',
      },
      pin: {
        en: 'Breakfast',
        de: 'Frühstück',
      },
      imageIndex: 25,
      objectPosition: 'object-[center_60%]',
    },
  ]

  const getSpanClass = (span: GalleryItem['span']) => {
    switch (span) {
      case 'wide':
        return 'lg:col-span-2'
      case 'tall':
        return 'lg:row-span-2'
      default:
        return ''
    }
  }

  const getHeightClass = (span: GalleryItem['span']) => {
    switch (span) {
      case 'wide':
        return 'h-[260px] sm:h-[320px] lg:h-[380px]'
      case 'tall':
        return 'h-[260px] sm:h-[320px] lg:h-full lg:min-h-[760px]'
      default:
        return 'h-[260px] sm:h-[320px] lg:h-[380px]'
    }
  }

  const getLocalizedText = (text: { en: string; de: string }) => {
    return language === 'de' ? text.de : text.en
  }

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-20 pt-28 sm:pb-24 md:pb-28 md:pt-32">
        <Container>
          <div className="max-w-none">
            <div className="flex items-center gap-3">
              <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />

              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.24em]">
                {t.galleryPage.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 max-w-[28ch] text-[2rem] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[2.8rem] md:text-[3.2rem]">
              {t.galleryPage.title}
            </h1>

            <p className="mt-5 max-w-[72rem] text-[0.96rem] leading-7 text-black/62 sm:text-[1rem] md:text-[1.05rem] md:leading-8">
              {t.galleryPage.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.78rem] font-medium tracking-[0.02em] text-black/48 sm:gap-x-6 sm:text-[0.82rem]">
              <span>{t.galleryPage.tags.interiors}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)]/70" />
              <span>{t.galleryPage.tags.breakfastDesserts}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)]/70" />
              <span>{t.galleryPage.tags.coffeeMoments}</span>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[380px] lg:gap-5">
            {galleryItems.map((item, index) => {
              const imageSrc = getGalleryImage(item.imageIndex)
              const itemTitle = getLocalizedText(item.title)
              const itemPin = getLocalizedText(item.pin)

              return (
                <article
                  key={`${itemTitle}-${index}`}
                  className={`group overflow-hidden rounded-[24px] border border-[#e6dccf] bg-white/55 shadow-[0_14px_34px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(0,0,0,0.06)] sm:rounded-[30px] ${getSpanClass(
                    item.span,
                  )}`}
                >
                  <div
                    className={`relative overflow-hidden ${getHeightClass(
                      item.span,
                    )}`}
                  >
                    <img
                      src={imageSrc}
                      alt={itemTitle}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full object-cover ${
                        item.objectPosition ?? 'object-center'
                      } transition-transform duration-700 group-hover:scale-[1.04]`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/12 to-transparent" />

                    <div className="absolute left-4 top-4 sm:left-5 sm:top-5">
                      <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm sm:text-[0.68rem] sm:tracking-[0.16em]">
                        {itemPin}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 md:p-6">
                      <h3 className="max-w-[20ch] text-[1.08rem] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[1.2rem] md:text-[1.35rem]">
                        {itemTitle}
                      </h3>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default GalleryPage