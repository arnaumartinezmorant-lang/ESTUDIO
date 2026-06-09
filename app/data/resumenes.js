// Resúmenes visuales por tema (HTML)
window.RESUMEN = {};

// ======================= TEMA 1 =======================
window.RESUMEN["tema01"] = `
<div class="rs-intro">La <b>comunicación</b> es el proceso que involucra a un <b>emisor</b>, un <b>mensaje</b> transmitido por un <b>canal</b> y un <b>receptor</b>. Una <b>red</b> es la unión de dos o más dispositivos por un medio de transmisión para intercambiar datos y compartir recursos.</div>

<h3>📡 Elementos de un sistema de comunicación</h3>
<ul class="rs-list">
  <li><b>Emisor</b>: genera el mensaje. <b>Receptor</b>: lo recibe.</li>
  <li><b>Mensaje</b>: información transmitida. <b>Lenguaje</b>: reglas que comparten emisor y receptor.</li>
  <li><b>Codificador</b> ↔ <b>Decodificador</b>: transforman/recuperan la información para el canal.</li>
  <li><b>Código</b>: sistema de signos y reglas. <b>Canal</b>: medio por el que viaja la señal.</li>
  <li><b>Ruido</b>: perturbación que afecta a la señal. En la realidad: <span class="rs-badge">S recibida = S enviada + Ruido</span></li>
</ul>
<div class="rs-callout">Perturbaciones: <b>atenuación</b> (aumenta con la distancia), <b>distorsión</b>, <b>interferencias externas</b> y <b>ruido</b>. La calidad se mide con la relación señal/ruido (SNR).</div>

<h3>🌐 Clasificación de las redes</h3>
<table class="rs-table">
  <tr><th>Criterio</th><th>Tipos</th></tr>
  <tr><td>Ámbito geográfico</td><td><b>PAN</b> (&lt;10 m, Bluetooth) · <b>LAN</b> (local, privada) · <b>MAN</b> (ciudad) · <b>WAN</b> (mundial, ISP)</td></tr>
  <tr><td>Naturaleza de la señal</td><td>Analógica (más sensible al ruido) · Digital (resistente, permite cifrado)</td></tr>
  <tr><td>Medio de transmisión</td><td>Cableada (rápida, segura) · Inalámbrica (movilidad, vulnerable)</td></tr>
  <tr><td>Modo de transmisión</td><td><b>Simplex</b> (TV) · <b>Half-duplex</b> (walkie-talkie) · <b>Full-duplex</b> (teléfono)</td></tr>
  <tr><td>Método de transmisión</td><td>Punto a punto (2 nodos) · Difusión/broadcast (canal compartido, colisiones)</td></tr>
</table>

<h3>🔷 Topologías</h3>
<table class="rs-table">
  <tr><th>Topología</th><th>Idea clave</th></tr>
  <tr><td>Bus</td><td>Medio compartido + terminadores. Barata pero colisiones y poca seguridad.</td></tr>
  <tr><td>Anillo</td><td>Un solo sentido; transmite quien tiene el <b>testigo</b>. Si cae un nodo, cae el anillo.</td></tr>
  <tr><td>Estrella</td><td>Nodos a un central. Fácil de ampliar; si cae el central, cae la red.</td></tr>
  <tr><td>Malla</td><td>Múltiples rutas → gran redundancia, pero cara.</td></tr>
  <tr><td>Árbol</td><td>Jerárquica; combinación de estrellas.</td></tr>
</table>
<div class="rs-note">Topología <b>física</b> = disposición de los elementos · Topología <b>lógica</b> = comportamiento global (una estrella física con hub se comporta como bus lógico).</div>

<h3>🔢 Sistemas de numeración</h3>
<ul class="rs-list">
  <li><b>No posicionales</b>: el valor depende solo del símbolo (números romanos).</li>
  <li><b>Posicionales</b>: el valor depende del símbolo y la posición. La <b>base</b> = nº de dígitos distintos.</li>
  <li><b>Binario</b> (base 2): se adapta a los transistores. <b>Decimal</b> (base 10): natural para humanos. <b>Hexadecimal</b> (base 16: 0-9, A-F): usado en MAC, IPv6, colores y memoria.</li>
  <li>Decimal→binario: divisiones sucesivas entre 2. Binario→hex: agrupar de 4 en 4 bits.</li>
</ul>
`;

