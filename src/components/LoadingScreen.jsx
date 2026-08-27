import { motion } from "motion/react"

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-96 w-96 rounded-full bg-amber-600/20 blur-3xl"
      />

      <div className="relative flex w-full max-w-sm flex-col items-center px-8">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex h-20 w-20 items-center justify-center rounded-full border border-amber-500/40 bg-amber-600 text-3xl font-bold text-white shadow-2xl shadow-amber-900/30"
        >
          P
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 text-center"
        >
          <h1 className="text-2xl font-bold tracking-[0.2em] text-white">
            PAZURI
          </h1>

          <p className="mt-1 text-[10px] uppercase tracking-[0.45em] text-amber-500">
            Homes
          </p>
        </motion.div>

        {/* Loading line */}
        <div className="mt-12 h-px w-full overflow-hidden bg-stone-800">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="h-full w-full bg-amber-500"
          />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-5 text-xs uppercase tracking-[0.3em] text-stone-500"
        >
          Crafting your experience
        </motion.p>

      </div>
    </motion.div>
  )
}

export default LoadingScreen