import type {
  QuoteFormValues,
  QuoteServiceResponse,
} from "../types/quoteTypes"

const appsScriptUrl = import.meta.env.VITE_APPS_SCRIPT_URL

export async function sendQuoteRequest(
  data: QuoteFormValues,
): Promise<QuoteServiceResponse> {
  if (!appsScriptUrl) {
    throw new Error(
      "La variable VITE_APPS_SCRIPT_URL no está configurada.",
    )
  }

  await fetch(appsScriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify({
      action: "quote",
      ...data,
    }),
  })

  return {
    success: true,
    message: "Solicitud enviada correctamente.",
  }
}