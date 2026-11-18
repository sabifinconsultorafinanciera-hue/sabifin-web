// ===== Configuración: completar con los datos reales =====
const CONFIG = {
  // Número con código de país, sin + ni espacios.
  whatsapp: "5491162331724",
  whatsappVisible: "11 6233-1724",
  mensajeWhatsapp: "¡Hola Papelera Sabri! Quería hacer una consulta.",
  // URL del Apps Script de Google Sheets. Vacío = modo prueba.
  urlFormulario: "",
};

// Rubros en el orden en que se muestran. El nombre tiene que coincidir con la columna "categoria" del catálogo.
const RUBROS = [
  "Bolsas e-commerce",
  "Bolsas de friselina",
  "Bolsas camiseta",
  "Bolsas riñón",
  "Bolsas de PVC",
  "Eco-bolsas metalizadas",
  "Bolsas de papel",
  "Cintas y moños",
  "Embalaje",
  "Etiquetadoras",
  "Perchas",
  "Equipamiento para locales",
  "Aromatizantes",
  "Changuitos",
  "Cotillón",
];

// Colores de friselina (franja de muestras)
const COLORES_FRISELINA = ["Fucsia", "Rosa claro", "Rojo", "Naranja", "Amarillo", "Beige", "Blanco",
  "Verde manzana", "Verde", "Celeste", "Azul francia", "Azul marino", "Violeta", "Negro"];

const COLORES = {
  rosa: "#f06aa5", "rosa pastel": "#f4b9cb", blanco: "#ffffff", negro: "#222", lila: "#b79ad8", kraft: "#c9a878",
  beige: "#e3c9a4", fucsia: "#e0287f", "rosa claro": "#f6c3d0", amarillo: "#ffd21a", naranja: "#f07a1f",
  rojo: "#c83a22", violeta: "#55308a", "azul marino": "#173f63", "azul francia": "#2a3ea0",
  celeste: "#2fb6dc", azul: "#1f3fbf", bordo: "#7d1f24", transparente: "linear-gradient(135deg,#ffffff,#dfe6ec)", tornasolada: "linear-gradient(135deg,#9fd8f5,#c9a7f0,#f5b8d9)", cristal: "linear-gradient(135deg,#f4f7fa,#cfd8e0)", dorado: "#d4a72c", plateado: "#c7cbd1", cromado: "#b8bec6", gris: "#7d8389", piel: "#e2b48c", "verde manzana": "#7ccb3a", verde: "#2fa83c",
};

