# 📘 Guía Detallada: Crear Custom Types y Slices en Slice Machine

## ⚠️ IMPORTANTE: Cambios en Prismic Actualizado

### 1. El campo "Title" YA NO existe para Slices

- ✅ **Title** solo existe en **Page Types** y **Custom Types** (documentos)
- ✅ En **Slices**, los títulos se hacen con **"Text"** o **"Rich Text"**
- ✅ Esto es una decisión intencional de Prismic, no un bug

**Por qué:**
- `Title` genera estructura especial y UID automático (solo para documentos)
- `Slices` son bloques reutilizables que no generan UID
- Por eso Prismic los trata de forma diferente

### 2. El checkbox "Required" puede no estar disponible

- ⚠️ En la nueva interfaz de Prismic, el checkbox **"Required"** puede no aparecer para campos de slices
- ✅ Esto es normal - simplemente completa los campos y haz clic en "Done"
- ✅ Los campos opcionales simplemente se dejan sin marcar (si el checkbox existiera)

**Regla simple:**
| Caso | Campo correcto |
|------|----------------|
| Título de página (Page Type) | Title (automático) |
| Título en un slice | **Text** |
| Texto con formato | Rich Text |

---

## 🚀 Paso 1: Iniciar Slice Machine

```bash
npm run slicemachine
```

Esto abrirá Slice Machine en tu navegador (generalmente en `http://localhost:9999`)

---

## 📄 Paso 2: Crear Page Type "Landing"

### 2.1 Crear el Page Type

1. En la barra lateral izquierda, haz clic en **"Page Types"** (NO en "Custom Types")
2. Haz clic en el botón **"+ Create"** (arriba a la derecha)
3. Nombre: `landing` (en minúsculas, sin espacios)
4. Haz clic en **"Create"**

### 2.2 Agregar campos al Page Type "Landing" (Opcional)

Los Page Types en Prismic ya tienen un campo UID automático, así que no necesitas agregarlo manualmente.

Si quieres agregar campos adicionales en la sección **"Static Zone"** (opcional, para SEO):

#### Campo 1: Meta Description (Opcional)
1. Haz clic en **"+ Add a new field"**
2. Tipo de campo: **"Text"** (campo de texto simple)
3. Nombre del campo: `meta_description`
4. Label: `Meta Description`
5. Haz clic en **"Save to library"**

#### Campo 2: Meta Image (Opcional)
1. Haz clic en **"+ Add a new field"**
2. Tipo de campo: **"Image"**
3. Nombre del campo: `meta_image`
4. Label: `Meta Image`
5. Haz clic en **"Save to library"**

**Nota:** Estos campos son opcionales. Lo más importante es la **Slice Zone** donde agregarás los slices.

### 2.3 Agregar Slices al Page Type "Landing"

**IMPORTANTE:** Primero debes crear los slices (Pasos 4-9), y DESPUÉS agregarlos aquí.

En la sección **"Slice Zone"**:

1. Haz clic en **"+ Add a new slice"**
2. Selecciona los slices que ya creaste:
   - `hero`
   - `seccion_contenido`
   - `producto_destacado`
   - `grid_partners`
   - `grid_caracteristicas`
   - `seccion_informativa`

**Nota:** Los slices deben estar creados primero antes de agregarlos al Page Type.

5. Haz clic en **"Save to library"** en la parte superior para guardar el Page Type

---

## 📄 Paso 3: Crear Custom Type "Configuracion Global" (Singleton)

### 3.1 Crear el Custom Type

1. En la barra lateral izquierda, haz clic en **"Custom Types"**
2. Haz clic en el botón **"+ Create"** (arriba a la derecha)
3. Haz clic en **"Create"** (botón principal)
4. Selecciona **"Single Type"** (Singleton - solo puede haber uno)
5. Nombre: `configuracion_global` (en minúsculas, con guión bajo)
6. Haz clic en **"Create"**

### 3.2 Agregar campos al Custom Type "Configuracion Global"

En la sección **"Static Zone"**:

#### Campo 1: Logo
1. Haz clic en **"+ Add a new field"**
2. Tipo de campo: **"Image"**
3. Nombre del campo: `logo`
4. Label: `Logo`
5. Haz clic en **"Save to library"**

