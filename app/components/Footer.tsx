"use client"

import * as React from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/app/lib/utils"

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const currentYear = new Date().getFullYear()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Color de fondo según el tema
  const backgroundColor = mounted && theme === "dark" ? "#CBA98D" : "#FFF7F2"
  // Color de texto según el tema
  const textColor = mounted && theme === "dark" ? "#FFFFFF" : "#927A5B"

  return (
    <footer
      className={cn(
        "border-0 shadow-[0_-4px_20px_rgba(0,0,0,0.2)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.2)]",
        className
      )}
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-4 py-2 md:px-6">
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 lg:items-center">
          {/* Columna 4: Imágenes - en móvil aparece al final, centrada */}
          <div className="flex flex-row gap-4 items-center justify-center lg:items-center lg:justify-end lg:col-start-4 lg:row-start-1 order-last lg:order-none">
            <a href="#inicio" className="relative w-32 h-32 lg:w-auto lg:h-full aspect-square lg:min-h-[180px] block cursor-pointer">
              <Image
                src="/sonriso.png"
                alt="Sonriso"
                fill
                className="object-contain"
              />
            </a>
            <a href="#inicio" className="relative w-32 h-32 lg:w-auto lg:h-full aspect-square lg:min-h-[180px] block cursor-pointer">
              <Image
                src="/saludo.png"
                alt="Saludo"
                fill
                className="object-contain"
              />
            </a>
          </div>
          {/* Columna 1: Logo */}
          <div className="space-y-1">
            <div className="relative w-20 h-20">
              <Image
                src="/logo.png"
                alt="Güish Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-1">
            <h4 className="text-sm font-semibold" style={{ color: textColor }}>Enlaces Rápidos</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#inicio" className="hover:opacity-80 transition-opacity underline" style={{ color: textColor }}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:opacity-80 transition-opacity underline" style={{ color: textColor }}>
                  Productos
                </a>
              </li>
              <li>
                <a href="#presencia-y-alcance" className="hover:opacity-80 transition-opacity underline" style={{ color: textColor }}>
                  Presencia y alcance
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="space-y-1">
            <h4 className="text-sm font-semibold" style={{ color: textColor }}>Contacto</h4>
            <ul className="space-y-1 text-sm" style={{ color: textColor }}>
              <li>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Paola.cid@guish.com.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: textColor }}
                >
                  Paola.cid@guish.com.mx
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-2 pt-2 text-center text-sm" style={{ color: textColor }}>
          <p>© {currentYear} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

