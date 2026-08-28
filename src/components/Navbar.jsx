import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import { Menu, X, Phone } from "lucide-react"

import logo from "../assets/logo/pazuri-logo.png"

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Services", to: "/services" },
  { name: "Projects", to: "/portfolio" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-stone-950/95 backdrop-blur-md">

      {/* ================= NAVBAR ================= */}

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 sm:py-3 lg:px-8">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Pazuri Homes"
          className="flex shrink-0 items-center"
        >
          <div className="flex h-[72px] w-[72px] items-center justify-center sm:h-[88px] sm:w-[88px] lg:h-[120px] lg:w-[120px]">
            <img
              src={logo}
              alt="Pazuri Homes"
              className="h-full w-full scale-110 object-contain drop-shadow-2xl"
            />
          </div>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 lg:text-base ${
                  isActive
                    ? "text-amber-500"
                    : "text-stone-300 hover:text-amber-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>


        {/* ================= DESKTOP CTA ================= */}

        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-amber-500 hover:shadow-lg hover:shadow-amber-900/20 lg:px-6 lg:py-3 lg:text-base md:flex"
        >
          <Phone size={17} />
          Get a Quote
        </Link>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/50 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={27} strokeWidth={1.8} />
          ) : (
            <Menu size={27} strokeWidth={1.8} />
          )}
        </button>

      </nav>


      {/* ================= MOBILE NAVIGATION ================= */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-stone-950/98 px-5 py-6 shadow-2xl md:hidden">

          <div className="mx-auto flex max-w-md flex-col gap-2">

            {/* Mobile Navigation Links */}

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-amber-500/10 text-amber-500"
                      : "text-stone-300 hover:bg-white/5 hover:text-amber-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}


            {/* Mobile CTA */}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-amber-900/20 transition-all duration-200 hover:bg-amber-500"
            >
              <Phone size={18} />
              Get a Quote
            </Link>

          </div>
        </div>
      )}

    </header>
  )
}

export default Navbar