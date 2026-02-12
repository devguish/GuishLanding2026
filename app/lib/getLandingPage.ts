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
  slices: prismic.SliceZone<prismic.Content.LandingDocumentDataSlicesSlice>;
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
    } catch (error: any) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`No se pudo obtener landing page '${uid}' de Prismic:`, error?.message || error);
      }
      return null;
    }
    
    if (!document) {
      return null;
    }

    const data = document.data as prismic.Content.LandingDocumentData & {
      menu_items?: prismic.GroupField<{
        texto?: string;
        enlace?: prismic.LinkField;
      }>;
      footer_texto?: prismic.RichTextField;
      footer_contacto?: {
        telefono?: string;
        email?: string;
        direccion?: string;
      };
      redes_sociales?: prismic.GroupField<{
        plataforma?: string;
        enlace?: prismic.LinkField;
      }>;
    };

    return {
      id: document.id,
      uid: document.uid || uid,
      slices: document.data.slices || [],
      logo: document.data.logo ? {
        url: document.data.logo.url || '',
        alt: document.data.logo.alt || 'Logo',
      } : undefined,
      menuItems: data.menu_items?.map((item) => ({
        texto: (item.texto as string) || '',
        enlace: prismic.asLink(item.enlace) || '#',
      })) || [],
      footerTexto: data.footer_texto ? prismic.asText(data.footer_texto) || '' : '',
      footerContacto: data.footer_contacto ? {
        telefono: data.footer_contacto.telefono || undefined,
        email: data.footer_contacto.email || undefined,
        direccion: data.footer_contacto.direccion || undefined,
      } : undefined,
      redesSociales: data.redes_sociales?.map((red) => ({
        plataforma: red.plataforma || '',
        enlace: prismic.asLink(red.enlace) || '#',
      })) || [],
    };
  } catch (error) {
    console.error('Error obteniendo landing page de Prismic:', error);
    return null;
  }
}

