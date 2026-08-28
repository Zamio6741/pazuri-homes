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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-stone-950/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Pazuri Homes"
          className="flex items-center"
        >
          <div className="flex h-36 w-36 shrink-0 items-center justify-center">
            <img
              src={logo}
              alt="Pazuri Homes"
              className="h-full w-full scale-110 object-contain drop-shadow-2xl"
            />
          </div>
        </Link>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
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
          className="hidden items-center gap-2 rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-500 md:flex"
        >
          <Phone size={16} />
          Get a Quote
        </Link>


        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>


      {/* ================= MOBILE NAVIGATION ================= */}

      {menuOpen && (
        <div className="border-t border-white/10 bg-stone-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-base font-medium transition ${
                    isActive
                      ? "text-amber-500"
                      : "text-stone-300 hover:text-amber-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 rounded-full bg-amber-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
            >
              <Phone size={16} />
              Get a Quote
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar