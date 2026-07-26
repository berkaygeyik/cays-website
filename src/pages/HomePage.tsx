import Hero from '../components/Hero'
import MenuPreviewSection from '../components/MenuPreviewSection'
import EventsPreviewSection from '../components/EventsPreviewSection'
import ExperienceSection from '../components/ExperienceSection'
import QuickInfoSection from '../components/QuickInfoSection'
import ReservationsSection from '../components/ReservationsSection'
import { usePageMeta } from '../hooks/usePageMeta'
import { useTranslation } from '../i18n/useTranslation'

function HomePage() {
  const { t } = useTranslation()

  usePageMeta(`Cays – ${t.hero.eyebrow}`, t.hero.description)

  return (
    <div className="bg-[#f7f3ee] text-neutral-900">
      <Hero scrollTargetId="category-preview" />

      <MenuPreviewSection />

      <ExperienceSection />

      <EventsPreviewSection />

      <QuickInfoSection />

      <ReservationsSection />
    </div>
  )
}

export default HomePage