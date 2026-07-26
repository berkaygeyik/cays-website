import { useEffect, useMemo, useState, type CSSProperties } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoDark from '../assets/cays-logo-cleaned.png'
import logoWhite from '../assets/cays-logo-white.png'
import { useTranslation } from '../i18n/useTranslation'
import { useScrolled } from '../hooks/useScrolled'
import type { Language } from '../i18n/translations'

type StyleWithVars = CSSProperties & Record<`--${string}`, string>

interface NavTheme {
  textColor: string
  hoverBg: string
  activeBg: string
  activeBorder: string
  menuBg: string
  menuHoverBg: string
  menuActiveBg: string
  menuBorder: string
}

function getNavLinkStyle({
  isActive,
  isMenuItem,
  theme,
}: {
  isActive: boolean
  isMenuItem: boolean
  theme: NavTheme
}): StyleWithVars {
  if (isMenuItem) {
    return {
      color: theme.textColor,
      border: theme.menuBorder,
      '--nav-idle-bg': isActive ? theme.menuActiveBg : theme.menuBg,
      '--nav-hover-bg': theme.menuHoverBg,
    }
  }

  return {
    color: theme.textColor,
    border: isActive ? theme.activeBorder : '1px solid transparent',
    '--nav-idle-bg': isActive ? theme.activeBg : 'transparent',
    '--nav-hover-bg': theme.hoverBg,
  }
}

function getNavLinkClassName(isMenuItem: boolean, isActive: boolean) {
  const base = isMenuItem
    ? 'px-4 py-2.5 text-[12px] font-bold uppercase tracking-[0.12em] xl:px-5 xl:text-[13px] 2xl:px-6 2xl:py-3 2xl:text-[14px] shadow-[0_4px_12px_rgba(0,0,0,0.045)]'
    : 'px-3 py-2 text-[13px] font-semibold tracking-[0.05em] xl:px-4 xl:text-[14px] 2xl:px-4 2xl:py-2.5 2xl:text-[15px]'

  const hover = isActive ? '' : ' hover:[background:var(--nav-hover-bg)]'

  return `select-none rounded-full text-center transition-all duration-300 [background:var(--nav-idle-bg)] ${base}${hover}`
}

function getMobileNavLinkClassName(isMenuItem: boolean, isActive: boolean) {
  const base = isMenuItem
    ? 'font-bold uppercase tracking-[0.12em]'
    : 'font-semibold tracking-[0.05em]'

  const hover = isActive ? '' : ' hover:[background:var(--nav-hover-bg)]'

  return `select-none rounded-2xl px-4 py-3 text-center text-sm transition-all duration-300 [background:var(--nav-idle-bg)] ${base}${hover}`
}

