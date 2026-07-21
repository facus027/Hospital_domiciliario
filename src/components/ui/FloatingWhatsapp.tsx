import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

const phoneNumber = "5492613385555"

const message = encodeURIComponent(
  "¡Hola! Me gustaría recibir información sobre los servicios de Hospital Domiciliario.",
)

export function FloatingWhatsapp() {
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 24,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: 0.5,
      }}
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
        fixed
        bottom-6
        right-6
        z-50

        flex
        h-16
        w-16
        items-center
        justify-center

        rounded-full
        bg-[#25D366]
        text-white

        shadow-[0_8px_24px_rgba(0,0,0,0.25)]

        transition-shadow
        duration-300

        hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]

        focus:outline-none
        focus:ring-4
        focus:ring-[#25D366]/30
      "
    >
      <FaWhatsapp className="text-4xl" />
    </motion.a>
  )
}