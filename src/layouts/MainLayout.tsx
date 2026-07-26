import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col text-neutral-900">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout