import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Language } from './translations'
import { LanguageContext, type LanguageContextValue } from './context'

interface LanguageProviderProps {
  children: ReactNode
}

function getInitialLanguage(): Language {
  const savedLanguage = localStorage.getItem('cays-language')

  if (savedLanguage === 'de' || savedLanguage === 'en') {
    return savedLanguage
  }

  return 'en'
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    localStorage.setItem('cays-language', nextLanguage)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}