#### Campo 2: Menu Items (Group repetible)
1. Haz clic en **"+ Add a new field"**
2. Tipo de campo: **"Group"**
3. Nombre del campo: `menu_items`
4. Label: `Menu Items`
5. ✅ Marca **"Repeatable"** (esto permite múltiples items)
6. Haz clic en **"Save to library"**

**Ahora dentro del Group `menu_items`, agrega estos campos:**

- **Campo dentro del Group:**
  1. Haz clic en **"+ Add a new field"** (dentro del group)
  2. Tipo: **"Text"**
  3. Nombre: `texto`
  4. Label: `Texto`
  5. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible en la nueva interfaz de Prismic
  6. Haz clic en **"Save to library"** (o "Done" según la interfaz)

- **Segundo campo dentro del Group:**
  1. Haz clic en **"+ Add a new field"** (dentro del group)
  2. Tipo: **"Link"**
  3. Nombre: `enlace`
  4. Label: `Enlace`
  5. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible en la nueva interfaz de Prismic
  6. Haz clic en **"Save to library"** (o "Done" según la interfaz)

#### Campo 3: Footer Texto
1. Haz clic en **"+ Add a new field"** (fuera del group, en Static Zone)
2. Tipo de campo: **"Rich Text"**
3. Nombre del campo: `footer_texto`
4. Label: `Footer Texto`
5. Haz clic en **"Save to library"**

#### Campo 4: Footer Contacto (Group - NO repetible)
1. Haz clic en **"+ Add a new field"**
2. Tipo de campo: **"Group"**
3. Nombre del campo: `footer_contacto`
4. Label: `Footer Contacto`
5. ❌ NO marques "Repeatable" (solo un grupo)
6. Haz clic en **"Save to library"**

**Dentro del Group `footer_contacto`, agrega:**
- `telefono` (Text)
- `email` (Text)
- `direccion` (Text)

#### Campo 5: Redes Sociales (Group repetible)
1. Haz clic en **"+ Add a new field"**
2. Tipo de campo: **"Group"**
3. Nombre del campo: `redes_sociales`
4. Label: `Redes Sociales`
5. ✅ Marca **"Repeatable"**
6. Haz clic en **"Save to library"**

**Dentro del Group `redes_sociales`, agrega:**
- `plataforma` (Select) - Opciones: Facebook, Twitter, Instagram, LinkedIn
- `enlace` (Link)

7. Haz clic en **"Save to library"** para guardar el Custom Type completo

---

## 🎨 Paso 4: Crear Slice "Hero"

### 4.1 Crear el Slice

1. En la barra lateral izquierda, haz clic en **"Slices"**
2. Haz clic en el botón **"+ Create"** (arriba a la derecha)
3. **Slice name:** `Hero` (PascalCase - primera letra mayúscula)
   - ⚠️ **IMPORTANTE:** Debe ser PascalCase, no minúsculas
   - Si escribes `hero` te dará error: "Value has to be PascalCased"
   - Escribe `Hero` (con H mayúscula)
4. **Target Library:** `./slices` (debe aparecer automáticamente)
5. Haz clic en **"Create"**

**Nota:** El nombre debe ser PascalCase (`Hero`), pero el API ID será automáticamente `hero` (minúsculas) para usar en el código.

### 4.2 Agregar campos al Slice Hero

Después de crear el slice, verás la pantalla del slice con:
- **Lado izquierdo:** Preview del slice (por ahora dirá "No screenshot available")
- **Lado derecho:** Sección "Fields" con el mensaje "Your slice has no fields yet"

Ahora agrega los campos uno por uno:

#### Campo 1: Título
1. Haz clic en **"+ Add a field"** (en la sección Fields)
2. En el menú desplegable "Single fields", selecciona: **"Text"**
   - ⚠️ **NO busques "Title"** - no existe para slices en Prismic actual
   - "Title" solo existe para Page Types y Custom Types