// ======================= TEMA 2 =======================
window.RESUMEN["tema02"] = `
<div class="rs-intro">Un <b>estándar</b> es un conjunto de normas, acuerdos y recomendaciones técnicas que regulan la comunicación. Aportan <b>compatibilidad</b> entre fabricantes, <b>precios competitivos</b> y <b>evitan monopolios</b>.</div>

<h3>📐 Tipos de estándar</h3>
<ul class="rs-list">
  <li><b>De facto</b>: surge del gran uso de un producto (no oficial).</li>
  <li><b>De iure</b>: definido por organizaciones oficiales.</li>
</ul>

<h3>🏛️ Modelos de capas</h3>
<div class="rs-callout">Cada capa ofrece servicios a la superior y usa los de la inferior. Añadir cabeceras = <b>encapsulación</b>. La unidad de datos de cada capa = <b>PDU</b>.</div>
<table class="rs-table">
  <tr><th>#</th><th>Capa OSI</th><th>PDU</th><th>Función</th></tr>
  <tr><td>7</td><td>Aplicación</td><td>Datos</td><td>Interfaz con apps (HTTP, FTP, SMTP)</td></tr>
  <tr><td>6</td><td>Presentación</td><td>Datos</td><td>Formato: codificación, compresión, cifrado</td></tr>
  <tr><td>5</td><td>Sesión</td><td>Datos</td><td>Diálogo y sincronización (restaurar transmisión)</td></tr>
  <tr><td>4</td><td>Transporte</td><td>Segmento</td><td>Conexión extremo a extremo</td></tr>
  <tr><td>3</td><td>Red</td><td>Paquete</td><td>Encaminamiento (direcciones lógicas)</td></tr>
  <tr><td>2</td><td>Enlace</td><td>Trama</td><td>Control de errores/flujo en el enlace local</td></tr>
  <tr><td>1</td><td>Física</td><td>Bits</td><td>Transmisión de bits por el medio</td></tr>
</table>

<h3>🌍 OSI vs TCP/IP</h3>
<table class="rs-table">
  <tr><th></th><th>OSI</th><th>TCP/IP</th></tr>
  <tr><td>Origen</td><td>ISO, 1984</td><td>DoD, 1973 (ARPANET / MILNET)</td></tr>
  <tr><td>Capas</td><td>7 (teórico)</td><td>4 (funcional): acceso a red, internet, transporte, aplicación</td></tr>
  <tr><td>Uso</td><td>Modelo de referencia</td><td>El que se usa en la práctica</td></tr>
</table>
<div class="rs-note">En TCP/IP, el protocolo estrella de internet es <b>IP</b>; en transporte, <b>TCP</b> y <b>UDP</b>. Las funciones de sesión y presentación se integran en la <b>aplicación</b>.</div>
`;

// ============== TEMA 2 - ESPECIAL ORGANISMOS ==============
window.RESUMEN["tema02_organismos"] = `
<div class="rs-intro">Mapa rápido de los <b>organismos de estandarización</b>: ámbito, siglas y logro/dato clave.</div>
<table class="rs-table">
  <tr><th>Organismo</th><th>Ámbito</th><th>Clave</th></tr>
  <tr><td><b>ITU</b></td><td>Internacional (ONU)</td><td>Espectro radioeléctrico y órbitas de satélites</td></tr>
  <tr><td><b>ISO</b></td><td>Internacional (Ginebra)</td><td>Definió el modelo <b>OSI</b>; +100 países</td></tr>
  <tr><td><b>IEEE</b></td><td>Asociación profesional</td><td>Fundado en <b>1884</b>; <b>comité 802</b> (redes locales)</td></tr>
  <tr><td><b>IETF</b></td><td>Internet</td><td>Estándares mediante <b>RFC</b> (Request For Comments)</td></tr>
  <tr><td><b>ANSI</b></td><td>EE. UU.</td><td>Supervisa estándares de EE. UU.</td></tr>
  <tr><td><b>TIA</b></td><td>EE. UU.</td><td>Telecomunicaciones; con ANSI y la antigua EIA</td></tr>
  <tr><td><b>ETSI</b></td><td>Europa</td><td>Éxito: el <b>GSM</b></td></tr>
  <tr><td><b>AENOR</b></td><td>España</td><td>Publica las normas <b>UNE</b> ("Una Norma Española")</td></tr>
</table>
<div class="rs-callout">Asociaciones rápidas: <b>OSI→ISO</b> · <b>GSM→ETSI</b> · <b>UNE→AENOR</b> · <b>RFC→IETF</b> · <b>Comité 802→IEEE</b> · <b>Satélites/espectro→ITU</b>.</div>
`;

// ======================= TEMA 3 =======================
window.RESUMEN["tema03"] = `
<div class="rs-intro">La <b>capa física</b> (capa 1) se encarga de la <b>transmisión de bits</b> por el canal. Define características <b>mecánicas, eléctricas, funcionales y de procedimiento</b>.</div>

<h3>📏 Conceptos y unidades</h3>
<ul class="rs-list">
  <li><b>Ancho de banda</b>: rango de frecuencias (f.máx − f.mín). <b>Retardo de propagación</b>: tiempo que tarda la señal en recorrer el canal.</li>
  <li>Almacenamiento (base 2): <span class="rs-badge">1 KB = 1024 B</span> · Velocidad (base 10): <span class="rs-badge">1 Kbps = 1000 bps</span> · <span class="rs-badge">1 Byte = 8 bits</span></li>
  <li>Perturbaciones: atenuación (amplificadores/repetidores), distorsión de retardo (ecualizadores), <b>diafonía</b>, ruido térmico e impulsivo.</li>
</ul>

<h3>🔌 Medios guiados</h3>
<table class="rs-table">
  <tr><th>Medio</th><th>Datos clave</th></tr>
  <tr><td>Par trenzado</td><td>4 pares; trenzar cancela interferencias. <b>UTP</b> (sin apantallar) / FTP / STP. Conector <b>RJ-45 (8P8C)</b>. Normas 568A/568B. Cat 5e, 6, 6a, 7. Límite 100 m.</td></tr>
  <tr><td>Fibra óptica</td><td>Núcleo + revestimiento + cubierta (reflexión total interna). <b>Monomodo (OS)</b>: 1 haz, hasta 300 km, amarilla. <b>Multimodo (OM)</b>: varios haces, 2-3 km. Conectores SC, ST, LC. Pulido PC&lt;UPC&lt;APC.</td></tr>
  <tr><td>Coaxial</td><td><b>50 Ω</b> banda base · <b>75 Ω</b> banda ancha (TV/Internet). Intolerante a fallos.</td></tr>
  <tr><td>PLC</td><td>Datos por la red eléctrica; medio compartido (half-duplex, CSMA/CD).</td></tr>
</table>
<div class="rs-note">Cable <b>directo</b> (mismo estándar ambos extremos, dispositivos distintos) vs <b>cruzado</b> (568A/568B, dispositivos iguales). <b>Auto-MDI/MDIX</b> lo detecta solo.</div>

<h3>📶 Medios no guiados</h3>
<ul class="rs-list">
  <li>Velocidad cercana a la luz. Emisión <b>direccional</b> u <b>omnidireccional</b>. Bandas <b>ISM</b> (libres, sin licencia).</li>
  <li>Satélites: <b>GEO</b> (35.786 km) · <b>MEO</b> (GPS) · <b>LEO</b> (baja órbita).</li>
  <li>Alteraciones: reflexión, difracción, dispersión (lluvia/niebla).</li>
  <li><b>Bluetooth</b> (802.15, 2.4 GHz) · <b>Wi-Fi</b> (802.11): canales 1, 6, 11 sin solape; seguridad WEP→WPA→WPA2→<b>WPA3</b>. <b>WiMAX</b> (802.16) en desuso.</li>
</ul>

<h3>🏢 Cableado estructurado (SCE)</h3>
<ul class="rs-list">
  <li>Plataforma única para voz, datos y vídeo. Vida útil ≥ 10 años. Normas <b>ANSI/TIA 568</b> e <b>ISO/IEC 11801</b> (Europa: EN 50173).</li>
  <li>Jerarquía en estrella: <b>CD</b> (campus) → <b>BD</b> (edificio) → <b>FD</b> (planta) → <b>TO</b> (roseta). <b>CP</b> opcional.</li>
  <li>Cableado horizontal ≤ <b>90 m</b> (con área de trabajo ≤ 100 m).</li>
  <li>Racks de <b>19''</b>; <span class="rs-badge">1U = 44,45 mm</span>. Temperatura 18-27 °C, humedad &lt;60%. Etiquetado en ambos extremos.</li>
  <li>Dispositivos: <b>hub</b> (capa 1, obsoleto) · <b>switch</b> (capa 2, dominios de colisión).</li>
</ul>
`;

