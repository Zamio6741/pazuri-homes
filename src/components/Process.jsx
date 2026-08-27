import { motion } from "motion/react"

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share your ideas, requirements and the kind of space you want to transform.",
  },
  {
    number: "02",
    title: "We Design & Plan",
    description:
      "We discuss measurements, materials, finishes and design details to create the right solution.",
  },
  {
    number: "03",
    title: "We Build",
    description:
      "Our craftsmen bring the design to life with careful construction and attention to detail.",
  },
  {
    number: "04",
    title: "We Transform Your Space",
    description:
      "Your finished furniture or interior work is installed and ready to become part of your home.",
  },
]

function Process() {
  return (
    <section className="bg-stone-950 px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
            Our Process
          </p>

          <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            From an idea to a space
            <span className="text-amber-400"> you love.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-400">
            We keep the process simple, personal and focused on getting the
            details right.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-amber-400">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-stone-800 lg:ml-6 lg:block" />
                )}
              </div>

              {/* Content */}
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-amber-400">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-stone-500">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process