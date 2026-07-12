import { z } from "zod"

export const quoteSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Ingresá el nombre y apellido.")
    .max(100, "El nombre es demasiado largo."),

  whatsapp: z
    .string()
    .trim()
    .min(8, "Ingresá un número de WhatsApp válido.")
    .max(20, "El número de WhatsApp es demasiado largo.")
    .regex(
      /^[0-9+\s()-]+$/,
      "El número solo puede contener números, espacios, +, - y paréntesis.",
    ),

  age: z
    .number({
      message: "Ingresá la edad del paciente.",
    })
    .int("La edad debe ser un número entero.")
    .min(0, "La edad no puede ser negativa.")
    .max(120, "Ingresá una edad válida."),

  address: z
    .string()
    .trim()
    .min(5, "Ingresá el domicilio del paciente.")
    .max(150, "La dirección es demasiado larga."),

  medicalDiagnosis: z
    .string()
    .trim()
    .min(3, "Ingresá el diagnóstico médico.")
    .max(300, "El diagnóstico es demasiado largo."),

  healthCoverage: z
    .string()
    .trim()
    .min(2, "Ingresá la cobertura de salud.")
    .max(100, "La cobertura de salud es demasiado larga."),

  patientMobility: z
    .string()
    .trim()
    .min(3, "Describí la movilidad del paciente.")
    .max(200, "La descripción de movilidad es demasiado larga."),

  bedridden: z.enum(["Sí", "No"], {
    message: "Seleccioná una opción.",
  }),

  hasUlcers: z.enum(["Sí", "No"], {
    message: "Seleccioná una opción.",
  }),

  specificCareNeeds: z
    .string()
    .trim()
    .min(5, "Describí las necesidades específicas de cuidado.")
    .max(500, "La descripción es demasiado larga."),
})