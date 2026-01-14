import { SliceComponentProps } from "@prismicio/react"
import * as prismic from "@prismicio/client"

export type ConfiguracionFondoSlice = prismic.Content.ConfiguracionFondoSlice

export default function ConfiguracionFondoSliceComponent({
  slice,
}: SliceComponentProps<ConfiguracionFondoSlice>) {
  // Este slice no renderiza nada visualmente, solo configura el fondo
  // La lógica se maneja en el layout o en un provider
  return null
}

