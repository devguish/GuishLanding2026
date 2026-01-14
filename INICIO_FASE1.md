# 🚀 Inicio Fase 1 - Guía Rápida

## 📅 Para Mañana

**Objetivo:** Configurar base del proyecto y crear componentes iniciales

---

## ✅ Checklist Pre-Inicio

Antes de empezar, verifica que tengas:

- [x] Proyecto Next.js funcionando
- [x] Prismic configurado y conectado
- [x] Slice Machine funcionando
- [x] Servidor de desarrollo corriendo (`npm run dev`)
- [x] Acceso a Prismic (landingtest1.prismic.io)

---

## 🎯 Fase 1: Estructura Base (2-3 días)

### Día 1: Setup y Componentes UI

#### 1. Instalar shadcn/ui (30 min)
```bash
npx shadcn@latest init
```

**Configuración sugerida:**
- Style: Default
- Base color: Slate
- CSS variables: Yes

#### 2. Agregar Componentes Básicos (1 hora)
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

#### 3. Crear Estructura de Carpetas (30 min)
```
app/
├── components/
│   ├── ui/          (componentes shadcn)
│   ├── layout/      (Header, Footer)
│   └── sections/    (Hero, Content, etc.)
├── lib/
│   └── prismic/     (funciones Prismic)
└── styles/
    └── globals.css
```

#### 4. Configurar Layout Base (1 hora)
- Limpiar página actual
- Crear layout principal
- Configurar tipografías
- Variables de color

---

### Día 2: Header y Footer

#### 1. Crear Header Component (2-3 horas)
- [ ] Componente Header básico
- [ ] Logo (configurable desde Prismic)
- [ ] Menú de navegación
- [ ] Menú móvil (hamburguesa)
- [ ] Integrar con Prismic

**Custom Type en Prismic:**
- `configuracion_global` (singleton)
  - `logo` (Image)
- `menu_items` (Group repetible)
  - `texto` (Text)
  - `enlace` (Link)

#### 2. Crear Footer Component (2 horas)
- [ ] Componente Footer
- [ ] Secciones: Nosotros, Productos, Contacto
- [ ] Redes sociales
- [ ] Información de contacto
- [ ] Integrar con Prismic

**Campos en Prismic:**
- `footer_texto` (Rich Text)
- `footer_contacto` (Group)
  - `telefono` (Text)
  - `email` (Text)
  - `direccion` (Text)
- `redes_sociales` (Group repetible)
  - `plataforma` (Select)
  - `enlace` (Link)

---

### Día 3: Hero Section

#### 1. Crear Hero Component (3-4 horas)
- [ ] Componente Hero
- [ ] Imagen/video de fondo
- [ ] Overlay con texto
- [ ] Título y subtítulo
- [ ] Botón CTA
- [ ] Responsive design
- [ ] Integrar con Prismic

**Slice en Prismic: "Hero"**
- `titulo` (Title)
- `subtitulo` (Rich Text)
- `imagen_fondo` (Image)
- `video_fondo` (Link - opcional)
- `texto_boton` (Text)
- `enlace_boton` (Link)

---

## 📋 Estructura de Prismic a Crear

### Custom Types:

1. **configuracion_global** (Singleton)
   - Logo
   - Menú items
   - Footer info
   - Redes sociales

### Slices (para Page Type "Landing"):

1. **Hero**
2. **SeccionContenido** (día 3-4)
3. **ProductoDestacado** (día 4-5)
4. **GridProductos** (día 5-6)
5. **SeccionInformativa** (día 6-7)
6. **Caracteristicas** (día 7-8)

---

## 🛠️ Comandos Útiles

### Desarrollo
```bash
# Iniciar servidor
npm run dev

# Slice Machine
npm run slicemachine
```

### Prismic
```bash
# Push cambios a Prismic
# (desde Slice Machine UI)
```

---

## 📝 Notas Importantes

### Estilos
- Usar Tailwind CSS (ya configurado)
- Seguir diseño Humanist Haus como referencia
- Mobile first approach

### Prismic
- Crear Custom Types en Slice Machine
- Push a Prismic antes de usar en código
- Usar preview mode para testing

### Código
- Componentes en TypeScript
- Props tipadas
- Código comentado para entender

---

## 🎯 Objetivos de Fase 1

Al finalizar deberías tener:

- ✅ shadcn/ui instalado y configurado
- ✅ Header funcional y conectado a Prismic
- ✅ Footer funcional y conectado a Prismic
- ✅ Hero Section funcional y conectado a Prismic
- ✅ Layout base establecido
- ✅ Estructura de carpetas organizada

---

## 🚨 Si Algo Sale Mal

### Problemas Comunes:

1. **shadcn/ui no instala**
   - Verificar Node.js version
   - Verificar que estás en la raíz del proyecto

2. **Prismic no conecta**
   - Verificar variables de entorno
   - Verificar que el repositorio existe

3. **Componentes no renderizan**
   - Verificar imports
   - Verificar que Prismic tiene datos

### Solución:
- Preguntar en el chat
- Revisar documentación
- Verificar consola de errores

---

## 📚 Recursos de Ayuda

### Documentación:
- **shadcn/ui:** https://ui.shadcn.com
- **Prismic:** https://prismic.io/docs
- **Tailwind:** https://tailwindcss.com/docs
- **Next.js:** https://nextjs.org/docs

### Referencia:
- **Humanist Haus:** https://www.humanisthaus.com/

---

## ✅ Checklist Mañana (Día 1)

- [ ] Verificar que todo funciona (servidor, Prismic)
- [ ] Instalar shadcn/ui
- [ ] Agregar componentes button y card
- [ ] Crear estructura de carpetas
- [ ] Limpiar y configurar layout base
- [ ] Preparar para Header (día 2)

---

## 🎉 Listo para Empezar

**Mañana comenzamos con:**
1. Setup de shadcn/ui
2. Estructura base
3. Preparación para Header

**¿Preguntas antes de empezar?** Estaré aquí para ayudarte. 🚀

---

*Última actualización: Enero 2025*

