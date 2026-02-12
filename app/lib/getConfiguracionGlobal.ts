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
    
    let document = null;
    try {
      document = await client.getSingle('configuracion_global');
    } catch (error: any) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('No se pudo obtener configuracion_global de Prismic:', error?.message || error);
      }
      return null;
    }
    
    if (!document) {
      return null;
    }

    const data = document.data as prismic.Content.ConfiguracionGlobalDocumentData & {
      logo?: prismic.ImageField<never>;
      footer_contacto?: {
        telefono?: string;
        email?: string;
        direccion?: string;
      };
    };

    return {
      logo: data.logo ? {
        url: data.logo.url || '',
        alt: data.logo.alt || 'Logo',
      } : undefined,
      menuItems: document.data.menu_items?.map((item) => ({
        texto: (item.texto as string) || '',
        enlace: prismic.asLink(item.enlace) || '#',
      })) || [],
      footerTexto: prismic.asText(document.data.footer_texto) || '',
      footerContacto: data.footer_contacto ? {
        telefono: data.footer_contacto.telefono || undefined,
        email: data.footer_contacto.email || undefined,
        direccion: data.footer_contacto.direccion || undefined,
      } : undefined,
      redesSociales: document.data.redes_sociales?.map((red) => ({
        plataforma: red.plataforma || '',
        enlace: prismic.asLink(red.enlace) || '#',
      })) || [],
    };
  } catch (error) {
    console.error('Error obteniendo configuración global de Prismic:', error);
    return null;
  }
}

