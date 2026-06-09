// Resúmenes AMPLIADOS (versión completa y detallada) para los temas nuevos: 4 y 5.
// Se añaden al final del resumen existente de cada tema.

// ============== TEMA 4 (ampliado) ==============
window.RESUMEN["tema04"] += `
<hr class="rs-hr">
<h2 class="rs-h2">🔎 Resumen AMPLIADO · Tema 4</h2>
<div class="rs-intro">Versión detallada, apartado por apartado. La capa de enlace (capa 2 de OSI) convierte un medio "tonto" que solo mueve bits en un canal <b>fiable entre dos equipos del mismo enlace local</b>.</div>

<h3>1. Conceptos base</h3>
<ul class="rs-list">
  <li><b>Nodo</b>: dispositivo con dirección de red (host, router). <b>Dispositivo de acceso al medio</b>: opera solo en capas física/enlace y NO tiene dirección de red (hub, repetidor).</li>
  <li><b>Enlace punto a punto</b>: el canal es exclusivo de 2 nodos. <b>Enlace de difusión</b>: el canal lo comparten más de 2 (hay que regular quién habla).</li>
  <li>Se implementa en la <b>tarjeta de red (NIC)</b>: el <b>transceptor</b> convierte señales↔bits, el <b>chip controlador</b> gestiona, hay <b>buffer</b> (memoria) y <b>ROM/Flash</b> con la MAC.</li>
</ul>

<h3>2. Servicios de la capa de enlace</h3>
<table class="rs-table">
  <tr><th>Servicio</th><th>Para qué</th></tr>
  <tr><td>Entramado (framing)</td><td>Marcar dónde empieza y acaba cada trama</td></tr>
  <tr><td>Acceso al medio</td><td>Decidir quién transmite (solo en multipunto)</td></tr>
  <tr><td>Sincronismo</td><td>Que emisor y receptor "vayan al mismo ritmo"</td></tr>
  <tr><td>Direccionamiento físico</td><td>Identificar equipos con la MAC</td></tr>
  <tr><td>Control de flujo</td><td>Que el emisor no ahogue al receptor</td></tr>
  <tr><td>Detección de errores</td><td>Descubrir tramas dañadas</td></tr>
  <tr><td>Multiplexación de protocolos</td><td>Indicar qué protocolo de red va dentro</td></tr>
</table>
<div class="rs-note">Dos subcapas: <b>LLC</b> (IEEE 802.2) = interfaz con la capa de red y control lógico; <b>MAC</b> (IEEE 802.3) = control de acceso al medio.</div>

<h3>3. Entramado (delimitar tramas)</h3>
<ul class="rs-list">
  <li><b>Conteo de caracteres</b>: un campo dice cuántos caracteres tiene la trama. <span class="rs-badge">Débil</span> si ese número se corrompe, se pierde la sincronización de todas las tramas siguientes.</li>
  <li><b>Carácter stuffing</b>: <b>DLE-STX</b> = inicio, <b>DLE-ETX</b> = fin. Si aparece un DLE dentro de los datos, se <b>dobla</b> (DLE-DLE).</li>
  <li><b>Bit stuffing</b>: bandera <span class="rs-badge">01111110</span>. Para no confundir los datos con la bandera, tras <b>cinco 1 seguidos</b> el emisor inserta un <b>0</b>; el receptor lo quita.</li>
</ul>

<h3>4. Direcciones MAC</h3>
<div class="rs-callout"><b>48 bits</b> (12 dígitos hex). Primeros <b>24 bits = OUI</b> (identifica al fabricante, lo da el <b>IEEE</b>); últimos 24 bits = nº de serie del fabricante.</div>
<ul class="rs-list">
  <li><b>Difusión (broadcast)</b>: <span class="rs-badge">FF:FF:FF:FF:FF:FF</span> (todos los bits a 1).</li>
  <li><b>Multicast</b>: bit menos significativo del primer octeto = 1.</li>
  <li><b>Localmente administrada</b>: 2º bit del primer byte = 1.</li>
  <li><b>Modo promiscuo</b>: el adaptador acepta TODAS las tramas (sirve para analizar tráfico).</li>
</ul>

<h3>5. Detección de errores</h3>
<ul class="rs-list">
  <li><b>Error de bit</b>: cambia 1 bit. <b>Error de ráfaga</b>: cambian 2 o más.</li>
  <li><b>Paridad</b>: se añade un bit para que el nº de unos sea par (paridad par) o impar. <span class="rs-badge">Ejemplo</span> datos 1100001 (tres unos) con paridad impar → se añade un <b>0</b> (siguen siendo impares). Falla si cambian un nº par de bits.</li>
  <li><b>CRC</b> (el más usado): el emisor divide el mensaje por un <b>polinomio generador</b> y añade el resto (FCS). Ethernet usa <b>CRC-32</b>. En recepción: resto = 0 → sin error.</li>
  <li><b>Checksum</b>: suma los segmentos, complementa el resultado y lo añade.</li>
</ul>

<h3>6. Colisiones y dominios</h3>
<table class="rs-table">
  <tr><th>Dispositivo</th><th>¿Propaga colisiones?</th><th>¿Propaga broadcast?</th></tr>
  <tr><td>Hub / Repetidor</td><td>Sí</td><td>Sí</td></tr>
  <tr><td>Switch / Puente</td><td>No (1 dominio por puerto)</td><td>Sí</td></tr>
  <tr><td>Router</td><td>No</td><td><b>No</b> (delimita el dominio de difusión)</td></tr>
</table>

<h3>7. Métodos de acceso al medio (solo multipunto)</h3>
<ul class="rs-list">
  <li><b>Paso de testigo (token)</b>: una trama pequeña circula; solo transmite quien la tiene (anillo). Sin colisiones.</li>
  <li><b>ALOHA</b>: transmite cuando quiere; si colisiona, espera un tiempo <b>aleatorio</b> y reintenta.</li>
  <li><b>CSMA</b>: escucha el canal antes de emitir. Variantes: <b>1-persistente</b> (transmite en cuanto se libera), no persistente, p-persistente.</li>
  <li><b>CSMA/CD</b> (Ethernet cableada): detecta colisiones y aplica <b>backoff exponencial binario</b> (espera entre 0 y 2^k−1 slots).</li>
  <li><b>CSMA/CA</b> (Wi-Fi 802.11): evita colisiones con <b>RTS/CTS</b>. Necesario por el <b>problema del nodo oculto</b>.</li>
  <li><b>Mapa de bits</b>: método controlado con ranuras de contención, una por estación.</li>
</ul>

<h3>8. Control de flujo</h3>
<ul class="rs-list">
  <li><b>Parada y espera</b>: 1 trama → espera ACK → siguiente. Sencillo pero desaprovecha el enlace.</li>
  <li><b>Ventana deslizante</b>: varias tramas "en vuelo" sin esperar cada ACK (ventana = nº máximo).</li>
  <li><b>Piggybacking</b>: mete el ACK dentro de una trama de datos (necesita full-duplex).</li>
</ul>

<h3>9. El switch por dentro</h3>
<ul class="rs-list">
  <li>Mantiene la <b>tabla MAC</b> (MAC ↔ puerto). <b>Aprende</b> la MAC origen de cada trama.</li>
  <li>Si conoce la MAC destino → <b>forwarding</b> (solo por ese puerto). Si no → <b>flooding</b> (por todos menos el de entrada). Si origen y destino están en el mismo puerto → <b>filtra</b>.</li>
  <li>Las entradas caducan con el <b>aging time</b>. Tipos: PoE (802.3af/at/bt), apilables, modulares.</li>
</ul>

<h3>10. STP (Spanning Tree Protocol)</h3>
<div class="rs-callout">Evita <b>bucles de capa 2</b> (y tormentas de broadcast) en redes con enlaces redundantes. Los switches intercambian <b>BPDU</b> cada 2 s.</div>
<ul class="rs-list">
  <li><b>Switch raíz</b> = el de <b>menor BID</b> (BID = prioridad 32768 + MAC).</li>
  <li><b>Puerto raíz</b> = el de menor coste hacia la raíz. <b>Puerto designado</b> = el mejor de cada segmento. El resto se <b>bloquean</b>.</li>
</ul>

<h3>11. Ethernet</h3>
<div class="rs-note">Consorcio <b>DIX</b> (Digital, Intel, Xerox). IEEE 802.3 (MAC) + 802.2 (LLC) + 802.1 (interfaz superior). Trama de <b>64 a 1518 bytes</b>.</div>
<table class="rs-table">
  <tr><th>Campo trama</th><th>Detalle</th></tr>
  <tr><td>Preámbulo + SFD</td><td>Sincroniza el reloj del receptor</td></tr>
  <tr><td>MAC destino / origen</td><td>6 bytes cada una</td></tr>
  <tr><td>Tipo</td><td>0x0800=IPv4 · 0x86DD=IPv6 · 0x0806=ARP</td></tr>
  <tr><td>Datos</td><td>46–1500 bytes</td></tr>
  <tr><td>FCS</td><td>CRC-32 de integridad</td></tr>
</table>
<div class="rs-callout">Nomenclatura <b>X Base Z</b>: X=Mbps · Base=banda base · Z=medio (T=par trenzado, F=fibra, 2/5=coaxial). Ej.: <b>10Base2</b> (coaxial fino, 185 m, BNC), <b>1000BaseT</b> (UTP Cat5e-6, 100 m, Gigabit). Wi-Fi (802.11) usa <b>ACK</b> de enlace y retransmite si no llega.</div>
`;

