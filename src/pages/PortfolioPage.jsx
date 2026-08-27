import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import projects from "../data/projects"

const categories = [
  {
    name: "Living Room",
    value: "Living Room Furniture",
    description:
      "Custom furniture designed to make your living space comfortable, stylish and functional.",
    subcategories: [
      "Sofa Sets",
      "TV Units",
      "TV Cabinets",
      "Coffee Tables",
      "Console Tables",
      "Side Tables",
    ],
  },

  {
    name: "Bedroom",
    value: "Bedroom Furniture",
    description:
      "Beautiful bedroom furniture designed around your space, style and storage needs.",
    subcategories: [
      "Beds",
      "Wardrobes",
      "Bedside Tables",
      "Dressing Tables",
    ],
  },

  {
    name: "Dining",
    value: "Dining Furniture",
    description:
      "Dining furniture crafted to bring people together in a comfortable and beautiful space.",
    subcategories: [
      "Dining Tables",
      "Dining Sets",
      "Dining Chairs",
    ],
  },

  {
    name: "Office",
    value: "Office Furniture",
    description:
      "Practical and refined furniture designed for productive and professional workspaces.",
    subcategories: [
      "Office Desks",
      "Office Chairs",
      "Office Cabinets",
      "Reception Furniture",
    ],
  },

  {
    name: "Storage",
    value: "Storage Furniture",
    description:
      "Smart storage solutions designed to keep your home organized without sacrificing style.",
    subcategories: [
      "Shoe Cabinets",
      "Shoe Racks",
      "Shelves",
      "Storage Cabinets",
    ],
  },

  {
    name: "Kitchen",
    value: "Kitchen Cabinets",
    description:
      "Modern kitchen solutions designed around your space, lifestyle and storage requirements.",
    subcategories: [
      "Kitchen Cabinets",
      "Pantry Cabinets",
      "Kitchen Storage",
    ],
  },

  {
    name: "Custom Furniture",
    value: "Custom Furniture",
    description:
      "Unique furniture pieces made specifically around your ideas, measurements and requirements.",
    subcategories: [
      "Custom Pieces",
      "Made-to-Measure Furniture",
    ],
  },
]

function PortfolioPage() {
  return (
    <section className="bg-stone-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Our Collection
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Furniture made for
            <span className="text-amber-600"> your space.</span>
          </h1>

          <p className="mt-6 text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Explore our furniture categories and discover designs crafted
            with care for modern homes, offices and living spaces.
          </p>
        </motion.div>

        {/* ================= CATEGORY GRID ================= */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const categoryProjects = projects.filter(
              (project) => project.category === category.value
            )

            const image = categoryProjects[0]?.images?.[0]

            return (
              <motion.div
                key={category.value}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.07,
                }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* ================= CATEGORY IMAGE ================= */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  {image ? (
                    <>
                      <img
                        src={image}
                        alt={category.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                      <div className="absolute bottom-5 left-5">
                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-800 backdrop-blur-sm">
                          {categoryProjects.length}{" "}
                          {categoryProjects.length === 1
                            ? "Design"
                            : "Designs"}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-stone-200 via-stone-100 to-amber-50">
                      <div className="px-6 text-center">
                        <p className="text-lg font-semibold text-stone-700">
                          {category.name}
                        </p>

                        <p className="mt-1 text-sm text-stone-500">
                          Designs coming soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* ================= CATEGORY CONTENT ================= */}
                <div className="p-6 sm:p-7">

                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-semibold text-stone-900">
                      {category.name}
                    </h2>

                    {categoryProjects.length > 0 && (
                      <span className="shrink-0 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-500">
                        {categoryProjects.length}
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-stone-600">
                    {category.description}
                  </p>

                  {/* ================= SUBCATEGORIES ================= */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.subcategories.map((subcategory) => (
                      <span
                        key={subcategory}
                        className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-xs font-medium text-stone-600"
                      >
                        {subcategory}
                      </span>
                    ))}
                  </div>

                  {/* ================= VIEW CATEGORY ================= */}
                  <Link
                    to={`/portfolio/category/${encodeURIComponent(
                      category.value
                    )}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-800 transition-colors hover:text-amber-600"
                  >
                    Explore {category.name}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ================= CUSTOM PROJECT CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 overflow-hidden rounded-3xl bg-stone-900 px-6 py-12 text-center sm:px-10 sm:py-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Have something different in mind?
          </p>

          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Let's create it for you.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-400 sm:text-base">
            Don't see exactly what you're looking for? Pazuri Homes creates
            custom furniture around your space, measurements, style and
            requirements.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-stone-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg"
          >
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default PortfolioPage