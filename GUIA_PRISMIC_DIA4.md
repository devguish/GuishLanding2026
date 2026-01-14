# 📋 Guía: Configuración de Prismic para Día 4

## ✅ Lo que ya está hecho

1. ✅ Funciones de fetch creadas (`getLandingPage`, `getConfiguracionGlobal`)
2. ✅ Componentes de slices creados (Hero, SeccionContenido, ProductoDestacado, GridPartners, GridCaracteristicas, SeccionInformativa)
3. ✅ Sistema de renderizado con SliceZone implementado
4. ✅ Header y Footer con soporte para Prismic
5. ✅ Fallback a componentes hardcodeados si no hay Prismic

## 🚀 Próximos pasos: Configurar Prismic con Slice Machine

### Paso 1: Iniciar Slice Machine

```bash
npm run slicemachine
```

Esto abrirá la interfaz de Slice Machine en tu navegador.

### Paso 2: Crear Custom Type "Landing"

1. En Slice Machine, ve a **Custom Types**
2. Crea un nuevo **Page Type** llamado `landing`
3. Agrega los siguientes campos:
   - `titulo` (Title)
   - `meta_description` (Text)
   - `meta_image` (Image)
4. Agrega los siguientes **Slices**:
   - `hero` (Hero)
   - `seccion_contenido` (SeccionContenido)
   - `producto_destacado` (ProductoDestacado)
   - `grid_partners` (GridPartners)
   - `grid_caracteristicas` (GridCaracteristicas)
   - `seccion_informativa` (SeccionInformativa)

### Paso 3: Crear Custom Type "Configuracion Global"

1. Crea un nuevo **Singleton** llamado `configuracion_global`
2. Agrega los siguientes campos:
   - `logo` (Image)
   - `menu_items` (Group - repetible)
     - `texto` (Text)
     - `enlace` (Link)
   - `footer_texto` (Rich Text)
   - `footer_contacto` (Group)
     - `telefono` (Text)
     - `email` (Text)
     - `direccion` (Text)
   - `redes_sociales` (Group - repetible)
     - `plataforma` (Select: Facebook, Twitter, Instagram, LinkedIn)
     - `enlace` (Link)

### Paso 4: Crear Slices

Para cada slice, necesitas crear:

#### Slice: Hero
- `titulo` (Title)
- `subtitulo` (Rich Text)
- `imagen_fondo` (Image)
- `texto_boton` (Text)
- `enlace_boton` (Link)

#### Slice: SeccionContenido
- `titulo` (Title)
- `contenido` (Rich Text)
- `imagen` (Image)
- `posicion_imagen` (Select: izquierda, derecha)
- `texto_boton` (Text - opcional)
- `enlace_boton` (Link - opcional)

#### Slice: ProductoDestacado
- `titulo` (Title)
- `descripcion` (Rich Text)
- `imagen` (Image)
- `texto_boton` (Text)
- `enlace_boton` (Link)

#### Slice: GridPartners
- `titulo_seccion` (Title)
- `subtitulo` (Text)
- Items (repetible):
  - `nombre` (Title)
  - `descripcion` (Rich Text)
  - `imagen` (Image)
  - `enlace` (Link)

#### Slice: GridCaracteristicas
- `titulo_seccion` (Title)
- `subtitulo` (Text)
- Items (repetible):
  - `titulo` (Title)
  - `descripcion` (Rich Text)
  - `icono` (Image - opcional)

#### Slice: SeccionInformativa
- `titulo` (Title)
- `contenido` (Rich Text)
- `imagen` (Image)
- `texto_boton` (Text - opcional)
- `enlace_boton` (Link - opcional)

### Paso 5: Push a Prismic

1. Una vez creados todos los Custom Types y Slices
2. Haz clic en **Push** en Slice Machine
3. Esto sincronizará todo con tu repositorio de Prismic

### Paso 6: Crear contenido en Prismic

1. Ve a tu repositorio de Prismic
2. Crea un nuevo documento de tipo `landing` con UID `home`
3. Agrega los slices que quieras mostrar
4. Crea un documento de tipo `configuracion_global` (solo puede haber uno)

### Paso 7: Verificar

1. El código ya está listo para usar Prismic
2. Si hay contenido en Prismic, se mostrará automáticamente
3. Si no hay contenido, se mostrarán los componentes hardcodeados (fallback)

## 📝 Notas importantes

- Los nombres de los slices deben coincidir exactamente con los definidos en `slices/index.ts`
- Los nombres de los campos deben coincidir con los usados en los componentes de slices
- Después de hacer push, los tipos TypeScript se generarán automáticamente
- Puedes usar el modo Preview de Prismic para ver cambios en tiempo real

## 🔧 Troubleshooting

Si hay errores de TypeScript después de crear los slices:
1. Ejecuta `npm run build` para regenerar los tipos
2. O espera a que Next.js regenere los tipos automáticamente

