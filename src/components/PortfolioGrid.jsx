import { motion } from "motion/react"
import { Link } from "react-router-dom"

import projects from "../data/projects"

function PortfolioGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          whileHover={{ y: -6 }}
          className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
          {/* ================= IMAGE ================= */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
            {project.images.length > 0 ? (
              <>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-stone-100 to-amber-50" />
            )}
          </div>

          {/* ================= CONTENT ================= */}
          <div className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              {project.category}
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-stone-900">
              {project.title}
            </h3>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-stone-600">
              {project.description}
            </p>

            {/* View Project */}
            <Link
              to={`/portfolio/${project.slug}`}
              className="mt-6 inline-flex items-center text-sm font-semibold text-stone-700 transition-colors hover:text-amber-600"
            >
              View Project

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default PortfolioGrid