// ======================= TEMA 4 =======================
window.RESUMEN["tema04"] = `
<div class="rs-intro">La <b>capa de enlace</b> (capa 2) asegura una comunicación <b>libre de errores entre dos equipos del mismo enlace local</b>. Su PDU es la <b>trama</b>. Se implementa en la tarjeta de red (NIC), su firmware y el driver.</div>

<h3>🧩 Servicios de la capa de enlace</h3>
<ul class="rs-list">
  <li><b>Entramado (framing)</b>: marcar inicio y fin de la trama.</li>
  <li><b>Acceso al medio</b> · <b>Sincronismo</b> · <b>Direccionamiento físico</b> (MAC).</li>
  <li><b>Control de flujo</b> · <b>Detección de errores</b> · <b>Multiplexación de protocolos</b>.</li>
</ul>
<div class="rs-note">Dos subcapas: <b>LLC</b> (802.2, interfaz con la capa de red) y <b>MAC</b> (802.3, control de acceso al medio).</div>

<h3>✂️ Delimitación de tramas</h3>
<table class="rs-table">
  <tr><th>Técnica</th><th>Cómo funciona</th></tr>
  <tr><td>Conteo de caracteres</td><td>Campo con el nº de caracteres. Débil: un error desincroniza todo.</td></tr>
  <tr><td>Carácter stuffing</td><td>DLE-STX inicio / DLE-ETX fin. Los DLE accidentales se doblan.</td></tr>
  <tr><td>Bit stuffing</td><td>Bandera <b>01111110</b>. Se inserta un 0 tras cinco 1 seguidos.</td></tr>
</table>

<h3>🏷️ Direcciones MAC</h3>
<div class="rs-callout"><b>48 bits</b> en hexadecimal = <b>24 bits OUI</b> (fabricante, asignado por el IEEE) + <b>24 bits</b> nº de serie. Difusión: <b>FF:FF:FF:FF:FF:FF</b>. Modo <b>promiscuo</b>: captura todo el tráfico.</div>

<h3>⚠️ Detección de errores</h3>
<ul class="rs-list">
  <li><b>Paridad</b> (par/impar): falla si cambia un nº par de bits.</li>
  <li><b>CRC</b> (el más usado): resto de dividir por el polinomio generador (Ethernet usa <b>CRC-32</b>, campo FCS). Resto cero = sin error.</li>
  <li><b>Checksum</b>: suma de segmentos + complemento.</li>
</ul>

<h3>🚦 Acceso al medio (solo en redes multipunto)</h3>
<table class="rs-table">
  <tr><th>Método</th><th>Idea</th></tr>
  <tr><td>Paso de testigo</td><td>Solo transmite quien tiene el token (anillo).</td></tr>
  <tr><td>ALOHA</td><td>Transmite y, si colisiona, espera tiempo aleatorio.</td></tr>
  <tr><td><b>CSMA/CD</b></td><td>Escucha antes de emitir + detecta colisiones (Ethernet). Backoff exponencial.</td></tr>
  <tr><td><b>CSMA/CA</b></td><td>Evita colisiones; Wi-Fi (802.11) con RTS/CTS (problema del nodo oculto).</td></tr>
</table>
<div class="rs-note"><b>Colisiones</b>: las propagan hubs y repetidores (no switches/routers). <b>Broadcast</b>: lo propagan todos menos el <b>router</b>.</div>

<h3>🔄 Control de flujo</h3>
<ul class="rs-list">
  <li><b>Parada y espera</b>: una trama y se espera el ACK (desaprovecha el enlace).</li>
  <li><b>Ventana deslizante</b>: varias tramas en vuelo sin esperar cada ACK.</li>
  <li><b>Piggybacking</b>: combina ACK + datos en una misma trama (full-duplex).</li>
</ul>

<h3>🔀 Switch y STP</h3>
<ul class="rs-list">
  <li>El switch mantiene una <b>tabla MAC</b> (MAC ↔ puerto). Si no conoce la MAC destino → <b>flooding</b> (por todos los puertos menos el de entrada). Aprende la MAC origen.</li>
  <li>Crea un <b>dominio de colisión por puerto</b>. Tipos: PoE (802.3af/at/bt), apilables, modulares.</li>
  <li><b>STP</b> (Spanning Tree): evita bucles de capa 2 con enlaces redundantes mediante <b>BPDU</b>. Switch raíz = menor <b>BID</b> (prioridad 32768 + MAC). Puertos: raíz, designado y bloqueado.</li>
</ul>

<h3>🖧 Ethernet</h3>
<div class="rs-callout">Consorcio <b>DIX</b> (Digital, Intel, Xerox). Trama de <b>64 a 1518 bytes</b>. Campo Tipo: 0x0800=IPv4, 0x86DD=IPv6, 0x0806=ARP. FCS = CRC32. Nomenclatura <b>X Base Z</b> (X=Mbps, T=par trenzado, F=fibra). 100BaseT=Fast Ethernet, 1000BaseT=Gigabit.</div>
`;

