import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';

export interface MenuItem {
  texto: string;
  enlace: string;
}

export interface FooterContacto {
  telefono?: string;
  email?: string;
  direccion?: string;
}

export interface RedSocial {
  plataforma: string;
  enlace: string;
}

export interface ConfiguracionGlobalData {
  logo?: {
    url: string;
    alt: string;
  };
  menuItems?: MenuItem[];
  footerTexto?: string;
  footerContacto?: FooterContacto;
  redesSociales?: RedSocial[];
}

export async function getConfiguracionGlobal(): Promise<ConfiguracionGlobalData | null> {
  try {
    const client = createClient();
    
    // Intentar obtener el documento, si no existe retornar null sin error
    let document = null;
    try {
      document = await client.getSingle('configuracion_global');
    } catch (error) {
      // Si el documento no existe o hay error, retornar null
      console.warn('No se pudo obtener configuracion_global de Prismic:', error);
      return null;
    }
    
    if (!document) {
      return null;
    }

    return {
      logo: document.data.logo ? {
        url: document.data.logo.url || '',
        alt: document.data.logo.alt || 'Logo',
      } : undefined,
      menuItems: document.data.menu_items?.map((item: any) => ({
        texto: (item.texto as string) || '',
        enlace: prismic.asLink(item.enlace) || '#',
      })) || [],
      footerTexto: prismic.asText(document.data.footer_texto) || '',
      footerContacto: document.data.footer_contacto ? {
        telefono: (document.data.footer_contacto.telefono as string) || undefined,
        email: (document.data.footer_contacto.email as string) || undefined,
        direccion: (document.data.footer_contacto.direccion as string) || undefined,
      } : undefined,
      redesSociales: document.data.redes_sociales?.map((red: any) => ({
        plataforma: red.plataforma || '',
        enlace: prismic.asLink(red.enlace) || '#',
      })) || [],
    };
  } catch (error) {
    console.error('Error obteniendo configuración global de Prismic:', error);
    return null;
  }
}

