# 🧪 Guía: Probar Prismic Antes del Día 5

## ✅ Paso 1: Verificar que el Push fue exitoso

1. En Slice Machine, verifica que no haya errores
2. Deberías ver "Auto-saved" o un mensaje de éxito
3. Los slices deberían aparecer en tu repositorio de Prismic

---

## 📝 Paso 2: Crear el Page Type "Landing" en Prismic

1. Ve a tu repositorio de Prismic: `https://landingtest1.prismic.io` (o tu URL)
2. Haz clic en **"Documents"** en el menú lateral
3. Haz clic en **"+ Create new"**
4. Selecciona el tipo **"Landing"** (Page Type que creaste)
5. **UID:** `home` (importante - debe ser "home")
6. Haz clic en **"Create"**

---

## 🎨 Paso 3: Agregar Slices a la Página "Landing"

En la página que acabas de crear, verás una sección **"Slice Zone"**:

1. Haz clic en **"+ Add a new slice"** o **"+ Add slice"**
2. Selecciona los slices que quieras agregar (puedes agregar varios):
   - `Hero`
   - `SeccionContenido` (puedes agregarlo 2 veces con contenido diferente)
   - `ProductoDestacado`
   - `GridPartners`
   - `GridCaracteristicas`
   - `SeccionInformativa`

3. Para cada slice, completa los campos:
   - **Hero:** Título, Subtítulo, Imagen (opcional), Texto Botón, Enlace Botón
   - **SeccionContenido:** Título, Contenido, Imagen (opcional), Posición, etc.
   - Y así con cada uno...

4. Haz clic en **"Save"** para guardar la página

---

## ⚙️ Paso 4: Crear Custom Type "Configuracion Global" (Opcional por ahora)

1. Ve a **"Documents"** → **"+ Create new"**
2. Selecciona **"Configuracion Global"** (Single Type)
3. Completa los campos:
   - Logo (opcional por ahora)
   - Menu Items (puedes agregar algunos)
   - Footer Texto
   - Footer Contacto
   - Redes Sociales (opcional)
4. Haz clic en **"Save"**

**Nota:** Si no creas este documento, el Header y Footer usarán valores por defecto (hardcodeados).

---

## 🧪 Paso 5: Probar en el Navegador

1. Asegúrate de que el servidor de desarrollo esté corriendo:
   ```bash
   npm run dev
   ```

2. Ve a `http://localhost:3001` (o el puerto que esté usando)

3. **Deberías ver:**
   - Si creaste contenido en Prismic → Se mostrará el contenido de Prismic
   - Si NO creaste contenido → Se mostrarán los componentes hardcodeados (fallback)

---

## 🔍 Paso 6: Verificar que Funciona

### Si ves contenido de Prismic:
✅ **¡Perfecto!** Todo está conectado correctamente.

### Si ves contenido hardcodeado:
Esto es normal si:
- No creaste la página "Landing" con UID "home"
- O no agregaste slices a la página

**Solución:**
1. Verifica que creaste la página con UID `home`
2. Verifica que agregaste al menos un slice
3. Verifica que guardaste la página en Prismic
4. Recarga el navegador

---

## 🐛 Troubleshooting

### Error: "Cannot find module"
```bash
# Regenera los tipos TypeScript
npm run build
```

### No se muestra contenido de Prismic
1. Verifica que el UID de la página sea `home`
2. Verifica que agregaste slices a la página
3. Verifica la consola del navegador por errores
4. Verifica la terminal donde corre `npm run dev` por errores

### Los tipos TypeScript no se generaron
1. Espera unos segundos después del push
2. O ejecuta: `npm run build`
3. Los tipos deberían estar en `prismicio-types.d.ts`

---

## ✅ Checklist de Prueba

Antes de pasar al Día 5, verifica:

- [ ] Push a Prismic completado sin errores
- [ ] Page Type "Landing" creado en Prismic
- [ ] Página "Landing" con UID "home" creada
- [ ] Al menos 2-3 slices agregados a la página
- [ ] Contenido completado en los slices
- [ ] Página guardada en Prismic
- [ ] Servidor de desarrollo corriendo (`npm run dev`)
- [ ] Contenido de Prismic visible en el navegador (o fallback funcionando)
- [ ] Sin errores en la consola del navegador
- [ ] Sin errores en la terminal

---

## 🎯 Si Todo Funciona

¡Perfecto! Puedes pasar al **Día 5: Refinamiento y Deploy**.

Si hay problemas, revísalos antes de continuar.

---

¿Necesitas ayuda con algún paso específico? 🚀

