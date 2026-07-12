export type YesNoOption = "Sí" | "No"

export interface QuoteFormValues {
  fullName: string
  whatsapp: string
  age: number
  address: string
  medicalDiagnosis: string
  healthCoverage: string
  patientMobility: string
  bedridden: YesNoOption
  hasUlcers: YesNoOption
  specificCareNeeds: string
}

export interface QuoteServiceResponse {
  success: boolean
  message: string
}