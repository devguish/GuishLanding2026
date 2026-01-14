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
  // Prismic puede tipar estos campos como LinkField aunque en el modelo sea Select,
  // y los tipos generados pueden tardar en incluir campos nuevos.
  const primaryAny = slice.primary as any
  const ctaHref = (primaryAny.enlace_boton as unknown as string) || undefined
  const ctaText2 = (primaryAny.texto_boton_2 as string) || undefined
  const ctaHref2 = (primaryAny.enlace_boton_2 as unknown as string) || undefined
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
      ctaText2={ctaText2}
      ctaHref2={ctaHref2}
      alineacion={alineacion}
    />
  )
}

