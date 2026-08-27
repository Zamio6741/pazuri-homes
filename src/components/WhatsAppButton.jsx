import { MessageCircle } from "lucide-react"
import { motion } from "motion/react"

function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254742795286"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Pazuri Homes on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 1,
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-stone-950 shadow-xl transition-colors duration-300 hover:bg-amber-300 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={27} strokeWidth={2.2} />
    </motion.a>
  )
}

export default WhatsAppButton