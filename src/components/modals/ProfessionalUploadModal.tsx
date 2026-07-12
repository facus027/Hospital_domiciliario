import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { professionalUploadSchema } from "../../schemas/professionalUploadSchema"
import { sendProfessionalUpload } from "../../services/professionalUploadService"
import type {
  ProfessionalDocumentType,
  ProfessionalUploadFormValues,
  ProfessionalUploadPayload,
} from "../../types/professionalUploadTypes"
import { fileToBase64 } from "../../utils/fileToBase64"

type SubmissionStatus = "idle" | "success" | "error"

interface ProfessionalUploadModalProps {
  isOpen: boolean
  documentType: ProfessionalDocumentType | null
  onClose: () => void
}

const documentLabels: Record<ProfessionalDocumentType, string> = {
  curriculum: "Curriculum Vitae",
  facturacion: "Facturación",
  certificaciones: "Certificaciones",
  "documentacion-profesional": "Documentación profesional",
}

const successMessage =
  "Documentación enviada correctamente. Nuestro equipo la revisará a la brevedad."

const errorMessage =
  "No pudimos enviar la documentación. Revisá los datos y el archivo e intentá nuevamente."

export function ProfessionalUploadModal({
  isOpen,
  documentType,
  onClose,
}: ProfessionalUploadModalProps) {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ProfessionalUploadFormValues>({
    resolver: zodResolver(professionalUploadSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  })

  const documentLabel = documentType
    ? documentLabels[documentType]
    : ""

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isSubmitting) {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, isSubmitting, onClose])

  const handleClose = () => {
    if (isSubmitting) {
      return
    }

    reset()
    setSubmissionStatus("idle")
    onClose()
  }

  const onSubmit = async (
    values: ProfessionalUploadFormValues,
  ) => {
    if (!documentType) {
      return
    }

    setSubmissionStatus("idle")

    try {
      const file = values.file.item(0)

      if (!file) {
        throw new Error("No se encontró el archivo seleccionado.")
      }

      const fileBase64 = await fileToBase64(file)

     const payload: ProfessionalUploadPayload = {
  action: "professionalUpload",
  fullName: values.fullName.trim(),
  email: values.email.trim(),
  documentType,
  fileName: file.name,
  mimeType: file.type,
  fileSize: file.size,
  fileBase64,
}

      const response = await sendProfessionalUpload(payload)

      if (!response.success) {
        throw new Error(response.message)
      }

      setSubmissionStatus("success")
      reset()
    } catch (error) {
      console.error(
        "Error al enviar la documentación profesional:",
        error,
      )

      setSubmissionStatus("error")
    }
  }

  const inputClassName = `
    w-full rounded-full
    border border-[#017f35]/30
    bg-[#f2f2f2]
    px-5 py-3.5
    text-base text-[#004346]
    placeholder:text-[#606060]/70
    outline-none
    transition-all duration-300
    focus:border-[#017f35]
    focus:bg-white
    focus:ring-4
    focus:ring-[#017f35]/10
    disabled:cursor-not-allowed
    disabled:opacity-60
  `

  const errorClassName =
    "mt-1.5 px-3 text-sm text-red-600"

  return (
    <AnimatePresence>
      {isOpen && documentType && (
        <motion.div
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            overflow-y-auto
            bg-black/55
            px-4 py-8
            backdrop-blur-[2px]
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleClose()
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="professional-upload-title"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="
              relative w-full max-w-xl
              rounded-[2rem]
              bg-white
              p-6
              shadow-2xl
              sm:p-8
              [font-family:Helvetica,Arial,sans-serif]
            "
          >
            <button
              type="button"
              aria-label="Cerrar formulario"
              disabled={isSubmitting}
              onClick={handleClose}
              className="
                absolute right-5 top-5
                flex h-10 w-10 items-center justify-center
                rounded-full
                bg-[#f2f2f2]
                text-2xl text-[#004346]
                transition-colors
                hover:bg-[#017f35]
                hover:text-white
                focus:outline-none
                focus:ring-4
                focus:ring-[#017f35]/20
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              ×
            </button>

            <header className="pr-12">
              <p className="text-sm font-bold uppercase tracking-wider text-[#017f35]">
                Profesionales
              </p>

              <h2
                id="professional-upload-title"
                className="
                  mt-2 text-2xl font-bold
                  leading-tight text-[#004346]
                  sm:text-3xl
                "
              >
                Enviar {documentLabel}
              </h2>

              <p className="mt-3 leading-relaxed text-[#606060]">
                Completá tus datos y adjuntá el archivo correspondiente.
              </p>
            </header>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="mt-7 space-y-5"
            >
              <div>
                <label
                  htmlFor="professional-full-name"
                  className="
                    mb-2 block
                    text-sm font-bold
                    text-[#004346]
                  "
                >
                  Nombre y apellido
                </label>

                <input
                  id="professional-full-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Ej.: María González"
                  disabled={isSubmitting}
                  className={inputClassName}
                  {...register("fullName")}
                />

                {errors.fullName && (
                  <p className={errorClassName}>
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="professional-email"
                  className="
                    mb-2 block
                    text-sm font-bold
                    text-[#004346]
                  "
                >
                  Email
                </label>

                <input
                  id="professional-email"
                  type="email"
                  autoComplete="email"
                  placeholder="Ej.: profesional@email.com"
                  disabled={isSubmitting}
                  className={inputClassName}
                  {...register("email")}
                />

                {errors.email && (
                  <p className={errorClassName}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="professional-file"
                  className="
                    mb-2 block
                    text-sm font-bold
                    text-[#004346]
                  "
                >
                  Archivo
                </label>

                <input
                  id="professional-file"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                  disabled={isSubmitting}
                  className="
                    block w-full
                    cursor-pointer
                    rounded-2xl
                    border border-[#017f35]/30
                    bg-[#f2f2f2]
                    text-sm text-[#606060]
                    file:mr-4
                    file:cursor-pointer
                    file:border-0
                    file:bg-[#004346]
                    file:px-5
                    file:py-3.5
                    file:font-bold
                    file:text-white
                    transition
                    hover:file:bg-[#017f35]
                    focus:outline-none
                    focus:ring-4
                    focus:ring-[#017f35]/10
                    disabled:cursor-not-allowed
                    disabled:opacity-60
                  "
                  {...register("file")}
                />

                <p className="mt-2 px-2 text-xs leading-relaxed text-[#606060]">
                  Formatos permitidos: PDF, JPG, PNG, DOC y DOCX.
                  Tamaño máximo: 5 MB.
                </p>

                {errors.file && (
                  <p className={errorClassName}>
                    {errors.file.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={
                  isSubmitting ? undefined : { scale: 1.01 }
                }
                whileTap={
                  isSubmitting ? undefined : { scale: 0.99 }
                }
                className="
                  flex w-full items-center justify-center
                  rounded-full
                  bg-[#004346]
                  px-6 py-4
                  text-base font-bold text-white
                  transition-colors
                  hover:bg-[#017f35]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-[#017f35]/20
                  disabled:cursor-not-allowed
                  disabled:opacity-65
                "
              >
                {isSubmitting
                  ? "Enviando..."
                  : `Enviar ${documentLabel}`}
              </motion.button>

              <div
                aria-live="polite"
                aria-atomic="true"
                className="min-h-16"
              >
                {submissionStatus === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-2xl
                      bg-[#017f35]/10
                      px-5 py-4
                      text-center
                      text-sm font-medium
                      leading-relaxed text-hospital-green
                    "
                  >
                    {successMessage}
                  </motion.p>
                )}

                {submissionStatus === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="
                      rounded-2xl
                      border border-red-200
                      bg-red-50
                      px-5 py-4
                      text-center
                      text-sm font-medium
                      leading-relaxed text-red-700
                    "
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}