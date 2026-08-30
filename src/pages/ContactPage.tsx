import { useState, type SubmitEvent } from 'react'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FiClock, FiMapPin } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import Container from '../components/Container'
import NazarBoncuguIcon from '../components/NazarBoncuguIcon'
import { useTranslation } from '../i18n/useTranslation'
import { usePageMeta } from '../hooks/usePageMeta'
import { whatsappContactHref } from '../utils/whatsapp'
import { buildContactMessage } from '../utils/formMessages'
import { submitToWeb3Forms } from '../utils/web3forms'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

function ContactPage() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<SubmitStatus>('idle')

  usePageMeta(`${t.contactPage.hero.title} | Cays`, t.contactPage.hero.description)

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const data = new FormData(form)
    const { subject, fields } = buildContactMessage(data)
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

  const contactActions = [
    {
      href: whatsappContactHref,
      label: t.contactPage.actions.whatsapp,
      icon: <FaWhatsapp />,
      external: true,
      buttonClassName:
        'border-[#bddfc7] text-[#2f8f57] hover:border-[#9fcdad] hover:bg-[#fbfffc]',
      iconClassName: 'bg-[#e8f7ee] text-[#2f8f57] group-hover:bg-[#dcf2e4]',
    },
    {
      href: 'https://instagram.com/c_a_y_s_',
      label: t.contactPage.actions.instagram,
      icon: <FaInstagram />,
      external: true,
      buttonClassName:
        'border-[#dcc9e0] text-[#8b4d93] hover:border-[#caaed0] hover:bg-[#fffafe]',
      iconClassName: 'bg-[#f5edf7] text-[#8b4d93] group-hover:bg-[#eddff0]',
    },
    {
      href: 'mailto:hello@cays-cafe.com',
      label: t.contactPage.actions.email,
      icon: <MdOutlineEmail />,
      external: false,
      buttonClassName:
        'border-[#ccd5e7] text-[#516f9c] hover:border-[#b5c4df] hover:bg-[#fbfcff]',
      iconClassName: 'bg-[#eef3fb] text-[#516f9c] group-hover:bg-[#e3ebf8]',
    },
  ]

  const formFields = [
    {
      id: 'firstName',
      name: 'firstName',
      label: t.contactPage.form.fields.firstName.label,
      type: 'text',
      placeholder: t.contactPage.form.fields.firstName.placeholder,
      required: true,
    },
    {
      id: 'lastName',
      name: 'lastName',
      label: t.contactPage.form.fields.lastName.label,
      type: 'text',
      placeholder: t.contactPage.form.fields.lastName.placeholder,
      required: false,
    },
    {
      id: 'email',
      name: 'email',
      label: t.contactPage.form.fields.email.label,
      type: 'email',
      placeholder: t.contactPage.form.fields.email.placeholder,
      required: true,
    },
    {
      id: 'subject',
      name: 'subject',
      label: t.contactPage.form.fields.subject.label,
      type: 'text',
      placeholder: t.contactPage.form.fields.subject.placeholder,
      required: false,
    },
  ] as const

  const infoCards = [
    {
      title: t.contactPage.info.address.title,
      icon: <FiMapPin />,
      content: (
        <div className="space-y-4">
          <div className="min-h-[6.5rem]">
            <p className="text-[0.64rem] font-bold uppercase tracking-wider text-black/40 sm:text-[0.68rem]">
              {t.contactPage.info.address.locationLabel}
            </p>

            <p className="mt-1.5 text-[0.98rem] font-semibold text-[var(--color-text)] sm:text-[1.02rem]">
              Schopfheimer Str. 1
            </p>

            <p className="mt-1 text-[0.9rem] leading-6 text-black/62 sm:text-[0.94rem]">
              79541 Lörrach, Brombach · Germany
            </p>
          </div>

          <div className="h-px w-full bg-[#efe6db]" />

          <div>
            <a
              href="https://maps.google.com/?q=Schopfheimer+Str.+1+79541+Lörrach"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[0.74rem] font-bold uppercase tracking-widest text-[var(--color-brand-dark)] sm:text-[0.78rem]"
            >
              <span>{t.contactPage.info.address.directions}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      ),
    },
    {
      title: t.contactPage.info.hours.title,
      icon: <FiClock />,
      content: (
        <div className="space-y-4">
          <div className="min-h-[6.5rem]">
            <p className="text-[0.64rem] font-bold uppercase tracking-wider text-black/40 sm:text-[0.68rem]">
              {t.contactPage.info.hours.regularLabel}
            </p>

            <p className="mt-1.5 text-[0.98rem] font-semibold text-[var(--color-text)] sm:text-[1.02rem]">
              {t.contactPage.info.hours.regularHours}
            </p>
          </div>

          <div className="h-px w-full bg-[#efe6db]" />

          <div>
            <p className="text-[0.64rem] font-bold uppercase tracking-wider text-black/40 sm:text-[0.68rem]">
              {t.contactPage.info.hours.summerLabel}
            </p>

            <p className="mt-1.5 text-[0.98rem] font-semibold text-[var(--color-text)] sm:text-[1.02rem]">
              {t.contactPage.info.hours.summerHours}
            </p>
          </div>
        </div>
      ),
    },
    {
      title: t.contactPage.info.contact.title,
      icon: <FaInstagram />,
      content: (
        <div className="space-y-4">
          <div className="min-h-[6.5rem]">
            <p className="text-[0.64rem] font-bold uppercase tracking-wider text-black/40 sm:text-[0.68rem]">
              {t.contactPage.info.contact.instagramLabel}
            </p>

            <a
              href="https://instagram.com/c_a_y_s_"
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 block text-[0.98rem] font-semibold text-[var(--color-text)] transition-colors hover:text-[var(--color-brand-dark)] sm:text-[1.02rem]"
            >
              @c_a_y_s_
            </a>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-[#f7f3ee] text-[var(--color-text)]">
      <section className="pb-20 pt-28 sm:pb-24 md:pb-28 md:pt-32">
        <Container>
          <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,1.12fr)_280px] lg:gap-14">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <NazarBoncuguIcon className="h-[24px] w-[24px] sm:h-[28px] sm:w-[28px]" />

                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.24em]">
                  {t.contactPage.hero.eyebrow}
                </p>
              </div>

              <h1 className="mt-4 text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[2.6rem] md:text-[2.95rem]">
                {t.contactPage.hero.title}
              </h1>

              <p className="mt-5 max-w-3xl text-[0.96rem] leading-7 text-black/62 sm:text-[1.02rem] md:text-[1.06rem] md:leading-8">
                {t.contactPage.hero.description}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3 text-[0.78rem] font-medium tracking-[0.02em] text-black/48 sm:gap-x-6 sm:text-[0.82rem]">
                <span>{t.contactPage.hero.tags.questions}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)]/70" />
                <span>{t.contactPage.hero.tags.reservations}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-gold)]/70" />
                <span>{t.contactPage.hero.tags.events}</span>
              </div>
            </div>

            <div className="lg:pt-[3.2rem]">
              <div className="grid gap-3 sm:grid-cols-3 lg:flex lg:flex-col">
                {contactActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noreferrer' : undefined}
                    className={`group inline-flex w-full items-center gap-3 rounded-[16px] border bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(0,0,0,0.04)] ${action.buttonClassName}`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] text-[1.15rem] transition-colors duration-300 ${action.iconClassName}`}
                    >
                      {action.icon}
                    </span>

                    <span className="text-[0.88rem] font-semibold tracking-[0.01em] sm:text-[0.92rem]">
                      {action.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-12">
            <div className="rounded-[26px] border border-[#e3d8ca] bg-white/74 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.03)] sm:rounded-[34px] sm:p-7 md:p-9">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3">
                  <NazarBoncuguIcon className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]" />

                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.18em]">
                    {t.contactPage.form.eyebrow}
                  </p>
                </div>

                <h2 className="mt-4 text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--color-text)] sm:text-[1.65rem]">
                  {t.contactPage.form.title}
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-black/60 sm:text-[15px] sm:leading-8">
                  {t.contactPage.form.description}
                </p>
              </div>

              <form className="mt-7 space-y-5 sm:mt-8" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  {formFields.map((field) => (
                    <label key={field.id} htmlFor={field.id} className="block">
                      <span className="mb-2 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.82rem]">
                        {field.label}
                        {field.required && (
                          <span className="text-[var(--color-brand-dark)]/50">
                            {' '}
                            *
                          </span>
                        )}
                      </span>

                      <input
                        id={field.id}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        className="w-full rounded-[16px] border border-[#e2d7ca] bg-[#fcf8f3] px-4 py-3.5 text-[15px] text-[var(--color-text)] outline-none transition focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[18px]"
                      />
                    </label>
                  ))}
                </div>

                <label htmlFor="message" className="block">
                  <span className="mb-2 block text-[0.8rem] font-semibold tracking-[0.04em] text-[var(--color-text)]/72 sm:text-[0.82rem]">
                    {t.contactPage.form.fields.message.label}
                    <span className="text-[var(--color-brand-dark)]/50"> *</span>
                  </span>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder={t.contactPage.form.fields.message.placeholder}
                    className="w-full resize-none rounded-[18px] border border-[#e2d7ca] bg-[#fcf8f3] px-4 py-4 text-[15px] leading-7 text-[var(--color-text)] outline-none transition focus:border-[var(--color-brand-dark)]/35 focus:bg-white focus:ring-2 focus:ring-[var(--color-accent-blue)]/45 sm:rounded-[22px] md:rows-7"
                  />
                </label>

                <div className="flex flex-col items-end gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex min-h-[50px] w-full items-center justify-center rounded-[16px] bg-[var(--color-brand-dark)] px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.09em] text-white shadow-[0_10px_24px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 hover:shadow-[0_16px_30px_rgba(0,0,0,0.12)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto sm:min-w-[180px] sm:text-[0.82rem] sm:tracking-[0.1em]"
                  >
                    {status === 'sending'
                      ? t.common.formStatus.sending
                      : t.contactPage.form.submit}
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
          </div>

          <div className="mt-10 grid grid-cols-1 items-stretch gap-4 sm:mt-12 md:grid-cols-3 md:gap-5">
            {infoCards.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-[24px] border border-[#e8ddd0] bg-white/76 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.022)] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,0,0,0.04)] sm:rounded-[30px] sm:p-7 lg:p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#f6f1ea] text-[1.1rem] text-[var(--color-brand-dark)]/72 sm:h-12 sm:w-12 sm:rounded-[16px] sm:text-[1.2rem]">
                    {card.icon}
                  </span>

                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/52 sm:text-[0.74rem] sm:tracking-[0.18em]">
                    {card.title}
                  </p>
                </div>

                <div className="mt-6 flex flex-grow flex-col sm:mt-7">
                  {card.content}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[26px] border border-[#e3d8ca] bg-white/65 shadow-[0_14px_34px_rgba(0,0,0,0.025)] sm:rounded-[34px]">
            <div className="px-5 pt-5 sm:px-6 sm:pt-6 md:px-8 md:pt-8">
              <div className="flex items-center gap-3">
                <NazarBoncuguIcon className="h-[22px] w-[22px] sm:h-[25px] sm:w-[25px]" />

                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-dark)]/58 sm:text-[0.72rem] sm:tracking-[0.18em]">
                  {t.contactPage.map.eyebrow}
                </p>
              </div>
            </div>

            <div className="mt-5 h-[280px] w-full sm:mt-6 sm:h-[340px] md:h-[400px]">
              <iframe
                title={t.contactPage.map.title}
                src="https://www.google.com/maps?q=Schopfheimer+Str.+1,+79541+L%C3%B6rrach,+Germany&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage