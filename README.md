# Qué Carajos — Menú web

Pequeña SPA en React + Vite para mostrar el menú de "Qué Carajos". Pensada para dispositivos móviles y escritorio, con integración de WhatsApp y generación de QR.

Características
- React 19 + Vite
- Enrutado con `react-router-dom`
- Componentes en `src/components/` y estilos en `src/styles/`
- Imágenes públicas en `public/images/` accesibles desde `/images/...`

Instalación y uso

```bash
npm install
npm run dev 
npm run build  
npm run preview
```

Despliegue
- Despliegue en Vercel: conecta tu repositorio a Vercel y deja que detecte el proyecto (Vercel autodetecta Vite).

	Opcionalmente, asegúrate de que los valores sean:

	- Build Command: `npm run build`
	- Output Directory: `dist`

	Vercel sirve correctamente aplicaciones SPA; si necesitas reglas de rewrites/redirects, añade un archivo `vercel.json` en la raíz.

Nota: no es necesario usar `gh-pages` ni el campo `homepage` en `package.json` cuando despliegas en Vercel.

Notas y recomendaciones
- Centraliza constantes como el número de WhatsApp en `src/config.js` antes del despliegue.
- Reemplaza enlaces de redes sociales en `src/components/Footer.jsx`.
- Los recursos estáticos (imágenes) deben colocarse en `public/images/` y referenciarse como `/images/nombre.jpg`.

Estructura importante
- `src/components/` — Componentes reutilizables (Header, Footer, MenuSection, QRGenerator...)
- `src/pages/` — Páginas (Home, Hamburguesas, Aplastados, Salchipapas)
- `public/images/` — Imágenes públicas consumidas por la app

Mejoras sugeridas
- Mover los datos de productos a `src/data/products.js` para facilitar mantenimiento
- Crear `src/config.js` para variables (teléfono WhatsApp, redes, base URL)
- Añadir CI (tests y lint) antes de deploy automático

Contacto
- Repo: https://github.com/JotaJotaM1/menu_quecarajos

