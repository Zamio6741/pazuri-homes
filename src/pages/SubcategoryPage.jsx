import { useState } from "react"
import { motion } from "motion/react"
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  MessageCircle,
  Maximize2,
  X,
} from "lucide-react"
import { Link, useParams } from "react-router-dom"

import projects from "../data/projects"

function SubcategoryPage() {
  const { category, subcategory } = useParams()

  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const categoryName = decodeURIComponent(category || "")
  const subcategoryName = decodeURIComponent(subcategory || "")

  // ================= MATCH PROJECTS =================

  const subcategoryProjects = projects.filter(
    (project) =>
      project.category === categoryName &&
      project.subcategory === subcategoryName
  )

  // ================= CREATE PHOTO COLLECTION =================

  const photos = subcategoryProjects.flatMap((project) =>
    (project.images || []).map((image, index) => ({
      image,
      title: project.title,
      description: project.description,
      projectSlug: project.slug,
      imageNumber: index + 1,
    }))
  )

  // ================= OPEN PHOTO =================

  const openPhoto = (index) => {
    setSelectedPhoto(index)
  }

  // ================= CLOSE PHOTO =================

  const closePhoto = () => {
    setSelectedPhoto(null)
  }

  // ================= NEXT PHOTO =================

  const nextPhoto = () => {
    setSelectedPhoto((current) => {
      if (current === null) return null

      return current === photos.length - 1 ? 0 : current + 1
    })
  }

  // ================= PREVIOUS PHOTO =================

  const previousPhoto = () => {
    setSelectedPhoto((current) => {
      if (current === null) return null

      return current === 0 ? photos.length - 1 : current - 1
    })
  }

  // ================= WHATSAPP =================

  const whatsappMessage = `Hello Pazuri Homes,

I'm interested in your ${subcategoryName} designs.

I'd like to see what options you have available and discuss a custom design.

Thank you.`

  const whatsappUrl = `https://wa.me/254742795286?text=${encodeURIComponent(
    whatsappMessage
  )}`

  return (
    <>
      <section className="min-h-screen bg-stone-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">

          {/* ================= BACK ================= */}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={`/portfolio/category/${encodeURIComponent(categoryName)}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition-colors hover:text-amber-600"
            >
              <ArrowLeft size={18} />
              Back to {categoryName}
            </Link>
          </motion.div>


          {/* ================= HEADER ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-10 max-w-3xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              {categoryName}
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
              {subcategoryName}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
              Explore our {subcategoryName.toLowerCase()} designs, crafted
              with attention to detail and made around your space, style and
              needs.
            </p>
          </motion.div>


          {/* ================= PHOTO COLLECTION ================= */}

          {photos.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="mt-14"
              >
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
                      Our Collection
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-stone-900 sm:text-3xl">
                      {subcategoryName} Designs
                    </h2>
                  </div>

                  <span className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-stone-500 shadow-sm">
                    {photos.length}{" "}
                    {photos.length === 1 ? "Photo" : "Photos"}
                  </span>
                </div>
              </motion.div>


              {/* ================= GALLERY ================= */}

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                {photos.map((photo, index) => (
                  <motion.article
                    key={`${photo.projectSlug}-${photo.imageNumber}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                    whileHover={{ y: -6 }}
                    className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                  >

                    {/* ================= PHOTO ================= */}

                    <button
                      type="button"
                      onClick={() => openPhoto(index)}
                      className="relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-stone-200 text-left"
                      aria-label={`View ${subcategoryName} photo ${index + 1}`}
                    >
                      <img
                        src={photo.image}
                        alt={`${subcategoryName} design ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* View Photo */}

                      <div className="absolute bottom-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-stone-900 shadow-lg backdrop-blur-sm transition-colors hover:bg-amber-400">
                          <Maximize2 size={15} />
                          View Photo
                        </span>
                      </div>

                      {/* Collection Label */}

                      <div className="absolute bottom-4 left-4">
                        <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-stone-800 backdrop-blur-sm">
                          Custom Design
                        </span>
                      </div>
                    </button>


                    {/* ================= PHOTO INFO ================= */}

                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl font-semibold text-stone-900">
                        {photo.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        Custom-made around your space and requirements.
                      </p>
                    </div>

                  </motion.article>
                ))}

              </div>


              {/* ================= REQUEST CTA ================= */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mt-16 rounded-3xl bg-stone-900 px-6 py-12 text-center sm:px-10 sm:py-14"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">
                  Like what you see?
                </p>

                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Let's create your {subcategoryName.toLowerCase()}.
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-400 sm:text-base">
                  Choose a design you like or share your own idea. Pazuri Homes
                  can customize the furniture to your measurements, preferred
                  materials, style and space.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-stone-950 transition-all duration-300 hover:bg-amber-300 hover:shadow-lg"
                >
                  <MessageCircle size={18} />
                  Ask About {subcategoryName}
                </a>
              </motion.div>
            </>
          ) : (

            /* ================= NO PHOTOS ================= */

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-14 rounded-3xl border border-stone-200 bg-white px-6 py-16 text-center shadow-sm sm:px-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
                {subcategoryName}
              </p>

              <h2 className="mt-4 text-3xl font-semibold text-stone-900">
                Designs coming soon.
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base">
                We are currently adding more{" "}
                {subcategoryName.toLowerCase()} designs to the Pazuri Homes
                collection.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-400 px-7 py-3.5 font-semibold text-stone-950 transition-colors hover:bg-amber-300"
              >
                <MessageCircle size={18} />
                Ask About {subcategoryName}
              </a>
            </motion.div>
          )}

        </div>
      </section>


      {/* ========================================================= */}
      {/* ===================== PHOTO LIGHTBOX ==================== */}
      {/* ========================================================= */}

      {selectedPhoto !== null && photos[selectedPhoto] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closePhoto}
        >

          {/* ================= CLOSE ================= */}

          <button
            type="button"
            onClick={closePhoto}
            className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-amber-400 hover:text-stone-950 sm:right-6 sm:top-6"
            aria-label="Close photo"
          >
            <X size={24} />
          </button>


          {/* ================= PHOTO COUNTER ================= */}

          <div className="absolute left-4 top-4 z-[110] rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md sm:left-6 sm:top-6">
            {selectedPhoto + 1} / {photos.length}
          </div>


          {/* ================= PREVIOUS ================= */}

          {photos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                previousPhoto()
              }}
              className="absolute left-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-amber-400 hover:text-stone-950 sm:left-6 sm:h-14 sm:w-14"
              aria-label="Previous photo"
            >
              <ArrowLeftCircle size={30} />
            </button>
          )}


          {/* ================= NEXT ================= */}

          {photos.length > 1 && (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                nextPhoto()
              }}
              className="absolute right-3 top-1/2 z-[110] flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:bg-amber-400 hover:text-stone-950 sm:right-6 sm:h-14 sm:w-14"
              aria-label="Next photo"
            >
              <ArrowRightCircle size={30} />
            </button>
          )}


          {/* ================= LARGE PHOTO ================= */}

          <motion.div
            key={selectedPhoto}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photos[selectedPhoto].image}
              alt={`${subcategoryName} design ${selectedPhoto + 1}`}
              className="max-h-[85vh] max-w-[88vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>

        </div>
      )}
    </>
  )
}

export default SubcategoryPage