// ======================= TEMA 5 =======================
window.RESUMEN["tema05"] = `
<div class="rs-intro">La <b>capa de red</b> (capa 3) hace llegar los <b>paquetes</b> del origen al destino atravesando redes diferentes: es el <b>encaminamiento</b>. El dispositivo clave es el <b>router</b>.</div>

<h3>🔢 Direcciones IPv4</h3>
<ul class="rs-list">
  <li><b>32 bits</b> en 4 octetos decimales. Se dividen en <b>identificador de red</b> + <b>identificador de host</b>.</li>
  <li>La <b>máscara de subred</b> separa red (bits 1) de host (bits 0).</li>
  <li><b>Red</b> = host todo a 0 · <b>Broadcast</b> = host todo a 1 · Hosts utilizables = <b>2ⁿ − 2</b>.</li>
</ul>
<table class="rs-table">
  <tr><th>Clase</th><th>1er octeto</th><th>Máscara</th></tr>
  <tr><td>A</td><td>1 – 126</td><td>255.0.0.0 (/8)</td></tr>
  <tr><td>B</td><td>128 – 191</td><td>255.255.0.0 (/16)</td></tr>
  <tr><td>C</td><td>192 – 223</td><td>255.255.255.0 (/24)</td></tr>
  <tr><td>D</td><td>224 – 239</td><td>Multicast</td></tr>
</table>
<div class="rs-note">Privadas (RFC 1918): <b>10.0.0.0/8</b>, <b>172.16.0.0/12</b>, <b>192.168.0.0/16</b>. <b>127.0.0.1</b> = loopback. <b>169.254.0.0/16</b> = APIPA.</div>

<h3>✂️ Subnetting</h3>
<ul class="rs-list">
  <li><b>Subnetting</b>: tomar bits de host para crear subredes (n bits → 2ⁿ subredes).</li>
  <li><b>VLSM</b>: máscaras de longitud variable según necesidades.</li>
  <li><b>CIDR</b>: notación /n (p. ej. /26 = 255.255.255.192). Regla del prefijo más largo (longest match).</li>
  <li>/30 = 2 hosts (enlaces punto a punto).</li>
</ul>

<h3>🛠️ Protocolos de apoyo</h3>
<table class="rs-table">
  <tr><th>Protocolo</th><th>Función</th></tr>
  <tr><td><b>DHCP</b></td><td>Asigna IP automáticamente (proceso <b>DORA</b>: Discover, Offer, Request, Ack).</td></tr>
  <tr><td><b>ARP</b></td><td>IP conocida → MAC (petición en broadcast).</td></tr>
  <tr><td><b>DNS</b></td><td>Nombre de dominio → IP.</td></tr>
  <tr><td><b>ICMP</b></td><td>Mensajes de control/error (ping, traceroute).</td></tr>
  <tr><td><b>NAT</b></td><td>IP privadas → una IP pública compartida.</td></tr>
</table>

<h3>🧭 Encaminamiento</h3>
<ul class="rs-list">
  <li><b>Estático</b> (manual) vs <b>Dinámico</b> (protocolos).</li>
  <li><b>RIP</b>: vector distancia, métrica = saltos (máx. 15; 16 = inalcanzable).</li>
  <li><b>OSPF</b>: estado de enlace (link-state).</li>
  <li><b>BGP</b>: protocolo exterior entre sistemas autónomos de Internet.</li>
  <li><b>TTL</b> (Hop Limit en IPv6): evita bucles; se decrementa en cada router.</li>
  <li>La <b>puerta de enlace</b> es el router para salir a otras redes.</li>
</ul>

<h3>🌐 VLANs</h3>
<div class="rs-callout">Una <b>VLAN</b> segmenta lógicamente la red física en varios dominios de difusión (estándar <b>802.1Q</b>). Puerto <b>access</b> (1 VLAN, equipo final) vs <b>trunk</b> (varias VLANs entre switches). Para comunicar VLANs: router-on-a-stick o switch de capa 3.</div>

<h3>🆕 IPv6</h3>
<ul class="rs-list">
  <li><b>128 bits</b> en hexadecimal (8 grupos). Surge por el <b>agotamiento de IPv4</b>.</li>
  <li>Abreviación: quitar ceros a la izquierda; <b>::</b> sustituye un bloque de ceros (una sola vez).</li>
  <li>Loopback <b>::1</b>. Link-local <b>FE80::/10</b>. Global unicast <b>2000::/3</b>. Multicast <b>FF00::/8</b>.</li>
  <li><b>No existe broadcast</b> (se usa multicast). Autoconfiguración con <b>SLAAC</b>.</li>
</ul>
`;