// Catálogo de respaldo: se usa si no se puede leer catalogo.csv
const CATALOGO_RESPALDO = `nombre,categoria,precio,foto,stock,variantes,galeria,portada,precio_mayor,mayor_desde,medidas,medidas_titulo
"Bolsas e-commerce 30x40 ""Hola! Llegué"" x50 unidades",Bolsas e-commerce,13000,bolsa-ecommerce-rosa.webp|bolsa-ecommerce-blanca.webp,si,Rosa|Blanco,,,,,,
"Bolsas e-commerce 30x40 ""Ya estoy AQUÍ""",Bolsas e-commerce,13000,bolsa-ecommerce-30x40-ya-estoy-aqui.webp,si,Rosa|Blanco,,,,,x50 unidades:13000|x25 unidades:7500,Presentación
"Bolsas e-commerce 42x54 ""Ya estoy AQUÍ"" rosa pastel x50 unidades",Bolsas e-commerce,18000,bolsa-ecommerce-42x54-rosa-pastel.webp,si,,,,,,,
Bolsas de regalo navideñas x12 (modelos surtidos),Bolsas de papel,17000,bolsas-navidenas-x12.webp,si,,,,,,,
Bolsas de papel zafiro color con manija (precio x10),Bolsas de papel,6000,bolsas-papel-zafiro-color.webp,si,,,,,100,14x20:6000::39000|18x20:7500::45000|22x30:8500::53000|32x30:9500::57000|30x41:10500::62000,
Bolsas transparentes para colgar con adhesivo,Bolsas de PVC,2500,bolsa-colgar-adhesivo.webp,si,,bolsa-colgar-adhesivo-uso.webp|bolsa-colgar-adhesivo-detalles.webp,,,,5x5:2500|6x11:3000|10x20:4000|12x21:5000|14x23:6000|20x30:7300|25x35:11000|30x40:14000,
Bolsas de polipropileno con adhesivo x100 unidades,Bolsas de PVC,6000,bolsa-polipropileno-adhesivo.webp,si,,,,,,15x25:6000|20x30:8000|25x35:12000|30x40:14500|35x45:20000|40x50:22000,
Bolsas de polipropileno sin adhesivo x100 unidades,Bolsas de PVC,2500,bolsa-polipropileno-sin-adhesivo.webp,si,,,,,,10x15:2500|10x20:3000|10x25:3000|15x20:3500|20x30:4000|25x25:6000|30x40:8000|35x45:11000|40x50:14000|50x60:16000,
Bolsas de PVC transparentes con manijas y broche x10 unidades,Bolsas de PVC,15000,bolsa-pvc-manijas.webp,si,,bolsa-pvc-manijas-medidas.webp,,,,15x15:15000|20x20:16000,
Bolsas de PVC tornasoladas con manijas y broche 15x15 x10 unidades,Bolsas de PVC,16000,bolsa-pvc-tornasolada.webp,si,,,,,,,
Bolsas de PVC esmeriladas con borde de color 18 x 26 cm,Bolsas de PVC,Consultar,bolsa-pvc-borde-blanco.webp|bolsa-pvc-borde-rosa.webp|bolsa-pvc-borde-beige.webp|bolsa-pvc-borde-negro.webp,si,Blanco|Rosa|Beige|Negro,,bolsa-pvc-borde-grupo.webp,,,,
Bolsas de friselina 30x40 con manija troquelada,Bolsas de friselina,6000,bolsa-friselina-troquelada.webp|bolsa-friselina-troquelada.webp|bolsa-friselina-troquelada.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp|bolsa-friselina-colores.webp,si,Fucsia|Beige|Blanco|Negro|Rosa claro|Amarillo|Naranja|Rojo|Violeta|Azul marino|Azul francia|Celeste|Verde manzana|Verde,,,,,x10 unidades:6000|Caja x100:38000,Presentación
Bolsas camiseta (paquete de aprox. 80 unidades),Bolsas camiseta,2000,bolsa-camiseta.webp,si,,,,,,30x40:2000|40x50:2500|45x60:4500|50x70:7000|60x80:12000,
Bolsas riñón lisas de colores y cristal x50 unidades,Bolsas riñón,5000,bolsas-rinon-lisas-20x30.webp,si,,bolsas-rinon-lisas-25x35.webp|bolsas-rinon-lisas-30x40.webp|bolsas-rinon-lisas-35x45.webp|bolsas-rinon-cristal-20x30.webp,,,,20x30:5000:bolsas-rinon-lisas-20x30.webp|25x35:5500:bolsas-rinon-lisas-25x35.webp|30x40:6500:bolsas-rinon-lisas-30x40.webp|35x45:8500:bolsas-rinon-lisas-35x45.webp,
"Bolsas riñón ""Gracias por tu compra""",Bolsas riñón,Consultar,bolsa-rinon-gracias-lila.webp|bolsa-rinon-gracias-rojo.webp,si,Lila|Rojo,,,,,25x35:|30x40:,
Bolsas riñón fantasía 20x30 x50 unidades (diseños surtidos),Bolsas riñón,5000,bolsas-fantasia-rinon.webp,si,,,,,,,
Eco-bolsas metalizadas con manijas,Eco-bolsas metalizadas,Consultar,eco-bolsa-metalizada-dorada.webp|eco-bolsas-metalizadas.webp,si,Dorado|Plateado,,,,,,
Moños mágicos (de armado rápido) x100 unidades,Cintas y moños,Consultar,monos-magicos-colores.webp,si,,monos-magicos-paquete.webp|monos-magicos-regalos.webp,monos-magicos-colores.webp,,,,
Moños rápidos por paquete,Cintas y moños,Consultar,monos-rapidos-paquetes.webp,si,,,,,,,
Pistola etiquetadora All-App,Etiquetadoras,Consultar,etiquetadora-all-app.webp,si,,etiquetadora-all-app-caja.webp,,,,,
Pistola etiquetadora TG Tacher II,Etiquetadoras,Consultar,etiquetadora-tg-tacher.webp,si,,etiquetadora-tg-tacher-detalle.webp,,,,,
Pines de repuesto finos para pistola etiquetadora (35 mm),Etiquetadoras,3800,pines-repuesto-fino.webp,si,,pines-repuesto-fino-caja.webp,,,,x1.000 unidades:3800|Caja x10.000:26000,Presentación
Percheros con ruedas (varios tamaños),Equipamiento para locales,Consultar,perchero-cromado.webp|perchero-gris.webp,si,Cromado|Gris,perchero-cromado-tamanos.webp,perchero-cromado-tamanos.webp,,,,
Maniquí torso femenino,Equipamiento para locales,Consultar,maniqui-torso.webp|maniqui-torso.webp,si,Piel|Negro,,,,,,
Torso colgante de exhibición 40 x 75 cm (poliestireno),Equipamiento para locales,Consultar,torso-colgante-cristal.webp|torso-colgante-blanco.webp|torso-colgante-negro.webp,si,Cristal|Blanco|Negro,,torso-colgante-grupo.webp,,,,
"Busto para corpiños 24,5 x 22,5 cm (poliestireno)",Equipamiento para locales,Consultar,busto-cristal.webp|busto-blanco.webp|busto-fucsia.webp|busto-negro.webp,si,Cristal|Blanco|Fucsia|Negro,,busto-grupo.webp,,,,
Cabeza de maniquí exhibidora,Equipamiento para locales,Consultar,cabeza-maniqui.webp,si,,,,,,,
Aromatizantes Saphirus con varillas (varias fragancias),Aromatizantes,Consultar,aromatizantes-saphirus.webp,si,,aromatizantes-saphirus-1.webp|aromatizantes-saphirus-2.webp,,,,,
Aromatizador automático (dispenser para aerosol),Aromatizantes,Consultar,aromatizador-negro.webp|aromatizador-beige.webp|aromatizador-bordo.webp|aromatizador-blanco.webp,si,Negro|Beige|Bordó|Blanco,,aromatizador-grupo.webp,,,,
Aromatizador textil Saphirus 250 ml (varias fragancias),Aromatizantes,4500,saphirus-textil.webp,si,,saphirus-textil-fragancias.webp,,3500,6,,
Changuito de compras plegable,Changuitos,Consultar,changuito-compras.webp,si,,,,,,,
Perchas para ropa de bebé x10 unidades,Perchas,2500,perchas-bebe.webp,si,,perchas-bebe-uso.webp,,,,,
Percha silueta de alambre (bikinis y lencería),Perchas,Consultar,percha-silueta-alambre.webp|percha-silueta-blanca-rojo.webp,si,Negro|Blanco,percha-silueta-alambre-rojo.webp|percha-silueta-blanca-madera.webp,,,,,
Percha transparente con broches (pantalón / short / pollera),Perchas,Consultar,percha-broches-transparente.webp,si,,percha-broches-con-short.webp,,,,,
Perchas de alambre,Perchas,Consultar,perchas-alambre-blancas.webp|perchas-alambre-negras.webp,si,Blanco|Negro,perchas-alambre-blancas-2.webp,,,,,
"Percha silueta plástica (adulto 38,5 x 75,5 cm / niño 30 x 57,5 cm)",Perchas,7000,percha-silueta-plastica-pp.webp|percha-silueta-plastica-fucsia.webp|percha-silueta-plastica-cristal.webp,si,Negro|Fucsia|Cristal,percha-silueta-plastica-medidas.webp,percha-silueta-plastica-grupo.webp,6500,3,,
Perchas plásticas negras adulto y niño,Perchas,3000,perchas-negras-plasticas.webp,si,,,,,,Pack x10:3000|Caja cerrada x200:43000,Presentación
Perchas de madera con gancho metálico,Perchas,18000,perchas-madera.webp,si,,,,,,Pack x10:18000|Caja x120:174000,Presentación
Perchas de madera con broches para pantalón y pollera,Perchas,18000,perchas-madera-broches.webp,si,,perchas-madera-broches-2.webp,,,,Pack x10:18000|Pack x100:160000|Caja x300:390000,Presentación
Porta cinta chico,Embalaje,6500,porta-cinta-grande.webp|porta-cinta-grande.webp|porta-cinta-grande.webp,si,Rojo|Azul|Negro,,,,,,
Porta cinta mediano,Embalaje,7500,porta-cinta-mediano.webp,si,,,,,,,
Porta cinta grande,Embalaje,11000,,si,,,,,,,`;

