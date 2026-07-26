import { Link } from 'react-router-dom'
import Container from './Container'
import SectionHeading from './SectionHeading'
import NazarBoncuguIcon from './NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'

function QuickInfoSection() {
  const { t } = useTranslation()

  const cardClassName =
    'flex min-h-[14.5rem] flex-col rounded-[1.6rem] border border-black/6 bg-white px-5 py-5 shadow-[0_12px_36px_rgba(0,0,0,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[#877050]/18 hover:shadow-[0_18px_42px_rgba(0,0,0,0.065)] sm:min-h-[15.5rem] sm:rounded-[2rem] md:min-h-[16.5rem] md:px-6 md:py-6'

  const labelClassName =
    'text-[10px] font-semibold uppercase tracking-[0.22em] text-[#877050] sm:text-[11px] sm:tracking-[0.24em]'

  const sectionLabelClassName =
    'text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8a755f] sm:text-[11px] sm:tracking-[0.16em]'

  const primaryTextClassName =
    'text-[1rem] font-semibold leading-[1.35] tracking-[-0.01em] text-neutral-900 sm:text-[1.08rem]'

  const secondaryTextClassName =
    'text-[0.92rem] leading-[1.6] text-neutral-500 sm:text-[0.97rem] sm:leading-[1.65]'

  const linkClassName =
    'inline-block text-[0.95rem] font-semibold leading-6 text-neutral-900 transition-colors duration-200 hover:text-[#2f2a72] sm:text-[0.98rem]'

  const softLinkClassName =
    'inline-block text-[0.95rem] font-medium leading-6 text-neutral-900 transition-colors duration-200 hover:text-[#2f2a72] sm:text-[0.98rem]'

  const splitBodyClassName = 'mt-5 flex flex-1 flex-col'
  const topHalfClassName =
    'flex min-h-[6.5rem] flex-none flex-col justify-start pb-4'
  const bottomHalfClassName = 'flex flex-1 flex-col justify-end pt-4'
  const separatorClassName = 'border-t border-black/6'

  return (
    <section className="bg-[#f3ede5] py-14 sm:py-16 md:py-20">
      <Container>
        <div className="max-w-[60rem]">
          <SectionHeading
            eyebrow={t.quickInfo.eyebrow}
            eyebrowIcon={
              <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />
            }
            title={t.quickInfo.title}
            description={t.quickInfo.description}
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:mt-10 xl:grid-cols-4">
          <div className={cardClassName}>
            <p className={labelClassName}>
              {t.quickInfo.openingHours.title}
            </p>

            <div className={splitBodyClassName}>
              <div className={topHalfClassName}>
                <p className="text-[0.98rem] font-semibold leading-[1.35] tracking-[-0.01em] text-neutral-900 sm:text-[1rem]">
                  {t.quickInfo.openingHours.days}
                </p>

                <div className="mt-4">
                  <p className={sectionLabelClassName}>
                    {t.quickInfo.openingHours.winter}
                  </p>
                  <p className="mt-2 text-[0.95rem] font-medium leading-6 text-neutral-700 sm:text-[1rem]">
                    {t.quickInfo.openingHours.winterHours}
                  </p>
                </div>
              </div>

              <div className={separatorClassName} />

              <div className={bottomHalfClassName}>
                <div>
                  <p className={sectionLabelClassName}>
                    {t.quickInfo.openingHours.summer}
                  </p>
                  <p className="mt-2 text-[0.95rem] font-medium leading-6 text-neutral-700 sm:text-[1rem]">
                    {t.quickInfo.openingHours.summerHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={cardClassName}>
            <p className={labelClassName}>{t.quickInfo.location.title}</p>

            <div className={splitBodyClassName}>
              <div className={topHalfClassName}>
                <div>
                  <p className={primaryTextClassName}>
                    {t.quickInfo.location.street}
                  </p>
                  <p className="mt-1 text-[0.95rem] font-medium leading-6 text-neutral-600 sm:text-[1rem]">
                    {t.quickInfo.location.city}
                  </p>
                </div>
              </div>

              <div className={separatorClassName} />

              <div className={bottomHalfClassName}>
                <div>
                  <p className={sectionLabelClassName}>
                    {t.quickInfo.location.districtLabel}
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-6 text-neutral-600 sm:text-[0.98rem]">
                    {t.quickInfo.location.district}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={cardClassName}>
            <p className={labelClassName}>{t.quickInfo.reservations.title}</p>

            <div className={splitBodyClassName}>
              <div className={topHalfClassName}>
                <div>
                  <p className={primaryTextClassName}>
                    {t.quickInfo.reservations.main}
                  </p>
                  <p className={`mt-2 ${secondaryTextClassName}`}>
                    {t.quickInfo.reservations.description}
                  </p>
                </div>
              </div>

              <div className={separatorClassName} />

              <div className={bottomHalfClassName}>
                <div>
                  <p className={sectionLabelClassName}>
                    {t.quickInfo.reservations.noteLabel}
                  </p>
                  <p className="mt-2 text-[0.92rem] leading-[1.6] text-neutral-600 sm:text-[0.97rem] sm:leading-[1.65]">
                    {t.quickInfo.reservations.note}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={cardClassName}>
            <p className={labelClassName}>{t.quickInfo.contact.title}</p>

            <div className={splitBodyClassName}>
              <div className={topHalfClassName}>
                <div>
                  <p className={sectionLabelClassName}>
                    {t.quickInfo.contact.phoneLabel}
                  </p>
                  <a
                    href="tel:+4976217707722"
                    className={`mt-2 ${linkClassName}`}
                  >
                    {t.quickInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className={separatorClassName} />

              <div className={bottomHalfClassName}>
                <div>
                  <p className={sectionLabelClassName}>
                    {t.quickInfo.contact.instagramLabel}
                  </p>
                  <a
                    href="https://www.instagram.com/c_a_y_s_/"
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-2 ${softLinkClassName}`}
                  >
                    {t.quickInfo.contact.instagram}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-3.5">
          <Link
            to="/contact"
            className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full border border-[#877050]/18 bg-white px-5 py-3 text-center text-[0.76rem] font-extrabold uppercase tracking-[0.11em] text-neutral-900 shadow-[0_7px_18px_rgba(0,0,0,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-[#877050]/30 hover:bg-[#faf7f2] sm:w-auto sm:px-6 sm:text-[0.82rem] sm:tracking-[0.14em]"
          >
            {t.quickInfo.buttons.contactInfo}
          </Link>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Schopfheimer+Str.+1+79541+L%C3%B6rrach"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-gradient-to-r from-[#2f2a72] to-[#3d3890] px-5 py-3 text-center text-[0.76rem] font-extrabold uppercase tracking-[0.11em] !text-white shadow-[0_10px_24px_rgba(47,42,114,0.28)] transition-all duration-300 hover:-translate-y-1 hover:brightness-105 sm:w-auto sm:px-6 sm:text-[0.82rem] sm:tracking-[0.14em]"
          >
            {t.quickInfo.buttons.openMaps}
          </a>
        </div>
      </Container>
    </section>
  )
}

export default QuickInfoSection