import * as React from "react"
import { cn } from "@/app/lib/utils"

interface SeccionContenidoProps {
  titulo?: string
  contenido?: string
  className?: string
}

export default function SeccionContenido({
  titulo = "Título de la sección",
  contenido = "Contenido descriptivo de la sección. Aquí puedes agregar información relevante sobre tu producto o servicio.",
  className,
}: SeccionContenidoProps) {
  return (
    <section
      className={cn(
        "py-12 sm:py-16 md:py-20 lg:py-32",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-4 text-center flex flex-col items-center">
          {titulo && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#ff7300]">
              {titulo}
            </h2>
          )}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {contenido}
          </p>
        </div>
      </div>
    </section>
  )
}

