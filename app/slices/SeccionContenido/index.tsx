import { SliceComponentProps } from "@prismicio/react"
import SeccionContenido from "@/app/components/SeccionContenido"
import * as prismic from "@prismicio/client"

export type SeccionContenidoSlice = prismic.Content.SeccionContenidoSlice

export default function SeccionContenidoSliceComponent({
  slice,
}: SliceComponentProps<SeccionContenidoSlice>) {
  const titulo = (slice.primary.titulo as string) || undefined
  const contenido = prismic.asText(slice.primary.contenido) || undefined

  return (
    <SeccionContenido
      titulo={titulo}
      contenido={contenido}
    />
  )
}