3. En el modal que se abre:
   - **Label:** `Título`
   - **API ID:** `titulo` (se genera automáticamente desde el Label, verifica que sea correcto)
   - **Placeholder (opcional):** Puedes dejarlo vacío o poner "Ej: Transforma tu Negocio"
   - ⚠️ **Nota:** En la nueva interfaz de Prismic, el checkbox "Required" puede no estar disponible para campos de slices
4. Haz clic en **"Done"**

**Nota importante:** En Prismic actualizado, el campo "Title" solo existe para documentos (Page Types, Custom Types). Para slices, siempre usa **"Text"** para títulos. Esto es intencional de Prismic - los slices son bloques reutilizables que no generan UID.

#### Campo 2: Subtítulo
1. Haz clic en **"+ Add a field"**
2. Selecciona el tipo: **"Rich Text"** (permite formato: negrita, listas, etc.)
3. En el modal:
   - **Label:** `Subtítulo`
   - **API ID:** `subtitulo` (verifica que sea correcto)
   - **Placeholder (opcional):** "Ej: Soluciones innovadoras..."
   - En "Accept" puedes dejar todos los elementos marcados o simplificar (p, b, i, link son suficientes)
   - ✅ Marca **"Allow target blank for links"**
   - ✅ Marca **"Allow multiple paragraphs"**
4. Haz clic en **"Done"**

#### Campo 3: Imagen Fondo
1. Haz clic en **"+ Add a field"**
2. Selecciona el tipo: **"Image"**
3. En el modal:
   - **Label:** `Imagen de Fondo`
   - **API ID:** `imagen_fondo` (verifica que sea correcto)
4. Haz clic en **"Done"**

#### Campo 4: Texto Botón
1. Haz clic en **"+ Add a field"**
2. Selecciona el tipo: **"Text"** (texto simple de una línea)
3. En el modal:
   - **Label:** `Texto del Botón`
   - **API ID:** `texto_boton` (verifica que sea correcto)
   - **Placeholder (opcional):** `Comenzar ahora`
4. Haz clic en **"Done"**

#### Campo 5: Enlace Botón
1. Haz clic en **"+ Add a field"**
2. Selecciona el tipo: **"Link"**
3. En el modal:
   - **Label:** `Enlace del Botón`
   - **API ID:** `enlace_boton` (verifica que sea correcto)
   - **Placeholder (opcional):** Puedes dejarlo vacío
   - En las opciones del Link:
     - ✅ Marca **"Allow target blank"** (permite abrir en nueva pestaña)
     - ❌ Desmarca **"Allow display text"** (no necesario para enlaces simples)
     - ❌ Desmarca **"Repeatable"** (solo un enlace)
4. Haz clic en **"Done"**

**Nota:** Los campos se guardan automáticamente (verás "Auto-saved" en la parte superior). No necesitas hacer "Save" manualmente.

### 4.3 Agregar el Slice al Page Type "Landing"

**IMPORTANTE:** Primero debes crear el Page Type "Landing" (Paso 2) antes de agregar slices.

1. Ve a **"Page types"** en la barra lateral izquierda
2. Selecciona `landing` (o créalo si aún no existe - ver Paso 2)
3. En la sección **"Slice Zone"**, haz clic en **"+ Add a new slice"**
4. Selecciona el slice `Hero` que acabas de crear
5. El slice se agregará automáticamente a la Slice Zone
6. Verás "Auto-saved" confirmando que se guardó

**Estructura final del slice Hero:**
- ✅ 5 campos creados
- ✅ Todos los campos visibles en la sección "Fields"
- ✅ Slice agregado al Page Type "Landing"

---

## 🎨 Paso 5: Crear Slice "SeccionContenido"

### 5.1 Crear el Slice

1. Ve a **"Slices"** → **"+ Create"**
2. **Slice name:** `SeccionContenido` (PascalCase)
3. **Target Library:** `./slices`
4. Haz clic en **"Create"**

### 5.2 Agregar campos al Slice SeccionContenido

En la sección **"Fields"**, agrega los siguientes campos:

#### Campo 1: Título
1. **"+ Add a field"** → Tipo: **"Text"** 
2. **Label:** `Título`
3. **API ID:** `titulo`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible en la nueva interfaz
5. **"Done"**

