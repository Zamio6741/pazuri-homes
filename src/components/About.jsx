import { motion } from "motion/react"

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-stone-950 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            About Pazuri Homes
          </p>

          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            We create spaces that feel
            <span className="text-amber-400"> like home.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-400">
            Pazuri Homes is a furniture and interior carpentry brand dedicated
            to transforming houses into beautiful, functional and comfortable
            spaces.
          </p>

          <p className="mt-5 max-w-xl leading-7 text-stone-500">
            From custom furniture to complete interior woodwork, we combine
            skilled craftsmanship, quality materials and thoughtful design to
            create pieces that fit your space and your lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <p className="text-3xl font-semibold text-white">Quality</p>
              <p className="mt-1 text-sm text-stone-500">Built to last</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-white">Custom</p>
              <p className="mt-1 text-sm text-stone-500">Made for your space</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-white">Craft</p>
              <p className="mt-1 text-sm text-stone-500">Made with care</p>
            </div>
          </div>
        </motion.div>

        {/* Visual panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-stone-800 bg-stone-900 p-8 sm:p-10">
            <div className="mb-10 flex items-center justify-between">
              <span className="text-sm uppercase tracking-[0.25em] text-stone-500">
                Our Philosophy
              </span>

              <span className="h-2 w-2 rounded-full bg-amber-400" />
            </div>

            <blockquote className="text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              “Good furniture should not only fill a room. It should become
              part of the way you live.”
            </blockquote>

            <div className="mt-10 h-px bg-stone-800" />

            <p className="mt-6 text-sm leading-6 text-stone-500">
              Thoughtful design. Skilled craftsmanship. Beautiful spaces.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default About