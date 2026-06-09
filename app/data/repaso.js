// Modos de repaso por tema: flashcards, relacionar (matching) y verdadero/falso.
// Estructura: window.REPASO[temaKey] = { flashcards:[{t,d}], relacionar:[{a,b}], vf:[{s,v,e}] }
window.REPASO = {
  // ===================== TEMA 1 =====================
  tema01: {
    flashcards: [
      { t: "Comunicación", d: "Proceso que involucra a un emisor, un mensaje transmitido por un canal y un receptor." },
      { t: "Codificador", d: "Transforma la información en una forma entendible para el canal." },
      { t: "Decodificador", d: "Interpreta el código y recupera el mensaje." },
      { t: "Ruido", d: "Cualquier perturbación que afecta a la señal durante la transmisión." },
      { t: "Atenuación", d: "Pérdida de energía de la señal que aumenta con la distancia." },
      { t: "PAN", d: "Red personal de muy corto alcance (<10 m), p. ej. Bluetooth." },
      { t: "LAN", d: "Red local de área pequeña, alta velocidad y propiedad privada." },
      { t: "MAN", d: "Red metropolitana que interconecta varias LAN en una ciudad/campus." },
      { t: "WAN", d: "Red de gran extensión (país/mundo) gestionada por proveedores (ISP)." },
      { t: "Simplex", d: "Transmisión en un solo sentido (p. ej. TV tradicional)." },
      { t: "Half-duplex", d: "Transmisión en ambos sentidos pero no a la vez (walkie-talkie)." },
      { t: "Full-duplex", d: "Transmisión en ambos sentidos simultáneamente (llamada telefónica)." },
      { t: "Topología en bus", d: "Medio compartido con terminadores; colisiones frecuentes." },
      { t: "Topología en anillo", d: "Un único sentido; transmite quien posee el testigo (token)." },
      { t: "Topología en estrella", d: "Nodos conectados a un nodo central; si cae el central, cae la red." },
      { t: "Topología mallada", d: "Múltiples rutas entre nodos; gran redundancia pero cara." },
      { t: "Base (radix)", d: "Número de dígitos distintos de un sistema de numeración." },
      { t: "Sistema binario", d: "Base 2 (0 y 1); se adapta a los dos estados del transistor." },
      { t: "Sistema hexadecimal", d: "Base 16 (0-9 y A-F); usado en MAC, IPv6, colores, memoria." }
    ],
    relacionar: [
      { a: "PAN", b: "Bluetooth / <10 m" },
      { a: "LAN", b: "Oficina, alta velocidad, privada" },
      { a: "MAN", b: "Ciudad / campus" },
      { a: "WAN", b: "Gestionada por ISP / mundial" },
      { a: "Simplex", b: "Televisión tradicional" },
      { a: "Half-duplex", b: "Walkie-talkie" },
      { a: "Full-duplex", b: "Llamada telefónica" },
      { a: "Binario", b: "Base 2" },
      { a: "Hexadecimal", b: "Base 16" }
    ],
    vf: [
      { s: "En una topología en estrella, si falla el nodo central puede caer toda la red.", v: true, e: "El nodo central es crítico en la estrella." },
      { s: "Las redes analógicas son más resistentes al ruido que las digitales.", v: false, e: "Es al revés: las digitales son más resistentes al ruido." },
      { s: "(101)₂ equivale a 5 en decimal.", v: true, e: "4+0+1 = 5." },
      { s: "En una red de difusión pueden producirse colisiones si dos nodos transmiten a la vez.", v: true, e: "Comparten un único canal." },
      { s: "Half-duplex permite transmitir en ambos sentidos al mismo tiempo.", v: false, e: "Eso es full-duplex; half-duplex no es simultáneo." },
      { s: "La atenuación de una señal disminuye al aumentar la distancia.", v: false, e: "La atenuación aumenta con la distancia." },
      { s: "El sistema decimal es difícil de representar con circuitos electrónicos.", v: true, e: "Por eso en electrónica se usa el binario." },
      { s: "El hexadecimal se utiliza en las direcciones IPv6 y MAC.", v: true, e: "Su conversión con binario es sencilla." },
      { s: "En la topología en anillo cualquier nodo puede transmitir en cualquier momento.", v: false, e: "Solo transmite quien posee el testigo." },
      { s: "Una WAN suele pertenecer a una sola organización privada.", v: false, e: "Suele gestionarla un proveedor (ISP), no una sola organización." }
    ]
  },

  // ===================== TEMA 2 =====================
  tema02: {
    flashcards: [
      { t: "Estándar", d: "Conjunto de normas, acuerdos y recomendaciones técnicas que regulan la comunicación." },
      { t: "Estándar de facto", d: "Surge de la gran aceptación de un producto; no es oficial." },
      { t: "Estándar de iure", d: "Definido por organizaciones o grupos oficiales." },
      { t: "Encapsulación", d: "Añadir a los datos la cabecera (información de control) de cada capa." },
      { t: "PDU", d: "Protocol Data Unit: la sección de datos en una capa concreta." },
      { t: "Modelo OSI", d: "Modelo teórico de referencia de 7 capas (ISO, 1984)." },
      { t: "Capa física (1)", d: "Transmisión de bits; características mecánicas, eléctricas, funcionales y de procedimiento." },
      { t: "Capa de enlace (2)", d: "Forma tramas; control de errores y de flujo en el enlace local." },
      { t: "Capa de red (3)", d: "Encaminamiento de paquetes mediante direcciones lógicas." },
      { t: "Capa de transporte (4)", d: "Conexión extremo a extremo (segmentos)." },
      { t: "Capa de sesión (5)", d: "Gestiona y sincroniza el diálogo; restaura transmisiones interrumpidas." },
      { t: "Capa de presentación (6)", d: "Formato de datos: codificación, compresión y cifrado." },
      { t: "Capa de aplicación (7)", d: "Interfaz con las aplicaciones (HTTP, FTP, SMTP...)." },
      { t: "TCP/IP", d: "Pila de protocolos funcional (DoD, 1973); 4 capas." },
      { t: "IP", d: "Protocolo más importante del nivel de internet en TCP/IP." }
    ],
    relacionar: [
      { a: "Capa física", b: "Bits" },
      { a: "Capa de enlace", b: "Tramas" },
      { a: "Capa de red", b: "Paquetes / encaminamiento" },
      { a: "Capa de transporte", b: "Segmentos / extremo a extremo" },
      { a: "Capa de presentación", b: "Cifrado y compresión" },
      { a: "TCP/IP", b: "ARPANET / DoD 1973" },
      { a: "OSI", b: "ISO 1984 (7 capas)" },
      { a: "HTTP/FTP/SMTP", b: "Nivel de aplicación" }
    ],
    vf: [
      { s: "El modelo OSI tiene 7 capas.", v: true, e: "Física, Enlace, Red, Transporte, Sesión, Presentación y Aplicación." },
      { s: "TCP/IP es anterior en concepto y más simple que OSI.", v: true, e: "Surge en 1973 (DoD) y es más funcional que OSI." },
      { s: "En TCP/IP las funciones de sesión y presentación están en el nivel de aplicación.", v: true, e: "TCP/IP las delega en las aplicaciones." },
      { s: "El encaminamiento es función de la capa de enlace.", v: false, e: "Es función de la capa de red (3)." },
      { s: "La PDU de la capa de enlace es el paquete.", v: false, e: "Es la trama; el paquete es de la capa de red." },
      { s: "El cifrado y la compresión se realizan en la capa de presentación.", v: true, e: "Nivel 6 de OSI." },
      { s: "OSI tuvo gran éxito comercial frente a TCP/IP.", v: false, e: "OSI quedó como modelo teórico; TCP/IP es el que se usa." },
      { s: "La encapsulación consiste en añadir la cabecera de control en cada capa.", v: true, e: "Cada capa encapsula la PDU de la superior." },
      { s: "IP pertenece al nivel de transporte.", v: false, e: "IP es del nivel de internet (red); TCP y UDP son de transporte." }
    ]
  },

  // ============ TEMA 2 - ESPECIAL ORGANISMOS ============
  tema02_organismos: {
    flashcards: [
      { t: "ITU", d: "Unión Internacional de Telecomunicaciones (ONU). Espectro radioeléctrico y órbitas de satélites." },
      { t: "ISO", d: "Organización Internacional de Normalización, sede en Ginebra. Definió OSI." },
      { t: "IEEE", d: "Asociación profesional fundada en 1884; comité 802 para redes locales." },
      { t: "IETF", d: "Regula los estándares de Internet mediante las RFC." },
      { t: "RFC", d: "Request For Comments: propuestas con que el IETF regula Internet." },
      { t: "ANSI", d: "Organismo de estandarización de Estados Unidos." },
      { t: "TIA", d: "Asociación de la industria de telecomunicaciones (EEUU), con ANSI y EIA." },
      { t: "ETSI", d: "Organismo europeo; éxito: estandarizar el GSM." },
      { t: "AENOR", d: "Asociación Española de Normalización; publica las normas UNE." },
      { t: "UNE", d: "'Una Norma Española', publicadas por AENOR." },
      { t: "DIN", d: "Organismo de estandarización de Alemania." },
      { t: "Comité 802", d: "Comité del IEEE sobre redes locales (Ethernet 802.3, Wi-Fi 802.11)." },
      { t: "GSM", d: "Sistema de telefonía móvil estandarizado por ETSI." },
      { t: "OSI", d: "Modelo de interconexión de sistemas abiertos definido por ISO." }
    ],
    relacionar: [
      { a: "ITU", b: "ONU / espectro radioeléctrico" },
      { a: "ISO", b: "Modelo OSI / Ginebra" },
      { a: "IEEE", b: "Comité 802 / fundado en 1884" },
      { a: "IETF", b: "RFC" },
      { a: "ANSI", b: "EEUU" },
      { a: "ETSI", b: "GSM / Europa" },
      { a: "AENOR", b: "Normas UNE / España" },
      { a: "TIA", b: "Industria de telecomunicaciones (EEUU)" }
    ],
    vf: [
      { s: "El IEEE fue fundado en 1884.", v: true, e: "Desarrolla estándares eléctricos y electrónicos." },
      { s: "La ISO tiene su sede en Ginebra (Suiza).", v: true, e: "Agencia internacional sin ánimo de lucro." },
      { s: "Las normas UNE las publica el IETF.", v: false, e: "Las publica AENOR; el IETF gestiona las RFC." },
      { s: "El GSM fue un éxito de estandarización de ETSI.", v: true, e: "Organismo europeo." },
      { s: "La ITU es un organismo de las Naciones Unidas.", v: true, e: "El más importante de la ONU en tecnologías de la información." },
      { s: "El modelo OSI lo definió el IEEE.", v: false, e: "Lo definió la ISO." },
      { s: "ANSI y TIA son organismos de Estados Unidos.", v: true, e: "ANSI supervisa estándares de EEUU y TIA es del sector telecomunicaciones." },
      { s: "Un estándar de facto está definido por un organismo oficial.", v: false, e: "El de facto surge del uso; el oficial es 'de iure'." },
      { s: "El comité 802 del IEEE trata sobre redes locales.", v: true, e: "Incluye 802.3 (Ethernet) y 802.11 (Wi-Fi)." }
    ]
  },

  // ===================== TEMA 3 =====================
  tema03: {
    flashcards: [
      { t: "Capa física", d: "Transmite bits por el canal; define características mecánicas, eléctricas, funcionales y de procedimiento." },
      { t: "Ancho de banda", d: "Rango de frecuencias que soporta el medio (f.máx − f.mín)." },
      { t: "1 KB", d: "1024 bytes (almacenamiento, base 2)." },
      { t: "1 Kbps", d: "1000 bps (velocidad, base 10)." },
      { t: "Atenuación", d: "Pérdida de energía; se corrige con amplificadores (analógico) o repetidores (digital)." },
      { t: "Diafonía", d: "Acoplamiento no deseado de señal entre pares cercanos." },
      { t: "Par trenzado", d: "4 pares trenzados; trenzar cancela interferencias." },
      { t: "UTP", d: "Par trenzado sin apantallar; flexible y económico." },
      { t: "RJ-45", d: "Conector 8P8C del par trenzado." },
      { t: "Cable directo", d: "Mismo estándar en ambos extremos; une dispositivos distintos." },
      { t: "Cable cruzado", d: "568A en un extremo y 568B en el otro; une dispositivos iguales." },
      { t: "Fibra monomodo (OS)", d: "Un solo haz; hasta 300 km; color amarillo." },
      { t: "Fibra multimodo (OM)", d: "Varios haces; 2-3 km; más barata." },
      { t: "Coaxial 50 Ω", d: "Banda base (radiofrecuencia, laboratorios)." },
      { t: "Coaxial 75 Ω", d: "Banda ancha (TV, Internet por cable)." },
      { t: "Bandas ISM", d: "Frecuencias libres sin licencia (2.4 GHz Wi-Fi/Bluetooth)." },
      { t: "Satélite GEO", d: "Geoestacionario a 35.786 km." },
      { t: "WPA3", d: "Estándar de seguridad Wi-Fi actual (usa SAE)." },
      { t: "SCE", d: "Sistema de cableado estructurado; plataforma única para voz, datos y vídeo." },
      { t: "Rack 19''", d: "Ancho estándar; 1U = 44,45 mm." }
    ],
    relacionar: [
      { a: "Coaxial 50 Ω", b: "Banda base" },
      { a: "Coaxial 75 Ω", b: "TV / Internet por cable" },
      { a: "Fibra monomodo", b: "Hasta 300 km / amarillo" },
      { a: "Fibra multimodo", b: "2-3 km / aqua-naranja" },
      { a: "RJ-45", b: "Par trenzado" },
      { a: "Satélite GEO", b: "35.786 km" },
      { a: "GPS", b: "Satélites MEO" },
      { a: "Wi-Fi / Bluetooth", b: "Banda ISM 2.4 GHz" },
      { a: "1U de rack", b: "44,45 mm" }
    ],
    vf: [
      { s: "1 KB de almacenamiento equivale a 1024 bytes.", v: true, e: "El almacenamiento usa base 2." },
      { s: "1 Kbps de velocidad equivale a 1024 bps.", v: false, e: "La velocidad usa base 10: 1000 bps." },
      { s: "La fibra monomodo alcanza mayores distancias que la multimodo.", v: true, e: "Hasta 300 km frente a 2-3 km." },
      { s: "El coaxial de banda ancha tiene impedancia de 75 Ω.", v: true, e: "Usado en TV e Internet por cable." },
      { s: "Trenzar los pares de cobre reduce la interferencia eléctrica.", v: true, e: "Las ondas de las vueltas se cancelan." },
      { s: "Los satélites GEO están a 2000 km de altura.", v: false, e: "Están a 35.786 km; los MEO entre 2000 y 35.786 km." },
      { s: "WPA2 es más seguro y moderno que WPA3.", v: false, e: "WPA3 (2018) es el estándar actual, más seguro que WPA2." },
      { s: "El cableado horizontal de un SCE no debe superar los 90 m.", v: true, e: "Y el total con el área de trabajo, 100 m." },
      { s: "Un rack tiene un ancho estándar de 19 pulgadas.", v: true, e: "Y la altura se mide en U (1U = 44,45 mm)." },
      { s: "El cable cruzado usa el mismo estándar de colores en ambos extremos.", v: false, e: "Usa 568A en un extremo y 568B en el otro." }
    ]
  },

  // ===================== TEMA 4 =====================
  tema04: {
    flashcards: [
      { t: "Capa de enlace", d: "Capa 2 de OSI; asegura comunicación libre de errores en el enlace local." },
      { t: "Trama", d: "PDU de la capa de enlace." },
      { t: "Entramado (framing)", d: "Marcar el inicio y el final de un bloque de datos." },
      { t: "Bit stuffing", d: "Inserta un 0 tras cinco 1 consecutivos para no confundir con la bandera 01111110." },
      { t: "Dirección MAC", d: "48 bits; 24 de OUI (fabricante) + 24 de número de serie." },
      { t: "OUI", d: "Identificador del fabricante (24 primeros bits de la MAC), asignado por el IEEE." },
      { t: "Broadcast MAC", d: "FF:FF:FF:FF:FF:FF (todos los bits a 1)." },
      { t: "CRC", d: "Código de redundancia cíclica; detección de errores (FCS en Ethernet)." },
      { t: "Colisión", d: "Dos transmisiones coinciden y sus señales se mezclan." },
      { t: "CSMA/CD", d: "Escucha el canal antes de emitir y detecta colisiones (Ethernet)." },
      { t: "CSMA/CA", d: "Evita colisiones; usado en Wi-Fi (802.11) con RTS/CTS." },
      { t: "Paso de testigo", d: "Solo transmite quien posee el token (topología en anillo)." },
      { t: "Ventana deslizante", d: "Permite varias tramas en vuelo sin esperar cada ACK." },
      { t: "Piggybacking", d: "Combina ACK y datos en una misma trama (requiere full-duplex)." },
      { t: "Tabla MAC", d: "Asocia direcciones MAC con el puerto del switch." },
      { t: "Flooding", d: "Reenviar por todos los puertos (menos el de entrada) si la MAC no está en la tabla." },
      { t: "STP", d: "Spanning Tree: evita bucles de capa 2 con enlaces redundantes (usa BPDU)." },
      { t: "Switch raíz", d: "El de menor BID (prioridad + MAC) en STP." },
      { t: "Ethernet", d: "Estándar DIX/IEEE 802.3; trama de 64 a 1518 bytes." }
    ],
    relacionar: [
      { a: "Capa de enlace", b: "Trama" },
      { a: "CSMA/CD", b: "Ethernet (cableado)" },
      { a: "CSMA/CA", b: "Wi-Fi (802.11)" },
      { a: "Paso de testigo", b: "Anillo / Token" },
      { a: "FF:FF:FF:FF:FF:FF", b: "Broadcast" },
      { a: "OUI", b: "Fabricante (IEEE)" },
      { a: "STP", b: "Evita bucles (BPDU)" },
      { a: "CRC / FCS", b: "Detección de errores" },
      { a: "Switch raíz", b: "Menor BID" }
    ],
    vf: [
      { s: "Una dirección MAC tiene 48 bits.", v: true, e: "24 de OUI + 24 de número de serie." },
      { s: "Los routers propagan las tramas de broadcast.", v: false, e: "Los routers NO propagan el broadcast; switches y hubs sí." },
      { s: "CSMA/CA se utiliza en redes inalámbricas 802.11.", v: true, e: "Trata de evitar colisiones con RTS/CTS." },
      { s: "El switch raíz de STP es el de mayor BID.", v: false, e: "Es el de MENOR BID." },
      { s: "El bit stuffing inserta un 0 tras cinco 1 consecutivos.", v: true, e: "Para no confundir los datos con la bandera 01111110." },
      { s: "El método de paso de testigo es típico de la topología en anillo.", v: true, e: "Solo transmite quien tiene el token." },
      { s: "Si la MAC destino no está en la tabla, el switch hace flooding.", v: true, e: "Reenvía por todos los puertos menos el de entrada." },
      { s: "El piggybacking combina el acuse (ACK) con datos en la misma trama.", v: true, e: "Requiere enlace full-duplex." },
      { s: "El tamaño mínimo de una trama Ethernet es de 64 bytes.", v: true, e: "Y el máximo 1518 bytes." },
      { s: "El hub divide la red en varios dominios de colisión.", v: false, e: "El hub mantiene un único dominio de colisión; el switch crea uno por puerto." }
    ]
  },

  // ===================== TEMA 5 =====================
  tema05: {
    flashcards: [
      { t: "Capa de red", d: "Capa 3; hace llegar los paquetes del origen al destino (encaminamiento)." },
      { t: "Paquete / datagrama", d: "PDU de la capa de red." },
      { t: "IPv4", d: "Dirección de 32 bits en 4 octetos decimales." },
      { t: "Máscara de subred", d: "Separa la parte de red (1) de la de host (0)." },
      { t: "Dirección de red", d: "Bits de host a 0; identifica la subred." },
      { t: "Broadcast", d: "Bits de host a 1; envía a todos los hosts de la red." },
      { t: "Hosts utilizables", d: "2^n − 2 (n = bits de host)." },
      { t: "IP privadas", d: "10.0.0.0/8, 172.16.0.0/12 y 192.168.0.0/16." },
      { t: "Loopback", d: "127.0.0.1 en IPv4 (::1 en IPv6)." },
      { t: "Subnetting", d: "Tomar bits de host para crear subredes." },
      { t: "VLSM", d: "Máscaras de longitud variable según necesidades." },
      { t: "DHCP", d: "Asigna IP automáticamente (proceso DORA)." },
      { t: "ARP", d: "Obtiene la MAC a partir de una IP conocida." },
      { t: "ICMP", d: "Mensajes de control/error (ping, traceroute)." },
      { t: "NAT", d: "Traduce IP privadas a una IP pública compartida." },
      { t: "Puerta de enlace", d: "Router al que se envían los paquetes a otras redes." },
      { t: "RIP", d: "Protocolo vector distancia; métrica = saltos (máx. 15)." },
      { t: "OSPF", d: "Protocolo de estado de enlace (link-state)." },
      { t: "BGP", d: "Protocolo exterior entre sistemas autónomos de Internet." },
      { t: "IPv6", d: "Dirección de 128 bits en hexadecimal; sin broadcast." },
      { t: "VLAN", d: "Red local virtual que segmenta lógicamente (802.1Q)." }
    ],
    relacionar: [
      { a: "IPv4", b: "32 bits" },
      { a: "IPv6", b: "128 bits" },
      { a: "DHCP", b: "DORA / asigna IP" },
      { a: "ARP", b: "IP → MAC" },
      { a: "DNS", b: "Nombre → IP" },
      { a: "ICMP", b: "ping / traceroute" },
      { a: "RIP", b: "Vector distancia (saltos)" },
      { a: "OSPF", b: "Estado de enlace" },
      { a: "BGP", b: "Encaminamiento exterior (AS)" },
      { a: "VLAN", b: "802.1Q" },
      { a: "127.0.0.1", b: "Loopback" }
    ],
    vf: [
      { s: "Una dirección IPv4 tiene 32 bits.", v: true, e: "Cuatro octetos de 8 bits." },
      { s: "IPv6 mantiene el broadcast como en IPv4.", v: false, e: "IPv6 elimina el broadcast; usa multicast." },
      { s: "192.168.0.0/16 es un rango de direcciones privadas.", v: true, e: "Junto con 10.0.0.0/8 y 172.16.0.0/12." },
      { s: "El número de hosts utilizables de una subred es 2^n − 2.", v: true, e: "Se restan la dirección de red y la de broadcast." },
      { s: "DHCP sirve para traducir nombres de dominio en IP.", v: false, e: "Eso es DNS; DHCP asigna direcciones IP." },
      { s: "ARP obtiene la dirección MAC a partir de una IP conocida.", v: true, e: "Mediante una petición en broadcast." },
      { s: "RIP usa el número de saltos como métrica, con máximo 15.", v: true, e: "16 se considera inalcanzable." },
      { s: "OSPF es un protocolo de vector distancia.", v: false, e: "OSPF es de estado de enlace (link-state)." },
      { s: "127.0.0.1 es la dirección de loopback.", v: true, e: "El equipo se refiere a sí mismo." },
      { s: "Las VLAN segmentan la red lógicamente sin duplicar el cableado.", v: true, e: "Usan etiquetado 802.1Q sobre la misma infraestructura." },
      { s: "El TTL evita que un paquete circule indefinidamente por bucles.", v: true, e: "Se decrementa en cada router; al llegar a 0 se descarta." }
    ]
  }
};
