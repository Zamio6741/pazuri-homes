import {
  ChefHat,
  Home,
  LampDesk,
  Sofa,
  SquareStack,
  Tv,
} from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router-dom"

const services = [
  {
    icon: ChefHat,
    title: "Kitchen Cabinets",
    description:
      "Custom kitchen cabinets designed around your space, style, storage needs and everyday lifestyle.",
  },
  {
    icon: SquareStack,
    title: "Wardrobes",
    description:
      "Beautiful fitted and freestanding wardrobes built to maximize storage while complementing your bedroom.",
  },
  {
    icon: Sofa,
    title: "Living Room Furniture",
    description:
      "Comfortable and stylish sofas, coffee tables and other pieces made for modern living spaces.",
  },
  {
    icon: Home,
    title: "Bedroom Furniture",
    description:
      "Beds, bedside units, dressing tables and complete bedroom furniture crafted to suit your space.",
  },
  {
    icon: Tv,
    title: "TV & Entertainment Units",
    description:
      "Modern TV units and entertainment furniture designed to organize your media space while adding style to your home.",
  },
  {
    icon: LampDesk,
    title: "Custom Furniture",
    description:
      "Have something specific in mind? We turn your ideas, measurements and inspiration into custom-made furniture.",
  },
]

function Services() {
  return (
    <section
      id="services"
      className="bg-stone-50 px-5 py-24 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Furniture for every
            <span className="text-amber-600"> corner of your home.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-stone-600">
            From a single custom piece to furnishing an entire home,
            Pazuri Homes combines thoughtful design, quality materials
            and skilled craftsmanship.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-stone-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-100 transition-colors duration-300 group-hover:bg-amber-600">
                  <Icon
                    size={27}
                    strokeWidth={1.7}
                    className="text-amber-600 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-stone-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-stone-600">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-10 bg-amber-500 transition-all duration-300 group-hover:w-16" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col items-center justify-between gap-5 rounded-3xl bg-stone-900 px-7 py-8 sm:flex-row sm:px-10"
        >
          <div>
            <p className="text-xl font-bold text-white">
              Have a furniture idea?
            </p>

            <p className="mt-1 text-stone-400">
              Let's turn it into something beautiful.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-500"
          >
            Start a Project
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default Services