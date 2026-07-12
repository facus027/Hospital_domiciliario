import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { quoteSchema } from "../../schemas/quoteSchema"
import { sendQuoteRequest } from "../../services/quoteService"
import type { QuoteFormValues } from "../../types/quoteTypes"

type SubmissionStatus = "idle" | "success" | "error"

const successMessage =
  "Solicitud enviada correctamente. Nuestro equipo se comunicará por WhatsApp dentro de las próximas 24 hs."

const errorMessage =
  "No pudimos enviar la solicitud. Revisá los datos e intentá nuevamente."

export function QuoteForm() {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),

    defaultValues: {
      fullName: "",
      whatsapp: "",
      age: undefined,
      address: "",
      medicalDiagnosis: "",
      healthCoverage: "",
      patientMobility: "",
      specificCareNeeds: "",
    },
  })

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmissionStatus("idle")

    try {
      const response = await sendQuoteRequest(data)

      if (!response.success) {
        throw new Error(response.message)
      }

      setSubmissionStatus("success")
      reset()
    } catch (error) {
      console.error("Error al enviar la solicitud:", error)
      setSubmissionStatus("error")
    }
  }

  const inputClassName = `
    w-full rounded-full
    border border-transparent
    bg-white/35
    px-6 py-3.5
    text-base text-white
    placeholder:text-white/90
    outline-none
    transition-all duration-300
    focus:border-white
    focus:bg-white
    focus:text-[#004346]
    focus:placeholder:text-[#606060]/60
    disabled:cursor-not-allowed
    disabled:opacity-70
  `

  const selectClassName = `
    ${inputClassName}
    appearance-none
    cursor-pointer
  `

  const errorClassName = "mt-1.5 px-4 text-sm text-red-100"

  return (
    <section
      id="cotizacion"
      className="
        bg-[#f2f2f2]
        px-0 py-16
        sm:px-0 sm:py-20
        lg:px-0 lg:py-24
        [font-family:Helvetica,Arial,sans-serif]
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="
          mx-auto w-full
          bg-[#017f35]
          px-5 py-10
          shadow-[0_18px_50px_rgba(0,67,70,0.16)]
          sm:px-10 sm:py-14
          lg:px-16 lg:py-16
        "
      >
        <div className="mx-auto max-w-6xl">
          <header className="mb-8 text-white">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Solicitá una cotización
            </h2>

            <p className="mt-3 text-lg leading-relaxed text-white/95 sm:text-xl lg:text-3xl">
              Nuestro equipo se comunicará con la familia dentro de las
              próximas 24 hs.
            </p>

            <p className="mt-1 text-lg text-white/90 sm:text-xl lg:text-3xl">
              Formulario de evaluación.
            </p>
          </header>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-4"
          >
            <div>
              <label htmlFor="fullName" className="sr-only">
                Nombre y apellido
              </label>

              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="Nombre y apellido"
                disabled={isSubmitting}
                className={inputClassName}
                {...register("fullName")}
              />

              {errors.fullName && (
                <p className={errorClassName}>{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="whatsapp" className="sr-only">
                Número de WhatsApp
              </label>

              <input
                id="whatsapp"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="Número de WhatsApp"
                disabled={isSubmitting}
                className={inputClassName}
                {...register("whatsapp")}
              />

              {errors.whatsapp && (
                <p className={errorClassName}>{errors.whatsapp.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="age" className="sr-only">
                Edad
              </label>

              <input
                id="age"
                type="number"
                min="0"
                max="120"
                inputMode="numeric"
                placeholder="Edad"
                disabled={isSubmitting}
                className={inputClassName}
                {...register("age", {
                  valueAsNumber: true,
                })}
              />

              {errors.age && (
                <p className={errorClassName}>{errors.age.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="sr-only">
                Dirección
              </label>

              <input
                id="address"
                type="text"
                autoComplete="street-address"
                placeholder="Dirección"
                disabled={isSubmitting}
                className={inputClassName}
                {...register("address")}
              />

              {errors.address && (
                <p className={errorClassName}>{errors.address.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="medicalDiagnosis" className="sr-only">
                Diagnóstico médico
              </label>

              <input
                id="medicalDiagnosis"
                type="text"
                placeholder="Diagnóstico médico"
                disabled={isSubmitting}
                className={inputClassName}
                {...register("medicalDiagnosis")}
              />

              {errors.medicalDiagnosis && (
                <p className={errorClassName}>
                  {errors.medicalDiagnosis.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="healthCoverage" className="sr-only">
                Cobertura de salud
              </label>

              <input
                id="healthCoverage"
                type="text"
                placeholder="Cobertura de salud"
                disabled={isSubmitting}
                className={inputClassName}
                {...register("healthCoverage")}
              />

              {errors.healthCoverage && (
                <p className={errorClassName}>
                  {errors.healthCoverage.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="patientMobility" className="sr-only">
                Movilidad del paciente
              </label>

              <input
                id="patientMobility"
                type="text"
                placeholder="Movilidad del paciente"
                disabled={isSubmitting}
                className={inputClassName}
                {...register("patientMobility")}
              />

              {errors.patientMobility && (
                <p className={errorClassName}>
                  {errors.patientMobility.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="bedridden" className="sr-only">
                  Paciente en cama
                </label>

                <div className="relative">
                  <select
                    id="bedridden"
                    disabled={isSubmitting}
                    className={selectClassName}
                    {...register("bedridden")}
                  >
                    <option value="" className="text-[#606060]">
                      Paciente en cama
                    </option>

                    <option value="Sí" className="text-[#004346]">
                      Sí
                    </option>

                    <option value="No" className="text-[#004346]">
                      No
                    </option>
                  </select>

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute right-5 top-1/2
                      -translate-y-1/2
                      text-white
                    "
                  >
                    ▾
                  </span>
                </div>

                {errors.bedridden && (
                  <p className={errorClassName}>
                    {errors.bedridden.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="hasUlcers" className="sr-only">
                  Presencia de úlceras
                </label>

                <div className="relative">
                  <select
                    id="hasUlcers"
                    disabled={isSubmitting}
                    className={selectClassName}
                    {...register("hasUlcers")}
                  >
                    <option value="" className="text-[#606060]">
                      Presencia de úlceras
                    </option>

                    <option value="Sí" className="text-[#004346]">
                      Sí
                    </option>

                    <option value="No" className="text-[#004346]">
                      No
                    </option>
                  </select>

                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute right-5 top-1/2
                      -translate-y-1/2
                      text-white
                    "
                  >
                    ▾
                  </span>
                </div>

                {errors.hasUlcers && (
                  <p className={errorClassName}>
                    {errors.hasUlcers.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="specificCareNeeds" className="sr-only">
                Necesidades específicas de cuidado
              </label>

              <textarea
                id="specificCareNeeds"
                rows={4}
                placeholder="Necesidades específicas de cuidado"
                disabled={isSubmitting}
                className={`
                  ${inputClassName}
                  min-h-32 resize-y
                  rounded-[1.75rem]
                `}
                {...register("specificCareNeeds")}
              />

              {errors.specificCareNeeds && (
                <p className={errorClassName}>
                  {errors.specificCareNeeds.message}
                </p>
              )}
            </div>

            <div className="pt-3">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={isSubmitting ? undefined : { scale: 1.015 }}
                whileTap={isSubmitting ? undefined : { scale: 0.985 }}
                className="
                  flex mx-auto items-center w-full lg:w-1/2 justify-center
                  rounded-full
                  bg-[#004346]
                  px-6 py-4
                  text-base font-bold text-white
                  shadow-lg
                  transition-colors duration-300
                  hover:bg-[#003638]
                  focus:outline-none
                  focus:ring-4
                  focus:ring-white/40
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                  sm:text-lg
                "
              >
                {isSubmitting ? "Enviando..." : "Enviar solicitud"}
              </motion.button>
            </div>

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
                    mt-4 rounded-2xl
                    bg-white/15
                    px-5 py-4
                    text-center text-sm font-medium
                    leading-relaxed text-white
                    sm:text-base
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
                    mt-4 rounded-2xl
                    border border-red-100/50
                    bg-red-950/20
                    px-5 py-4
                    text-center text-sm font-medium
                    leading-relaxed text-red-50
                    sm:text-base
                  "
                >
                  {errorMessage}
                </motion.p>
              )}
            </div>
          </form>

          <p className="lg:mt-7 mt-5 text-lg leading-relaxed text-white/90 sm:text-base lg:text-3xl">
            *Sujeto a auditoría de necesidades en domicilio, del equipo médico
            junto con la familia.
          </p>
        </div>
      </motion.div>
    </section>
  )
}