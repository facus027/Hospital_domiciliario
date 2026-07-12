import { motion } from "framer-motion"
import { equipment } from "../../data/siteData"
import { AnimatedSection } from "../ui/AnimatedSection"
import { Container } from "../ui/Container"

export function Equipment() {
  return (
    <AnimatedSection id="equipamiento" className="bg-hospital-grayBg lg:py-24 py-10 mx-auto">
      <Container>
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-bold text-hospital-dark md:text-7xl">
            Equipamiento
          </h2>

          <p className="lg:mt-12 mt-6 text-xl  text-hospital-dark md:text-4xl">
           Disponemos de equipamiento médico y logística propia para garantizar una atención segura y eficiente.
          </p>
        </div>

        <div className="mx-auto mt-8 lg:mt-16 grid gap-4 md:grid-cols-2 md:gap-x-8">
          {equipment.map((equipment, index) => (
            <motion.div
              key={equipment}
              className="rounded-full bg-hospital-dark px-7 py-4 text-lg font-bold text-white shadow-sm transition hover:-translate-y-1 hover:bg-hospital-green hover:shadow-soft md:px-12 md:text-3xl"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: index * 0.04,
                ease: "easeOut",
              }}
            >
              {equipment}
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}