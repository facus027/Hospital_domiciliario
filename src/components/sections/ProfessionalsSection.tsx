import { useState } from "react"
import { motion } from "framer-motion"

import { ProfessionalUploadModal } from "../modals/ProfessionalUploadModal"
import type { ProfessionalDocumentType } from "../../types/professionalUploadTypes"

interface ProfessionalOption {
  type: ProfessionalDocumentType
  label: string
}

const professionalOptions: ProfessionalOption[] = [
  {
    type: "curriculum",
    label: "Curriculum Vitae",
  },
  {
    type: "facturacion",
    label: "Facturación",
  },
  {
    type: "certificaciones",
    label: "Certificaciones",
  },
  {
    type: "documentacion-profesional",
    label: "Documentación profesional",
  },
]

export function ProfessionalsSection() {
  const [selectedDocumentType, setSelectedDocumentType] =
    useState<ProfessionalDocumentType | null>(null)

  const openModal = (
    documentType: ProfessionalDocumentType,
  ) => {
    setSelectedDocumentType(documentType)
  }

  const closeModal = () => {
    setSelectedDocumentType(null)
  }

  return (
    <>
      <section
        id="profesionales"
        className="
          bg-[#f2f2f2]
          px-4 py-16
          sm:px-6 sm:py-20
          lg:px-0 lg:py-7
          [font-family:Helvetica,Arial,sans-serif]
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="
            mx-auto w-10/12
            rounded-[2rem]
            border-2 border-[#017f35]
            bg-white
            px-6 py-10
            sm:px-10 sm:py-14
            lg:px-14 lg:py-16
          "
        >
          <header>
            <h2 className="text-3xl font-bold text-[#004346] sm:text-5xl">
              Profesionales
            </h2>

            <p className="mt-2 text-xl text-[#606060] sm:text-2xl lg:text-4xl">
              Trabajá con nosotros
            </p>

            <p className="mt-2 max-w-8xl text-lg leading-relaxed text-[#606060] lg:text-4xl sm:text-xl">
              Convocamos profesionales de la salud comprometidos con la
              atención domiciliaria.
            </p>

            <p className="mt-1 text-lg text-[#606060] sm:text-xl lg:text-4xl">
              Podrás cargar:
            </p>
          </header>

          <div className="mt-8 max-w-3xl space-y-3">
            {professionalOptions.map((option, index) => (
              <motion.button
                key={option.type}
                type="button"
                onClick={() => openModal(option.type)}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.07,
                }}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.99 }}
                className="
                  flex w-full items-center justify-between
                  rounded-full
                  bg-[#d2d2d2]
                  px-6 py-3.5
                  text-left text-lg text-[#606060]
                  transition-colors duration-300
                  hover:bg-[#017f35]
                  hover:text-white
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#017f35]/20
                  sm:px-8 sm:text-xl lg:text-3xl font-normal
                "
              >
                <span>{option.label}</span>

                <span
                  aria-hidden="true"
                  className="text-xl font-bold"
                >
                  +
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      <ProfessionalUploadModal
        isOpen={selectedDocumentType !== null}
        documentType={selectedDocumentType}
        onClose={closeModal}
      />
    </>
  )
}