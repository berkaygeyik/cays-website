import type { Language } from '../i18n/translations'

export type LocalizedText = Record<Language, string>

export interface MenuItem {
  name: LocalizedText
  price: number
  description: LocalizedText
}

export interface MenuSection {
  category: LocalizedText
  slug: string
  description: LocalizedText
  image: string
  images?: string[]
  items: MenuItem[]
}