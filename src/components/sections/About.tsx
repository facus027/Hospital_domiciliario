import { useState } from "react"
import { motion } from "framer-motion"

import { AnimatedSection } from "../ui/AnimatedSection"
import { Container } from "../ui/Container"

export function About() {
  const [showFullText, setShowFullText] = useState(false)

  return (
    <AnimatedSection
      id="nosotros"
      className="bg-white text-fontFamily-helvetica-1"
    >
      <Container>
        <div className="overflow-hidden bg-hospital-dark shadow-soft">
          <div className="px-5 py-12 sm:px-8 lg:px-16 xl:px-24 xl:py-14 lg:mx-5 lg:my-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="mx-auto flex w-full flex-col">
                <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  Nosotros
                </h2>

                <div
                  className={`relative mt-4 overflow-hidden transition-all duration-300 ${
                    showFullText ? "max-h-[900px]" : "max-h-[210px] sm:max-h-none"
                  }`}
                >
                  <p className="text-base leading-relaxed tracking-wide text-white sm:text-lg md:text-xl lg:text-3xl">
                    Somos una empresa mendocina pionera en servicios de
                    cuidados paliativos domiciliarios y atención de pacientes
                    con enfermedades crónicas y oncológicas. <br />
                    Desde nuestros inicios trabajamos con un enfoque centrado
                    en el paciente y su entorno familiar, desarrollando modelos
                    de atención seguros, humanizados y adaptados a cada
                    necesidad. <br />
                    Contamos con un equipo interdisciplinario altamente
                    capacitado y con amplia experiencia en atención domiciliaria
                    integral.
                  </p>

                  {!showFullText && (
                    <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-hospital-dark to-transparent sm:hidden" />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setShowFullText(!showFullText)}
                  className="mt-4 w-fit rounded-full border border-hospital-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-hospital-green sm:hidden"
                >
                  {showFullText ? "Leer menos" : "Leer más"}
                </button>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="h-full rounded-3xl border-2 border-hospital-green p-5 sm:p-6">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Misión
                  </h3>

                  <p className="mt-3 text-base leading-relaxed tracking-wide text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    Brindar servicios de atención de salud e internación
                    domiciliaria de alta calidad, a través de profesionales
                    propios, tanto en modalidad presencial como virtual,
                    promoviendo la prevención, el bienestar y el cuidado
                    integral de las personas, llevando tranquilidad y contención
                    al paciente y su grupo familiar.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1 }}
              >
                <div className="h-full rounded-3xl border-2 border-hospital-green p-5 sm:p-6">
                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    Visión
                  </h3>

                  <p className="mt-3 text-base leading-relaxed tracking-wide text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    Posicionarnos como líderes en el área de cuidados paliativos
                    oncológicos e internación domiciliaria, revolucionando la
                    atención de la salud mediante la innovación y la
                    incorporación de tecnología de avanzada.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}