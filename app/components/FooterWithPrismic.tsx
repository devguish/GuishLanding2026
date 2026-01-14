import * as React from "react"
import { cn } from "@/app/lib/utils"
import { ConfiguracionGlobalData } from "@/app/lib/getConfiguracionGlobal"

interface FooterWithPrismicProps {
  className?: string
  config?: ConfiguracionGlobalData | null
}

export default function FooterWithPrismic({ className, config }: FooterWithPrismicProps) {
  const currentYear = new Date().getFullYear()

  const footerTexto = config?.footerTexto || "Distribución oficial, licenciamiento y posicionamiento estratégico en canales de alto alcance."
  const contacto = config?.footerContacto
  const email = contacto?.email || "email@ejemplo.com"
  const telefono = contacto?.telefono || "+1 (555) 123-4567"
  const direccion = contacto?.direccion

  return (
    <footer
      className={cn(
        "bg-white/80 backdrop-blur-md border-0",
        className
      )}
    >
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-[#ff7300] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">Güish</h3>
            <p className="text-sm text-muted-foreground">
              {footerTexto}
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#ff7300] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-[#ff7300] hover:opacity-80 transition-opacity [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#partners-titulo" className="text-[#ff7300] hover:opacity-80 transition-opacity [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
                  Partners
                </a>
              </li>
              <li>
                <a href="#presencia-y-alcance" className="text-[#ff7300] hover:opacity-80 transition-opacity [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
                  Presencia y alcance
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#ff7300] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacidad" className="text-[#ff7300] hover:opacity-80 transition-opacity [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#terminos" className="text-[#ff7300] hover:opacity-80 transition-opacity [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">
                  Términos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-[#ff7300] [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{email}</li>
              <li>{telefono}</li>
              {direccion && <li>{direccion}</li>}
            </ul>
            {/* Redes Sociales */}
            {config?.redesSociales && config.redesSociales.length > 0 && (
              <div className="flex gap-4 pt-2">
                {config.redesSociales.map((red, index) => (
                  <a
                    key={index}
                    href={red.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ff7300] hover:opacity-80 transition-opacity [text-shadow:_2px_2px_4px_rgba(0,0,0,0.3)]"
                  >
                    {red.plataforma}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

