import * as React from "react"
import { SliceComponentProps } from "@prismicio/react"
import SeccionInformativa from "@/app/components/SeccionInformativa"
import * as prismic from "@prismicio/client"

export type SeccionInformativaSlice = prismic.Content.SeccionInformativaSlice

export default function SeccionInformativaSliceComponent({
  slice,
}: SliceComponentProps<SeccionInformativaSlice>) {
  const titulo = (slice.primary.titulo as string) || undefined
  const contenido = prismic.asText(slice.primary.contenido) || undefined
  const imagen = slice.primary.imagen?.url || undefined
  const imagenAlt = slice.primary.imagen?.alt || undefined
  const ctaText = undefined
  const ctaHref = "#contacto"
  const mostrarCTA = false
  // Normalizar el valor de posición (convertir a minúsculas)
  const posicionRaw = (slice.primary.posicion_imagen as string)?.toLowerCase() || "derecha"
  const alineacion = (posicionRaw === "izquierda" || posicionRaw === "derecha") 
    ? (posicionRaw as "izquierda" | "derecha") 
    : "derecha"

  return (
    <SeccionInformativa
      titulo={titulo}
      contenido={contenido}
      imagen={imagen}
      imagenAlt={imagenAlt}
      ctaText={ctaText}
      ctaHref={ctaHref}
      mostrarCTA={mostrarCTA}
      alineacion={alineacion}
    />
  )
}

