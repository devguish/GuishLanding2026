# Configuración de Prismic

## Pasos para configurar Prismic

### 1. Crear un repositorio en Prismic
- Ve a [prismic.io](https://prismic.io) y crea una cuenta o inicia sesión
- Crea un nuevo repositorio

### 2. Crear el tipo de contenido "Texto"
En tu repositorio de Prismic:

1. Ve a **Custom Types** > **Create New**
2. Crea un tipo llamado **"texto"** (en minúsculas)
3. Agrega los siguientes campos:
   - **contenido** (Rich Text)
   - **tamaño** (Select) con opciones: `pequeño`, `mediano`, `grande`
   - **alineacion** (Select) con opciones: `izquierda`, `centro`, `derecha`
4. Guarda y publica el tipo

### 3. Crear documentos de ejemplo
1. Ve a **Documents** > **Create New**
2. Selecciona el tipo "texto"
3. Crea dos documentos con estos UIDs:
   - `texto-principal`
   - `texto-secundario`
4. Completa los campos y publica los documentos

### 4. Configurar variables de entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```env
PRISMIC_REPOSITORY_NAME=https://tu-repositorio.prismic.io/api/v2
PRISMIC_ACCESS_TOKEN=tu-token-de-acceso
```

**Para obtener la URL del repositorio:**
- Ve a Settings > API & Security
- Copia la "Repository URL"

**Para obtener el token de acceso (opcional pero recomendado):**
- Ve a Settings > API & Security > Generate an access token
- Crea un token y cópialo

### 5. Reiniciar el servidor
Después de crear el archivo `.env.local`, reinicia el servidor de desarrollo:

```bash
npm run dev
```

## Estructura del proyecto

- `app/components/Texto.tsx` - Componente de texto reutilizable
- `app/lib/prismic.ts` - Configuración del cliente de Prismic
- `app/lib/getTexto.ts` - Función para obtener datos de Prismic
- `app/page.tsx` - Página que usa el componente con datos de Prismic

## Uso

El componente `Texto` se puede usar de dos formas:

1. **Con datos estáticos:**
```tsx
<Texto 
  contenido="Mi texto"
  tamaño="grande"
  alineacion="centro"
/>
```

2. **Con datos de Prismic:**
```tsx
const texto = await getTexto('uid-del-documento');
<Texto 
  contenido={texto.contenido}
  tamaño={texto.tamaño}
  alineacion={texto.alineacion}
/>
```

