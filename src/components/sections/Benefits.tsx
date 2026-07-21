import { motion } from "framer-motion"

import { AnimatedSection } from "../ui/AnimatedSection"

const benefits = [
  {
    title: "Profesionalismo",
    icon: "/elementos web-03.png",
  },
  {
    title: "Calidad humana",
    icon: "/elementos web-05.png",
  },
  {
    title: "Tecnología aplicada a la salud",
    icon: "/elementos web-04.png",
  },
  {
    title: "Respuesta rápida y eficiente",
    icon: "/elementos web-06.png",
  },
]

export function Benefits() {
  return (
    <AnimatedSection className="bg-hospital-grayBg px-4 py-14 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-10/12">
        <div className="mx-auto text-center lg:text-left">
          <h2 className="text-2xl font-bold leading-tight text-hospital-dark sm:text-3xl lg:text-5xl">
            Atención profesional, humana y personalizada
          </h2>

          <p className="mt-4 text-base font-medium leading-relaxed text-hospital-text sm:text-lg md:text-xl lg:text-3xl">
            Brindamos servicios de internación domiciliaria, cuidados
            paliativos, atención de pacientes crónicos y programas de
            acompañamiento integral, priorizando el bienestar del paciente y la
            tranquilidad de su familia.
            <br className="" />
          </p>
            <p className="mt-4 text-base font-medium leading-relaxed text-hospital-text sm:text-lg md:text-xl lg:text-3xl">Nuestro modelo de atención combina:</p>
        </div>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4">
          {benefits.map((item, index) => (
            <motion.article
              key={item.title}
              className="group rounded-2xl border-2 border-hospital-green bg-white/40 p-5 text-center transition hover:-translate-y-1 hover:shadow-soft"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 py-4">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl sm:h-28 sm:w-28 lg:h-36 lg:w-32">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </div>

                <h3 className="text-xl font-semibold leading-tight text-hospital-dark sm:text-2xl lg:text-3xl">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}