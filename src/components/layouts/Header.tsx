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
        <div className="ml-0 xl:ml-24">
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
          className={`hidden flex-col items-end gap-1 py-2 transition-all duration-300 lg:flex lg:ml-auto lg:mr-8 lg:text-sm xl:mr-24 xl:text-xl ${
            isScrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-0 opacity-100"
          }`}
        >
          <a
            href="mailto:mesadeayuda@hospitaldomiciliario.com.ar"
            className="flex cursor-pointer items-center gap-1.5"
          >
            mesadeayuda@hospitaldomiciliario.com.ar

            <IoIosMail className="text-2xl xl:text-4xl" />
          </a>

          <a
            href="https://wa.me/5492613385555?text=Hola%2C%20quisiera%20consultar%20por%20los%20servicios%20de%20Hospital%20Domiciliario."
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-1.5"
          >
            +54 0261 338 5555

            <MdPhoneInTalk className="text-2xl xl:text-4xl" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[70] ml-5 xl:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <HiOutlineX size={34} />
          ) : (
            <HiOutlineMenu size={34} />
          )}
        </button>
      </div>

      <div className="hidden w-full bg-hospital-dark xl:block">
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
        className={`absolute left-0 top-full z-[60] w-full bg-hospital-dark transition-all duration-300 ease-in-out xl:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
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
          className="fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm xl:hidden"
        />
      )}
    </header>
  )
}