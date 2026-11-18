# Contexto del proyecto — Landing de Papelera Sabri

Este archivo resume cómo quedó el proyecto para seguir trabajando en otro editor o con otro asistente.

## El negocio
- **Papelera Sabri**, "Todo lo que tu local necesita". Venta de packaging y artículos para comercios y emprendedores, por menor y por mayor.
- Local: **Bogotá 2925**. Lunes a sábado de 8 a 18 h. Envíos a todo el interior.
- WhatsApp: **11 6233-1724** (en `app.js`: `whatsapp: "5491162331724"`).
- Colores de marca: rosa y lila. Tipografía: Nunito.
- El foco es **papelera / packaging** (bolsas, perchas, equipamiento para locales). El cotillón va al final.
- Se va a publicar en **Netlify** (arrastrando la carpeta en app.netlify.com/drop).

## Cómo funciona la página
- Página estática: `index.html` + `estilos.css` + `app.js`. Sin frameworks ni build.
- Los productos salen de `catalogo.csv`. `app.js` intenta leer el CSV y, si no puede (por ejemplo, abriendo el archivo directo sin servidor), usa la copia `CATALOGO_RESPALDO` que está dentro de `app.js`. **Si se cambia el CSV, hay que actualizar también esa copia.**
- Cada tarjeta de producto tiene:
  - **Carrusel de fotos** que se desliza (con flechas en compu y puntitos). Orden: `portada` → fotos de `foto` (una por color) → `galeria`.
  - **Botones de color** (`variantes`): al tocar uno, el carrusel salta a la foto de ese color.
  - **Botones de medida o presentación** (`medidas`): cambian el precio. Formato `medida:precio[:foto[:precio_x_cantidad]]`. Con `medidas_titulo = Presentación` se usan para "Pack x10 / Caja x200" (sin "cm").
  - **Precio por mayor** (`precio_mayor` + `mayor_desde`), en un recuadro lila. En las bolsas zafiro, el recuadro muestra el precio x100 de cada medida (4.º valor de `medidas`).
  - El botón de **WhatsApp** arma el mensaje con el producto, el color y la medida que eligió el cliente.
- Rubros (en el orden en que aparecen): Bolsas e-commerce, Bolsas de papel, Bolsas de PVC, Bolsas de friselina, Bolsas camiseta, Bolsas riñón, Eco-bolsas metalizadas, Cintas y moños, Etiquetadoras, Equipamiento para locales, Aromatizantes, Changuitos, Perchas, Embalaje. Los productos van agrupados por rubro en el CSV.

## Cómo le gusta trabajar a la dueña (importante)
- Manda fotos y capturas del **catálogo de WhatsApp**. De ahí se sacan nombre, medidas y precios.
- **Usar SUS fotos.** No reemplazarlas por dibujos ni por fotos inventadas.
- Si una foto trae fondo feo (piso, escoba, pies, íconos del celular), **solo recortarla un poco**. No recortar la silueta ni ponerle fondo artificial: a ella le pareció peor.
- Si manda una foto con varios colores juntos: poner primero la foto grupal y después **cada color recortado por separado**.
- Si falta una foto de una variante (otro color, sin adhesivo, etc.), **armarla editando la foto que ella mandó** (cambiar color, borrar la tira de adhesivo…), sin esperar a que mande otra.
- No dejar en la foto logos ni marcas de agua de otras empresas (por ejemplo "Todo Perchas"): recortar para que no se vean.
- Cuando algo no está claro, preguntarle antes de suponer.

## Datos pendientes (aparecen como "Precio a consultar" o incompletos)
- **Bolsas camiseta**: precio por bulto (los precios por paquete de ~80 u. ya están).
- **E-commerce rosa pastel**: confirmar la medida, 42x50 o 42x54 (la foto dice 42x54). Precio x50: $18.000 ya cargado.
- **Bolsas riñón "Gracias por tu compra"** (lila y rojo; rosa sin stock): precio de 25x35 y de 30x40, y cuántas trae el paquete.
- **Eco-bolsas metalizadas** (dorado y plateado): medidas y precio.
- **Moños mágicos x100** y **moños rápidos**: precio (y cantidad por paquete en los rápidos).
- **Pistolas etiquetadoras** All-App y TG Tacher II: precio.
- **Percheros con ruedas**: tamaños y precios.
- **Maniquí torso femenino** (piel y negro), **torso colgante 40x75**, **busto para corpiños**, **cabeza de maniquí**: precios (y colores de la cabeza).
- **Saphirus con varillas**, **aromatizador automático**, **changuito plegable**: precios.
- **Percha silueta de alambre**, **percha transparente con broches**, **perchas de alambre**: precio y cantidad por pack.
- **Bolsas de PVC esmeriladas 18x26** (blanco, rosa, beige, negro): precio, cantidad por paquete y otras medidas.
- **Porta cinta grande** ($11.000): falta foto.
- Percha silueta plástica: confirmar colores (en la foto del proveedor decía PP blanco/fucsia y cristal fucsia; hoy está cargada negro/fucsia/cristal).
- Aromatizador textil Saphirus: si quiere, cargar la lista de fragancias para elegir.
