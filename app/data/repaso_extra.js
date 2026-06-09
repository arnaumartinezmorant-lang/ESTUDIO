// Ampliación de repaso: más flashcards, MUCHAS más relaciones y más V/F por tema.
(function () {
  function add(key, extra) {
    if (!window.REPASO[key]) return;
    if (extra.flashcards) window.REPASO[key].flashcards.push.apply(window.REPASO[key].flashcards, extra.flashcards);
    if (extra.relacionar) window.REPASO[key].relacionar.push.apply(window.REPASO[key].relacionar, extra.relacionar);
    if (extra.vf) window.REPASO[key].vf.push.apply(window.REPASO[key].vf, extra.vf);
  }

  // ===================== TEMA 1 =====================
  add("tema01", {
    flashcards: [
      { t: "Señal emitida", d: "Forma física del mensaje codificado al salir del emisor." },
      { t: "Señal recibida", d: "Versión de la señal que llega al receptor." },
      { t: "SNR", d: "Relación señal/ruido: mide la calidad de la señal frente al ruido." },
      { t: "Topología física", d: "Disposición física de los elementos de la red." },
      { t: "Topología lógica", d: "Comportamiento global de la red." },
      { t: "Terminador", d: "Resistencia que cierra los extremos del bus." }
    ],
    relacionar: [
      { a: "Emisor", b: "Genera el mensaje" },
      { a: "Receptor", b: "Recibe el mensaje" },
      { a: "Canal", b: "Medio por el que viaja la señal" },
      { a: "Codificador", b: "Adapta la información al canal" },
      { a: "Decodificador", b: "Recupera el mensaje del código" },
      { a: "Ruido", b: "Perturbación de la señal" },
      { a: "Atenuación", b: "Aumenta con la distancia" },
      { a: "Distorsión", b: "Unas señales compiten con otras" },
      { a: "Topología bus", b: "Terminadores / colisiones" },
      { a: "Topología malla", b: "Redundancia / cara" },
      { a: "Topología árbol", b: "Jerárquica" },
      { a: "Base 2", b: "Binario" },
      { a: "Base 10", b: "Decimal" },
      { a: "Base 16", b: "Hexadecimal" }
    ],
    vf: [
      { s: "Una PAN cubre normalmente menos de 10 metros.", v: true, e: "Red personal de muy corto alcance." },
      { s: "La topología en árbol es una combinación de topologías en estrella.", v: true, e: "Estructura jerárquica por niveles." },
      { s: "El sistema binario usa los dígitos 0 a 9.", v: false, e: "Usa solo 0 y 1 (base 2)." },
      { s: "(2F)₁₆ equivale a 47 en decimal.", v: true, e: "2×16 + 15 = 47." },
      { s: "En full-duplex no se puede transmitir y recibir a la vez.", v: false, e: "En full-duplex sí es simultáneo (p. ej. teléfono)." },
      { s: "La señal recibida ideal sería igual a la enviada.", v: true, e: "En la realidad se suma el ruido." }
    ]
  });

  // ===================== TEMA 2 =====================
  add("tema02", {
    flashcards: [
      { t: "Interfaz (capas)", d: "Define los servicios que una capa ofrece a la adyacente." },
      { t: "Desencapsulación", d: "El receptor retira las cabeceras capa a capa." },
      { t: "ARPANET", d: "Red de investigación; origen de TCP/IP." },
      { t: "MILNET", d: "Red de uso exclusivamente militar." },
      { t: "UDP", d: "Protocolo de transporte rápido y sin conexión." }
    ],
    relacionar: [
      { a: "Capa 1", b: "Física (bits)" },
      { a: "Capa 2", b: "Enlace (tramas)" },
      { a: "Capa 3", b: "Red (paquetes)" },
      { a: "Capa 4", b: "Transporte (segmentos)" },
      { a: "Capa 5", b: "Sesión" },
      { a: "Capa 6", b: "Presentación (cifrado)" },
      { a: "Capa 7", b: "Aplicación" },
      { a: "Encapsulación", b: "Añadir cabecera" },
      { a: "PDU", b: "Unidad de datos de protocolo" },
      { a: "TCP/IP", b: "4 capas / funcional" },
      { a: "OSI", b: "7 capas / teórico" },
      { a: "IP", b: "Nivel de internet" },
      { a: "HTTP", b: "Nivel de aplicación" }
    ],
    vf: [
      { s: "La interfaz entre capas define los servicios que una ofrece a la adyacente.", v: true, e: "Oculta los detalles internos." },
      { s: "TCP/IP nació en 1973 impulsado por el DoD.", v: true, e: "De ahí salieron ARPANET y MILNET." },
      { s: "En TCP/IP las capas de sesión y presentación son independientes.", v: false, e: "Están integradas en el nivel de aplicación." },
      { s: "La capa de transporte de OSI trabaja con segmentos.", v: true, e: "Conexión extremo a extremo." },
      { s: "La desencapsulación añade cabeceras en el emisor.", v: false, e: "Las retira en el receptor; añadirlas es encapsular." }
    ]
  });

  // ============ TEMA 2 - ORGANISMOS ============
  add("tema02_organismos", {
    relacionar: [
      { a: "ITU", b: "Naciones Unidas" },
      { a: "ISO", b: "Ginebra (Suiza)" },
      { a: "IEEE", b: "Fundado en 1884" },
      { a: "IETF", b: "Request For Comments" },
      { a: "ANSI", b: "Estados Unidos" },
      { a: "TIA", b: "Telecomunicaciones (EE.UU.)" },
      { a: "ETSI", b: "GSM (Europa)" },
      { a: "AENOR", b: "Normas UNE (España)" },
      { a: "DIN", b: "Alemania" },
      { a: "Comité 802", b: "Redes locales (IEEE)" },
      { a: "OSI", b: "Definido por ISO" },
      { a: "De facto", b: "Surge del uso" },
      { a: "De iure", b: "Definido por organismo oficial" }
    ],
    vf: [
      { s: "ETSI es un organismo europeo.", v: true, e: "Estandarizó el GSM." },
      { s: "Las RFC las gestiona la ITU.", v: false, e: "Las gestiona el IETF." },
      { s: "AENOR adopta también las normas europeas.", v: true, e: "Además de publicar las UNE." },
      { s: "La ISO está formada por organismos de más de 100 países.", v: true, e: "ANSI, DIN, AENOR..." },
      { s: "El IEEE es una agencia de la ONU.", v: false, e: "Es una asociación profesional; la de la ONU es la ITU." }
    ]
  });

  // ===================== TEMA 3 =====================
  add("tema03", {
    flashcards: [
      { t: "Diafonía", d: "Acoplamiento de señal entre pares cercanos." },
      { t: "Ruido impulsivo", d: "Picos irregulares de corta duración (p. ej. un rayo)." },
      { t: "Auto-MDI/MDIX", d: "Detecta automáticamente si el cable es directo o cruzado." },
      { t: "WDM", d: "Multiplexar varias longitudes de onda en una fibra." },
      { t: "Banda ISM", d: "Frecuencias de uso libre sin licencia." },
      { t: "PoE", d: "Alimentación eléctrica a través del cable Ethernet." }
    ],
    relacionar: [
      { a: "Característica mecánica", b: "Forma del conector" },
      { a: "Característica eléctrica", b: "Niveles de tensión" },
      { a: "Característica funcional", b: "Función de cada pin" },
      { a: "Amplificador", b: "Señal analógica" },
      { a: "Repetidor", b: "Señal digital" },
      { a: "Ecualizador", b: "Distorsión de retardo" },
      { a: "UTP", b: "Sin apantallar" },
      { a: "Cat 6a", b: "10G a 500 MHz / 100 m" },
      { a: "Cat 7", b: "600 MHz / GG-45" },
      { a: "Fibra OS", b: "Monomodo" },
      { a: "Fibra OM", b: "Multimodo" },
      { a: "Conector ST", b: "Inserción con giro" },
      { a: "Conector LC", b: "Formato pequeño" },
      { a: "APC", b: "Férula en ángulo 8°" },
      { a: "GEO", b: "35.786 km" },
      { a: "MEO", b: "GPS" },
      { a: "802.11", b: "Wi-Fi" },
      { a: "802.15", b: "Bluetooth" },
      { a: "802.16", b: "WiMAX" },
      { a: "FD", b: "Distribuidor de planta" },
      { a: "TO", b: "Roseta del puesto" },
      { a: "1U", b: "44,45 mm" }
    ],
    vf: [
      { s: "El cable de par trenzado típico tiene 4 pares.", v: true, e: "8 hilos en total." },
      { s: "La fibra monomodo es más barata que la multimodo.", v: false, e: "La multimodo es más barata y fácil de instalar." },
      { s: "El coaxial de banda base tiene 50 Ω.", v: true, e: "El de banda ancha, 75 Ω." },
      { s: "Bluetooth opera en la banda ISM de 2.4 GHz.", v: true, e: "Estandarizado por el IEEE (802.15)." },
      { s: "El cableado horizontal de un SCE puede tener 150 m.", v: false, e: "No debe superar los 90 m (100 m con el área de trabajo)." },
      { s: "El conector RJ-45 también se llama 8P8C.", v: true, e: "8 posiciones y 8 contactos." },
      { s: "Los canales 1, 6 y 11 de 2.4 GHz no se solapan.", v: true, e: "Por eso son los recomendados." },
      { s: "Un hub trabaja en la capa 2.", v: false, e: "Trabaja en la capa 1 (física)." }
    ]
  });

  // ===================== TEMA 4 =====================
  add("tema04", {
    flashcards: [
      { t: "Subcapa LLC", d: "802.2; interfaz con la capa de red." },
      { t: "Subcapa MAC", d: "802.3; control de acceso al medio." },
      { t: "Dominio de colisión", d: "Equipos cuyas tramas pueden colisionar (1 por puerto del switch)." },
      { t: "Dominio de difusión", d: "Alcance del broadcast; lo delimita el router." },
      { t: "Modo promiscuo", d: "El adaptador acepta todas las tramas." },
      { t: "BPDU", d: "Tramas que intercambian los switches en STP." }
    ],
    relacionar: [
      { a: "Framing", b: "Delimitar la trama" },
      { a: "Conteo de caracteres", b: "Campo con nº de caracteres" },
      { a: "Carácter stuffing", b: "DLE-STX / DLE-ETX" },
      { a: "Bit stuffing", b: "0 tras cinco 1" },
      { a: "OUI", b: "24 bits del fabricante" },
      { a: "Paridad", b: "Falla con nº par de errores" },
      { a: "CRC", b: "Polinomio generador" },
      { a: "ALOHA", b: "Espera aleatoria tras colisión" },
      { a: "CSMA/CD", b: "Ethernet cableado" },
      { a: "CSMA/CA", b: "Wi-Fi (RTS/CTS)" },
      { a: "Parada y espera", b: "Una trama y ACK" },
      { a: "Piggybacking", b: "ACK + datos juntos" },
      { a: "Flooding", b: "Enviar por todos los puertos" },
      { a: "STP", b: "Evitar bucles de capa 2" },
      { a: "DIX", b: "Digital, Intel, Xerox" },
      { a: "0x0800", b: "IPv4" },
      { a: "0x86DD", b: "IPv6" },
      { a: "0x0806", b: "ARP" },
      { a: "FCS", b: "CRC-32" },
      { a: "100BaseT", b: "Fast Ethernet" }
    ],
    vf: [
      { s: "La PDU de la capa de enlace es la trama.", v: true, e: "Capa 2." },
      { s: "El bit stuffing inserta un 1 tras cinco 0.", v: false, e: "Inserta un 0 tras cinco 1 consecutivos." },
      { s: "Los switches crean un dominio de colisión por puerto.", v: true, e: "Reducen casi del todo las colisiones." },
      { s: "Los routers propagan el broadcast.", v: false, e: "No lo propagan; delimitan el dominio de difusión." },
      { s: "El switch raíz de STP es el de menor BID.", v: true, e: "BID = prioridad + MAC." },
      { s: "La trama Ethernet mínima es de 64 bytes.", v: true, e: "Máxima 1518 bytes." },
      { s: "El control de acceso al medio es necesario en enlaces punto a punto.", v: false, e: "Solo en redes multipunto (medio compartido)." },
      { s: "El piggybacking requiere un enlace full-duplex.", v: true, e: "Combina ACK y datos en la misma trama." }
    ]
  });

  // ===================== TEMA 5 =====================
  add("tema05", {
    flashcards: [
      { t: "APIPA", d: "169.254.0.0/16; autoconfiguración si falla DHCP." },
      { t: "CIDR", d: "Notación /n para indicar los bits de red." },
      { t: "Longest match", d: "Se elige la ruta con el prefijo más específico." },
      { t: "SLAAC", d: "Autoconfiguración de dirección IPv6 sin DHCP." },
      { t: "Trunk 802.1Q", d: "Puerto que transporta varias VLANs." },
      { t: "TTL / Hop Limit", d: "Limita los saltos para evitar bucles." }
    ],
    relacionar: [
      { a: "Clase A", b: "1–126 (/8)" },
      { a: "Clase B", b: "128–191 (/16)" },
      { a: "Clase C", b: "192–223 (/24)" },
      { a: "Clase D", b: "224–239 (multicast)" },
      { a: "10.0.0.0/8", b: "Privada clase A" },
      { a: "172.16.0.0/12", b: "Privada clase B" },
      { a: "192.168.0.0/16", b: "Privada clase C" },
      { a: "127.0.0.1", b: "Loopback IPv4" },
      { a: "169.254.0.0/16", b: "APIPA" },
      { a: "Hosts utilizables", b: "2^n − 2" },
      { a: "DHCP", b: "Asigna IP (DORA)" },
      { a: "ARP", b: "IP → MAC" },
      { a: "DNS", b: "Nombre → IP" },
      { a: "ICMP", b: "ping / traceroute" },
      { a: "NAT", b: "Comparte IP pública" },
      { a: "RIP", b: "Vector distancia" },
      { a: "OSPF", b: "Estado de enlace" },
      { a: "BGP", b: "Sistemas autónomos" },
      { a: "VLAN", b: "802.1Q" },
      { a: "::1", b: "Loopback IPv6" },
      { a: "FE80::/10", b: "Link-local IPv6" },
      { a: "FF00::/8", b: "Multicast IPv6" }
    ],
    vf: [
      { s: "IPv4 usa 32 bits y IPv6 usa 128 bits.", v: true, e: "IPv6 surge por el agotamiento de IPv4." },
      { s: "La dirección de red tiene todos los bits de host a 1.", v: false, e: "A 0; a 1 es el broadcast." },
      { s: "/30 deja 2 hosts utilizables.", v: true, e: "Ideal para enlaces punto a punto." },
      { s: "OSPF es un protocolo de vector distancia.", v: false, e: "Es de estado de enlace; RIP es de vector distancia." },
      { s: "Un puerto trunk transporta varias VLANs entre switches.", v: true, e: "Usa etiquetado 802.1Q." },
      { s: "IPv6 sigue usando broadcast.", v: false, e: "Lo elimina; usa multicast." },
      { s: "El proceso DHCP se llama DORA.", v: true, e: "Discover, Offer, Request, Acknowledge." },
      { s: "El TTL se incrementa en cada router.", v: false, e: "Se decrementa; al llegar a 0 se descarta el paquete." }
    ]
  });

  // ===================== TEMA 6 =====================
  add("tema06", {
    flashcards: [
      { t: "Demux por puerto", d: "El receptor entrega cada segmento a su aplicación según el puerto." },
      { t: "Checksum TCP", d: "Usa pseudo-cabecera con las IP origen/destino." },
      { t: "HLEN mínimo", d: "5 → cabecera de 20 bytes (sin datos)." },
      { t: "Head-of-line blocking", d: "Problema de TCP que QUIC evita." },
      { t: "HTTP/3", d: "Se apoya en QUIC (sobre UDP)." }
    ],
    relacionar: [
      { a: "Capa de transporte", b: "Conecta aplicaciones" },
      { a: "Puerto", b: "Identifica una aplicación" },
      { a: "Multiplexación", b: "Etiquetar con puerto (emisor)" },
      { a: "Demultiplexación", b: "Entregar por puerto (receptor)" },
      { a: "0–1023", b: "Bien conocidos" },
      { a: "1024–49151", b: "Registrados" },
      { a: "49152–65535", b: "Dinámicos" },
      { a: "HTTP", b: "80" },
      { a: "HTTPS", b: "443" },
      { a: "DNS", b: "53" },
      { a: "SSH", b: "22" },
      { a: "TCP", b: "Fiable / conexión" },
      { a: "UDP", b: "Rápido / sin conexión" },
      { a: "SYN", b: "Inicio de conexión" },
      { a: "FIN", b: "Cierre ordenado" },
      { a: "RST", b: "Cierre abrupto" },
      { a: "ACK", b: "Confirmación" },
      { a: "Three-Way Handshake", b: "SYN/SYN+ACK/ACK" },
      { a: "NAT", b: "Tabla IP/puerto" },
      { a: "QUIC", b: "UDP + TLS (HTTP/3)" }
    ],
    vf: [
      { s: "El puerto identifica la aplicación dentro de un host.", v: true, e: "0 a 65535." },
      { s: "TCP es más rápido que UDP.", v: false, e: "UDP es más rápido; TCP es más lento por sus controles." },
      { s: "HTTPS usa el puerto 443 y HTTP el 80.", v: true, e: "Puertos bien conocidos." },
      { s: "El handshake TCP tiene 2 pasos.", v: false, e: "Tiene 3: SYN, SYN+ACK, ACK." },
      { s: "QUIC se construye sobre UDP.", v: true, e: "Y es la base de HTTP/3." },
      { s: "NAT se implementa normalmente en el router.", v: true, e: "Guarda una tabla de traducción." },
      { s: "UDP garantiza el orden de entrega.", v: false, e: "No garantiza orden ni entrega." }
    ]
  });
})();
