import * as React from "react"
import { SliceComponentProps } from "@prismicio/react"
import Hero from "@/app/components/Hero"
import * as prismic from "@prismicio/client"

export type HeroSlice = prismic.Content.HeroSlice

export default function HeroSliceComponent({
  slice,
}: SliceComponentProps<HeroSlice>) {
  const title = (slice.primary.titulo as string) || undefined
  const subtitle = prismic.asText(slice.primary.subtitulo) || undefined
  const ctaText = (slice.primary.texto_boton as string) || undefined
  const ctaHref = "#video"
  const backgroundImage = slice.primary.imagen_fondo?.url || undefined
  const topImage = slice.primary.imagen_superior?.url || undefined
  const topImageAlt = slice.primary.imagen_superior?.alt || undefined

  return (
    <Hero
      title={title}
      subtitle={subtitle}
      ctaText={ctaText}
      ctaHref={ctaHref}
      backgroundImage={backgroundImage}
      topImage={topImage}
      topImageAlt={topImageAlt}
    />
  )
}

