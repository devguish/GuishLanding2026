# ✅ Checklist Día 1 - Mañana

## 🎯 Objetivo
Setup completo + Header + Footer básicos funcionando

---

## 📋 Tareas del Día (8 horas)

### 🌅 Mañana (4 horas)

#### 1. Verificar Setup (15 min)
- [ ] Verificar que `npm run dev` funciona
- [ ] Verificar que Prismic está conectado
- [ ] Verificar que Slice Machine funciona (`npm run slicemachine`)

#### 2. Instalar shadcn/ui (30 min)
```bash
npx shadcn@latest init
```
**Configuración:**
- Style: Default
- Base color: Slate
- CSS variables: Yes

#### 3. Agregar Componentes Básicos (30 min)
```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

#### 4. Crear Estructura de Carpetas (30 min)
```
app/
├── components/
│   ├── ui/          ← componentes shadcn (se crea automáticamente)
│   ├── layout/      ← Header, Footer (CREAR)
│   └── sections/    ← Hero, Content, etc. (CREAR)
```

#### 5. Configurar Layout Base (2 horas)
- [ ] Actualizar `app/layout.tsx`
- [ ] Configurar tipografías (mantener Geist o cambiar)
- [ ] Variables CSS básicas en `globals.css`
- [ ] Limpiar `app/page.tsx` (temporalmente básico)

---

### 🌆 Tarde (4 horas)

#### 6. Header Component (3 horas)
- [ ] Crear `app/components/layout/Header.tsx`
- [ ] Logo (placeholder por ahora)
- [ ] Menú de navegación básico
- [ ] Menú móvil (hamburguesa)
- [ ] Responsive básico
- [ ] Integrar en `app/layout.tsx`

#### 7. Footer Component (1 hora)
- [ ] Crear `app/components/layout/Footer.tsx`
- [ ] Estructura básica (enlaces, contacto, redes)
- [ ] Placeholder content
- [ ] Integrar en `app/layout.tsx`

---

## ✅ Entregable del Día

Al finalizar deberías tener:
- ✅ shadcn/ui instalado y funcionando
- ✅ Estructura de carpetas organizada
- ✅ Header responsive funcionando (sin Prismic todavía)
- ✅ Footer básico funcionando (sin Prismic todavía)
- ✅ Layout base configurado
- ✅ Todo visible en el navegador

---

## 🚀 Comandos Rápidos

```bash
# Iniciar servidor de desarrollo
npm run dev

# Iniciar Slice Machine (si necesitas Prismic)
npm run slicemachine

# Instalar shadcn/ui
npx shadcn@latest init

# Agregar componentes shadcn
npx shadcn@latest add button
npx shadcn@latest add card
```

---

## 📝 Notas Importantes

- **Header y Footer sin Prismic primero** - Mejor hacerlo funcionar visualmente, luego conectamos Prismic
- **Usar placeholders** - No perder tiempo buscando imágenes/logo perfecto
- **Enfoque en funcionalidad** - Que funcione primero, perfección después
- **Testing constante** - Ver en navegador cada cambio importante

---

## 🆘 Si Algo Sale Mal

### shadcn/ui no instala
- Verificar Node.js version (mínimo 18)
- Verificar que estás en la raíz del proyecto

### Componentes no se ven
- Verificar imports correctos
- Verificar que Tailwind está funcionando
- Ver consola del navegador para errores

### Prismic no funciona
- No es crítico para Día 1
- Lo conectamos después

---

## 🎯 Prioridades si Falta Tiempo

**Crítico (debe estar):**
1. shadcn/ui instalado
2. Header básico funcionando
3. Footer básico funcionando

**Puede esperar:**
- Configuración perfecta de tipografías
- Variables CSS avanzadas
- Responsive perfecto (solo básico)

---

**¡Listo para mañana! 🚀**

*Cuando empieces, avísame y vamos paso a paso.*



