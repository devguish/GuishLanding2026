import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';

export interface TextoData {
  contenido: string;
  tamaño: 'pequeno' | 'mediano' | 'grande';
  alineacion: 'izquierda' | 'centro' | 'derecha';
}

export async function getTexto(uid: string): Promise<TextoData | null> {
  try {
    const client = createClient();
    
    // Obtener el documento por UID
    const document = await client.getByUID('texto', uid);
    
    if (!document) {
      return null;
    }

    // Mapear los datos de Prismic a nuestro formato
    return {
      contenido: prismic.asText(document.data.contenido) || '',
      tamaño: (document.data.Tamano as TextoData['tamaño']) || 'mediano',
      alineacion: (document.data.Alineacion as TextoData['alineacion']) || 'izquierda',
    };
  } catch (error) {
    console.error('Error obteniendo texto de Prismic:', error);
    return null;
  }
}

