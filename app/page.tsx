import HeaderWithPrismic from './components/HeaderWithPrismic';
import FooterWithPrismic from './components/FooterWithPrismic';
import BackgroundProvider from './components/BackgroundProvider';
import { getLandingPage } from './lib/getLandingPage';
import { getConfiguracionGlobal } from './lib/getConfiguracionGlobal';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import * as prismic from '@prismicio/client';

// Componentes por defecto (fallback si no hay Prismic)
import Hero from './components/Hero';
import SeccionContenido from './components/SeccionContenido';
import ProductoDestacado from './components/ProductoDestacado';
import VideoSection from './components/VideoSection';
import GridPartners from './components/GridPartners';
import GridCaracteristicas from './components/GridCaracteristicas';
import SeccionInformativa from './components/SeccionInformativa';

export default async function Home() {
  // Intentar obtener datos de Prismic
  const [landingPage, config] = await Promise.all([
    getLandingPage('home').catch(() => null),
    getConfiguracionGlobal().catch(() => null),
  ]);

  // Si hay datos de Prismic, usar SliceZone para renderizar dinámicamente
  if (landingPage && landingPage.slices && landingPage.slices.length > 0) {
    // Buscar el slice de configuración de fondo
    const fondoSlice = landingPage.slices.find(
      (slice) => slice.slice_type === 'configuracion_fondo'
    ) as prismic.Content.ConfiguracionFondoSlice | undefined;
    
    // Extraer datos de fondo del slice
    const fondoConfig = fondoSlice ? {
      tipo: (fondoSlice.primary?.tipo_fondo as string) || 'Gradiente',
      color: (fondoSlice.primary?.color_fondo as string) || undefined,
      imagen: fondoSlice.primary?.imagen_fondo?.url || undefined,
    } : undefined

    // Usar datos de la landing page (tiene prioridad sobre config global)
    const headerConfig = {
      logo: landingPage.logo || config?.logo,
      menuItems: landingPage.menuItems && landingPage.menuItems.length > 0 
        ? landingPage.menuItems 
        : config?.menuItems,
    };

    const footerConfig = {
      footerTexto: landingPage.footerTexto || config?.footerTexto,
      footerContacto: landingPage.footerContacto || config?.footerContacto,
      redesSociales: landingPage.redesSociales && landingPage.redesSociales.length > 0
        ? landingPage.redesSociales
        : config?.redesSociales,
    };

    return (
      <BackgroundProvider fondoConfig={fondoConfig}>
        <div className="flex min-h-screen flex-col">
          <HeaderWithPrismic config={headerConfig} />
          <main className="flex-1">
            <SliceZone slices={landingPage.slices} components={components} />
          </main>
          <FooterWithPrismic config={footerConfig} />
        </div>
      </BackgroundProvider>
    );
  }

  // Fallback: usar componentes hardcodeados si no hay Prismic
  return (
    <BackgroundProvider>
      <div className="flex min-h-screen flex-col">
        <HeaderWithPrismic config={config} />
        <main className="flex-1">
        {/* Hero Section */}
        <Hero
          title="Transforma tu Negocio"
          subtitle="Soluciones innovadoras que impulsan el crecimiento y la eficiencia de tu empresa"
          ctaText="Comenzar ahora"
          ctaHref="#contacto"
        />

        {/* Sección Contenido 1 - Izquierda */}
        <SeccionContenido
          titulo="Nuestra Solución"
          contenido="Ofrecemos una plataforma completa diseñada para optimizar tus procesos y aumentar la productividad. Con herramientas intuitivas y tecnología de vanguardia, ayudamos a tu equipo a alcanzar sus objetivos más rápido."
          alineacion="izquierda"
        />

        {/* Producto Destacado */}
        <ProductoDestacado
          titulo="Producto Estrella"
          descripcion="Descubre nuestro producto más innovador, diseñado con las últimas tecnologías para ofrecerte una experiencia excepcional. Perfecto para empresas que buscan la excelencia."
          ctaText="Ver más detalles"
          ctaHref="#producto"
        />

        {/* Video Section */}
        <VideoSection
          videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          title="Video promocional"
        />

        {/* Grid de Partners */}
        <GridPartners
          titulo="Nuestros Partners"
          subtitulo="Trabajamos con las mejores empresas del sector"
        />

        {/* Grid de Características */}
        <GridCaracteristicas
          titulo="Características Principales"
          subtitulo="Todo lo que necesitas para tener éxito en un solo lugar"
        />

        {/* Sección Contenido 2 - Derecha */}
        <SeccionContenido
          titulo="Tecnología de Vanguardia"
          contenido="Nuestro sistema incluye funcionalidades avanzadas que se adaptan a las necesidades específicas de tu industria. Desde automatización de tareas hasta análisis en tiempo real, todo en un solo lugar."
          alineacion="derecha"
        />

        {/* Sección Informativa */}
        <SeccionInformativa
          titulo="¿Listo para comenzar?"
          contenido="Únete a miles de empresas que ya están transformando su negocio con nuestras soluciones. Nuestro equipo está listo para ayudarte a alcanzar tus objetivos."
          ctaText="Contactar ahora"
          ctaHref="#contacto"
          mostrarCTA={true}
        />
      </main>
      <FooterWithPrismic config={config} />
      </div>
    </BackgroundProvider>
  );
}
