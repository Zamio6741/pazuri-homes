import { motion } from "motion/react"
import { Link } from "react-router-dom"
import projects from "../data/projects"

function Portfolio() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <section className="bg-stone-900 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Featured Work
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A glimpse of what
            <span className="text-amber-400"> we create.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-400">
            From beautiful kitchens and bedrooms to custom living spaces,
            every piece is carefully designed and crafted around you.
          </p>
        </motion.div>

        {/* Homepage Samples */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl border border-stone-800 bg-stone-950"
            >
              {project.images.length > 0 ? (
                <>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 via-stone-950 to-black" />
              )}

              <div className="relative z-10 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Go to full portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-12 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-stone-700 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-stone-950"
          >
            Explore Our Portfolio
            <span className="ml-2">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Portfolio