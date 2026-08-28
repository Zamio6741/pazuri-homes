import { motion } from "motion/react"

import logo from "../assets/logo/pazuri-logo.png"

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-stone-950"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.3, 0.12],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[30rem] w-[30rem] rounded-full bg-amber-600/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.08, 0.2, 0.08],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[22rem] w-[22rem] rounded-full bg-amber-400/10 blur-3xl"
      />

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative flex w-full max-w-lg flex-col items-center px-8">

        {/* ================= LARGE LOGO ================= */}

        <motion.div
          initial={{ opacity: 1, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: [0.9, 1.03, 1],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80"
        >
          <img
            src={logo}
            alt="Pazuri Homes"
            className="h-full w-full scale-110 object-contain drop-shadow-[0_0_45px_rgba(245,158,11,0.3)]"
          />
        </motion.div>

        {/* ================= BRAND ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="mt-6 text-center"
        >
          <h1 className="text-3xl font-bold tracking-[0.25em] text-white sm:text-4xl">
            PAZURI
          </h1>

          <p className="mt-2 text-xs uppercase tracking-[0.55em] text-amber-500 sm:text-sm">
            Homes
          </p>
        </motion.div>

        {/* ================= LOADING LINE ================= */}

        <div className="mt-14 h-px w-full max-w-md overflow-hidden bg-stone-800">
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

        {/* ================= LOADING TEXT ================= */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-6 text-xs uppercase tracking-[0.35em] text-stone-500"
        >
          Crafting your experience
        </motion.p>

      </div>
    </motion.div>
  )
}

export default LoadingScreen