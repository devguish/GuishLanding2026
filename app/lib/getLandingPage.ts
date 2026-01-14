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

export interface LandingPageData {
  id: string;
  uid: string;
  slices: any[];
  logo?: {
    url: string;
    alt: string;
  };
  menuItems?: MenuItem[];
  footerTexto?: string;
  footerContacto?: FooterContacto;
  redesSociales?: RedSocial[];
}

export async function getLandingPage(uid: string = 'home'): Promise<LandingPageData | null> {
  try {
    const client = createClient();
    
    let document = null;
    try {
      document = await client.getByUID('landing', uid);
    } catch (error) {
      // Si el documento no existe o hay error, retornar null
      console.warn(`No se pudo obtener landing page '${uid}' de Prismic:`, error);
      return null;
    }
    
    if (!document) {
      return null;
    }

    return {
      id: document.id,
      uid: document.uid || uid,
      slices: document.data.slices || [],
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
    console.error('Error obteniendo landing page de Prismic:', error);
    return null;
  }
}

