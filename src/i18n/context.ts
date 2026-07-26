import { createContext } from 'react'
import type { translations, Language } from './translations'

type Translation = (typeof translations)[Language]

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
