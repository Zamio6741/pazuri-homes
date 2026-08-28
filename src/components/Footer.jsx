import { Link } from "react-router-dom"

import logo from "../assets/logo/pazuri-logo.png"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-900/30 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 px-6 py-14 sm:px-10 lg:px-16">

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-amber-800/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}
          <div className="lg:col-span-2">

            <Link
              to="/"
              className="inline-flex items-center gap-7"
            >
              {/* VERY LARGE LOGO */}
              <div className="flex h-36 w-36 shrink-0 items-center justify-center">
                <img
                  src={logo}
                  alt="Pazuri Homes"
                  className="h-full w-full scale-110 object-contain drop-shadow-2xl"
                />
              </div>

              {/* Brand Name */}
              <div>
                <h2 className="text-4xl font-semibold text-white">
                  Pazuri <span className="text-amber-400">Homes</span>
                </h2>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-amber-500">
                  Crafted for your space
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-md text-base leading-7 text-stone-400">
              Custom furniture crafted to make your space beautiful,
              functional and uniquely yours.
            </p>

          </div>


          {/* ================= NAVIGATION ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                to="/about"
                className="text-sm text-stone-400 transition-colors hover:text-amber-400"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-sm text-stone-400 transition-colors hover:text-amber-400"
              >
                Services
              </Link>

              <Link
                to="/portfolio"
                className="text-sm text-stone-400 transition-colors hover:text-amber-400"
              >
                Our Work
              </Link>

              <Link
                to="/contact"
                className="text-sm text-stone-400 transition-colors hover:text-amber-400"
              >
                Contact
              </Link>

            </div>
          </div>


          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <a
                href="tel:+254742795286"
                className="text-sm text-stone-400 transition-colors hover:text-amber-400"
              >
                +254 742 795 286
              </a>

              <a
                href="mailto:pazurihomeskenya@gmail.com"
                className="text-sm text-stone-400 transition-colors hover:text-amber-400"
              >
                pazurihomeskenya@gmail.com
              </a>

              <p className="text-sm text-stone-400">
                Nairobi, Kenya
              </p>

            </div>
          </div>

        </div>


        {/* ================= BOTTOM ================= */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Pazuri Homes. All rights reserved.
          </p>

          <p className="text-sm text-stone-500">
            Crafted with care.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer