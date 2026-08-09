import type { MenuSection } from '../types/menu'

// NOT: Bazı kategorilerdeki görseller self-hosted, Unsplash lisanslı
// stok fotoğraflardır (gerçek Cays fotoğrafları değil) — kalıcı
// kullanım için onaylanmıştır (bkz. public/images/menu).
const breakfastImage = '/images/menu/breakfast.webp'
const breakfastImage2 = '/images/menu/breakfast-condiments-spread.jpg'
const breakfastImage3 = '/images/menu/breakfast-turkish-spread-2.jpg'

const pfannenImage = '/images/menu/pfannen-sucuk-egg.jpg'
const pfannenImage2 = '/images/menu/pfannen-baked-eggs-feta.jpg'
const pfannenImage3 = '/images/menu/pfannen-menemen-sucuk-plate.jpg'

const toastImage = '/images/menu/toast-sucuk-cheese-bowl.jpg'
const toastImage2 = '/images/menu/toast-plate.jpg'
const toastImage3 = '/images/menu/toast-cheese-pull.jpg'

const waffleImage = '/images/menu/waffles.webp'
const waffleImage2 = '/images/menu/waffle-strawberry-chocolate.webp'
const waffleImage3 = '/images/menu/waffle-nutella-blueberry.webp'

const cakeImage = '/images/menu/cakes.webp'
const cakeImage2 = '/images/menu/cake-cherry-pie-coffee.jpg'
const cakeImage3 = '/images/menu/cake-croissant-close-up.jpg'

const hotDrinksImage = '/images/menu/hot-drinks-turkish-coffee.jpg'
const hotDrinksImage2 = '/images/menu/hot-drinks-cappuccino.jpg'
const hotDrinksImage3 = '/images/menu/hot-drinks.webp'

const coldDrinksImage = '/images/menu/cold-drinks-iced-tea-lemon-mint.jpg'
const coldDrinksImage2 = '/images/menu/cold-drinks-iced-coffee.jpg'
const coldDrinksImage3 = '/images/menu/cold-drinks-orange-juice.jpg'

const alcoholImage = '/images/menu/alcohol-cocktail-1.webp'
const alcoholImage2 = '/images/menu/alcohol-beer-glass-indoor.jpg'
const alcoholImage3 = '/images/menu/alcohol-red-wine-pour.jpg'

export const menuData: MenuSection[] = [
  {
    category: {
      en: 'Breakfast',
      de: 'Frühstück',
    },
    slug: 'breakfast',
    description: {
      en: 'Breakfast plates, Turkish-style morning favorites and small extras.',
      de: 'Frühstücksteller, türkische Morgenklassiker und kleine Extras.',
    },
    image: breakfastImage,
    images: [breakfastImage, breakfastImage2, breakfastImage3],
    items: [
      {
        name: {
          en: 'Sweet Breakfast',
          de: 'Süss',
        },
        price: 7.8,
        description: {
          en: '1 bread roll, butter, jam, honey, coffee or tea.',
          de: '1x Brötchen, Butter, Marmelade, Honig, Kaffee oder Tee.',
        },
      },
      {
        name: {
          en: 'Hearty Breakfast',
          de: 'Deftig',
        },
        price: 8.5,
        description: {
          en: '1 bread roll, butter, cheese, cold cuts of choice, tomato, cucumber, olives, coffee or tea.',
          de: '1x Brötchen, Butter, Käse, Wurst nach Wahl, Tomate, Gurke, Oliven, Kaffee oder Tee.',
        },
      },
      {
        name: {
          en: 'Vegetarian Breakfast',
          de: 'Vegetarisch',
        },
        price: 12.8,
        description: {
          en: '2 bread rolls, butter, jam, honey, four cheeses, tomato, cucumber, olives, fried vegetables, coffee or tea.',
          de: '2x Brötchen, Butter, Marmelade, Honig, viererlei Käse, Tomate, Gurke, Oliven, gebratenes Gemüse, Kaffee oder Tee.',
        },
      },
      {
        name: {
          en: 'Cays Breakfast',
          de: 'Cays Breakfast',
        },
        price: 17.5,
        description: {
          en: '2 bread rolls, butter, jam, honey, Nutella, four cheeses, tomato paste, olives, pastırma, Turkish lyoner, vegetables, tomatoes, cucumber, one pan of choice and Turkish tea.',
          de: '2x Brötchen, Butter, Marmelade, Honig, Nutella, viererlei Käse, Tomatenpaste, Oliven, Pastırma, türkische Lyoner, Gemüse, Tomaten, Gurke, eine Pfanne nach Wahl und türkischer Tee.',
        },
      },
      {
        name: {
          en: 'Serpme Breakfast',
          de: 'Serpme',
        },
        price: 16,
        description: {
          en: 'Turkish-style breakfast spread. Available from 2 people, price per person.',
          de: 'Türkisches Frühstück zum Teilen. Ab 2 Personen, Preis pro Person.',
        },
      },
      {
        name: {
          en: 'Bread Roll',
          de: 'Brötchen',
        },
        price: 1.5,
        description: {
          en: 'Extra bread roll.',
          de: 'Extra Brötchen.',
        },
      },
      {
        name: {
          en: 'Butter, Cream Cheese, Nutella or Jam',
          de: 'Butter, Frischkäse, Nutella oder Marmelade',
        },
        price: 1.5,
        description: {
          en: 'Small breakfast extra of your choice.',
          de: 'Kleines Frühstücksextra nach Wahl.',
        },
      },
      {
        name: {
          en: 'Turkish Lyoner, Ham, Salami or Pastırma',
          de: 'Türkische Lyoner, Schinken, Salami oder Pastırma',
        },
        price: 2.5,
        description: {
          en: 'Savory breakfast extra of your choice.',
          de: 'Herzhaftes Frühstücksextra nach Wahl.',
        },
      },
      {
        name: {
          en: 'Olives',
          de: 'Oliven',
        },
        price: 2.5,
        description: {
          en: 'Extra portion of olives.',
          de: 'Extra Portion Oliven.',
        },
      },
      {
        name: {
          en: 'Homemade Tomato Paste',
          de: 'Hausgemachte Tomatenpaste',
        },
        price: 2.5,
        description: {
          en: 'Homemade tomato paste as an extra side.',
          de: 'Hausgemachte Tomatenpaste als Extra.',
        },
      },
      {
        name: {
          en: 'Tomato and Cucumber',
          de: 'Tomate und Gurke',
        },
        price: 2,
        description: {
          en: 'Fresh tomato and cucumber.',
          de: 'Frische Tomate und Gurke.',
        },
      },
    ],
  },
  {
    category: {
      en: 'Pans',
      de: 'Pfannen',
    },
    slug: 'pfannen',
    description: {
      en: 'Warm pan dishes served with a bread roll and a small tomato-cucumber side.',
      de: 'Warme Pfannengerichte inklusive Brötchen und einem Schälchen Tomate & Gurke.',
    },
    image: pfannenImage,
    images: [pfannenImage, pfannenImage2, pfannenImage3],
    items: [
      {
        name: {
          en: 'Fried Egg',
          de: 'Spiegelei',
        },
        price: 5.9,
        description: {
          en: 'Served with one bread roll and a small tomato-cucumber side.',
          de: 'Inkl. einem Brötchen und einem Schälchen Tomate & Gurke.',
        },
      },
      {
        name: {
          en: 'Scrambled Eggs',
          de: 'Rührei',
        },
        price: 5.9,
        description: {
          en: 'Served with one bread roll and a small tomato-cucumber side.',
          de: 'Inkl. einem Brötchen und einem Schälchen Tomate & Gurke.',
        },
      },
      {
        name: {
          en: 'Menemen',
          de: 'Menemen',
        },
        price: 6.9,
        description: {
          en: 'Turkish-style egg dish served with one bread roll and a small tomato-cucumber side.',
          de: 'Türkisches Eiergericht inkl. Brötchen und einem Schälchen Tomate & Gurke.',
        },
      },
      {
        name: {
          en: 'Fried Sucuk',
          de: 'Sucuk gebraten',
        },
        price: 6.9,
        description: {
          en: 'Fried Turkish garlic sausage with bread and a small side.',
          de: 'Gebratene Sucuk inkl. Brötchen und kleinem Schälchen.',
        },
      },
      {
        name: {
          en: 'Sucuk with Egg',
          de: 'Sucuk mit Ei',
        },
        price: 7.9,
        description: {
          en: 'Sucuk with egg, served warm in a pan.',
          de: 'Sucuk mit Ei, warm in der Pfanne serviert.',
        },
      },
      {
        name: {
          en: 'Pastırma with Egg',
          de: 'Pastırma mit Ei',
        },
        price: 7.9,
        description: {
          en: 'Pastırma with egg, served with bread and a small side.',
          de: 'Pastırma mit Ei, inkl. Brötchen und kleinem Schälchen.',
        },
      },
      {
        name: {
          en: 'Omelette of Choice',
          de: 'Omelett nach Wahl',
        },
        price: 7.9,
        description: {
          en: 'Omelette prepared to your choice.',
          de: 'Omelett nach Wahl.',
        },
      },
      {
        name: {
          en: 'Cays Pan',
          de: 'Cays Pfanne',
        },
        price: 8.9,
        description: {
          en: 'Fried vegetables with egg and cheese.',
          de: 'Gebratenes Gemüse mit Ei und Käse.',
        },
      },
      {
        name: {
          en: 'Cays Anatolia Pan',
          de: 'Cays Anatolia Pfanne',
        },
        price: 8.9,
        description: {
          en: 'Sucuk, egg, fried tomatoes and cheese.',
          de: 'Sucuk, Ei, gebratene Tomaten und Käse.',
        },
      },
    ],
  },
  {
    category: {
      en: 'Toasties & Sandwich Rolls',
      de: 'Toastys & Belegte Brötchen',
    },
    slug: 'toasts',
    description: {
      en: 'Crispy toasties and filled bread rolls with savory ingredients.',
      de: 'Knusprige Toastys und belegte Brötchen mit herzhaften Zutaten.',
    },
    image: toastImage,
    images: [toastImage, toastImage2, toastImage3],
    items: [
      {
        name: {
          en: 'Toasty with Cheese',
          de: 'Toasty mit Käse',
        },
        price: 6.9,
        description: {
          en: 'Served with a small tomato-cucumber side.',
          de: 'Inkl. einem Schälchen Tomate & Gurke.',
        },
      },
      {
        name: {
          en: 'Toasty with Cheese and Sucuk',
          de: 'Toasty mit Käse & Sucuk',
        },
        price: 7.9,
        description: {
          en: 'Cheese and sucuk toasty with a small tomato-cucumber side.',
          de: 'Käse-Sucuk-Toasty inkl. einem Schälchen Tomate & Gurke.',
        },
      },
      {
        name: {
          en: 'Toasty with Cheese and Pastırma',
          de: 'Toasty mit Käse & Pastırma',
        },
        price: 7.9,
        description: {
          en: 'Cheese and pastırma toasty with a small tomato-cucumber side.',
          de: 'Käse-Pastırma-Toasty inkl. einem Schälchen Tomate & Gurke.',
        },
      },
      {
        name: {
          en: 'Cays Anatolia Toasty',
          de: 'Cays Anatolia Toasty',
        },
        price: 8.9,
        description: {
          en: 'Sucuk, egg and fried tomatoes, baked with cheese.',
          de: 'Sucuk, Ei und gebratene Tomaten, mit Käse überbacken.',
        },
      },
      {
        name: {
          en: 'Cays Special Toasty',
          de: 'Cays Spezial Toasty',
        },
        price: 8.9,
        description: {
          en: 'With fried vegetables, egg and cheese.',
          de: 'Mit gebratenem Gemüse, Ei und Käse.',
        },
      },
      {
        name: {
          en: 'Bread Roll with Cheese',
          de: 'Brötchen mit Käse',
        },
        price: 3.9,
        description: {
          en: 'Filled bread roll with cheese.',
          de: 'Belegtes Brötchen mit Käse.',
        },
      },
      {
        name: {
          en: 'Bread Roll with Cheese and Cold Cuts',
          de: 'Brötchen mit Käse und Wurst nach Wahl',
        },
        price: 4.5,
        description: {
          en: 'Filled bread roll with cheese and cold cuts of your choice.',
          de: 'Belegtes Brötchen mit Käse und Wurst nach Wahl.',
        },
      },
      {
        name: {
          en: 'Cays Combo',
          de: 'Cays Kombi',
        },
        price: 6.5,
        description: {
          en: 'Bread roll with cheese and cold cuts of your choice, plus coffee or tea.',
          de: 'Brötchen mit Käse und Wurst nach Wahl, dazu Kaffee oder Tee.',
        },
      },
    ],
  },
  {
    category: {
      en: 'Waffles',
      de: 'Waffeln',
    },
    slug: 'waffles',
    description: {
      en: 'Sweet waffles with classic toppings, fruit, ice cream and chocolate.',
      de: 'Süße Waffeln mit klassischen Toppings, Früchten, Eis und Schokolade.',
    },
    image: waffleImage,
    images: [waffleImage, waffleImage2, waffleImage3],
    items: [
      {
        name: {
          en: 'Waffle with Cinnamon and Sugar',
          de: 'Waffel mit Zimt und Zucker',
        },
        price: 3.9,
        description: {
          en: 'Classic waffle with cinnamon and sugar.',
          de: 'Klassische Waffel mit Zimt und Zucker.',
        },
      },
      {
        name: {
          en: 'Waffle with Powdered Sugar',
          de: 'Waffel mit Puderzucker',
        },
        price: 3.9,
        description: {
          en: 'Classic waffle with powdered sugar.',
          de: 'Klassische Waffel mit Puderzucker.',
        },
      },
      {
        name: {
          en: 'Waffle with Apple Sauce or Nutella',
          de: 'Waffel mit Apfelmus oder Nutella',
        },
        price: 4.9,
        description: {
          en: 'Waffle served with apple sauce or Nutella.',
          de: 'Waffel mit Apfelmus oder Nutella.',
        },
      },
      {
        name: {
          en: 'Waffle with Seasonal Fruit',
          de: 'Waffel mit Früchten der Saison',
        },
        price: 5.9,
        description: {
          en: 'Waffle with seasonal fruit.',
          de: 'Waffel mit Früchten der Saison.',
        },
      },
      {
        name: {
          en: 'Cays Berry Bueno Waffle',
          de: 'Cays Berry Bueno Waffel',
        },
        price: 6.9,
        description: {
          en: 'With Kinder Bueno and fresh strawberries.',
          de: 'Mit Kinder Bueno und frischen Erdbeeren.',
        },
      },
      {
        name: {
          en: 'Cays Wonder Waffle',
          de: 'Cays Wonder Waffel',
        },
        price: 7.9,
        description: {
          en: 'With one scoop of ice cream, Kinder chocolate, fruit and chocolate sauce.',
          de: 'Mit 1 Kugel Eis, Kinderschokolade, Früchten und Schokosauce.',
        },
      },
      {
        name: {
          en: 'Cays Dubai Style Waffle',
          de: 'Cays Dubai Style Waffel',
        },
        price: 8.5,
        description: {
          en: 'Chocolate and pistachio ice cream, pistachios, pistachio topping and chocolate sauce.',
          de: 'Schokoladen- und Pistazieneis, Pistazien, Pistazien-Topping und Schokosauce.',
        },
      },
    ],
  },
  {
    category: {
      en: 'Cakes',
      de: 'Kuchen',
    },
    slug: 'cakes',
    description: {
      en: 'Homemade cakes change regularly and are available at the cake counter.',
      de: 'Hausgemachte Kuchensorten wechseln regelmäßig und sind an der Kuchentheke erhältlich.',
    },
    image: cakeImage,
    images: [cakeImage, cakeImage2, cakeImage3],
    items: [
      {
        name: {
          en: 'Bienenstich',
          de: 'Bienenstich',
        },
        price: 3.5,
        description: {
          en: 'Classic cake slice.',
          de: 'Klassisches Kuchenstück.',
        },
      },
      {
        name: {
          en: 'Apple Crumble Cake',
          de: 'Apfelstreusel',
        },
        price: 3.5,
        description: {
          en: 'Apple crumble cake slice.',
          de: 'Apfelstreusel-Kuchenstück.',
        },
      },
      {
        name: {
          en: 'Croissant',
          de: 'Croissant',
        },
        price: 1.9,
        description: {
          en: 'Fresh croissant.',
          de: 'Frisches Croissant.',
        },
      },
    ],
  },
  {
    category: {
      en: 'Hot Drinks',
      de: 'Heißgetränke',
    },
    slug: 'hot-drinks',
    description: {
      en: 'Coffee, tea, Turkish coffee and warm comforting classics.',
      de: 'Kaffee, Tee, türkischer Kaffee und warme Klassiker.',
    },
    image: hotDrinksImage,
    images: [hotDrinksImage, hotDrinksImage2, hotDrinksImage3],
    items: [
      {
        name: {
          en: 'Kaffee Creme',
          de: 'Kaffee Creme',
        },
        price: 2.8,
        description: {
          en: 'Classic coffee crema.',
          de: 'Klassischer Kaffee Creme.',
        },
      },
      {
        name: {
          en: 'Large Coffee',
          de: 'Großer Kaffee',
        },
        price: 3.7,
        description: {
          en: 'Large cup of coffee.',
          de: 'Großer Kaffee.',
        },
      },
      {
        name: {
          en: 'Cappuccino',
          de: 'Cappuccino',
        },
        price: 3.3,
        description: {
          en: 'Espresso with milk foam.',
          de: 'Espresso mit Milchschaum.',
        },
      },
      {
        name: {
          en: 'Latte Macchiato',
          de: 'Latte macchiato',
        },
        price: 3.9,
        description: {
          en: 'Layered coffee with milk.',
          de: 'Geschichteter Kaffee mit Milch.',
        },
      },
      {
        name: {
          en: 'Milk Coffee',
          de: 'Milchkaffee',
        },
        price: 3.8,
        description: {
          en: 'Coffee with milk.',
          de: 'Kaffee mit Milch.',
        },
      },
      {
        name: {
          en: 'Hot Chocolate',
          de: 'Schokolade',
        },
        price: 3.5,
        description: {
          en: 'Warm chocolate drink.',
          de: 'Warmes Schokoladengetränk.',
        },
      },
      {
        name: {
          en: 'Espresso',
          de: 'Espresso',
        },
        price: 2.6,
        description: {
          en: 'Classic espresso.',
          de: 'Klassischer Espresso.',
        },
      },
      {
        name: {
          en: 'Espresso Chocolate',
          de: 'Espresso Schokolade',
        },
        price: 3.5,
        description: {
          en: 'Espresso with chocolate.',
          de: 'Espresso mit Schokolade.',
        },
      },
      {
        name: {
          en: 'Double Espresso',
          de: 'Dopp. Espresso',
        },
        price: 3.5,
        description: {
          en: 'Double espresso.',
          de: 'Doppelter Espresso.',
        },
      },
      {
        name: {
          en: 'Espresso Macchiato',
          de: 'Espresso macchiato',
        },
        price: 2.9,
        description: {
          en: 'Espresso with a small amount of milk foam.',
          de: 'Espresso mit etwas Milchschaum.',
        },
      },
      {
        name: {
          en: 'Assorted Teas',
          de: 'Verschiedene Teesorten',
        },
        price: 3,
        description: {
          en: 'Black, herbal, rooibos, peppermint, green or fruit tea.',
          de: 'Schwarz, Kräuter, Rooibos, Pfefferminze, Grün oder Früchte.',
        },
      },
      {
        name: {
          en: 'Salep',
          de: 'Salep',
        },
        price: 3.5,
        description: {
          en: 'Warm Turkish milk drink.',
          de: 'Warmes türkisches Milchgetränk.',
        },
      },
      {
        name: {
          en: 'Turkish Coffee',
          de: 'Türkischer Kaffee',
        },
        price: 3.5,
        description: {
          en: 'Traditional Turkish coffee.',
          de: 'Traditioneller türkischer Kaffee.',
        },
      },
      {
        name: {
          en: 'Small Turkish Black Tea',
          de: 'Türkischer Schwarztee klein',
        },
        price: 2.7,
        description: {
          en: 'Small glass of Turkish black tea.',
          de: 'Kleines Glas türkischer Schwarztee.',
        },
      },
      {
        name: {
          en: 'Large Turkish Black Tea',
          de: 'Türkischer Schwarztee groß',
        },
        price: 3.3,
        description: {
          en: 'Large glass of Turkish black tea.',
          de: 'Großes Glas türkischer Schwarztee.',
        },
      },
      {
        name: {
          en: 'Oralet',
          de: 'Oralet',
        },
        price: 2,
        description: {
          en: 'Turkish instant tea.',
          de: 'Türkischer Instant-Tee.',
        },
      },
    ],
  },
  {
    category: {
      en: 'Cold Drinks',
      de: 'Kaltgetränke',
    },
    slug: 'cold-drinks',
    description: {
      en: 'Soft drinks, iced tea, juices, water and refreshing bottled drinks.',
      de: 'Softdrinks, Eistee, Säfte, Wasser und erfrischende Flaschengetränke.',
    },
    image: coldDrinksImage,
    images: [coldDrinksImage, coldDrinksImage2, coldDrinksImage3],
    items: [
      {
        name: {
          en: 'Coca Cola / Fanta / Mezzo Mix / Sprite',
          de: 'Coca Cola / Fanta / Mezzo Mix / Sprite',
        },
        price: 3.9,
        description: {
          en: '0.33 l bottle.',
          de: '0,33 l Flasche.',
        },
      },
      {
        name: {
          en: 'Elephant Bay Iced Tea',
          de: 'Eistee Elephant Bay',
        },
        price: 3.9,
        description: {
          en: '0.33 l. Peach, lemon, blueberry, pomegranate, mango-pineapple, cherry, melon or passion fruit.',
          de: '0,33 l. Peach, Lemon, Blueberry, Pomegranate, Mango-Ananas, Cherry, Melon oder Passionsfrucht.',
        },
      },
      {
        name: {
          en: 'Juice Spritzer',
          de: 'Saftschorle',
        },
        price: 3.5,
        description: {
          en: '0.25 l. Apple, blackcurrant or orange.',
          de: '0,25 l. Apfel, Johannisbeere oder Orange.',
        },
      },
      {
        name: {
          en: 'Juices',
          de: 'Säfte',
        },
        price: 3.5,
        description: {
          en: '0.25 l. Multivitamin, orange or apple.',
          de: '0,25 l. Multivitamin, Orange oder Apfel.',
        },
      },
      {
        name: {
          en: 'Orangina Red & Yellow',
          de: 'Orangina rot & gelb',
        },
        price: 3.8,
        description: {
          en: '0.25 l bottle.',
          de: '0,25 l Flasche.',
        },
      },
      {
        name: {
          en: 'Vio Still Water',
          de: 'Vio Stilles Wasser',
        },
        price: 3.2,
        description: {
          en: '0.25 l bottle.',
          de: '0,25 l Flasche.',
        },
      },
      {
        name: {
          en: 'San Pellegrino Mineral Water',
          de: 'San Pellegrino Mineral Wasser',
        },
        price: 3.2,
        description: {
          en: '0.25 l bottle.',
          de: '0,25 l Flasche.',
        },
      },
      {
        name: {
          en: 'Thomas Henry',
          de: 'Thomas Henry',
        },
        price: 3.5,
        description: {
          en: '0.25 l. Bitter lemon, ginger ale or tonic water.',
          de: '0,25 l. Bitter Lemon, Ginger Ale oder Tonic Water.',
        },
      },
      {
        name: {
          en: 'Red Bull',
          de: 'Red Bull',
        },
        price: 4.2,
        description: {
          en: '0.25 l. Changing varieties.',
          de: '0,25 l. Wechselnde Sorten.',
        },
      },
    ],
  },
  {
    category: {
      en: 'Beer, Sparkling Wine & Wine',
      de: 'Bier, Sekt & Wein',
    },
    slug: 'alcohol',
    description: {
      en: 'Beer, sparkling wine, wine spritzers and selected wines.',
      de: 'Bier, Sekt, Weinschorlen und ausgewählte Weine.',
    },
    image: alcoholImage,
    images: [alcoholImage, alcoholImage2, alcoholImage3],
    items: [
      {
        name: {
          en: 'Waldhaus Pils',
          de: 'Waldhaus Pils',
        },
        price: 3.8,
        description: {
          en: '0.33 l beer.',
          de: '0,33 l Bier.',
        },
      },
      {
        name: {
          en: 'Waldhaus Wheat Beer',
          de: 'Waldhaus Weizen',
        },
        price: 3.8,
        description: {
          en: '0.33 l wheat beer.',
          de: '0,33 l Weizenbier.',
        },
      },
      {
        name: {
          en: 'Waldhaus Radler',
          de: 'Waldhaus Radler',
        },
        price: 3.8,
        description: {
          en: '0.33 l radler.',
          de: '0,33 l Radler.',
        },
      },
      {
        name: {
          en: 'Waldhaus Pils Alcohol-Free',
          de: 'Waldhaus Pils alkoholfrei',
        },
        price: 3.8,
        description: {
          en: '0.33 l alcohol-free beer.',
          de: '0,33 l alkoholfreies Bier.',
        },
      },
      {
        name: {
          en: 'Cola Wheat Beer',
          de: 'Cola Weizen',
        },
        price: 4.3,
        description: {
          en: '0.5 l cola wheat beer.',
          de: '0,5 l Cola Weizen.',
        },
      },
      {
        name: {
          en: 'Desperados',
          de: 'Desperados',
        },
        price: 4.6,
        description: {
          en: '0.33 l bottle.',
          de: '0,33 l Flasche.',
        },
      },
      {
        name: {
          en: 'Prosecco',
          de: 'Prosecco',
        },
        price: 5.9,
        description: {
          en: '0.20 l glass.',
          de: '0,20 l Glas.',
        },
      },
      {
        name: {
          en: 'Piccolo Sparkling Wine',
          de: 'Piccolo Sekt',
        },
        price: 5.9,
        description: {
          en: '0.20 l bottle.',
          de: '0,20 l Flasche.',
        },
      },
      {
        name: {
          en: 'White Wine Spritzer Sweet / Sour',
          de: 'Weißwein Schorle süss / sauer',
        },
        price: 3.8,
        description: {
          en: '0.25 l wine spritzer.',
          de: '0,25 l Weinschorle.',
        },
      },
      {
        name: {
          en: 'Red Wine Spritzer Sweet / Sour',
          de: 'Rotwein Schorle süss / sauer',
        },
        price: 3.8,
        description: {
          en: '0.25 l wine spritzer.',
          de: '0,25 l Weinschorle.',
        },
      },
      {
        name: {
          en: 'Weißherbst Spritzer Sweet / Sour',
          de: 'Weißherbst Schorle süss / sauer',
        },
        price: 3.8,
        description: {
          en: '0.25 l wine spritzer.',
          de: '0,25 l Weinschorle.',
        },
      },
      {
        name: {
          en: 'White Wine “echt süss”',
          de: 'Weißwein „echt süss“',
        },
        price: 5.5,
        description: {
          en: '0.25 l glass.',
          de: '0,25 l Glas.',
        },
      },
      {
        name: {
          en: 'White Wine “Haltinger Gutedel”',
          de: 'Weißwein „Haltinger Gutedel“',
        },
        price: 5.5,
        description: {
          en: '0.25 l glass.',
          de: '0,25 l Glas.',
        },
      },
      {
        name: {
          en: 'Red Wine “echt süss”',
          de: 'Rotwein „echt süss“',
        },
        price: 5.5,
        description: {
          en: '0.25 l glass.',
          de: '0,25 l Glas.',
        },
      },
      {
        name: {
          en: 'Rosé Wine “echt süss”',
          de: 'Rosé Wein „echt süss“',
        },
        price: 5.5,
        description: {
          en: '0.25 l glass.',
          de: '0,25 l Glas.',
        },
      },
      {
        name: {
          en: 'Red Wine “Primitivo”',
          de: 'Rotwein „Primitivo“',
        },
        price: 6.9,
        description: {
          en: '0.25 l glass.',
          de: '0,25 l Glas.',
        },
      },
    ],
  },
]