import * as React from "react"
import { SliceComponentProps } from "@prismicio/react"
import ProductoDestacado from "@/app/components/ProductoDestacado"
import * as prismic from "@prismicio/client"

export type ProductoDestacadoSlice = prismic.Content.ProductoDestacadoSlice

export default function ProductoDestacadoSliceComponent({
  slice,
}: SliceComponentProps<ProductoDestacadoSlice>) {
  const titulo = (slice.primary.titulo as string) || undefined
  const descripcion = prismic.asText(slice.primary.descripcion) || undefined
  const imagen = slice.primary.imagen?.url || undefined
  const imagenAlt = slice.primary.imagen?.alt || undefined
  const ctaText = (slice.primary.texto_boton as string) || undefined
  const ctaHref = prismic.asLink(slice.primary.enlace_boton) || "#producto"
  // Normalizar el valor de posición (convertir a minúsculas)
  const posicionRaw = (slice.primary.posicion_imagen as string)?.toLowerCase() || "izquierda"
  const alineacion = (posicionRaw === "izquierda" || posicionRaw === "derecha") 
    ? (posicionRaw as "izquierda" | "derecha") 
    : "izquierda"

  return (
    <ProductoDestacado
      titulo={titulo}
      descripcion={descripcion}
      imagen={imagen}
      imagenAlt={imagenAlt}
      ctaText={ctaText}
      ctaHref={ctaHref}
      alineacion={alineacion}
    />
  )
}

