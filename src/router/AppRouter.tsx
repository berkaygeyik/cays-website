import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'

const MenuPage = lazy(() => import('../pages/MenuPage'))
const MenuCategoryPage = lazy(() => import('../pages/MenuCategoryPage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const GalleryPage = lazy(() => import('../pages/GalleryPage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const TableReservationPage = lazy(
  () => import('../pages/TableReservationPage'),
)
const EventReservationPage = lazy(
  () => import('../pages/EventReservationPage'),
)
const ImpressumPage = lazy(() => import('../pages/ImpressumPage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'))

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="menu/:slug" element={<MenuCategoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="reservations/table" element={<TableReservationPage />} />
        <Route path="reservations/events" element={<EventReservationPage />} />
        <Route path="impressum" element={<ImpressumPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
