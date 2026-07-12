import { motion } from "framer-motion"

type FinancierLogo = {
  name: string
  src: string
  alt?: string
}

type MobileFinanciersProps = {
  logos: FinancierLogo[]
  title?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const logoVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
}

export function MobileFinanciers({
  logos,
  title = "Financiadores que confían en nosotros",
}: MobileFinanciersProps) {
  return (
    <section className="bg-hospital-grayBg px-4 py-4 md:hidden">
      <div className="mx-auto max-w-sm">

    {title && (
      <motion.h2
        className="mb-10 text-center text-2xl font-bold text-hospital-dark"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.55,
          ease: "easeOut",
        }}
      >
        {title}
      </motion.h2>
    )}

        <motion.div
          className="flex flex-col items-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
        >
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={logoVariants}
              className="
                flex min-h-24 w-full items-center justify-center
                rounded-2xl border border-hospital-dark/10
                bg-white px-8 py-5 shadow-sm
              "
            >
              <img
                src={logo.src}
                alt={logo.alt ?? logo.name}
                loading="lazy"
                className="max-h-14 w-auto max-w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}