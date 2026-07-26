import { Link } from 'react-router-dom'
import Container from './Container'
import { siteImages } from '../data/images'
import { useTranslation } from '../i18n/useTranslation'

function EventsPreviewSection() {
  const { t } = useTranslation()

  const eventImages = [
    siteImages.home.reservationDining,
    siteImages.events.eventGuests,
  ]

  return (
    <section className="relative overflow-hidden py-14 text-white sm:py-16 md:py-20">
      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-1 md:grid-cols-2">
          {eventImages.map((imageSrc, index) => (
            <div
              key={index}
              className="relative h-full overflow-hidden border-white/10 md:border-r last:border-r-0"
            >
              <img
                src={imageSrc}
                alt={
                  index === 0
                    ? t.eventsPreview.imageAltLeft
                    : t.eventsPreview.imageAltRight
                }
                className="h-full w-full object-cover object-[center_45%]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.48))]" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,13,10,0.30),rgba(18,13,10,0.12),rgba(18,13,10,0.30))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04),rgba(0,0,0,0.26))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(72,52,38,0.04),rgba(72,52,38,0.10))]" />
      </div>

      <Container>
        <div className="relative flex min-h-[40.5rem] items-center justify-center sm:min-h-[42.5rem] md:min-h-[41rem] lg:min-h-[43rem]">
          <div
            className="
              flex aspect-square w-[95vw] max-w-[40.5rem] flex-col justify-center rounded-full
              border border-[#e2d8cc] bg-[#f4efe9]/94 px-6 py-8 text-center
              text-[#2a201a] shadow-[0_28px_70px_rgba(0,0,0,0.3),_0_2px_0_rgba(255,255,255,0.18)_inset]
              backdrop-blur-xl sm:w-[89vw] sm:px-10 sm:py-10 md:w-[43rem] md:max-w-[43rem] md:px-12 md:py-12
            "
          >
            <p className="text-[8.5px] font-semibold uppercase tracking-[0.22em] text-[#7a6658] sm:text-[9.5px] sm:tracking-[0.27em] md:text-[10.5px] md:tracking-[0.29em]">
              {t.eventsPreview.eyebrow}
            </p>

            <h2 className="mx-auto mt-3 max-w-[16ch] text-[1.48rem] font-semibold leading-[1.03] tracking-[-0.03em] sm:text-[1.88rem] md:max-w-[17ch] md:text-[2.28rem]">
              {t.eventsPreview.title}
            </h2>

            <p className="mx-auto mt-3 max-w-[20.5rem] text-[12.5px] leading-5 text-[#5b4b41] sm:mt-4 sm:max-w-[24.5rem] sm:text-[14.5px] sm:leading-6 md:text-[15.5px] md:leading-7">
              {t.eventsPreview.description}
            </p>

            <div className="mx-auto mt-4 grid w-full max-w-[31.5rem] gap-2.5 text-left sm:mt-5 sm:grid-cols-2 sm:gap-3">
              <div className="rounded-[1.15rem] border border-black/5 bg-white/78 px-4 py-3 shadow-[0_3px_12px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:rounded-[1.35rem] sm:px-4 sm:py-3.5">
                <p className="text-[13.5px] font-semibold leading-5 text-[#2a201a] sm:text-[14.5px]">
                  {t.eventsPreview.cards.birthdays.title}
                </p>

                <p className="mt-1 text-[12.5px] leading-5 text-[#6a5a4f] sm:text-[13.5px] sm:leading-5">
                  {t.eventsPreview.cards.birthdays.description}
                </p>
              </div>

              <div className="rounded-[1.15rem] border border-black/5 bg-white/78 px-4 py-3 shadow-[0_3px_12px_rgba(0,0,0,0.03)] backdrop-blur-sm sm:rounded-[1.35rem] sm:px-4 sm:py-3.5">
                <p className="text-[13.5px] font-semibold leading-5 text-[#2a201a] sm:text-[14.5px]">
                  {t.eventsPreview.cards.groups.title}
                </p>

                <p className="mt-1 text-[12.5px] leading-5 text-[#6a5a4f] sm:text-[13.5px] sm:leading-5">
                  {t.eventsPreview.cards.groups.description}
                </p>
              </div>
            </div>

            <p className="mx-auto mt-4 w-full max-w-[30rem] text-center text-[7.5px] font-semibold uppercase leading-4 tracking-[0.045em] text-[#9a8575] sm:mt-4 sm:text-[8.5px] sm:tracking-[0.065em] md:text-[9.5px] md:tracking-[0.075em]">
              {t.eventsPreview.note}
            </p>

            <div className="mt-4 flex items-center justify-center sm:mt-5">
              <Link
                to="/reservations/events"
                className="inline-flex min-h-[44px] w-full max-w-[17rem] items-center justify-center rounded-full bg-gradient-to-r from-[#2f2a72] to-[#3d3890] px-4 py-3 text-center text-[10.5px] font-extrabold uppercase tracking-[0.095em] !text-white shadow-[0_12px_28px_rgba(47,42,114,0.36)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105 hover:shadow-[0_18px_40px_rgba(47,42,114,0.44)] sm:min-h-[50px] sm:w-auto sm:max-w-none sm:px-7 sm:text-[12.5px] sm:tracking-[0.11em] md:text-[13.5px]"
              >
                {t.eventsPreview.button}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default EventsPreviewSection