**Nota importante:** En la nueva interfaz de Slice Machine, el campo "Title" puede no estar disponible en slices. Usa **"Text"** en su lugar - funciona perfectamente para títulos y es la opción correcta.

#### Campo 2: Contenido
1. **"+ Add a field"** → Tipo: **"Rich Text"**
2. **Label:** `Contenido`
3. **API ID:** `contenido`
4. **"Done"**

#### Campo 3: Imagen
1. **"+ Add a field"** → Tipo: **"Image"**
2. **Label:** `Imagen`
3. **API ID:** `imagen`
4. **"Done"**

#### Campo 4: Posición Imagen
1. **"+ Add a field"** → Tipo: **"Select"**
2. **Label:** `Posición de la Imagen`
3. **API ID:** `posicion_imagen`
4. Agrega las opciones:
   - `izquierda` (Label: "Izquierda")
   - `derecha` (Label: "Derecha")
5. Valor por defecto: `izquierda`
6. **"Done"**

#### Campo 5: Texto Botón (Opcional)
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Texto del Botón`
3. **API ID:** `texto_boton`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible (los campos opcionales simplemente no se marcan)
5. **"Done"**

#### Campo 6: Enlace Botón (Opcional)
1. **"+ Add a field"** → Tipo: **"Link"**
2. **Label:** `Enlace del Botón`
3. **API ID:** `enlace_boton`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible (los campos opcionales simplemente no se marcan)
5. **"Done"**

### 5.3 Agregar el Slice al Page Type "Landing"

1. Ve a **"Page types"** → `landing`
2. En **"Slice Zone"**, agrega el slice `SeccionContenido`

---

## 🎨 Paso 6: Crear Slice "ProductoDestacado"

### 6.1 Crear el Slice

1. Ve a **"Slices"** → **"+ Create"**
2. **Slice name:** `ProductoDestacado` (PascalCase)
3. **Target Library:** `./slices`
4. Haz clic en **"Create"**

### 6.2 Agregar campos al Slice ProductoDestacado

En la sección **"Fields"**:

#### Campo 1: Título
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Título`
3. **API ID:** `titulo`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible en la nueva interfaz
5. **"Done"**

#### Campo 2: Descripción
1. **"+ Add a field"** → Tipo: **"Rich Text"**
2. **Label:** `Descripción`
3. **API ID:** `descripcion`
4. **"Done"**

#### Campo 3: Imagen
1. **"+ Add a field"** → Tipo: **"Image"**
2. **Label:** `Imagen del Producto`
3. **API ID:** `imagen`
4. **"Done"**

#### Campo 4: Texto Botón
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Texto del Botón`
3. **API ID:** `texto_boton`
4. **Placeholder:** `Ver más detalles`
5. **"Done"**

#### Campo 5: Enlace Botón
1. **"+ Add a field"** → Tipo: **"Link"**
2. **Label:** `Enlace del Botón`
3. **API ID:** `enlace_boton`
4. **"Done"**

### 6.3 Agregar el Slice al Page Type "Landing"

1. Ve a **"Page types"** → `landing`
2. En **"Slice Zone"**, agrega el slice `ProductoDestacado`

---

## 🎨 Paso 7: Crear Slice "GridPartners"

### 7.1 Crear el Slice

1. Ve a **"Slices"** → **"+ Create"**
2. **Slice name:** `GridPartners` (PascalCase)
3. **Target Library:** `./slices`
4. Haz clic en **"Create"**

### 7.2 Agregar campos al Slice GridPartners

En la sección **"Fields"**, primero agrega los campos principales (no repetibles):

#### Campos principales (una sola vez):

**Campo 1: Título Sección**
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Título de la Sección`
3. **API ID:** `titulo_seccion`
4. **"Done"**

