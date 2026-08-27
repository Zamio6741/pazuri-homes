import { motion } from "motion/react"
import { MessageCircle, Ruler, Sparkles } from "lucide-react"

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.currentTarget

    const name = form.name.value.trim()
    const phone = form.phone.value.trim()
    const email = form.email.value.trim()
    const service = form.service.value
    const space = form.space.value
    const budget = form.budget.value
    const measurements = form.measurements.value
    const message = form.message.value.trim()

    const whatsappMessage = `Hello Pazuri Homes,

I'd like to discuss a furniture project and request a quote.

CUSTOMER DETAILS
Name: ${name}
Phone: ${phone}
Email: ${email}

PROJECT DETAILS
What I need: ${service}
Space type: ${space}
Approximate budget: ${budget}
Measurements available: ${measurements}

PROJECT IDEA
${message}

Thank you.`

    const whatsappUrl = `https://wa.me/254742795286?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="bg-stone-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 sm:text-sm sm:tracking-[0.3em]">
            <Sparkles size={15} className="shrink-0 sm:h-4 sm:w-4" />
            Start Your Project
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's design something
            <span className="text-amber-400"> beautiful.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-400 sm:mt-6 sm:text-lg sm:leading-8">
            Tell us about your space, your furniture needs and your vision.
            We'll help you turn your idea into something made for your home.
          </p>
        </motion.div>

        {/* ================= CONTACT AREA ================= */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:mt-16 lg:grid-cols-2">

          {/* ================= CONTACT INFORMATION ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="h-fit rounded-2xl border border-stone-800 bg-stone-900 p-5 sm:rounded-3xl sm:p-8 lg:sticky lg:top-28 lg:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 sm:text-sm sm:tracking-[0.2em]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-tight text-white sm:mt-4 sm:text-3xl">
              Let's talk about your space.
            </h2>

            <p className="mt-4 text-sm leading-6 text-stone-400 sm:text-base sm:leading-7">
              Whether you need a single piece of furniture or a complete
              interior setup, tell us what you have in mind and we'll help
              you plan the next step.
            </p>

            <div className="mt-7 space-y-6 sm:mt-10 sm:space-y-8">

              {/* Phone */}
              <div>
                <p className="text-xs text-stone-500 sm:text-sm">
                  Phone
                </p>

                <a
                  href="tel:+254742795286"
                  className="mt-1.5 block text-lg text-white transition-colors hover:text-amber-400 sm:mt-2 sm:text-xl"
                >
                  +254 742 795 286
                </a>
              </div>

              {/* Email */}
              <div>
                <p className="text-xs text-stone-500 sm:text-sm">
                  Email
                </p>

                <a
                  href="mailto:pazurihomeskenya@gmail.com"
                  className="mt-1.5 block break-words text-base text-white transition-colors hover:text-amber-400 sm:mt-2 sm:text-xl"
                >
                  pazurihomeskenya@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="text-xs text-stone-500 sm:text-sm">
                  Location
                </p>

                <p className="mt-1.5 text-lg text-white sm:mt-2 sm:text-xl">
                  Kenya
                </p>
              </div>

              {/* WhatsApp */}
              <div className="border-t border-stone-800 pt-6 sm:pt-8">
                <a
                  href="https://wa.me/254742795286"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-stone-800 px-4 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-400 hover:text-stone-950 sm:gap-3 sm:px-5 sm:py-4 sm:text-base"
                >
                  <MessageCircle size={19} className="shrink-0" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* ================= PROJECT FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl border border-stone-800 bg-stone-900 p-5 sm:rounded-3xl sm:p-8 lg:p-10"
          >
            {/* Form Header */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-stone-950 sm:h-12 sm:w-12">
                <Ruler size={20} className="sm:h-[22px] sm:w-[22px]" />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500 sm:text-sm sm:tracking-[0.2em]">
                  Design Your Space
                </p>

                <h2 className="mt-1.5 text-xl font-semibold leading-tight text-white sm:mt-2 sm:text-2xl">
                  Tell us what you're looking for
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">

              {/* ================= CUSTOMER DETAILS ================= */}

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-stone-300"
                >
                  Your name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. John Kamau"
                  required
                  autoComplete="name"
                  className="min-h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base text-white outline-none placeholder:text-stone-600 focus:border-amber-400 sm:px-5 sm:py-4"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-stone-300"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+254..."
                    required
                    autoComplete="tel"
                    className="min-h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base text-white outline-none placeholder:text-stone-600 focus:border-amber-400 sm:px-5 sm:py-4"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-stone-300"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    autoComplete="email"
                    className="min-h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base text-white outline-none placeholder:text-stone-600 focus:border-amber-400 sm:px-5 sm:py-4"
                  />
                </div>

              </div>

              {/* ================= WHAT THEY NEED ================= */}

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-medium text-stone-300"
                >
                  What are you looking for?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base text-stone-300 outline-none focus:border-amber-400 sm:px-5 sm:py-4"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Kitchen Cabinets">
                    Kitchen Cabinets
                  </option>

                  <option value="Wardrobes">
                    Wardrobes
                  </option>

                  <option value="Living Room Furniture">
                    Living Room Furniture
                  </option>

                  <option value="Bedroom Furniture">
                    Bedroom Furniture
                  </option>

                  <option value="TV / Media Unit">
                    TV / Media Unit
                  </option>

                  <option value="Office Furniture">
                    Office Furniture
                  </option>

                  <option value="Dining Furniture">
                    Dining Furniture
                  </option>

                  <option value="Full House Furniture">
                    Full House Furniture
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* ================= SPACE TYPE ================= */}

              <div>
                <label
                  htmlFor="space"
                  className="mb-2 block text-sm font-medium text-stone-300"
                >
                  What type of space is it?
                </label>

                <select
                  id="space"
                  name="space"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base text-stone-300 outline-none focus:border-amber-400 sm:px-5 sm:py-4"
                >
                  <option value="" disabled>
                    Select your space
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>

                  <option value="House">
                    House
                  </option>

                  <option value="Office">
                    Office
                  </option>

                  <option value="Commercial Space">
                    Commercial Space
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* ================= BUDGET ================= */}

              <div>
                <label
                  htmlFor="budget"
                  className="mb-2 block text-sm font-medium text-stone-300"
                >
                  Approximate budget
                </label>

                <select
                  id="budget"
                  name="budget"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base text-stone-300 outline-none focus:border-amber-400 sm:px-5 sm:py-4"
                >
                  <option value="" disabled>
                    Select your budget range
                  </option>

                  <option value="Under KSh 50,000">
                    Under KSh 50,000
                  </option>

                  <option value="KSh 50,000 – 100,000">
                    KSh 50,000 – 100,000
                  </option>

                  <option value="KSh 100,000 – 200,000">
                    KSh 100,000 – 200,000
                  </option>

                  <option value="KSh 200,000+">
                    KSh 200,000+
                  </option>

                  <option value="Not sure yet">
                    I'm not sure yet
                  </option>
                </select>
              </div>

              {/* ================= MEASUREMENTS ================= */}

              <div>
                <label
                  htmlFor="measurements"
                  className="mb-2 block text-sm font-medium text-stone-300"
                >
                  Do you already have measurements?
                </label>

                <select
                  id="measurements"
                  name="measurements"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base text-stone-300 outline-none focus:border-amber-400 sm:px-5 sm:py-4"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Yes, I have measurements">
                    Yes, I have measurements
                  </option>

                  <option value="No, I need help measuring">
                    No, I need help measuring
                  </option>

                  <option value="Not sure">
                    I'm not sure
                  </option>
                </select>
              </div>

              {/* ================= PROJECT DETAILS ================= */}

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-stone-300"
                >
                  Tell us about your idea
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us what you'd like us to build, the style you prefer, the size of the space, colours, materials or anything else that might help..."
                  required
                  className="w-full resize-y rounded-xl border border-stone-800 bg-stone-950 px-4 py-3.5 text-base leading-7 text-white outline-none placeholder:text-stone-600 focus:border-amber-400 sm:px-5 sm:py-4"
                />
              </div>

              {/* ================= SUBMIT ================= */}

              <button
                type="submit"
                className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-semibold text-stone-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg active:scale-[0.99] sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
              >
                <MessageCircle size={19} className="shrink-0 sm:h-5 sm:w-5" />
                <span>Send Request on WhatsApp</span>
              </button>

              <p className="px-2 text-center text-xs leading-5 text-stone-600">
                Your project details will be prepared in WhatsApp so you can
                send them directly to Pazuri Homes.
              </p>

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  )
}

export default ContactPage