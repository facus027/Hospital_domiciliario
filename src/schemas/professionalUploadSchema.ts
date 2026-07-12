import { z } from "zod"

const MAX_FILE_SIZE = 5 * 1024 * 1024

const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]

export const professionalUploadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Ingresá tu nombre y apellido.")
    .max(100, "El nombre es demasiado largo."),

  email: z
    .string()
    .trim()
    .min(1, "Ingresá tu email.")
    .email("Ingresá un email válido.")
    .max(150, "El email es demasiado largo."),

  file: z
    .instanceof(FileList)
    .refine(
      (files) => files.length === 1,
      "Seleccioná un archivo.",
    )
    .refine(
      (files) => {
        const file = files.item(0)

        return Boolean(file && file.size <= MAX_FILE_SIZE)
      },
      "El archivo no puede superar los 5 MB.",
    )
    .refine(
      (files) => {
        const file = files.item(0)

        return Boolean(
          file && ACCEPTED_FILE_TYPES.includes(file.type),
        )
      },
      "Formato no permitido. Usá PDF, JPG, PNG, DOC o DOCX.",
    ),
})