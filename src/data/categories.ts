import type { LocalizedText } from '../types/menu'

interface CategoryPreviewItem {
  title: LocalizedText
  description: LocalizedText
}

export const categoryPreview: CategoryPreviewItem[] = [
  {
    title: {
      en: 'Breakfast',
      de: 'Frühstück',
    },
    description: {
      en: 'Breakfast plates, Turkish-style morning favorites and small extras.',
      de: 'Frühstücksteller, türkische Morgenklassiker und kleine Extras.',
    },
  },
  {
    title: {
      en: 'Pans',
      de: 'Pfannen',
    },
    description: {
      en: 'Warm egg, sucuk and vegetable pan dishes served with fresh sides.',
      de: 'Warme Ei-, Sucuk- und Gemüsepfannen mit frischen Beilagen.',
    },
  },
  {
    title: {
      en: 'Toasties & Sandwich Rolls',
      de: 'Toastys & Belegte Brötchen',
    },
    description: {
      en: 'Crispy toasties and filled bread rolls with savory ingredients.',
      de: 'Knusprige Toastys und belegte Brötchen mit herzhaften Zutaten.',
    },
  },
  {
    title: {
      en: 'Waffles',
      de: 'Waffeln',
    },
    description: {
      en: 'Sweet waffles with fruit, chocolate, ice cream and classic toppings.',
      de: 'Süße Waffeln mit Früchten, Schokolade, Eis und klassischen Toppings.',
    },
  },
  {
    title: {
      en: 'Cakes',
      de: 'Kuchen',
    },
    description: {
      en: 'Homemade cakes that change regularly at the cake counter.',
      de: 'Hausgemachte Kuchen, die regelmäßig an der Kuchentheke wechseln.',
    },
  },
  {
    title: {
      en: 'Hot Drinks',
      de: 'Heißgetränke',
    },
    description: {
      en: 'Coffee, tea, Turkish coffee and warm comforting classics.',
      de: 'Kaffee, Tee, türkischer Kaffee und warme Klassiker.',
    },
  },
  {
    title: {
      en: 'Cold Drinks',
      de: 'Kaltgetränke',
    },
    description: {
      en: 'Soft drinks, iced teas, juices, water and refreshing bottled drinks.',
      de: 'Softdrinks, Eistees, Säfte, Wasser und erfrischende Flaschengetränke.',
    },
  },
  {
    title: {
      en: 'Beer, Sparkling Wine & Wine',
      de: 'Bier, Sekt & Wein',
    },
    description: {
      en: 'Beer, sparkling wine, wine spritzers and selected wines.',
      de: 'Bier, Sekt, Weinschorlen und ausgewählte Weine.',
    },
  },
]