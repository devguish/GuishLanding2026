"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/app/lib/utils"

interface HeroProps {
  title?: string
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  backgroundImage?: string
  topImage?: string
  topImageAlt?: string
  lettersImage?: string
  lettersImageAlt?: string
  className?: string
}

export default function Hero({
  title = "",
  subtitle = "",
  ctaText = "",
  ctaHref = "#video",
  backgroundImage,
  topImage,
  topImageAlt = "",
  lettersImage,
  lettersImageAlt = "güish",
  className,
}: HeroProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Color de fondo según el tema
  const backgroundColor = mounted && theme === "dark" ? "#8B7355" : "#FFF7F2"

  return (
    <section
      id="inicio"
      className={cn(
        "relative flex min-h-screen w-screen max-w-full items-center justify-center overflow-hidden -mt-16",
        className
      )}
      style={{ height: '100vh', maxHeight: '100vh' }}
    >
      {/* Background Image */}
      {backgroundImage ? (
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover z-0"
          sizes="100vw"
          priority
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      ) : (
        <div 
          className="absolute inset-0 z-0" 
          style={{ 
            backgroundColor: backgroundColor
          }}
        />
      )}

      {/* Imagen de letras - mismo tamaño que la portada, responsive y de punta a punta */}
      {lettersImage && (
        <div className="absolute inset-0 w-full h-full z-[1] flex items-center justify-center">
          <Image
            src={lettersImage}
            alt={lettersImageAlt}
            fill
            className="object-contain z-[1]"
            sizes="100vw"
            priority
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      )}

    </section>
  )
}

