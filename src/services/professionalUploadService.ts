import type {
  ProfessionalUploadPayload,
  ProfessionalUploadResponse,
} from "../types/professionalUploadTypes"

const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL

export async function sendProfessionalUpload(
  payload: ProfessionalUploadPayload,
): Promise<ProfessionalUploadResponse> {
  if (!appsScriptUrl) {
    throw new Error(
      "La variable VITE_APPS_SCRIPT_URL no está configurada.",
    )
  }
  
    console.log("Payload profesional:", {
    ...payload,
    fileBase64: `[Base64 omitido: ${payload.fileBase64.length} caracteres]`,
  })

  await fetch(appsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
    })

  return {
    success: true,
    message: "Documentación enviada correctamente.",
    
  }
}