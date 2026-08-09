import { translations } from '../i18n/translations'

// Bildirim e-postalarındaki alan etiketleri site dilinden bağımsız olarak
// hep Almanca — sadece kullanıcının serbest metin olarak yazdığı alanlar
// (mesaj/not/detay) olduğu gibi korunur. Her alan Web3Forms'a ayrı bir
// isimlendirilmiş alan olarak gidiyor, e-posta şablonundaki tabloyu onlar
// oluşturuyor.
const de = translations.de

export type FormField = { label: string; value: string }

function formatGermanDate(value: FormDataEntryValue | null) {
  if (typeof value !== 'string' || !value) return null
  const [year, month, day] = value.split('-')
  if (!year || !month || !day) return value
  return `${day}.${month}.${year}`
}

function buildFields(
  entries: Array<[string, FormDataEntryValue | null | undefined]>,
): FormField[] {
  return entries
    .filter((entry): entry is [string, FormDataEntryValue] => Boolean(entry[1]))
    .map(([label, value]) => ({ label, value: String(value) }))
}

export function buildContactMessage(data: FormData) {
  const f = de.contactPage.form.fields

  return {
    subject: '📩 Neue Kontaktanfrage – Cays Website',
    fields: buildFields([
      [f.firstName.label, data.get('firstName')],
      [f.lastName.label, data.get('lastName')],
      [f.email.label, data.get('email')],
      [f.subject.label, data.get('subject')],
      [f.message.label, data.get('message')],
    ]),
  }
}

export function buildTableReservationMessage(data: FormData) {
  const f = de.tableReservationPage.form.fields

  return {
    subject: '🍽️ Neue Tischreservierung – Cays Website',
    fields: buildFields([
      [f.firstName.label, data.get('firstName')],
      [f.lastName.label, data.get('lastName')],
      [f.email.label, data.get('email')],
      [f.phone.label, data.get('phone')],
      [f.date.label, formatGermanDate(data.get('date'))],
      [f.time.label, data.get('time')],
      [f.guests.label, data.get('guests')],
      [f.notes.label, data.get('notes')],
    ]),
  }
}

export function buildEventReservationMessage(data: FormData) {
  const f = de.eventReservationPage.form.fields
  const eventTypeValue = data.get('eventType')
  const eventTypeLabels: Record<string, string> = {
    birthday: f.eventType.options.birthday,
    'private-gathering': f.eventType.options.privateGathering,
    'brunch-event': f.eventType.options.brunchEvent,
    other: f.eventType.options.other,
  }
  const eventTypeLabel =
    typeof eventTypeValue === 'string' ? eventTypeLabels[eventTypeValue] : null

  return {
    subject: '🎉 Neue Veranstaltungsanfrage – Cays Website',
    fields: buildFields([
      [f.fullName.label, data.get('fullName')],
      [f.email.label, data.get('email')],
      [f.phone.label, data.get('phone')],
      [f.eventType.label, eventTypeLabel],
      [f.preferredDate.label, formatGermanDate(data.get('preferredDate'))],
      [f.preferredTime.label, data.get('preferredTime')],
      [f.guestCount.label, data.get('guestCount')],
      [f.details.label, data.get('details')],
      [f.specialRequests.label, data.get('specialRequests')],
    ]),
  }
}