function Navbar() {
  const isScrolled = useScrolled(24)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t, language, setLanguage } = useTranslation()
  const location = useLocation()

  // Close the mobile menu when the route changes. Adjusted during render
  // (rather than in an effect) per React's guidance on deriving state from
  // a changing value: https://react.dev/learn/you-might-not-need-an-effect
  const [prevPathname, setPrevPathname] = useState(location.pathname)
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname)
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: t.nav.menu, to: '/menu', key: 'menu' },
    { label: t.nav.about, to: '/about', key: 'about' },
    { label: t.nav.gallery, to: '/gallery', key: 'gallery' },
    { label: t.nav.contact, to: '/contact', key: 'contact' },
  ]

  const isHomePage = location.pathname === '/'
  const useTransparentHeader = isHomePage && !isScrolled
  const currentLogo = useTransparentHeader ? logoWhite : logoDark

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const headerStyle = useTransparentHeader
    ? {
        background: 'rgba(20, 20, 20, 0.14)',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
      }
    : {
        background: '#877050',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.05)',
      }

  const desktopTheme = useMemo(
    () => ({
      textColor: useTransparentHeader ? '#ffffff' : '#111111',
      hoverBg: useTransparentHeader
        ? 'rgba(255,255,255,0.14)'
        : 'rgba(0,0,0,0.08)',
      activeBg: useTransparentHeader
        ? 'rgba(255,255,255,0.18)'
        : 'rgba(0,0,0,0.10)',
      activeBorder: useTransparentHeader
        ? '1px solid rgba(255,255,255,0.18)'
        : '1px solid rgba(0,0,0,0.10)',
      menuBg: useTransparentHeader
        ? 'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08))'
        : 'linear-gradient(135deg, rgba(0,0,0,0.06), rgba(0,0,0,0.10))',
      menuHoverBg: useTransparentHeader
        ? 'linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.12))'
        : 'linear-gradient(135deg, rgba(0,0,0,0.10), rgba(0,0,0,0.15))',
      menuActiveBg: useTransparentHeader
        ? 'linear-gradient(135deg, rgba(255,255,255,0.22), rgba(255,255,255,0.14))'
        : 'linear-gradient(135deg, rgba(0,0,0,0.12), rgba(0,0,0,0.18))',
      menuBorder: useTransparentHeader
        ? '1px solid rgba(255,255,255,0.24)'
        : '1px solid rgba(0,0,0,0.12)',
      secondaryCtaBorder: useTransparentHeader
        ? '1.5px solid #ffffff'
        : '1.5px solid #111111',
      secondaryCtaText: useTransparentHeader ? '#ffffff' : '#111111',
      secondaryCtaShadow: useTransparentHeader
        ? '0 8px 22px rgba(255,255,255,0.10)'
        : '0 8px 22px rgba(0,0,0,0.10)',
      secondaryCtaShadowHover: useTransparentHeader
        ? '0 10px 26px rgba(255,255,255,0.16)'
        : '0 10px 26px rgba(0,0,0,0.16)',
      primaryCtaBg: useTransparentHeader
        ? '#ffffff'
        : 'linear-gradient(135deg, #111111, #2a2a2a)',
      primaryCtaBgHover: useTransparentHeader
        ? '#f5f5f5'
        : 'linear-gradient(135deg, #000000, #222222)',
      primaryCtaText: useTransparentHeader ? '#111111' : '#ffffff',
      primaryCtaBorder: useTransparentHeader
        ? '1px solid rgba(255,255,255,0.92)'
        : '1px solid rgba(0,0,0,0.20)',
      primaryCtaShadow: useTransparentHeader
        ? '0 8px 22px rgba(255,255,255,0.16)'
        : '0 8px 22px rgba(0,0,0,0.25)',
      primaryCtaShadowHover: useTransparentHeader
        ? '0 10px 26px rgba(255,255,255,0.22)'
        : '0 10px 26px rgba(0,0,0,0.30)',
      hamburgerLineColor: useTransparentHeader ? '#ffffff' : '#111111',
      hamburgerBorder: useTransparentHeader
        ? 'rgba(255,255,255,0.18)'
        : 'rgba(0,0,0,0.10)',
      hamburgerBg: useTransparentHeader
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(0,0,0,0.04)',
    }),
    [useTransparentHeader],
  )

  const mobileTheme = useMemo(
    () => ({
      textColor: '#ffffff',
      hoverBg: 'rgba(255,255,255,0.12)',
      activeBg: 'rgba(255,255,255,0.16)',
      activeBorder: '1px solid rgba(255,255,255,0.18)',
      menuBg:
        'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.08))',
      menuHoverBg:
        'linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.12))',
      menuActiveBg:
        'linear-gradient(135deg, rgba(255,255,255,0.24), rgba(255,255,255,0.16))',
      menuBorder: '1px solid rgba(255,255,255,0.24)',
      panelStyle: {
        background: 'rgba(18, 18, 18, 0.94)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.28)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
      },
    }),
    [],
  )

  const handleNavigateTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }

  const handleLanguageChange = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
  }

  const getLanguageButtonStyle = (itemLanguage: Language, isMobile = false) => {
    const isActive = language === itemLanguage

    return {
      color: isMobile ? '#ffffff' : desktopTheme.textColor,
      opacity: isActive ? 1 : 0.55,
      borderBottom: isActive
        ? isMobile
          ? '1.5px solid rgba(255,255,255,0.92)'
          : `1.5px solid ${desktopTheme.textColor}`
        : '1.5px solid transparent',
    }
  }

  const secondaryCtaStyle: StyleWithVars = {
    border: desktopTheme.secondaryCtaBorder,
    color: desktopTheme.secondaryCtaText,
    '--cta-shadow': desktopTheme.secondaryCtaShadow,
    '--cta-shadow-hover': desktopTheme.secondaryCtaShadowHover,
  }

  const primaryCtaStyle: StyleWithVars = {
    color: desktopTheme.primaryCtaText,
    border: desktopTheme.primaryCtaBorder,
    '--cta-bg': desktopTheme.primaryCtaBg,
    '--cta-bg-hover': desktopTheme.primaryCtaBgHover,
    '--cta-shadow': desktopTheme.primaryCtaShadow,
    '--cta-shadow-hover': desktopTheme.primaryCtaShadowHover,
  }

  const ctaTransition =
    'transition-all duration-300 hover:-translate-y-px [box-shadow:var(--cta-shadow)] hover:[box-shadow:var(--cta-shadow-hover)]'

  return (
    <>
      <header
        className="fixed left-0 top-0 z-50 w-full transition-all duration-300"
        style={headerStyle}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 sm:py-4 md:px-6 lg:px-8 lg:py-5 xl:px-10">
          <Link
            to="/"
            onClick={handleNavigateTop}
            className="flex select-none items-center"
          >
            <img
              src={currentLogo}
              alt="Cays logo"
              className="h-10 w-auto select-none object-contain sm:h-11 md:h-12 lg:h-14"
              draggable={false}
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navItems.map((item) => {
              const isMenuItem = item.key === 'menu'

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={handleNavigateTop}
                  className={({ isActive }) =>
                    getNavLinkClassName(isMenuItem, isActive)
                  }
                  style={({ isActive }) =>
                    getNavLinkStyle({
                      isActive,
                      isMenuItem,
                      theme: desktopTheme,
                    })
                  }
                >
                  {item.label}
                </NavLink>
              )
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <Link
              to="/reservations/table"
              onClick={handleNavigateTop}
              className={`select-none rounded-full bg-transparent px-4 py-2.5 text-[12px] font-bold tracking-[0.10em] xl:px-5 xl:text-[13px] 2xl:px-6 2xl:py-3 2xl:text-[14px] ${ctaTransition}`}
              style={secondaryCtaStyle}
            >
              {t.nav.bookTable}
            </Link>

            <Link
              to="/reservations/events"
              onClick={handleNavigateTop}
              className={`select-none rounded-full px-4 py-2.5 text-[12px] font-extrabold tracking-[0.14em] xl:px-5 xl:text-[13px] 2xl:px-6 2xl:py-3 2xl:text-[14px] [background:var(--cta-bg)] hover:[background:var(--cta-bg-hover)] ${ctaTransition}`}
              style={primaryCtaStyle}
            >
              {t.nav.specialEvents}
            </Link>

            <div
              className="ml-1 flex select-none items-center gap-1.5 pl-1 text-[11px] font-bold uppercase tracking-[0.14em] xl:text-[12px]"
              aria-label="Language selector"
            >
              <button
                type="button"
                onClick={() => handleLanguageChange('de')}
                className="pb-[2px] transition-opacity duration-300 hover:opacity-100"
                style={getLanguageButtonStyle('de')}
              >
                de
              </button>

              <span
                className="opacity-45"
                style={{ color: desktopTheme.textColor }}
              >
                |
              </span>

              <button
                type="button"
                onClick={() => handleLanguageChange('en')}
                className="pb-[2px] transition-opacity duration-300 hover:opacity-100"
                style={getLanguageButtonStyle('en')}
              >
                en
              </button>
            </div>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden"
            style={{
              borderColor: desktopTheme.hamburgerBorder,
              backgroundColor: desktopTheme.hamburgerBg,
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <span className="relative h-4 w-5">
              <span
                className="absolute left-0 top-0 h-[2px] w-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: desktopTheme.hamburgerLineColor,
                  transform: isMobileMenuOpen
                    ? 'translateY(7px) rotate(45deg)'
                    : 'translateY(0px) rotate(0deg)',
                }}
              />
              <span
                className="absolute left-0 top-[7px] h-[2px] w-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: desktopTheme.hamburgerLineColor,
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute left-0 top-[14px] h-[2px] w-5 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: desktopTheme.hamburgerLineColor,
                  transform: isMobileMenuOpen
                    ? 'translateY(-7px) rotate(-45deg)'
                    : 'translateY(0px) rotate(0deg)',
                }}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMobileMenuOpen ? 'max-h-[560px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pb-4 sm:px-5">
            <div
              className="mx-auto mt-1 rounded-3xl p-3"
              style={mobileTheme.panelStyle}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isMenuItem = item.key === 'menu'

                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={handleNavigateTop}
                      className={({ isActive }) =>
                        getMobileNavLinkClassName(isMenuItem, isActive)
                      }
                      style={({ isActive }) =>
                        getNavLinkStyle({
                          isActive,
                          isMenuItem,
                          theme: mobileTheme,
                        })
                      }
                    >
                      {item.label}
                    </NavLink>
                  )
                })}
              </div>

              <div className="mt-3 grid grid-cols-1 gap-2">
                <Link
                  to="/reservations/table"
                  onClick={handleNavigateTop}
                  className="select-none rounded-2xl border-[1.5px] border-white bg-transparent px-4 py-3 text-center text-sm font-bold tracking-[0.10em] !text-white transition-all duration-300 [box-shadow:0_8px_22px_rgba(255,255,255,0.10)] hover:-translate-y-px hover:[box-shadow:0_10px_26px_rgba(255,255,255,0.16)]"
                >
                  {t.nav.bookTable}
                </Link>

                <Link
                  to="/reservations/events"
                  onClick={handleNavigateTop}
                  className="select-none rounded-2xl border border-white/92 bg-white px-4 py-3 text-center text-sm font-extrabold tracking-[0.12em] !text-[#111111] transition-all duration-300 [box-shadow:0_8px_22px_rgba(255,255,255,0.14)] hover:-translate-y-px hover:bg-[#f5f5f5] hover:[box-shadow:0_10px_26px_rgba(255,255,255,0.20)]"
                >
                  {t.nav.specialEvents}
                </Link>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 border-t border-white/10 pt-4 text-[12px] font-bold uppercase tracking-[0.16em]">
                <button
                  type="button"
                  onClick={() => handleLanguageChange('de')}
                  className="pb-[2px] transition-opacity duration-300 hover:opacity-100"
                  style={getLanguageButtonStyle('de', true)}
                >
                  de
                </button>

                <span className="text-white/45">|</span>

                <button
                  type="button"
                  onClick={() => handleLanguageChange('en')}
                  className="pb-[2px] transition-opacity duration-300 hover:opacity-100"
                  style={getLanguageButtonStyle('en', true)}
                >
                  en
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}
    </>
  )
}

export default Navbar
