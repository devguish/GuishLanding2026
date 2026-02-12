import * as React from "react"
import { SliceComponentProps } from "@prismicio/react"
import GridCaracteristicas from "@/app/components/GridCaracteristicas"
import * as prismic from "@prismicio/client"

export type GridCaracteristicasSlice = prismic.Content.GridCaracteristicasSlice

export default function GridCaracteristicasSliceComponent({
  slice,
}: SliceComponentProps<GridCaracteristicasSlice>) {
  const titulo = (slice.primary.titulo_seccion as string) || undefined
  const subtitulo = (slice.primary.subtitulo as string) || undefined
  
  const items = slice.primary.caracteristicas || []
  
  const caracteristicas = items
    .filter((item) => {
      const titulo = (item.titulo as string)?.trim()
      const descripcion = prismic.asText(item.descripcion)?.trim()
      return titulo || descripcion // Solo incluir si tiene título o descripción
    })
    .map((item, index) => {
      const itemWithEnlace = item as typeof item & { enlace?: prismic.LinkField };
      const enlaceUrl = itemWithEnlace.enlace ? prismic.asLink(itemWithEnlace.enlace) : null;
      return {
        id: `caracteristica-${index}`,
        titulo: (item.titulo as string) || "Característica",
        descripcion: prismic.asText(item.descripcion) || "Descripción de la característica",
        icono: undefined, // Iconos por defecto (lucide-react)
        iconoImagen: item.icono?.url || undefined, // Imagen del icono desde Prismic
        enlace: enlaceUrl || undefined, // Enlace opcional
      };
    })

  return (
    <GridCaracteristicas
      titulo={titulo}
      subtitulo={subtitulo}
      caracteristicas={caracteristicas.length > 0 ? caracteristicas : undefined}
    />
  )
}