// ============== TEMA 5 (ampliado) ==============
window.RESUMEN["tema05"] += `
<hr class="rs-hr">
<h2 class="rs-h2">🔎 Resumen AMPLIADO · Tema 5</h2>
<div class="rs-intro">Versión detallada con ejemplos resueltos. La capa de red (capa 3) lleva los <b>paquetes</b> de extremo a extremo cruzando redes distintas. El protagonista es el <b>router</b> y el protocolo <b>IP</b>.</div>

<h3>1. La dirección IPv4</h3>
<ul class="rs-list">
  <li><b>32 bits</b> = 4 octetos (0–255) en decimal con puntos. Ej.: 192.168.1.10.</li>
  <li>Dos partes: <b>red</b> (izquierda) + <b>host</b> (derecha). La <b>máscara</b> marca con 1 la parte de red y con 0 la de host.</li>
  <li><b>Dirección de red</b> = host todo a 0 · <b>Broadcast</b> = host todo a 1 (ninguna se asigna a equipos).</li>
  <li>Hosts utilizables = <span class="rs-badge">2ⁿ − 2</span> (n = bits de host).</li>
</ul>

<h3>2. Clases y direcciones especiales</h3>
<table class="rs-table">
  <tr><th>Clase</th><th>1er octeto</th><th>Máscara</th><th>Privadas</th></tr>
  <tr><td>A</td><td>1–126</td><td>/8 (255.0.0.0)</td><td>10.0.0.0/8</td></tr>
  <tr><td>B</td><td>128–191</td><td>/16 (255.255.0.0)</td><td>172.16.0.0/12</td></tr>
  <tr><td>C</td><td>192–223</td><td>/24 (255.255.255.0)</td><td>192.168.0.0/16</td></tr>
  <tr><td>D</td><td>224–239</td><td>Multicast</td><td>—</td></tr>
</table>
<div class="rs-note"><b>127.0.0.1</b> = loopback (uno mismo) · <b>169.254.0.0/16</b> = APIPA (cuando falla el DHCP) · <b>0.0.0.0/0</b> = ruta por defecto.</div>

<h3>3. Subnetting con EJEMPLO resuelto</h3>
<div class="rs-callout"><b>Objetivo</b>: dividir 192.168.1.0/24 en <b>4 subredes</b>.<br>
Necesito 4 = 2² → tomo <b>2 bits</b> de host → nueva máscara <b>/26</b> (255.255.255.192). Cada subred tiene 2⁶−2 = <b>62 hosts</b>.</div>
<table class="rs-table">
  <tr><th>Subred</th><th>Red</th><th>Rango de hosts</th><th>Broadcast</th></tr>
  <tr><td>1</td><td>192.168.1.0</td><td>.1 – .62</td><td>192.168.1.63</td></tr>
  <tr><td>2</td><td>192.168.1.64</td><td>.65 – .126</td><td>192.168.1.127</td></tr>
  <tr><td>3</td><td>192.168.1.128</td><td>.129 – .190</td><td>192.168.1.191</td></tr>
  <tr><td>4</td><td>192.168.1.192</td><td>.193 – .254</td><td>192.168.1.255</td></tr>
</table>
<ul class="rs-list">
  <li><b>VLSM</b>: usar máscaras de distinto tamaño según lo que necesita cada subred (no malgastar IPs).</li>
  <li><b>CIDR</b>: notación /n. Ej.: /30 = 255.255.255.252 = <b>2 hosts</b> (perfecto para enlaces entre routers).</li>
</ul>

<h3>4. Protocolos de apoyo</h3>
<table class="rs-table">
  <tr><th>Protocolo</th><th>Qué hace</th></tr>
  <tr><td><b>DHCP</b></td><td>Asigna IP/máscara/gateway/DNS automáticamente. Proceso <b>DORA</b>: <b>D</b>iscover → <b>O</b>ffer → <b>R</b>equest → <b>A</b>ck</td></tr>
  <tr><td><b>ARP</b></td><td>De una IP conocida obtiene su <b>MAC</b> (pregunta por broadcast)</td></tr>
  <tr><td><b>DNS</b></td><td>Traduce nombre de dominio → IP</td></tr>
  <tr><td><b>ICMP</b></td><td>Mensajes de control/error: lo usan <b>ping</b> y <b>traceroute</b></td></tr>
  <tr><td><b>NAT</b></td><td>Varios equipos privados comparten 1 IP pública</td></tr>
</table>

<h3>5. Encaminamiento (routing)</h3>
<ul class="rs-list">
  <li><b>Estático</b>: rutas a mano (no se adapta a fallos). <b>Dinámico</b>: los routers aprenden con protocolos.</li>
  <li><b>RIP</b> → vector distancia, métrica = <b>nº de saltos</b> (máx 15; 16 = inalcanzable).</li>
  <li><b>OSPF</b> → estado de enlace (mapa completo, ruta más corta).</li>
  <li><b>BGP</b> → protocolo <b>exterior</b>, une los sistemas autónomos de Internet.</li>
  <li><b>Puerta de enlace por defecto</b>: router por el que se sale a otras redes.</li>
  <li><b>TTL</b> (Hop Limit en IPv6): baja 1 en cada router; a 0 se descarta (evita bucles).</li>
  <li>La tabla de rutas elige por <b>prefijo más largo</b> (ruta más específica); empates → <b>distancia administrativa</b>.</li>
</ul>

<h3>6. VLANs</h3>
<div class="rs-callout">Una <b>VLAN</b> parte una red física en varias redes lógicas (dominios de difusión) aisladas → más seguridad y menos tráfico. Estándar de etiquetado <b>IEEE 802.1Q</b> (mete una etiqueta de 4 bytes en la trama).</div>
<ul class="rs-list">
  <li><b>Puerto access</b>: pertenece a 1 VLAN, para equipos finales.</li>
  <li><b>Puerto trunk</b>: transporta varias VLANs entre switches.</li>
  <li>Para comunicar VLANs distintas hace falta <b>enrutamiento</b> (router-on-a-stick o switch de capa 3).</li>
</ul>

<h3>7. IPv6</h3>
<ul class="rs-list">
  <li><b>128 bits</b> en hexadecimal (8 grupos de 4). Nace por el <b>agotamiento de IPv4</b>.</li>
  <li>Abreviar: se quitan ceros a la izquierda y un bloque de ceros se sustituye por <b>::</b> (¡solo una vez!).</li>
  <li><span class="rs-badge">Ejemplo</span> 2001:0db8:0000:0000:0000:0000:0000:0001 → <b>2001:db8::1</b></li>
</ul>
<table class="rs-table">
  <tr><th>Tipo</th><th>Prefijo</th></tr>
  <tr><td>Loopback</td><td>::1</td></tr>
  <tr><td>Link-local</td><td>FE80::/10</td></tr>
  <tr><td>Global unicast (pública)</td><td>2000::/3</td></tr>
  <tr><td>Multicast</td><td>FF00::/8</td></tr>
</table>
<div class="rs-note">IPv6 <b>NO tiene broadcast</b> (usa multicast). Autoconfiguración sin servidor: <b>SLAAC</b>.</div>
`;
