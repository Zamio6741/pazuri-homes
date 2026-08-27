import { motion } from "motion/react"

const testimonials = [
  {
    quote:
      "The team understood exactly what we wanted and delivered furniture that fits perfectly into our home.",
    name: "Pazuri Homes Client",
    role: "Residential Project",
  },
  {
    quote:
      "The workmanship and attention to detail really stood out. The finished work completely changed the space.",
    name: "Pazuri Homes Client",
    role: "Interior Project",
  },
  {
    quote:
      "From the design to the final installation, the process was smooth and the result was beautiful.",
    name: "Pazuri Homes Client",
    role: "Custom Furniture Project",
  },
]

function Testimonials() {
  return (
    <section className="bg-stone-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Testimonials
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            What our clients
            <span className="text-amber-400"> say.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-stone-800 bg-stone-900 p-8 transition-colors duration-300 hover:border-stone-700"
            >
              <div className="text-3xl text-amber-400">
                “
              </div>

              <p className="mt-5 text-lg leading-8 text-stone-300">
                {testimonial.quote}
              </p>

              <div className="mt-8 border-t border-stone-800 pt-6">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-stone-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials