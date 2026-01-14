import * as React from "react"
import { SliceComponentProps } from "@prismicio/react"
import GridPartners from "@/app/components/GridPartners"
import * as prismic from "@prismicio/client"

export type GridPartnersSlice = prismic.Content.GridPartnersSlice

export default function GridPartnersSliceComponent({
  slice,
}: SliceComponentProps<GridPartnersSlice>) {
  const titulo = (slice.primary.titulo_seccion as string) || undefined
  const subtitulo = (slice.primary.subtitulo as string) || undefined
  
  // Los items repetibles están en slice.primary.items, no en slice.items
  const items = slice.primary.items || []
  
  // Filtrar items vacíos y mapear solo los que tienen datos
  const partners = items
    .filter((item: prismic.Content.GridPartnersSliceDefaultPrimaryItemsItem) => {
      const nombre = (item.nombre as string)?.trim()
      const descripcion = prismic.asText(item.descripcion)?.trim()
      return nombre || descripcion // Solo incluir si tiene nombre o descripción
    })
    .map((item: prismic.Content.GridPartnersSliceDefaultPrimaryItemsItem, index) => ({
      id: `partner-${index}`,
      nombre: (item.nombre as string) || "Partner",
      descripcion: prismic.asText(item.descripcion) || "Descripción del partner",
      imagen: item.imagen?.url || undefined,
      url: prismic.asLink(item.enlace) || "http://google.com",
    }))

  return (
    <GridPartners
      titulo={titulo}
      subtitulo={subtitulo}
      partners={partners.length > 0 ? partners : undefined}
    />
  )
}

