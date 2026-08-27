import { useEffect, useState } from "react"
import { ArrowLeft, ChevronLeft, ChevronRight, MapPin, X } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { motion, AnimatePresence } from "motion/react"

import projects from "../data/projects"

function Projectpage() {
  const { slug } = useParams()

  const project = projects.find(
    (item) => item.slug === slug
  )

  const [selectedImage, setSelectedImage] = useState(null)

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null)
  }

  // Show previous image
  const showPreviousImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null

      return current === 0
        ? project.images.length - 1
        : current - 1
    })
  }

  // Show next image
  const showNextImage = () => {
    setSelectedImage((current) => {
      if (current === null) return null

      return current === project.images.length - 1
        ? 0
        : current + 1
    })
  }

  // Keyboard controls
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox()
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage()
      }

      if (event.key === "ArrowRight") {
        showNextImage()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Prevent page scrolling while lightbox is open
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  // Project not found
  if (!project) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-stone-50 px-5">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
            Project Not Found
          </p>

          <h1 className="mt-4 text-4xl font-bold text-stone-900">
            We couldn't find that project.
          </h1>

          <Link
            to="/portfolio"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="bg-stone-50 px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* ================= BACK ================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition hover:text-amber-600"
            >
              <ArrowLeft size={18} />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* ================= HEADER ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              {project.category}
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              {project.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm text-stone-500">
              <MapPin size={17} className="text-amber-600" />
              {project.location}
            </div>
          </motion.div>

          {/* ================= GALLERY ================= */}
          {project.images.length > 0 ? (
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {project.images.map((image, index) => (
                <motion.button
                  type="button"
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -4 }}
                  className={`group relative overflow-hidden rounded-3xl bg-stone-200 text-left focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-4 ${
                    index === 0
                      ? "sm:col-span-2 sm:row-span-2"
                      : ""
                  }`}
                >

                  {/* Equal image sizing */}
                  <div className="aspect-[4/3] w-full">
                    <img
                      src={image}
                      alt={`${project.title} - ${index + 1}`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                  {/* View image label */}
                  <div className="absolute bottom-4 left-4 translate-y-2 rounded-full bg-black/60 px-4 py-2 text-xs font-semibold text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Image
                  </div>

                </motion.button>
              ))}

            </div>
          ) : (
            <div className="mt-14 flex min-h-[400px] items-center justify-center rounded-3xl border border-dashed border-stone-300 bg-white">
              <div className="px-6 text-center">
                <p className="text-lg font-semibold text-stone-800">
                  Project photos coming soon
                </p>

                <p className="mt-2 text-sm text-stone-500">
                  We're preparing the project gallery.
                </p>
              </div>
            </div>
          )}

          {/* ================= BOTTOM CTA ================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 rounded-3xl bg-stone-900 px-7 py-10 text-center sm:px-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
              Like what you see?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Let's create something for your home.
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-stone-400">
              Tell us what you have in mind and we'll help bring your
              furniture idea to life.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex rounded-full bg-amber-500 px-7 py-3.5 font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Start a Project
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ================= IMAGE LIGHTBOX ================= */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={closeLightbox}
          >

            {/* ================= CLOSE BUTTON ================= */}
            <motion.button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image viewer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-amber-400 hover:text-stone-950 sm:right-8 sm:top-8"
            >
              <X size={24} />
            </motion.button>

            {/* ================= IMAGE COUNTER ================= */}
            <div className="absolute left-4 top-5 z-20 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm sm:left-8 sm:top-8">
              {selectedImage + 1} / {project.images.length}
            </div>

            {/* ================= PREVIOUS ================= */}
            {project.images.length > 1 && (
              <motion.button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showPreviousImage()
                }}
                aria-label="Previous image"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-amber-400 hover:text-stone-950 sm:left-8 sm:h-14 sm:w-14"
              >
                <ChevronLeft size={28} />
              </motion.button>
            )}

            {/* ================= IMAGE ================= */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={project.images[selectedImage]}
                alt={`${project.title} - ${selectedImage + 1}`}
                className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
              />
            </motion.div>

            {/* ================= NEXT ================= */}
            {project.images.length > 1 && (
              <motion.button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  showNextImage()
                }}
                aria-label="Next image"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-amber-400 hover:text-stone-950 sm:right-8 sm:h-14 sm:w-14"
              >
                <ChevronRight size={28} />
              </motion.button>
            )}

            {/* ================= PROJECT TITLE ================= */}
            <div className="absolute bottom-5 left-1/2 z-20 w-[calc(100%-2rem)] -translate-x-1/2 text-center sm:bottom-8">
              <p className="text-sm font-medium text-stone-300">
                {project.title}
              </p>

              <p className="mt-1 text-xs text-stone-500">
                Use ← → to navigate · Press Esc to close
              </p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Projectpage