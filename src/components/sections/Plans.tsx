import { motion } from "framer-motion"
import { GoDotFill } from "react-icons/go"

import { plans } from "../../data/siteData"
import { AnimatedSection } from "../ui/AnimatedSection"
import { Container } from "../ui/Container"

export function Plans() {
  return (
    <AnimatedSection
      id="planes"
      className="mx-auto bg-hospital-grayBg py-14 sm:py-16 lg:py-24"
    >
      <Container>
        <h2 className="text-center text-3xl font-semibold text-hospital-dark sm:text-4xl lg:text-6xl xl:text-7xl">
          Nuestros Planes
        </h2>

        <div className="mt-12 space-y-12 sm:mt-16 lg:mt-24 lg:space-y-14">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              className="relative rounded-3xl border-2 border-hospital-green bg-white px-5 pb-7 pt-12 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:px-7 sm:pt-14 md:px-10"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: "easeOut",
              }}
            >
              <div className="absolute left-1/2 top-0 w-[88%] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-hospital-dark px-4 py-3 text-center text-white shadow-md sm:px-8 sm:py-4 lg:py-5">
                <h3 className="text-base font-normal sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  {plan.name.includes(" ") ? (
                    <>
                      {plan.name.split(" ").slice(0, -1).join(" ")}{" "}
                      <strong>{plan.name.split(" ").slice(-1)}</strong>
                    </>
                  ) : (
                    plan.name
                  )}
                </h3>
              </div>

              <div className="lg:mt-4 space-y-4 sm:mt-6 sm:space-y-5">
                <p className="text-sm font-semibold leading-relaxed text-hospital-text sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
                  {plan.subtitle}
                </p>

                {plan.text && (
                  <p className="text-sm leading-relaxed text-hospital-text sm:text-base md:text-lg lg:text-2xl xl:text-3xl">
                    {plan.text}
                  </p>
                )}

                <div>
                  <h4 className="mb-2 text-xl font-bold text-hospital-dark sm:text-2xl lg:text-3xl xl:text-4xl">
                    {plan.name === "Plan Acompañar"
                      ? "¿Por qué elegirnos?"
                      : plan.name === "Plan Empresa Salud"
                        ? "Servicios"
                        : plan.name === "Plan Internación Inmediata"
                          ? "Beneficios"
                          : "Incluye"}
                  </h4>

                  <ul className="grid gap-2">
                    {plan.bullets.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-hospital-text sm:text-base md:text-lg lg:text-2xl xl:text-3xl"
                      >
                        <GoDotFill
                          className="mt-1.5 shrink-0 text-hospital-text sm:mt-2"
                          size={12}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}