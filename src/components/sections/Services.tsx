import { motion } from "framer-motion"
import { services } from "../../data/siteData"
import { AnimatedSection } from "../ui/AnimatedSection"
import { Container } from "../ui/Container"

export function Services() {
  return (
    <AnimatedSection id="servicios" className="bg-hospital-grayBg py-10 lg:py-24">
      <Container>
        <div className="mx-auto w-full text-center">
          <h2 className="text-4xl font-bold text-hospital-dark md:text-7xl">
            Servicios Incluidos
          </h2>

          <h3 className="lg:mt-12 mt-6 text-2xl font-bold text-hospital-dark md:text-4xl">
            Profesionales de la salud
          </h3>

          <p className="mt-3 text-xl leading-8 tracking-wide text-hospital-dark md:text-4xl">
            Todos nuestros planes cuentan con equipos interdisciplinarios
            especializados:
          </p>
        </div>

        <div className="mx-auto lg:mt-16 mt-8 grid gap-4 md:grid-cols-2 md:gap-x-8">
          {services.map((service, index) => (
            <motion.div
              key={service}
              className="rounded-full bg-hospital-dark px-8 py-4 text-lg font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-hospital-green hover:shadow-soft md:px-12 md:text-3xl"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
                ease: "easeOut",
              }}
            >
              {service}
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}