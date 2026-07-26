import type { SubmitEvent } from 'react'
import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'

function EventReservationPage() {
  const { t } = useTranslation()

  usePageMeta(
    `${t.eventReservationPage.hero.title} | Cays`,
    t.eventReservationPage.hero.description,
  )

  // TODO: Backend/e-posta ya da WhatsApp entegrasyonu netleşince buraya gerçek
  // bir gönderim akışı bağlanacak. Şimdilik sadece sayfanın yeniden yüklenip
  // girilen verilerin kaybolmasını engelliyoruz.
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  const heroTags = [
    t.eventReservationPage.hero.tags.birthdays,
    t.eventReservationPage.hero.tags.privateGatherings,
    t.eventReservationPage.hero.tags.specialOccasions,
  ]

  const eventTypeOptions = [
    {
      value: 'birthday',
      label: t.eventReservationPage.form.fields.eventType.options.birthday,
    },
    {
      value: 'private-gathering',
      label:
        t.eventReservationPage.form.fields.eventType.options.privateGathering,
    },
    {
      value: 'brunch-event',
      label: t.eventReservationPage.form.fields.eventType.options.brunchEvent,
    },
    {
      value: 'other',
      label: t.eventReservationPage.form.fields.eventType.options.other,
    },
  ]

  const suitableItems = [
    t.eventReservationPage.sidebar.suitable.items.privateBreakfasts,
    t.eventReservationPage.sidebar.suitable.items.birthdayGatherings,
    t.eventReservationPage.sidebar.suitable.items.smallCelebrations,
  ]

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-24 pt-28 md:pb-28 md:pt-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-none">
              <div className="flex items-center gap-3">
                <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />

                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.24em]">
                  {t.eventReservationPage.hero.eyebrow}
                </p>
              </div>

              <h1 className="mt-4 max-w-[25ch] text-[2.2rem] font-semibold leading-[1.03] tracking-[-0.035em] sm:text-[2.7rem] md:text-[3.05rem]">
                {t.eventReservationPage.hero.title}
              </h1>

              <p className="mt-5 max-w-4xl text-[1rem] leading-8 text-black/62 md:text-[1.05rem]">
                {t.eventReservationPage.hero.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.82rem] font-medium tracking-[0.02em] text-black/48">
                {heroTags.map((tag, index) => (
                  <div key={tag} className="flex items-center gap-x-6">
                    <span>{tag}</span>
                    {index !== heroTags.length - 1 && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)]/70" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-6">
              <div className="rounded-[32px] border border-[#e6dbcf] bg-white/80 p-7 shadow-[0_14px_34px_rgba(0,0,0,0.03)] md:p-9">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <NazarBoncuguIcon className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]" />

                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.18em]">
                      {t.eventReservationPage.form.eyebrow}
                    </p>
                  </div>

                  <h2 className="mt-4 text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-text)]">
                    {t.eventReservationPage.form.title}
                  </h2>

                  <p className="mt-4 text-[15px] leading-8 text-black/60">
                    {t.eventReservationPage.form.description}
                  </p>
                </div>

                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block" htmlFor="fullName">
                      <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                        {t.eventReservationPage.form.fields.fullName.label}
                      </span>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder={
                          t.eventReservationPage.form.fields.fullName
                            .placeholder
                        }
                        className="w-full rounded-[16px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                      />
                    </label>

                    <label className="block" htmlFor="email">
                      <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                        {t.eventReservationPage.form.fields.email.label}
                      </span>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={
                          t.eventReservationPage.form.fields.email.placeholder
                        }
                        className="w-full rounded-[16px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block" htmlFor="phone">
                      <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                        {t.eventReservationPage.form.fields.phone.label}
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={
                          t.eventReservationPage.form.fields.phone.placeholder
                        }
                        className="w-full rounded-[16px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                      />
                    </label>

                    <label className="block" htmlFor="eventType">
                      <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                        {t.eventReservationPage.form.fields.eventType.label}
                      </span>
                      <select
                        id="eventType"
                        name="eventType"
                        defaultValue=""
                        className="w-full appearance-none rounded-[16px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                      >
                        <option value="" disabled>
                          {
                            t.eventReservationPage.form.fields.eventType
                              .placeholder
                          }
                        </option>

                        {eventTypeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">
                    <label className="block" htmlFor="preferredDate">
                      <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                        {t.eventReservationPage.form.fields.preferredDate.label}
                      </span>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        className="w-full rounded-[16px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                      />
                    </label>

                    <label className="block" htmlFor="preferredTime">
                      <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                        {t.eventReservationPage.form.fields.preferredTime.label}
                      </span>
                      <input
                        id="preferredTime"
                        name="preferredTime"
                        type="time"
                        className="w-full rounded-[16px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                      />
                    </label>

                    <label className="block" htmlFor="guestCount">
                      <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                        {t.eventReservationPage.form.fields.guestCount.label}
                      </span>
                      <input
                        id="guestCount"
                        name="guestCount"
                        type="number"
                        min="1"
                        placeholder={
                          t.eventReservationPage.form.fields.guestCount
                            .placeholder
                        }
                        className="w-full rounded-[16px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                      />
                    </label>
                  </div>

                  <label className="block" htmlFor="details">
                    <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                      {t.eventReservationPage.form.fields.details.label}
                    </span>
                    <textarea
                      id="details"
                      name="details"
                      rows={6}
                      placeholder={
                        t.eventReservationPage.form.fields.details.placeholder
                      }
                      className="w-full resize-none rounded-[18px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-4 text-[15px] leading-7 text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                    />
                  </label>

                  <label className="block" htmlFor="specialRequests">
                    <span className="mb-2.5 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72">
                      {t.eventReservationPage.form.fields.specialRequests.label}
                    </span>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={5}
                      placeholder={
                        t.eventReservationPage.form.fields.specialRequests
                          .placeholder
                      }
                      className="w-full resize-none rounded-[18px] border border-[#e4d9cc] bg-[#fcf8f3] px-4 py-4 text-[15px] leading-7 text-[var(--color-text)] outline-none transition duration-200 placeholder:text-black/34 focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45"
                    />
                  </label>

                  <div className="flex justify-end pt-3">
                    <button
                      type="submit"
                      className="inline-flex min-w-[185px] items-center justify-center rounded-[15px] bg-[var(--color-brand-dark)] px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_14px_26px_rgba(0,0,0,0.11)]"
                    >
                      {t.eventReservationPage.form.submit}
                    </button>
                  </div>
                </form>
              </div>

              <aside className="space-y-4">
                <article className="rounded-[28px] border border-[#e6dbcf] bg-white/78 p-6 shadow-[0_10px_26px_rgba(0,0,0,0.025)]">
                  <div className="flex items-center gap-3">
                    <NazarBoncuguIcon className="h-[21px] w-[21px] sm:h-[24px] sm:w-[24px]" />

                    <p className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-dark)]/52">
                      {t.eventReservationPage.sidebar.suitable.title}
                    </p>
                  </div>

                  <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-black/66">
                    {suitableItems.map((item, index) => (
                      <div key={item}>
                        <p>{item}</p>
                        {index !== suitableItems.length - 1 && (
                          <div className="mt-4 h-px w-full bg-[#eee4d8]" />
                        )}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[28px] border border-[#e6dbcf] bg-[#f3ebe0] p-6 shadow-[0_10px_26px_rgba(0,0,0,0.025)]">
                  <div className="flex items-center gap-3">
                    <NazarBoncuguIcon className="h-[21px] w-[21px] sm:h-[24px] sm:w-[24px]" />

                    <p className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand-dark)]/52">
                      {t.eventReservationPage.sidebar.directContact.title}
                    </p>
                  </div>

                  <div className="mt-5 space-y-3">
                    <a
                      href="https://wa.me/4976217707722"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-[18px] border border-[#ddd0bf] bg-white/72 px-4 py-3 transition-all duration-300 hover:border-[#d2bea6] hover:bg-white"
                    >
                      <span className="text-[0.95rem] font-semibold text-[var(--color-text)]">
                        WhatsApp
                      </span>
                      <span className="text-[1rem] text-[var(--color-brand-dark)] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>

                    <a
                      href="tel:+4976217707722"
                      className="group flex items-center justify-between rounded-[18px] border border-[#ddd0bf] bg-white/72 px-4 py-3 transition-all duration-300 hover:border-[#d2bea6] hover:bg-white"
                    >
                      <span className="text-[0.95rem] font-semibold text-[var(--color-text)]">
                        +49 7621 7707722
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

export default EventReservationPage