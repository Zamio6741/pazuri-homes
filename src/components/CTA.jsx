import { motion } from "motion/react"
import { Link } from "react-router-dom"

function CTA() {
  return (
    <section className="bg-stone-900 px-6 py-24 sm:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-stone-800 bg-stone-950 px-8 py-16 text-center sm:px-12 lg:px-20 lg:py-20"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
          Start Your Project
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Let's create something
          <span className="text-amber-400"> beautiful.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-400">
          Have an idea for your home? Tell us what you have in mind and let's
          turn your space into something you'll love.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          {/* Contact Page */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-amber-400 px-8 py-4 font-semibold text-stone-950 transition-colors duration-300 hover:bg-amber-300"
            >
              Start a Project
            </Link>
          </motion.div>

          {/* Portfolio Page */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex rounded-full border border-stone-700 px-8 py-4 font-semibold text-white transition-colors duration-300 hover:border-stone-500"
            >
              View Our Work
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default CTA