**Campo 2: Subtítulo**
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Subtítulo`
3. **API ID:** `subtitulo`
4. **"Done"**

#### Campos repetibles (para múltiples partners):

**IMPORTANTE:** En la nueva interfaz, los campos repetibles se crean como un **Group** que es repetible.

**Campo 3: Items (Group repetible)**
1. **"+ Add a field"** → Tipo: **"Group"**
2. **Label:** `Partners` (o `Items`)
3. **API ID:** `items`
4. ✅ **Marca "Repeatable"** (esto es crucial - permite múltiples partners)
5. Haz clic en **"Done"**

**Ahora dentro del Group, agrega estos campos:**

Dentro del Group que acabas de crear, haz clic en **"+ Add a field"**:

**Campo dentro del Group: Nombre**
1. Tipo: **"Text"**
2. **Label:** `Nombre del Partner`
3. **API ID:** `nombre`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible en la nueva interfaz
5. **"Done"**

**Campo dentro del Group: Descripción**
1. Tipo: **"Rich Text"**
2. **Label:** `Descripción`
3. **API ID:** `descripcion`
4. **"Done"**

**Campo dentro del Group: Imagen**
1. Tipo: **"Image"**
2. **Label:** `Logo del Partner`
3. **API ID:** `imagen`
4. **"Done"**

**Campo dentro del Group: Enlace**
1. Tipo: **"Link"**
2. **Label:** `Enlace del Partner`
3. **API ID:** `enlace`
4. **"Done"**

**Nota:** Los campos dentro del Group repetible permitirán crear múltiples partners cuando agregues contenido en Prismic.

### 7.3 Agregar el Slice al Page Type "Landing"

1. Ve a **"Page types"** → `landing`
2. En **"Slice Zone"**, agrega el slice `GridPartners`

---

## 🎨 Paso 8: Crear Slice "GridCaracteristicas"

### 8.1 Crear el Slice

1. Ve a **"Slices"** → **"+ Create"**
2. **Slice name:** `GridCaracteristicas` (PascalCase)
3. **Target Library:** `./slices`
4. Haz clic en **"Create"**

### 8.2 Agregar campos al Slice GridCaracteristicas

En la sección **"Fields"**:

#### Campos principales (una sola vez):

**Campo 1: Título Sección**
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Título de la Sección`
3. **API ID:** `titulo_seccion`
4. **"Done"**

**Campo 2: Subtítulo**
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Subtítulo`
3. **API ID:** `subtitulo`
4. **"Done"**

#### Campos repetibles (Group):

**Campo 3: Items (Group repetible)**
1. **"+ Add a field"** → Tipo: **"Group"**
2. **Label:** `Características` (o `Items`)
3. **API ID:** `items`
4. ✅ **Marca "Repeatable"**
5. **"Done"**

**Dentro del Group, agrega:**

**Campo dentro del Group: Título**
1. Tipo: **"Text"**
2. **Label:** `Título de la Característica`
3. **API ID:** `titulo`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible en la nueva interfaz
5. **"Done"**

**Campo dentro del Group: Descripción**
1. Tipo: **"Rich Text"**
2. **Label:** `Descripción de la Característica`
3. **API ID:** `descripcion`
4. **"Done"**

**Campo dentro del Group: Icono (Opcional)**
1. Tipo: **"Image"**
2. **Label:** `Icono`
3. **API ID:** `icono`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible (los campos opcionales simplemente no se marcan)
5. **"Done"**

**Nota:** Si no agregas un icono, el componente usará iconos por defecto de Lucide React.

### 8.3 Agregar el Slice al Page Type "Landing"

1. Ve a **"Page types"** → `landing`
2. En **"Slice Zone"**, agrega el slice `GridCaracteristicas`

---

## 🎨 Paso 9: Crear Slice "SeccionInformativa"

### 9.1 Crear el Slice

1. Ve a **"Slices"** → **"+ Create"**
2. **Slice name:** `SeccionInformativa` (PascalCase)
3. **Target Library:** `./slices`
4. Haz clic en **"Create"**

### 9.2 Agregar campos al Slice SeccionInformativa

En la sección **"Fields"**:

#### Campo 1: Título
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Título`
3. **API ID:** `titulo`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible en la nueva interfaz
5. **"Done"**

#### Campo 2: Contenido
1. **"+ Add a field"** → Tipo: **"Rich Text"**
2. **Label:** `Contenido`
3. **API ID:** `contenido`
4. **"Done"**

#### Campo 3: Imagen
1. **"+ Add a field"** → Tipo: **"Image"**
2. **Label:** `Imagen`
3. **API ID:** `imagen`
4. **"Done"**

#### Campo 4: Texto Botón (Opcional)
1. **"+ Add a field"** → Tipo: **"Text"**
2. **Label:** `Texto del Botón`
3. **API ID:** `texto_boton`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible (los campos opcionales simplemente no se marcan)
5. **"Done"**

#### Campo 5: Enlace Botón (Opcional)
1. **"+ Add a field"** → Tipo: **"Link"**
2. **Label:** `Enlace del Botón`
3. **API ID:** `enlace_boton`
4. ⚠️ **Nota:** El checkbox "Required" puede no estar disponible (los campos opcionales simplemente no se marcan)
5. **"Done"**

**Nota:** Si no agregas `texto_boton`, el botón no se mostrará en el componente.

### 9.3 Agregar el Slice al Page Type "Landing"

1. Ve a **"Page types"** → `landing`
2. En **"Slice Zone"**, agrega el slice `SeccionInformativa`

---

## 📋 Orden Correcto de Trabajo

**IMPORTANTE:** Sigue este orden para evitar problemas:

1. ✅ **Primero:** Crear todos los Slices (Pasos 4-9)
   - Crea cada slice con todos sus campos
   - Guarda cada slice individualmente

2. ✅ **Segundo:** Crear el Page Type "Landing" (Paso 2)
   - Agrega los slices ya creados a la Slice Zone

3. ✅ **Tercero:** Crear el Custom Type "Configuracion Global" (Paso 3)

4. ✅ **Cuarto:** Push a Prismic (Paso 10)

---

## 📤 Paso 10: Push a Prismic

1. Una vez que hayas creado todos los Custom Types y Slices
2. Haz clic en el botón **"Push"** en la parte superior de Slice Machine
3. Esto sincronizará todo con tu repositorio de Prismic
4. Espera a que termine el proceso

---

## ✅ Resumen de Tipos de Campos

| Tipo de Campo | Cuándo Usar | Ejemplo |
|--------------|-------------|---------|
| **Text** | Texto simple de una línea (usar para títulos en slices - Title NO existe en slices) | `titulo` |
| **Title** | Solo para Page Types y Custom Types (NO para slices) | N/A en slices |
| **Text** | Texto simple de una línea | `meta_description`, `texto_boton` |
| **Rich Text** | Texto con formato (negrita, listas, etc.) | `contenido`, `descripcion` |
| **Image** | Imágenes | `logo`, `imagen_fondo` |
| **Link** | Enlaces (internos o externos) | `enlace_boton`, `enlace` |
| **UID** | Identificador único (solo en Page Types) | `uid` |
| **Select** | Lista desplegable con opciones | `posicion_imagen` |
| **Group** | Agrupar campos relacionados | `menu_items`, `footer_contacto` |
| **Group (Repeatable)** | Múltiples grupos del mismo tipo | `menu_items`, `redes_sociales` |

---

## 🎯 Checklist Final

Antes de hacer Push, verifica:

- [ ] Page Type `landing` creado
- [ ] Custom Type `configuracion_global` creado (Single Type)
- [ ] Slice `hero` con todos sus campos (5 campos)
- [ ] Slice `seccion_contenido` con todos sus campos (6 campos)
- [ ] Slice `producto_destacado` con todos sus campos (5 campos)
- [ ] Slice `grid_partners` con campos non-repeatable (2) y repeatable (4)
- [ ] Slice `grid_caracteristicas` con campos non-repeatable (2) y repeatable (3)
- [ ] Slice `seccion_informativa` con todos sus campos (5 campos)
- [ ] Todos los slices agregados al Page Type `landing` en la Slice Zone
- [ ] Push realizado exitosamente

---

## 💡 Tips Importantes

1. **Nombres de campos:** Usa minúsculas y guiones bajos (`nombre_campo`)
2. **Required fields:** Marca como required solo los campos esenciales
3. **Repeatable Groups:** Úsalos cuando necesites múltiples items (partners, características)
4. **Select fields:** Define las opciones exactamente como se esperan en el código (`izquierda`, `derecha`)
5. **Después del Push:** Los tipos TypeScript se generarán automáticamente

---

¿Necesitas ayuda con algún paso específico? 🚀

