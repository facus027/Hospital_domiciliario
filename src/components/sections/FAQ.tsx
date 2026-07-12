import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

import { faqItems } from "../../data/siteData"
import { Container } from "../ui/Container"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    )
  }

  return (
    <section
      id="faq"
      className="bg-hospital-grayBg py-12 md:py-7 md:pb-16"
    >
      <Container>
        <motion.div
          className="mx-auto w-11/12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          

          <div className="space-y-3">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              const contentId = `faq-answer-${index}`
              const buttonId = `faq-question-${index}`

              return (
                <motion.article
                  key={item.question}
                  className="overflow-hidden border border-hospital-dark/10 bg-hospital-dark text-white shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => handleToggle(index)}
                      className="
                        flex w-full items-center justify-between gap-5
                        px-3 py-5 text-left
                        transition
                        hover:bg-white/5
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-inset
                        focus-visible:ring-white
                        md:px-7
                      "
                    >
                      <span className="font-bold leading-6">
                        {item.question}
                      </span>

                      <ChevronDown
                        size={22}
                        aria-hidden="true"
                        className={`shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.3,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <div className="border-t border-white/15 px-5 pb-6 pt-5 text-sm leading-6 text-white/90 md:px-7 md:text-base md:leading-7">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}