import { useEffect, useState } from "react"
import { MdPhoneInTalk } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import { navItems } from "../../data/siteData"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-hospital-green text-white">
      <div className="mx-auto flex w-11/12 items-center justify-between py-3">

        <div className="xl:ml-24 ml-0">
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
          <img
            className={`w-auto transition-all duration-300 ${
              isScrolled ? "h-12 lg:h-16" : "h-16 lg:h-20 xl:h-24"
            }`}
            src="/logo.png"
            alt="logo_hospital_domiciliario"
          />
        </a>
        </div>

        <div
          className={`hidden xl:mr-24 mr-0 flex-col items-end gap-1 py-2 text-xs transition-all duration-300 md:text-xl xl:flex ${
            isScrolled
              ? "opacity-100 -translate-y-0 pointer-events-none"
              : "opacity-100 translate-y-0"
          }`}
        >
          <a
            href="mailto:mesadeayuda@hospitaldomiciliario.com.ar"
            className="flex items-center gap-1.5"
          >
            mesadeayuda@hospitaldomiciliario.com.ar
            <IoIosMail size={35} />
          </a>

          <a href="tel:+542613385555" className="flex items-center gap-1.5">
            +54 0261 338 5555
            <MdPhoneInTalk size={35} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[70] lg:hidden"
          aria-label="Abrir menú"
        >
          {menuOpen ? <HiOutlineX size={34} /> : <HiOutlineMenu size={34} />}
        </button>
        
      </div>

      <div className="hidden w-full bg-hospital-dark lg:block">
        <nav className="mx-auto flex items-center justify-center gap-14 py-4 text-sm font-normal uppercase tracking-wide 2xl:text-lg">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white/70"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <nav
        className={`absolute left-0 top-full z-[60] w-full bg-hospital-dark transition-all duration-300 ease-in-out lg:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-5"
        }`}
      >
        <ul className="mx-auto flex w-11/12 flex-col gap-4 py-5 text-sm font-normal uppercase tracking-wide">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 pb-3 transition hover:text-white/70"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {menuOpen && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm lg:hidden"
        />
      )}
    </header>
  )
}