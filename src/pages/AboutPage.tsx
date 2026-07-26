import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { siteImages } from '../data/images'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'

function AboutPage() {
  const { t } = useTranslation()

  usePageMeta(`${t.aboutPage.hero.title} | Cays`, t.aboutPage.hero.description)

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-20 pt-28 sm:pb-24 md:pb-28 md:pt-32">
        <Container>
          <div className="grid items-center gap-9 lg:grid-cols-[minmax(0,1.18fr)_minmax(380px,0.9fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.14fr)_560px] xl:gap-12">
            <div className="max-w-[52rem]">
              <div className="flex items-center gap-3">
                <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />

                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.24em]">
                  {t.aboutPage.hero.eyebrow}
                </p>
              </div>

              <h1 className="mt-4 max-w-[15ch] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[2.5rem] md:max-w-[16ch] md:text-[3.1rem]">
                {t.aboutPage.hero.title}
              </h1>

              <p className="mt-5 max-w-[39rem] text-[0.98rem] leading-7 text-black/62 sm:mt-6 md:text-[1.05rem] md:leading-8">
                {t.aboutPage.hero.description}
              </p>

              <div className="mt-7 max-w-[40rem] space-y-4 text-[0.96rem] leading-7 text-black/60 sm:mt-8 sm:space-y-5 md:text-[1.02rem] md:leading-8">
                <p>{t.aboutPage.hero.paragraphs.first}</p>
                <p>{t.aboutPage.hero.paragraphs.second}</p>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="overflow-hidden rounded-[28px] rounded-bl-[44px] rounded-tr-[64px] border border-[#e3d8ca] bg-white/50 shadow-[0_18px_44px_rgba(0,0,0,0.05)] sm:rounded-[34px] sm:rounded-bl-[54px] sm:rounded-tr-[84px]">
                <img
                  src={siteImages.about.main}
                  alt={t.aboutPage.hero.imageAlt}
                  className="h-[300px] w-full object-cover object-center sm:h-[360px] md:h-[420px] lg:h-[470px] xl:h-[510px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 md:mt-18">
            <div className="h-px w-full bg-[#dfd3c4]" />

            <div className="mt-8 max-w-none">
              <div className="flex items-center gap-3">
                <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />

                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.22em]">
                  {t.aboutPage.experience.eyebrow}
                </p>
              </div>

              <h2 className="mt-4 max-w-3xl text-[1.55rem] font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] sm:text-[1.72rem] md:text-[2rem]">
                {t.aboutPage.experience.title}
              </h2>
            </div>

            <div className="mt-7 grid gap-4 sm:mt-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              <article className="group rounded-[24px] border border-[#e6dccf] bg-white/62 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.045)] sm:rounded-[30px] sm:p-7">
                <div className="flex items-center gap-3">
                  <NazarBoncuguIcon className="h-[21px] w-[21px] sm:h-[24px] sm:w-[24px]" />

                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-dark)]/64 sm:text-[0.74rem] sm:tracking-[0.16em]">
                    {t.aboutPage.cards.atmosphere.eyebrow}
                  </p>
                </div>

                <h3 className="mt-4 text-[1.1rem] font-semibold tracking-tight text-[var(--color-text)] sm:text-[1.2rem]">
                  {t.aboutPage.cards.atmosphere.title}
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-black/60 sm:mt-4 sm:text-[15px] sm:leading-8">
                  {t.aboutPage.cards.atmosphere.description}
                </p>
              </article>

              <article className="group rounded-[24px] border border-[#e2d6c7] bg-[#f1e8dc] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.04)] sm:rounded-[30px] sm:p-7">
                <div className="flex items-center gap-3">
                  <NazarBoncuguIcon className="h-[21px] w-[21px] sm:h-[24px] sm:w-[24px]" />

                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-dark)]/64 sm:text-[0.74rem] sm:tracking-[0.16em]">
                    {t.aboutPage.cards.menu.eyebrow}
                  </p>
                </div>

                <h3 className="mt-4 text-[1.1rem] font-semibold tracking-tight text-[var(--color-text)] sm:text-[1.2rem]">
                  {t.aboutPage.cards.menu.title}
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-black/60 sm:mt-4 sm:text-[15px] sm:leading-8">
                  {t.aboutPage.cards.menu.description}
                </p>
              </article>

              <article className="group rounded-[24px] border border-[#e6dccf] bg-white/62 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,0.045)] sm:rounded-[30px] sm:p-7 md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-3">
                  <NazarBoncuguIcon className="h-[21px] w-[21px] sm:h-[24px] sm:w-[24px]" />

                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[var(--color-brand-dark)]/64 sm:text-[0.74rem] sm:tracking-[0.16em]">
                    {t.aboutPage.cards.hospitality.eyebrow}
                  </p>
                </div>

                <h3 className="mt-4 text-[1.1rem] font-semibold tracking-tight text-[var(--color-text)] sm:text-[1.2rem]">
                  {t.aboutPage.cards.hospitality.title}
                </h3>

                <p className="mt-3 text-[14px] leading-7 text-black/60 sm:mt-4 sm:text-[15px] sm:leading-8">
                  {t.aboutPage.cards.hospitality.description}
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage