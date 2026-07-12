export type ProfessionalDocumentType =
  | "curriculum"
  | "facturacion"
  | "certificaciones"
  | "documentacion-profesional"

export interface ProfessionalUploadFormValues {
  fullName: string
  email: string
  file: FileList
}

export interface ProfessionalUploadPayload {
  action: "professionalUpload"
  fullName: string
  email: string
  documentType: ProfessionalDocumentType
  fileName: string
  mimeType: string
  fileSize: number
  fileBase64: string
}

export interface ProfessionalUploadResponse {
  success: boolean
  message: string
}