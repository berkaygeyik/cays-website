import { useState, type SubmitEvent } from 'react'
import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'
import { whatsappContactHref } from '../utils/whatsapp'
import { buildTableReservationMessage } from '../utils/formMessages'
import { submitToWeb3Forms } from '../utils/web3forms'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

function TableReservationPage() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<SubmitStatus>('idle')

  usePageMeta(
    `${t.tableReservationPage.hero.title} | Cays`,
    t.tableReservationPage.hero.description,
  )

  const heroTags = [
    t.tableReservationPage.hero.tags.breakfast,
    t.tableReservationPage.hero.tags.coffee,
    t.tableReservationPage.hero.tags.smallGroups,
  ]

  const guestOptions = ['1–2', '3–4', '5–6', '7–8', '9+']

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const { subject, fields } = buildTableReservationMessage(data)
    const replyTo = data.get('email')

    setStatus('sending')

    const success = await submitToWeb3Forms({
      subject,
      fields,
      replyTo: typeof replyTo === 'string' ? replyTo : undefined,
    })

    if (success) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
    }
  }

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-20 pt-28 sm:pb-24 md:pb-28 md:pt-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-none">
              <div className="flex items-center gap-3">
                <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />

                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.24em]">
                  {t.tableReservationPage.hero.eyebrow}
                </p>
              </div>

              <h1 className="mt-4 max-w-[25ch] text-[2rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-[2.7rem] md:text-[3.05rem]">
                {t.tableReservationPage.hero.title}
              </h1>

              <p className="mt-5 max-w-4xl text-[0.96rem] leading-7 text-black/62 sm:text-[1rem] md:text-[1.05rem] md:leading-8">
                {t.tableReservationPage.hero.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.78rem] font-medium tracking-[0.02em] text-black/48 sm:gap-x-6 sm:text-[0.82rem]">
                {heroTags.map((tag, index) => (
                  <div key={tag} className="flex items-center gap-x-4 sm:gap-x-6">
                    <span>{tag}</span>
                    {index !== heroTags.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)]/70" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-6">
              <div className="rounded-[26px] border border-[#e6dbcf] bg-white/80 p-5 shadow-[0_14px_34px_rgba(0,0,0,0.03)] sm:rounded-[32px] sm:p-7 md:p-9">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <NazarBoncuguIcon className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]" />

                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.18em]">
                      {t.tableReservationPage.form.eyebrow}
                    </p>
                  </div>

                  <h2 className="mt-4 text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-text)] sm:text-[1.65rem]">
                    {t.tableReservationPage.form.title}
                  </h2>

                  <p className="mt-4 text-[14px] leading-7 text-black/60 sm:text-[15px] sm:leading-8">
                    {t.tableReservationPage.form.description}
                  </p>
                </div>

                <form
                  className="mt-7 space-y-5 sm:mt-8"
                  onSubmit={handleSubmit}
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block" htmlFor="firstName">
                      <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                        {t.tableReservationPage.form.fields.firstName.label}
                        <span className="text-[var(--color-brand-dark)]/50">
                          {' '}
                          *
                        </span>
                      </span>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder={
                          t.tableReservationPage.form.fields.firstName
                            .placeholder
                        }
                        required
                        className="w-full rounded-[15px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[16px]"
                      />
                    </label>

                    <label className="block" htmlFor="lastName">
                      <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                        {t.tableReservationPage.form.fields.lastName.label}
                      </span>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder={
                          t.tableReservationPage.form.fields.lastName
                            .placeholder
                        }
                        className="w-full rounded-[15px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[16px]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block" htmlFor="email">
                      <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                        {t.tableReservationPage.form.fields.email.label}
                        <span className="text-[var(--color-brand-dark)]/50">
                          {' '}
                          *
                        </span>
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={
                          t.tableReservationPage.form.fields.email.placeholder
                        }
                        required
                        className="w-full rounded-[15px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[16px]"
                      />
                    </label>

                    <label className="block" htmlFor="phone">
                      <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                        {t.tableReservationPage.form.fields.phone.label}
                        <span className="text-[var(--color-brand-dark)]/50">
                          {' '}
                          *
                        </span>
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={
                          t.tableReservationPage.form.fields.phone.placeholder
                        }
                        required
                        className="w-full rounded-[15px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[16px]"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <label className="block" htmlFor="date">
                      <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                        {t.tableReservationPage.form.fields.date.label}
                        <span className="text-[var(--color-brand-dark)]/50">
                          {' '}
                          *
                        </span>
                      </span>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        required
                        className="w-full rounded-[15px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[16px]"
                      />
                    </label>

                    <label className="block" htmlFor="time">
                      <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                        {t.tableReservationPage.form.fields.time.label}
                        <span className="text-[var(--color-brand-dark)]/50">
                          {' '}
                          *
                        </span>
                      </span>
                      <input
                        id="time"
                        name="time"
                        type="time"
                        required
                        className="w-full rounded-[15px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[16px]"
                      />
                    </label>

                    <label className="block" htmlFor="guests">
                      <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                        {t.tableReservationPage.form.fields.guests.label}
                        <span className="text-[var(--color-brand-dark)]/50">
                          {' '}
                          *
                        </span>
                      </span>
                      <select
                        id="guests"
                        name="guests"
                        defaultValue=""
                        required
                        className="w-full appearance-none rounded-[15px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[16px]"
                      >
                        <option value="" disabled>
                          {t.tableReservationPage.form.fields.guests.placeholder}
                        </option>

                        {guestOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block" htmlFor="notes">
                    <span className="mb-2.5 block text-[0.78rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.8rem]">
                      {t.tableReservationPage.form.fields.notes.label}
                    </span>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={5}
                      placeholder={
                        t.tableReservationPage.form.fields.notes.placeholder
                      }
                      className="w-full resize-none rounded-[17px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-4 text-[15px] leading-7 text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[18px] md:rows-6"
                    />
                  </label>

                  <div className="flex flex-col items-end gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="inline-flex min-h-[50px] w-full items-center justify-center rounded-[15px] bg-[var(--color-brand-dark)] px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_26px_rgba(0,0,0,0.11)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto sm:min-w-[185px] sm:text-[0.8rem]"
                    >
                      {status === 'sending'
                        ? t.common.formStatus.sending
                        : t.tableReservationPage.form.submit}
                    </button>

                    {status === 'success' && (
                      <p className="text-[0.86rem] font-medium text-[#2f8f57]">
                        {t.common.formStatus.success}
                      </p>
                    )}

                    {status === 'error' && (
                      <p className="text-[0.86rem] font-medium text-[#c1473f]">
                        {t.common.formStatus.error}
                      </p>
                    )}
                  </div>
                </form>
              </div>

              <aside className="grid gap-4 sm:grid-cols-2 lg:block lg:space-y-4">
                <article className="rounded-[24px] border border-[#e6dbcf] bg-white/78 p-5 shadow-[0_10px_26px_rgba(0,0,0,0.025)] sm:rounded-[28px] sm:p-6">
                  <div className="flex items-center gap-3">
                    <NazarBoncuguIcon className="h-[21px] w-[21px] sm:h-[24px] sm:w-[24px]" />

                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/52 sm:text-[0.74rem] sm:tracking-[0.18em]">
                      {t.tableReservationPage.sidebar.goodToKnow.title}
                    </p>
                  </div>

                  <div className="mt-5 space-y-4 text-[0.92rem] leading-7 text-black/66 sm:text-[0.95rem]">
                    <p>{t.tableReservationPage.sidebar.goodToKnow.first}</p>
                    <div className="h-px w-full bg-[#eee4d8]" />
                    <p>{t.tableReservationPage.sidebar.goodToKnow.second}</p>
                  </div>
                </article>

                <article className="rounded-[24px] border border-[#e6dbcf] bg-[#f3ebe0] p-5 shadow-[0_10px_26px_rgba(0,0,0,0.025)] sm:rounded-[28px] sm:p-6">
                  <div className="flex items-center gap-3">
                    <NazarBoncuguIcon className="h-[21px] w-[21px] sm:h-[24px] sm:w-[24px]" />

                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/52 sm:text-[0.74rem] sm:tracking-[0.18em]">
                      {t.tableReservationPage.sidebar.directContact.title}
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    <a
                      href={whatsappContactHref}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-[16px] border border-[#ddd0bf] bg-white/72 px-4 py-3 transition-all duration-300 hover:border-[#d2bea6] hover:bg-white sm:rounded-[18px]"
                    >
                      <span className="text-[0.92rem] font-semibold text-[var(--color-text)] sm:text-[0.95rem]">
                        WhatsApp
                      </span>
                      <span className="text-[1rem] text-[var(--color-brand-dark)] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              </aside>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default TableReservationPage