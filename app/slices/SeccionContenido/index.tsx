import { SliceComponentProps } from "@prismicio/react"
import SeccionContenido from "@/app/components/SeccionContenido"
import * as prismic from "@prismicio/client"

export type SeccionContenidoSlice = prismic.Content.SeccionContenidoSlice

export default function SeccionContenidoSliceComponent({
  slice,
}: SliceComponentProps<SeccionContenidoSlice>) {
  const titulo = (slice.primary.titulo as string) || undefined
  const contenido = prismic.asText(slice.primary.contenido) || undefined
  const imagen = slice.primary.imagen?.url || undefined
  const imagenAlt = slice.primary.imagen?.alt || undefined
  // Normalizar el valor de posición (convertir a minúsculas)
  const posicionRaw = (slice.primary.posicion_imagen as string)?.toLowerCase() || "izquierda"
  const alineacion = (posicionRaw === "izquierda" || posicionRaw === "derecha") 
    ? (posicionRaw as "izquierda" | "derecha") 
    : "izquierda"

  return (
    <SeccionContenido
      titulo={titulo}
      contenido={contenido}
      imagen={imagen}
      imagenAlt={imagenAlt}
      alineacion={alineacion}
    />
  )
}

