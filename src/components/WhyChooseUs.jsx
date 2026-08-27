import { motion } from "motion/react"

const reasons = [
  {
    number: "01",
    title: "Custom Designs",
    description:
      "Every project is designed around your space, needs and personal style.",
  },
  {
    number: "02",
    title: "Quality Craftsmanship",
    description:
      "We focus on strong construction, careful finishing and attention to detail.",
  },
  {
    number: "03",
    title: "Complete Interior Work",
    description:
      "From individual furniture pieces to complete home woodwork, we handle it all.",
  },
  {
    number: "04",
    title: "Built for Your Space",
    description:
      "We measure, design and create furniture that makes the most of your available space.",
  },
]

function WhyChooseUs() {
  return (
    <section className="bg-stone-900 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Craftsmanship you can
            <span className="text-amber-400"> live with.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-400">
            We believe great furniture is about more than appearance. It is
            about quality, functionality and creating something that belongs
            naturally in your home.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-stone-800 bg-stone-800 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="group bg-stone-950 p-8 transition-colors duration-300 hover:bg-stone-900 sm:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium text-amber-400">
                  {reason.number}
                </span>

                <span className="text-2xl text-stone-700 transition-colors duration-300 group-hover:text-amber-400">
                  ↗
                </span>
              </div>

              <h3 className="mt-12 text-2xl font-semibold text-white">
                {reason.title}
              </h3>

              <p className="mt-4 max-w-md leading-7 text-stone-500">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs