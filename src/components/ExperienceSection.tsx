import Container from './Container'
import SectionHeading from './SectionHeading'
import ButtonLink from './ButtonLink'
import NazarBoncuguIcon from './NazarBoncuguIcon'
import { siteImages } from '../data/images'
import { useTranslation } from '../i18n/useTranslation'

function ExperienceSection() {
  const { t } = useTranslation()

  const highlights = [
    t.experience.highlights.cozyInterior,
    t.experience.highlights.homemadeFresh,
    t.experience.highlights.socialInviting,
  ]

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-8">
          <div className="relative z-10 max-w-[38rem]">
            <div className="max-w-[36rem]">
              <SectionHeading
                eyebrow={t.experience.eyebrow}
                eyebrowIcon={
                  <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />
                }
                title={t.experience.title}
                description={t.experience.description}
              />
            </div>

            <div className="mt-6 flex max-w-[35rem] flex-wrap items-center gap-x-3 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#7b6756] sm:mt-7 sm:gap-x-4 sm:gap-y-3 sm:text-[10px] md:text-[11px]">
              {highlights.map((item, index) => (
                <div key={item} className="flex items-center gap-3 sm:gap-4">
                  <span className="whitespace-normal">{item}</span>
                  {index !== highlights.length - 1 && (
                    <span className="hidden text-[#ccbba8] lg:inline">•</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex sm:mt-9">
              <ButtonLink
                to="/gallery"
                className="w-full justify-center bg-gradient-to-r from-[#2f2a72] to-[#3d3890] px-6 !text-white shadow-[0_12px_30px_rgba(47,42,114,0.35)] hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(47,42,114,0.45)] sm:w-auto sm:min-w-[250px] sm:max-w-none"
              >
                {t.experience.button}
              </ButtonLink>
            </div>

            <p className="mt-5 max-w-[30rem] text-[13px] leading-relaxed text-neutral-500 sm:text-sm">
              {t.experience.note}
            </p>
          </div>

          <div className="relative h-[24rem] sm:h-[31rem] lg:h-[40rem]">
            <div className="absolute left-1/2 top-1/2 h-[21rem] w-[21rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f1e8de] sm:h-[27rem] sm:w-[27rem] lg:left-auto lg:right-[-14%] lg:h-[39rem] lg:w-[39rem] lg:translate-x-0" />

            <div className="absolute left-1/2 top-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-black/5 shadow-[0_26px_72px_rgba(0,0,0,0.15)] sm:h-[24.5rem] sm:w-[24.5rem] lg:left-auto lg:right-[-18%] lg:h-[35.5rem] lg:w-[35.5rem] lg:translate-x-0">
              <img
                src={siteImages.home.experience}
                alt={t.experience.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-[center_58%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,18,13,0.03),rgba(24,18,13,0.18))]" />
            </div>

            <div className="absolute bottom-3 left-1/2 z-10 w-[min(18rem,calc(100%-2rem))] -translate-x-1/2 rounded-[1.45rem] border border-white/12 bg-[linear-gradient(135deg,rgba(62,48,40,0.82),rgba(44,33,27,0.72))] px-4 py-3.5 text-white shadow-[0_18px_38px_rgba(0,0,0,0.18)] backdrop-blur-md sm:bottom-8 sm:w-[17.5rem] sm:px-5 sm:py-4 lg:bottom-16 lg:left-8 lg:w-[18.5rem] lg:translate-x-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-white/70 sm:text-[10px]">
                {t.experience.floatingCard.eyebrow}
              </p>

              <p className="mt-2 text-[13px] leading-6 text-white/90 sm:text-[14px] sm:leading-7">
                {t.experience.floatingCard.description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ExperienceSection