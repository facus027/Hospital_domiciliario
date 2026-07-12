export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (typeof reader.result !== "string") {
        reject(
          new Error("No se pudo interpretar el archivo seleccionado."),
        )
        return
      }

      const base64 = reader.result.split(",")[1]

      if (!base64) {
        reject(
          new Error("No se pudo convertir el archivo a Base64."),
        )
        return
      }

      resolve(base64)
    }

    reader.onerror = () => {
      reject(new Error("No se pudo leer el archivo seleccionado."))
    }

    reader.readAsDataURL(file)
  })
}