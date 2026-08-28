import { Link } from "react-router-dom"

import logo from "../assets/logo/pazuri-logo.png"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-900/30 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-amber-800/10 blur-3xl" />


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-12 sm:gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">


          {/* ========================================================= */}
          {/* BRAND */}
          {/* ========================================================= */}

          <div className="text-center md:col-span-2 md:text-left lg:col-span-2">

            <Link
              to="/"
              className="inline-flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
            >

              {/* Large Responsive Logo */}
              <div className="flex h-32 w-32 shrink-0 items-center justify-center sm:h-36 sm:w-36">
                <img
                  src={logo}
                  alt="Pazuri Homes"
                  className="h-full w-full scale-110 object-contain drop-shadow-2xl"
                />
              </div>


              {/* Brand Name */}
              <div className="text-center sm:text-left">

                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Pazuri{" "}
                  <span className="text-amber-400">
                    Homes
                  </span>
                </h2>

                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-amber-500 sm:text-xs">
                  Crafted for your space
                </p>

              </div>

            </Link>


            {/* Description */}

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-stone-400 sm:text-base md:mx-0">
              Custom furniture crafted to make your space beautiful,
              functional and uniquely yours.
            </p>

          </div>


          {/* ========================================================= */}
          {/* NAVIGATION */}
          {/* ========================================================= */}

          <div className="text-center md:text-left">

            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Explore
            </h3>


            <nav className="mt-5 flex flex-col items-center gap-1 md:items-start">

              <Link
                to="/about"
                className="rounded-lg px-2 py-2 text-sm text-stone-400 transition-colors duration-200 hover:text-amber-400"
              >
                About
              </Link>

              <Link
                to="/services"
                className="rounded-lg px-2 py-2 text-sm text-stone-400 transition-colors duration-200 hover:text-amber-400"
              >
                Services
              </Link>

              <Link
                to="/portfolio"
                className="rounded-lg px-2 py-2 text-sm text-stone-400 transition-colors duration-200 hover:text-amber-400"
              >
                Our Work
              </Link>

              <Link
                to="/contact"
                className="rounded-lg px-2 py-2 text-sm text-stone-400 transition-colors duration-200 hover:text-amber-400"
              >
                Contact
              </Link>

            </nav>

          </div>


          {/* ========================================================= */}
          {/* CONTACT */}
          {/* ========================================================= */}

          <div className="text-center md:text-left">

            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
              Get In Touch
            </h3>


            <div className="mt-5 flex flex-col items-center gap-2 md:items-start">

              <a
                href="tel:+254742795286"
                className="rounded-lg px-2 py-2 text-sm text-stone-400 transition-colors duration-200 hover:text-amber-400"
              >
                +254 742 795 286
              </a>

              <a
                href="mailto:pazurihomeskenya@gmail.com"
                className="break-all rounded-lg px-2 py-2 text-sm text-stone-400 transition-colors duration-200 hover:text-amber-400 sm:break-normal"
              >
                pazurihomeskenya@gmail.com
              </a>

              <p className="px-2 py-2 text-sm text-stone-400">
                Nairobi, Kenya
              </p>

            </div>

          </div>

        </div>


        {/* ========================================================= */}
        {/* BOTTOM BAR */}
        {/* ========================================================= */}

        <div className="mt-12 border-t border-white/10 pt-7 sm:mt-14 sm:pt-8">

          <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">

            <p className="text-xs leading-6 text-stone-500 sm:text-sm">
              © {new Date().getFullYear()} Pazuri Homes. All rights reserved.
            </p>

            <p className="text-xs text-stone-500 sm:text-sm">
              Crafted with care.
            </p>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer