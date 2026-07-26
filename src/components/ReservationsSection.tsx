import { Link } from 'react-router-dom'
import Container from './Container'
import NazarBoncuguIcon from './NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'

function ReservationsSection() {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-14 sm:py-16 md:py-20">
      <Container>
        <div className="rounded-[1.7rem] border border-black/6 bg-[linear-gradient(135deg,#f7f3ee,#efe5d7)] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.06)] sm:rounded-[2.25rem] sm:p-8 lg:p-9">
          <div className="mb-7 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <NazarBoncuguIcon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#877050] sm:text-[11px] sm:tracking-[0.30em]">
                {t.reservationsSection.eyebrow}
              </p>
            </div>

            <h2 className="mx-auto mt-4 max-w-[38rem] text-[1.85rem] font-semibold leading-[1.08] tracking-[-0.025em] text-neutral-900 sm:text-4xl">
              {t.reservationsSection.title}
            </h2>

            <p className="mx-auto mt-4 max-w-[42rem] text-[0.96rem] leading-relaxed text-neutral-600 sm:text-[1.02rem]">
              {t.reservationsSection.description}
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
            <div className="flex flex-col justify-between rounded-[1.5rem] border border-black/6 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:rounded-[1.9rem] sm:p-8">
              <div>
                <div className="flex items-center gap-2.5">
                  <NazarBoncuguIcon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#877050] sm:text-[11px] sm:tracking-[0.30em]">
                    {t.reservationsSection.table.eyebrow}
                  </p>
                </div>

                <h3 className="mt-4 text-[1.4rem] font-semibold leading-tight text-neutral-900 sm:text-[1.55rem]">
                  {t.reservationsSection.table.title}
                </h3>

                <p className="mt-4 max-w-[29rem] text-[0.96rem] leading-relaxed text-neutral-600 sm:text-base">
                  {t.reservationsSection.table.description}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/reservations/table"
                  className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#111111] px-6 py-3 text-center text-[12px] font-extrabold uppercase tracking-[0.12em] !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#222222] sm:w-auto sm:min-h-[52px] sm:px-7 sm:text-sm sm:tracking-[0.14em]"
                >
                  {t.reservationsSection.table.button}
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[1.5rem] border border-[#877050]/20 bg-[linear-gradient(180deg,#211912_0%,#18110c_100%)] p-5 text-white shadow-[0_16px_40px_rgba(0,0,0,0.2),_inset_0_1px_0_rgba(255,255,255,0.03)] sm:rounded-[2rem] sm:p-8">
              <div>
                <div className="flex items-center gap-2.5">
                  <NazarBoncuguIcon className="h-[17px] w-[17px] sm:h-[18px] sm:w-[18px]" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/62 sm:text-[11px] sm:tracking-[0.30em]">
                    {t.reservationsSection.event.eyebrow}
                  </p>
                </div>

                <h3 className="mt-4 text-[1.55rem] font-semibold leading-tight text-white sm:text-[1.95rem]">
                  {t.reservationsSection.event.title}
                </h3>

                <p className="mt-4 max-w-[34rem] text-[0.96rem] leading-relaxed text-white/78 sm:text-base">
                  {t.reservationsSection.event.description}
                </p>

                <p className="mt-5 text-[0.72rem] font-medium leading-5 tracking-[0.035em] text-white/58 sm:text-[0.8rem] sm:tracking-[0.04em]">
                  {t.reservationsSection.event.note}
                </p>
              </div>

              <div className="mt-7">
                <Link
                  to="/reservations/events"
                  className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-white px-6 py-3 text-center text-[12px] font-extrabold uppercase tracking-[0.12em] !text-black shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#f3ece3] sm:w-auto sm:min-h-[52px] sm:px-8 sm:text-sm sm:tracking-[0.14em]"
                >
                  {t.reservationsSection.event.button}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ReservationsSection