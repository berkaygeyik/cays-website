import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import ButtonLink from '../components/ButtonLink'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'

function NotFoundPage() {
  const { t } = useTranslation()

  usePageMeta(`${t.notFoundPage.title} | Cays`, t.notFoundPage.description)

  return (
    <div className="flex flex-1 flex-col justify-center bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-24 pt-28 md:pb-28 md:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2.5">
              <NazarBoncuguIcon className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]" />

              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-brand-dark)]/60">
                {t.notFoundPage.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-text)] md:text-4xl">
              {t.notFoundPage.title}
            </h1>

            <p className="mx-auto mt-4 max-w-md text-[15px] leading-7 text-black/65">
              {t.notFoundPage.description}
            </p>

            <ButtonLink to="/" className="mt-8">
              {t.notFoundPage.backHome}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default NotFoundPage