// ===== Utilidades =====
function linkWhatsapp(texto) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`;
}
function escapar(t) {
  return String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function normalizar(t) {
  return String(t).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}
function colorDe(nombre) {
  return COLORES[normalizar(nombre)] || "#ddd";
}

document.querySelectorAll(".js-wsp").forEach(a => { a.href = linkWhatsapp(CONFIG.mensajeWhatsapp); });
document.querySelectorAll(".js-wsp-numero").forEach(s => { s.textContent = CONFIG.whatsappVisible; });
document.getElementById("anio").textContent = new Date().getFullYear();

// ===== Franja de colores de friselina =====
document.getElementById("colores-friselina").innerHTML = COLORES_FRISELINA.map(c => `
  <li><a class="color" href="${escapar(linkWhatsapp(`¡Hola! Quiero consultar por bolsas de friselina color ${c}.`))}" target="_blank" rel="noopener">
    <span class="color__muestra" style="--muestra:${colorDe(c)}"></span>${escapar(c)}
  </a></li>`).join("");

// ===== Catálogo =====
function leerCSV(texto) {
  const filas = [];
  let fila = [], celda = "", comillas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (comillas) {
      if (c === '"' && texto[i + 1] === '"') { celda += '"'; i++; }
      else if (c === '"') comillas = false;
      else celda += c;
    } else if (c === '"') comillas = true;
    else if (c === ",") { fila.push(celda); celda = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && texto[i + 1] === "\n") i++;
      fila.push(celda); filas.push(fila); fila = []; celda = "";
    } else celda += c;
  }
  if (celda || fila.length) { fila.push(celda); filas.push(fila); }
  const [encabezado, ...resto] = filas.filter(f => f.some(v => v.trim()));
  const claves = encabezado.map(c => c.trim().toLowerCase());
  return resto.map(f => Object.fromEntries(claves.map((k, i) => [k, (f[i] || "").trim()])));
}

const formatoPrecio = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
let productos = [];
let categoriaActiva = "Todos";

function cantidadPorRubro(r) { return productos.filter(p => p.categoria === r).length; }

function dibujarRubros() {
  document.getElementById("rubros").innerHTML = RUBROS.map(r => {
    const n = cantidadPorRubro(r);
    const estado = n
      ? `<span class="rubro__estado rubro__estado--hay">${n} ${n === 1 ? "producto" : "productos"}</span>`
      : `<span class="rubro__estado">Próximamente</span>`;
    return `<li><a class="rubro" href="#productos" data-rubro="${escapar(r)}">${escapar(r)} ${estado}</a></li>`;
  }).join("");
  document.querySelectorAll(".rubro").forEach(a => a.addEventListener("click", () => elegirCategoria(a.dataset.rubro)));
}

function elegirCategoria(c) {
  categoriaActiva = c;
  dibujarCategorias();
  dibujarProductos();
}

function dibujarCategorias() {
  const extras = [...new Set(productos.map(p => p.categoria).filter(c => c && !RUBROS.includes(c)))];
  const cats = ["Todos", ...RUBROS, ...extras];
  const cont = document.getElementById("categorias");
  cont.innerHTML = cats.map(c =>
    `<button type="button" class="pestana" aria-pressed="${c === categoriaActiva}" data-cat="${escapar(c)}">${escapar(c)}</button>`
  ).join("");
  cont.querySelectorAll(".pestana").forEach(b => b.addEventListener("click", () => elegirCategoria(b.dataset.cat)));
}

function dibujarProductos() {
  const busqueda = normalizar(document.getElementById("buscador").value.trim()).replace(/\s*[x×]\s*/g, "x");
  const lista = productos.filter(p =>
    (categoriaActiva === "Todos" || p.categoria === categoriaActiva) &&
    (!busqueda || normalizar(`${p.nombre} ${p.categoria}`).includes(busqueda))
  );
  const vacio = document.getElementById("vacio");
  vacio.hidden = lista.length > 0;
  document.getElementById("vacio-texto").textContent = !busqueda && categoriaActiva !== "Todos"
    ? `Estamos cargando ${categoriaActiva.toLowerCase()} a la página. Consultanos por WhatsApp y te pasamos medidas y precios.`
    : "No encontramos productos con esa búsqueda. Consultanos por WhatsApp: tenemos más modelos en el local.";

  document.getElementById("grilla").innerHTML = lista.map(p => {
    const hayStock = !/^(no|0)$/i.test(p.stock || "");
    const limpio = String(p.precio).replace(/[^\d.,]/g, "");
    const precio = limpio ? Number(limpio.replace(/\./g, "").replace(",", ".")) : NaN;
    const fotos = (p.foto || "").split("|").map(f => f.trim()).filter(Boolean);
    const variantes = (p.variantes || "").split("|").map(v => v.trim()).filter(Boolean);
    const extras = (p.galeria || "").split("|").map(f => f.trim()).filter(Boolean);
    const portada = (p.portada || "").split("|").map(f => f.trim()).filter(Boolean);
    const todas = [...new Set([...portada, ...fotos, ...extras])];
    const foto = !todas.length
      ? `<div class="producto__generica" aria-hidden="true"><svg viewBox="0 0 24 24" width="48" height="48"><path d="M6 7h12l-1 14H7L6 7Zm3 0V5a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg></div>`
      : `<div class="carrusel">
          <div class="carrusel__pista" tabindex="0" aria-label="Fotos de ${escapar(p.nombre)}">
            ${todas.map((f, i) => `<img class="producto__foto" src="fotos/${escapar(f)}" data-foto="${escapar(f)}" alt="${escapar(p.nombre)}${todas.length > 1 ? ` (foto ${i + 1} de ${todas.length})` : ""}" loading="lazy">`).join("")}
          </div>
          ${todas.length > 1 ? `
          <button type="button" class="carrusel__flecha carrusel__flecha--ant" aria-label="Foto anterior" data-dir="-1">‹</button>
          <button type="button" class="carrusel__flecha carrusel__flecha--sig" aria-label="Foto siguiente" data-dir="1">›</button>
          <div class="carrusel__puntos" aria-hidden="true">${todas.map((_, i) => `<span class="punto${i === 0 ? " punto--activo" : ""}"></span>`).join("")}</div>` : ""}
        </div>`;
    const texto = v => `¡Hola! Quiero consultar por: ${p.nombre}${v ? ` (color ${v})` : ""}`;
    const primeraMedida = (p.medidas || "").split("|")[0].split(":")[0].trim();
    const consulta = linkWhatsapp(mensajeProducto(p.nombre, variantes.length > 1 ? variantes[0] : "", primeraMedida));
    const selector = variantes.length > 1
      ? `<div class="variantes" role="group" aria-label="Color">
          ${variantes.map((v, i) => `<button type="button" class="variante" aria-pressed="${i === 0}" aria-label="${escapar(v)}" title="${escapar(v)}"
              style="--muestra:${colorDe(v)}" data-nombre="${escapar(v)}"
              data-foto="${escapar(fotos[i] || fotos[0] || "")}" data-link="${escapar(linkWhatsapp(texto(v)))}"></button>`).join("")}
        </div>
        <p class="variante-elegida">Color: <strong>${escapar(variantes[0])}</strong> <span>(${variantes.length} colores)</span></p>`
      : "";
    const mayorLimpio = String(p.precio_mayor || "").replace(/[^\d]/g, "");
    const mayor = mayorLimpio ? Number(mayorLimpio) : 0;
    const medidas = (p.medidas || "").split("|").map(x => x.split(":").map(y => y.trim())).filter(x => x[0]);
    const textoMedida = m => `¡Hola! Quiero consultar por: ${p.nombre} (medida ${m})`;
    const selectorMedidas = medidas.length
      ? `<div class="medidas" role="group" aria-label="Medida">
          ${medidas.map(([m, pr, ft, prM], i) => `<button type="button" class="medida-btn" aria-pressed="${i === 0}" data-medida="${escapar(m)}" data-foto="${escapar(ft || "")}" data-mayor="${escapar(prM || "")}"
              data-precio="${escapar(pr || "")}" data-link="${escapar(linkWhatsapp(textoMedida(m)))}">${escapar(m)}</button>`).join("")}
        </div>
        <p class="variante-elegida">${escapar(p.medidas_titulo || "Medida")}: <strong class="js-medida">${escapar(medidas[0][0])}</strong>${p.medidas_titulo ? "" : " cm"} <span>(${medidas.length} ${p.medidas_titulo ? "opciones" : "medidas"})</span></p>`
      : "";
    const precioHtml = isNaN(precio)
      ? `<p class="producto__precio producto__precio--consultar">Precio a consultar</p>`
      : `<p class="producto__precio js-precio">${formatoPrecio.format(precio)}${mayor ? ` <small>c/u</small>` : ""}</p>`;
    const mayorPorMedida = medidas.length && medidas[0][3];
    const mayorHtml = mayorPorMedida
      ? `<p class="producto__mayor">Por ${escapar(p.mayor_desde || "mayor")} unidades: <strong class="js-mayor">${formatoPrecio.format(Number(medidas[0][3]))}</strong></p>`
      : mayor && !isNaN(precio)
      ? `<p class="producto__mayor">Por mayor${p.mayor_desde ? ` (${escapar(p.mayor_desde)} unidades o más)` : ""}: <strong>${formatoPrecio.format(mayor)}</strong> c/u</p>`
      : "";
    return `<article class="producto" data-nombre="${escapar(p.nombre)}" data-color="${escapar(variantes.length > 1 ? variantes[0] : "")}" data-medida="${escapar(medidas.length ? medidas[0][0] : "")}">
      ${foto}
      <div class="producto__cuerpo">
        <span class="producto__categoria">${escapar(p.categoria || "")}</span>
        <h3 class="producto__nombre">${escapar(p.nombre)}</h3>
        ${selector}
        ${selectorMedidas}
        ${mayorHtml}
        <div class="producto__pie">
          ${hayStock
            ? `${precioHtml}<a class="boton boton--principal js-pedir" href="${consulta}" target="_blank" rel="noopener">Consultar</a>`
            : `<span class="producto__sin-stock">Sin stock por ahora</span>
               <a class="boton boton--borde js-pedir" href="${consulta}" target="_blank" rel="noopener">Avisame cuando llegue</a>`}
        </div>
      </div>
    </article>`;
  }).join("");
}

