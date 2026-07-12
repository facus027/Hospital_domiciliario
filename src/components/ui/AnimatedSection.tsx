import { motion } from "framer-motion"
import type { ReactNode } from "react"

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({ children, className = "", id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  )
}