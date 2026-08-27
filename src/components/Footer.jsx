import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-amber-900/30 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 px-6 py-12 sm:px-10 lg:px-16">

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-amber-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-amber-800/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block"
            >
              <h2 className="text-2xl font-semibold text-white">
                Pazuri <span className="text-amber-400">Homes</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-md leading-7 text-stone-400">
              Custom furniture crafted to make your space beautiful,
              functional and uniquely yours.
            </p>
          </div>

          {/* Navigation */}
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

          {/* Contact */}
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

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

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