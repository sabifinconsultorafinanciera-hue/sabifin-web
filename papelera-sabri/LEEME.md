# Papelera Sabri — Landing web

Página de Papelera Sabri con el catálogo de productos, filtros por rubro, buscador,
fotos que se deslizan, selección de color / medida / presentación y pedido por WhatsApp.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | La estructura de la página (portada, rubros, productos, por mayor, preguntas, pie). |
| `estilos.css` | Colores, tipografías y diseño. |
| `app.js` | Lo que hace funcionar la página: arma las tarjetas, filtros, buscador, carrusel de fotos, botones de color y medida, y los links de WhatsApp. |
| `catalogo.csv` | **La lista de productos.** Se puede abrir con Excel o Google Sheets. |
| `fotos/` | Fotos de los productos. |
| `marca/` | Logo, isotipo y favicon. |

## Cómo cambiar productos y precios

Todo se edita en `catalogo.csv`. Columnas:

- **nombre**: el nombre que se ve en la tarjeta.
- **categoria**: el rubro (por ejemplo `Bolsas riñón`, `Perchas`).
- **precio**: número sin puntos ni $ (por ejemplo `13000`). Si se pone `Consultar`, aparece "Precio a consultar".
- **foto**: nombre del archivo en `fotos/`. Si el producto tiene colores, una foto por color separadas con `|`.
- **stock**: `si` o `no`.
- **variantes**: colores separados con `|` (por ejemplo `Lila|Rojo`), en el mismo orden que las fotos.
- **galeria**: fotos extra para deslizar, separadas con `|`.
- **portada**: foto que aparece primero (por ejemplo, la de todos los colores juntos).
- **precio_mayor** y **mayor_desde**: precio por mayor y desde cuántas unidades (ej. `3500` y `6`).
- **medidas**: opciones con su precio, separadas con `|`. Formato `medida:precio`, por ejemplo
  `20x30:5000|25x35:5500`. Opcionalmente `medida:precio:foto:precio_x_cantidad`
  (la foto hace que al elegir la medida se vea su foto; el último valor se usa en las bolsas zafiro para el precio x100).
- **medidas_titulo**: vacío para medidas en cm, o `Presentación` para opciones como `Pack x10` / `Caja x200`.

**Importante:** `app.js` tiene una copia del catálogo adentro (`CATALOGO_RESPALDO`) por si
el archivo CSV no se puede leer al abrir la página directamente desde la computadora.
Si se cambia `catalogo.csv`, conviene copiar el mismo contenido ahí también.

## Ver la página en la computadora

Lo más simple es usar una extensión tipo "Live Server" en VS Code, o en la terminal, dentro de esta carpeta:

```
python -m http.server 8000
```

y abrir http://localhost:8000

## Publicarla en Netlify

1. Entrar a https://app.netlify.com/drop
2. Arrastrar **la carpeta completa** (la que tiene `index.html`).
3. Netlify da un link público. Después se puede cambiar el nombre del sitio o conectar un dominio propio.

## Datos del negocio

- Local: Bogotá 2925 — lunes a sábado de 8 a 18 h — envíos a todo el interior.
- WhatsApp: 11 6233-1724 (el número se configura al principio de `app.js`).
