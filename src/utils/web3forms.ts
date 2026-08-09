import type { FormField } from './formMessages'

const WEB3FORMS_ACCESS_KEY = '977323a5-db96-4b25-bd5f-4a0a73f1aade'

type SubmitPayload = {
  subject: string
  fields: FormField[]
  replyTo?: string
}

export async function submitToWeb3Forms({
  subject,
  fields,
  replyTo,
}: SubmitPayload) {
  try {
    const body = new URLSearchParams()
    body.set('access_key', WEB3FORMS_ACCESS_KEY)
    body.set('subject', subject)
    body.set('from_name', 'Cays Website')
    if (replyTo) body.set('replyto', replyTo)
    for (const { label, value } of fields) {
      body.set(label, value)
    }

    // application/x-www-form-urlencoded (set automatically by the browser
    // for URLSearchParams bodies) avoids a CORS preflight the same way
    // multipart/form-data does, but percent-encodes non-ASCII characters
    // unambiguously — Web3Forms' multipart parser was mangling ä/ü/ş/ğ etc.
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
    })

    if (!response.ok) return false

    const result = await response.json()
    return result.success === true
  } catch {
    return false
  }
}