function mensajeProducto(nombre, color, medida) {
  const extra = [color && `color ${color}`, medida && (/^\d/.test(medida) ? `medida ${medida}` : medida)].filter(Boolean).join(", ");
  return `¡Hola! Quiero consultar por: ${nombre}${extra ? ` (${extra})` : ""}`;
}
function actualizarLink(t) {
  t.querySelector(".js-pedir").href = linkWhatsapp(mensajeProducto(t.dataset.nombre, t.dataset.color, t.dataset.medida));
}
// ===== Carrusel de fotos =====
function irAFoto(tarjeta, i, suave = true) {
  const pista = tarjeta.querySelector(".carrusel__pista");
  if (!pista) return;
  const n = pista.children.length;
  i = (i + n) % n;
  pista.scrollTo({ left: i * pista.clientWidth, behavior: suave ? "smooth" : "auto" });
}
function fotoActual(pista) { return Math.round(pista.scrollLeft / Math.max(1, pista.clientWidth)); }
document.getElementById("grilla").addEventListener("scroll", e => {
  const pista = e.target;
  if (!pista.classList || !pista.classList.contains("carrusel__pista")) return;
  const i = fotoActual(pista);
  pista.parentElement.querySelectorAll(".punto").forEach((p, j) => p.classList.toggle("punto--activo", j === i));
}, true);
document.getElementById("grilla").addEventListener("click", e => {
  const f = e.target.closest(".carrusel__flecha");
  if (!f) return;
  const tarjeta = f.closest(".producto");
  irAFoto(tarjeta, fotoActual(tarjeta.querySelector(".carrusel__pista")) + Number(f.dataset.dir));
});
document.getElementById("grilla").addEventListener("keydown", e => {
  if (!e.target.classList.contains("carrusel__pista")) return;
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  e.preventDefault();
  irAFoto(e.target.closest(".producto"), fotoActual(e.target) + (e.key === "ArrowRight" ? 1 : -1));
});
// Elegir medida: cambia el precio y el mensaje de WhatsApp
document.getElementById("grilla").addEventListener("click", e => {
  const b = e.target.closest(".medida-btn");
  if (!b) return;
  const tarjeta = b.closest(".producto");
  tarjeta.querySelectorAll(".medida-btn").forEach(x => x.setAttribute("aria-pressed", x === b));
  tarjeta.querySelector(".js-medida").textContent = b.dataset.medida;
  const pr = Number(String(b.dataset.precio).replace(/[^\d]/g, ""));
  const precioEl = tarjeta.querySelector(".js-precio");
  if (precioEl && pr) precioEl.textContent = formatoPrecio.format(pr);
  const mayorEl = tarjeta.querySelector(".js-mayor");
  if (mayorEl && b.dataset.mayor) mayorEl.textContent = formatoPrecio.format(Number(b.dataset.mayor));
  tarjeta.dataset.medida = b.dataset.medida;
  if (b.dataset.foto) {
    const i = [...tarjeta.querySelectorAll(".producto__foto")].findIndex(img => img.dataset.foto === b.dataset.foto);
    if (i >= 0) irAFoto(tarjeta, i);
  }
  actualizarLink(tarjeta);
});
// Elegir color: muestra su foto y cambia el nombre del color y el mensaje de WhatsApp
document.getElementById("grilla").addEventListener("click", e => {
  const b = e.target.closest(".variante");
  if (!b) return;
  const tarjeta = b.closest(".producto");
  tarjeta.querySelectorAll(".variante").forEach(x => x.setAttribute("aria-pressed", x === b));
  const imgs = [...tarjeta.querySelectorAll(".producto__foto")];
  const i = imgs.findIndex(img => img.dataset.foto === b.dataset.foto);
  if (i >= 0) irAFoto(tarjeta, i);
  tarjeta.querySelector(".variante-elegida strong").textContent = b.dataset.nombre;
  tarjeta.dataset.color = b.dataset.nombre;
  actualizarLink(tarjeta);
});

