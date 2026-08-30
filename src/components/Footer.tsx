import { Link } from 'react-router-dom'
import NazarBoncuguIcon from './NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="border-t"
      style={{
        background:
          'linear-gradient(180deg, var(--color-brand-dark) 0%, #5f4f3b 100%)',
        borderColor: 'rgba(255,255,255,0.12)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr] lg:gap-8">
          <div className="lg:pr-6">
            <div className="mb-4 flex items-center gap-3">
              <NazarBoncuguIcon className="h-[20px] w-[20px]" />
              <h3 className="text-[1.35rem] font-semibold leading-5 tracking-[-0.01em] text-[var(--color-text-on-dark)]">
                Cays
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[var(--color-text-on-dark-soft)]">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-on-dark)]">
              {t.footer.addressTitle}
            </h4>

            <p className="text-sm leading-7 text-[var(--color-text-on-dark-soft)]">
              {t.footer.address.street}
              <br />
              {t.footer.address.city}
              <br />
              {t.footer.address.district}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-on-dark)]">
              {t.footer.hoursTitle}
            </h4>

            <p className="text-sm leading-7 text-[var(--color-text-on-dark-soft)]">
              {t.footer.hours.days}
              <br />
              {t.footer.hours.winter}
              <br />
              {t.footer.hours.summer}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-text-on-dark)]">
              {t.footer.contactTitle}
            </h4>

            <div className="text-sm leading-7 text-[var(--color-text-on-dark-soft)]">
              <a
                href="https://www.instagram.com/c_a_y_s_/"
                target="_blank"
                rel="noreferrer"
                className="block transition-colors duration-200 hover:text-[var(--color-text-on-dark)]"
              >
                @c_a_y_s_
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm md:flex-row md:items-center md:justify-between"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <p className="text-[var(--color-text-on-dark-soft)]">
            © {currentYear} Cays. {t.footer.copyright}
          </p>

          <p className="text-[var(--color-text-on-dark-soft)]">
            {t.footer.tagline}
          </p>

          <Link
            to="/impressum"
            className="text-[var(--color-text-on-dark-soft)] transition-colors duration-200 hover:text-[var(--color-text-on-dark)]"
          >
            {t.impressumPage.title}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer