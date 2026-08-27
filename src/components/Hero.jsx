import { ArrowRight, Phone } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"
import heroImage from "../assets/images/hero.jpg"

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-stone-950 pt-24"
    >
      {/* Background glow */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-600/10 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-800/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">

        {/* ================= TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            Crafting beautiful spaces
          </p>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Furniture made
            <span className="block text-amber-500">
              for your home.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-400">
            At Pazuri Homes, we transform ideas into beautiful,
            functional furniture. From custom kitchens and wardrobes
            to living rooms, bedrooms and complete home interiors.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            {/* Portfolio */}
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-7 py-3.5 font-semibold text-white transition hover:bg-amber-500"
            >
              Explore Our Work
              <ArrowRight size={18} />
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-700 px-7 py-3.5 font-semibold text-white transition hover:border-amber-500 hover:text-amber-500"
            >
              <Phone size={18} />
              Request a Quote
            </Link>

          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-8 border-t border-stone-800 pt-7">
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-stone-500">Custom Made</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Quality</p>
              <p className="text-sm text-stone-500">Craftsmanship</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Built</p>
              <p className="text-sm text-stone-500">For Your Space</p>
            </div>
          </div>
        </motion.div>

        {/* ================= HERO IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-800 shadow-2xl">

            <img
              src={heroImage}
              alt="Custom furniture crafted by Pazuri Homes"
              className="h-full w-full object-cover"
            />

            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Image caption */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-md">
              <p className="text-xs uppercase tracking-widest text-amber-500">
                Pazuri Homes
              </p>

              <p className="mt-1 font-semibold text-white">
                Crafted with purpose. Designed for you.
              </p>
            </div>
          </div>

          {/* Decorative frame */}
          <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-3xl border border-amber-600/30" />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero