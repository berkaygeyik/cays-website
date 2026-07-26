import Container from '../components/Container'
import MenuCategoryCard from '../components/MenuCategoryCard'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { menuData } from '../data/menu'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'
import caysLogoWhite from '../assets/cays-logo-white.png'

const menuHeroImage = '/images/menu/image.png'

function MenuPage() {
  const { t } = useTranslation()

  usePageMeta(`${t.menuPage.hero.title} | Cays`, t.menuPage.hero.description)

  const categoryCountLabel =
    menuData.length === 1
      ? t.menuPage.categories.countSingular
      : t.menuPage.categories.countPlural

  return (
    <div className="relative text-[var(--color-text)]">
      <div className="fixed inset-0 -z-20">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${menuHeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/62 via-black/42 to-black/34" />
      </div>

      <div className="relative z-10">
        <section>
          <Container className="flex items-center justify-center pb-32 pt-36 sm:pt-40 md:pb-40 md:pt-52">
            <div className="max-w-3xl text-center">
              <img
                src={caysLogoWhite}
                alt={t.menuPage.hero.logoAlt}
                className="mx-auto mb-5 w-[104px] opacity-90 drop-shadow-[0_6px_18px_rgba(0,0,0,0.25)] sm:w-[120px] md:mb-6 md:w-[140px]"
              />

              <p className="mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#f4ede4]/80 sm:text-[0.75rem] sm:tracking-[0.32em]">
                {t.menuPage.hero.eyebrow}
              </p>

              <h1 className="text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-[#f8f3ec] sm:text-5xl lg:text-6xl">
                {t.menuPage.hero.title}
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-7 text-[#f4ede4]/90 sm:mt-6 sm:text-[1.02rem] sm:leading-8">
                {t.menuPage.hero.description}
              </p>
            </div>
          </Container>
        </section>

        <section className="relative -mt-20 pb-16 sm:-mt-24 md:-mt-28 md:pb-24">
          <Container>
            <div className="rounded-[24px] border border-[#e2d6c5] bg-[linear-gradient(180deg,#f4ede4,#efe6da)] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.10)] sm:rounded-[32px] sm:p-6 md:p-8 lg:p-10">
              <div className="mb-6 border-b border-black/6 pb-6 sm:mb-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
                  <div className="md:flex-1">
                    <div className="flex items-center gap-2.5">
                      <NazarBoncuguIcon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />

                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/55 sm:text-[0.72rem] sm:tracking-[0.24em]">
                        {t.menuPage.categories.eyebrow}
                      </p>
                    </div>

                    <h2 className="mt-2 text-[1.55rem] font-semibold tracking-tight sm:text-2xl md:text-3xl">
                      {t.menuPage.categories.title}
                    </h2>

                    <p className="mt-3 max-w-none text-[0.92rem] leading-7 text-black/58 sm:text-[0.96rem]">
                      {t.menuPage.categories.description}
                    </p>
                  </div>

                  <div className="w-fit shrink-0 rounded-full border border-[#ddd2c4] bg-white/70 px-4 py-2 text-[0.82rem] font-medium text-black/65 sm:text-[0.9rem]">
                    {menuData.length} {categoryCountLabel}
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:gap-6 lg:grid-cols-2 xl:gap-8">
                {menuData.map((section) => (
                  <MenuCategoryCard key={section.slug} section={section} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  )
}

export default MenuPage