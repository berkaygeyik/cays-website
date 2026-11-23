import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'

function PrivacyPage() {
  const { t } = useTranslation()

  usePageMeta(`${t.privacyPage.title} | Cays`)

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-20 pt-28 sm:pb-24 md:pb-28 md:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3">
              <NazarBoncuguIcon className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]" />

              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.24em]">
                {t.privacyPage.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
              {t.privacyPage.title}
            </h1>

            <p className="mt-3 text-sm text-black/50">{t.privacyPage.updated}</p>

            <div className="mt-10 space-y-8 text-[15px] leading-7 text-black/72">
              {t.privacyPage.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-brand-dark)]/70">
                    {section.heading}
                  </h2>

                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-3">
                      {paragraph}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default PrivacyPage