async function cargarCatalogo() {
  let texto = CATALOGO_RESPALDO;
  try {
    const r = await fetch("catalogo.csv", { cache: "no-store" });
    if (r.ok) texto = await r.text();
  } catch (e) { /* se usa el respaldo */ }
  productos = leerCSV(texto).filter(p => p.nombre);
  dibujarRubros();
  dibujarCategorias();
  dibujarProductos();
}
document.getElementById("buscador").addEventListener("input", dibujarProductos);
cargarCatalogo();

// ===== Formulario de presupuesto =====
const form = document.getElementById("formulario");
function marcarError(campo, mensaje) {
  const el = form.querySelector(`[data-para="${campo}"]`);
  el.textContent = mensaje;
  el.closest(".campo").classList.toggle("con-error", !!mensaje);
}
form.addEventListener("submit", async e => {
  e.preventDefault();
  const datos = Object.fromEntries(new FormData(form));
  const soloNumeros = (datos.whatsapp || "").replace(/\D/g, "");
  let ok = true;
  marcarError("nombre", datos.nombre.trim() ? "" : (ok = false, "Escribí tu nombre."));
  marcarError("whatsapp", soloNumeros.length >= 8 && soloNumeros.length <= 15 ? "" : (ok = false, "Revisá el número: con código de área, sin 0 ni 15."));
  marcarError("busca", datos.busca.trim() ? "" : (ok = false, "Contanos qué bolsas o productos necesitás."));
  if (!ok) return;

  // Sin planilla conectada: el pedido se envía directo por WhatsApp
  if (!CONFIG.urlFormulario) {
    const texto = `¡Hola Papelera Sabri! Soy ${datos.nombre.trim()}. Quiero un presupuesto: ${datos.busca.trim()}. Mi WhatsApp: ${soloNumeros}`;
    window.open(linkWhatsapp(texto), "_blank", "noopener");
    document.getElementById("gracias").textContent = "Abrimos WhatsApp con tu pedido. Envialo y te respondemos a la brevedad.";
    document.getElementById("gracias").hidden = false;
    return;
  }
  const boton = form.querySelector("button");
  boton.disabled = true;
  {
    try {
      await fetch(CONFIG.urlFormulario, { method: "POST", mode: "no-cors", body: new URLSearchParams({ ...datos, whatsapp: soloNumeros }) });
    } catch (err) { /* se muestra el aviso igual; se revisa en la planilla */ }
  }
  form.reset();
  boton.disabled = false;
  document.getElementById("gracias").hidden = false;
});