// ======================= TEMA 6 =======================
window.RESUMEN["tema06"] = `
<div class="rs-intro">La <b>capa de transporte</b> (capa 4) gestiona la comunicación <b>extremo a extremo entre aplicaciones</b>. Frase clave: <b>IP conecta máquinas; la capa de transporte conecta aplicaciones</b>. Su PDU es el <b>segmento</b> (TCP) o <b>datagrama</b> (UDP).</div>

<h3>🧰 Servicios sobre IP (que es no fiable)</h3>
<ul class="rs-list">
  <li><b>Multiplexación / demultiplexación</b>: varias apps usan la red a la vez (se distinguen por el <b>puerto</b>).</li>
  <li><b>Control de errores</b>: checksum + ACK + retransmisión.</li>
  <li><b>Control de flujo</b>: evita saturar al receptor (ventana deslizante).</li>
  <li><b>Control de congestión</b>: evita el colapso de la red ajustando la velocidad.</li>
</ul>

<h3>🚪 Puertos (0 – 65535)</h3>
<table class="rs-table">
  <tr><th>Rango</th><th>Tipo</th><th>Uso</th></tr>
  <tr><td>0 – 1023</td><td>Bien conocidos</td><td>Servicios estándar</td></tr>
  <tr><td>1024 – 49151</td><td>Registrados</td><td>Aplicaciones concretas</td></tr>
  <tr><td>49152 – 65535</td><td>Dinámicos/efímeros</td><td>Clientes</td></tr>
</table>
<div class="rs-note">Puertos clave: <b>HTTP 80</b> · <b>HTTPS 443</b> · <b>DNS 53</b> · <b>SSH 22</b>. La lista oficial la mantiene la <b>IANA</b>.</div>

<h3>⚖️ TCP vs UDP</h3>
<table class="rs-table">
  <tr><th></th><th>TCP</th><th>UDP</th></tr>
  <tr><td>Conexión</td><td>Orientado a conexión (handshake)</td><td>Sin conexión</td></tr>
  <tr><td>Fiabilidad</td><td>Fiable y ordenado</td><td>No fiable, sin orden</td></tr>
  <tr><td>Velocidad</td><td>Más lento (control)</td><td>Muy rápido y liviano</td></tr>
  <tr><td>Usos</td><td>Web, Email, FTP</td><td>DNS, streaming, VoIP, juegos</td></tr>
</table>

<h3>🤝 Conexión TCP (Three-Way Handshake)</h3>
<div class="rs-callout">1) Cliente → <b>SYN</b> (Seq=x) · 2) Servidor → <b>SYN+ACK</b> (ACK=x+1, Seq=y) · 3) Cliente → <b>ACK</b> (ACK=y+1). Así sincronizan números de secuencia. Flags: <b>URG, ACK, PSH, RST, SYN, FIN</b>.</div>
<ul class="rs-list">
  <li>El <b>número de secuencia</b> permite reensamblar los segmentos en orden y segmentar según la <b>MTU</b> (evitando fragmentación IP).</li>
  <li>El campo <b>Ventana</b> es la base del control de flujo. El checksum usa una pseudo-cabecera con las IP origen/destino.</li>
</ul>

<h3>🔁 NAT</h3>
<div class="rs-note">Permite que varios dispositivos privados compartan <b>una IP pública</b> (resuelve la escasez de IPv4). Se implementa en el <b>router</b>, que guarda una <b>tabla NAT</b> (IP/puerto privado ↔ IP/puerto público). Limitación: rompe el modelo extremo a extremo (problemas con P2P, VoIP, servidores locales).</div>

<h3>🚀 Tendencias: QUIC</h3>
<ul class="rs-list">
  <li>Desarrollado por <b>Google</b>; soluciona problemas de TCP (handshake lento, head-of-line blocking, difícil de evolucionar).</li>
  <li>Se construye sobre <b>UDP</b> e implementa fiabilidad, congestión y <b>seguridad TLS integrada</b>.</li>
  <li>Es la base de <b>HTTP/3</b>; se ejecuta en <b>espacio de usuario</b> y permite cambiar de WiFi a 5G sin cortar la conexión.</li>
</ul>
`;
