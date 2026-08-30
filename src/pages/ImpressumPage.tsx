import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'

function ImpressumPage() {
  const { t } = useTranslation()

  usePageMeta(`${t.impressumPage.title} | Cays`)

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-20 pt-28 sm:pb-24 md:pb-28 md:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3">
              <NazarBoncuguIcon className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]" />

              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.24em]">
                {t.impressumPage.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
              {t.impressumPage.title}
            </h1>

            <div className="mt-10 space-y-8 text-[15px] leading-7 text-black/72">
              <div>
                <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-dark)]/70">
                  {t.impressumPage.infoHeading}
                </h2>

                <p className="mt-3">
                  <span className="font-semibold text-[var(--color-text)]">
                    {t.impressumPage.operatorLabel}:
                  </span>{' '}
                  {t.impressumPage.operatorPlaceholder}
                </p>

                <p className="mt-2">
                  <span className="font-semibold text-[var(--color-text)]">
                    {t.impressumPage.addressLabel}:
                  </span>
                  <br />
                  {t.footer.address.street}
                  <br />
                  {t.footer.address.city}, {t.footer.address.district}
                </p>
              </div>

              <div>
                <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-dark)]/70">
                  {t.impressumPage.contactHeading}
                </h2>

                <p className="mt-3">
                  {t.impressumPage.phoneLabel}: {t.impressumPage.phonePlaceholder}
                  <br />
                  {t.impressumPage.emailLabel}: hello@cays-cafe.com
                </p>
              </div>

              <div>
                <p>
                  <span className="font-semibold text-[var(--color-text)]">
                    {t.impressumPage.vatLabel}:
                  </span>{' '}
                  {t.impressumPage.vatPlaceholder}
                </p>

                <p className="mt-2">
                  <span className="font-semibold text-[var(--color-text)]">
                    {t.impressumPage.registerLabel}:
                  </span>{' '}
                  {t.impressumPage.registerPlaceholder}
                </p>
              </div>

              <div>
                <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-dark)]/70">
                  {t.impressumPage.responsibleHeading}
                </h2>

                <p className="mt-3">{t.impressumPage.responsiblePlaceholder}</p>
              </div>

              <div>
                <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-dark)]/70">
                  {t.impressumPage.disputeHeading}
                </h2>

                <p className="mt-3">
                  {t.impressumPage.disputeText}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noreferrer"
                    className="!text-[var(--color-brand-dark)] underline"
                  >
                    {t.impressumPage.disputeLinkLabel}
                  </a>
                  {t.impressumPage.disputeTextEnd}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ImpressumPage
