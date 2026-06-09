// Tema 4 - Capa de enlace
window.TEMAS = window.TEMAS || {};
window.TEMAS["tema04"] = {
  titulo: "Tema 4 · Capa de enlace",
  preguntas: [
    {
      q: "¿Qué número de capa ocupa la capa de enlace de datos en el modelo OSI?",
      o: ["La primera", "La segunda", "La tercera", "La cuarta"],
      a: 1,
      e: "La capa de enlace de datos es la segunda capa del modelo de referencia OSI."
    },
    {
      q: "¿Cómo se denomina la PDU de la capa de enlace de datos?",
      o: ["Paquete", "Segmento", "Trama", "Datagrama"],
      a: 2,
      e: "La PDU de la capa de enlace de datos se llama trama."
    },
    {
      q: "Los dispositivos direccionables a nivel de la capa de red, que tienen asociada una dirección de red, se denominan:",
      o: ["Dispositivos de acceso al medio", "Nodos", "Enlaces", "Tramas"],
      a: 1,
      e: "Los nodos son dispositivos direccionables a nivel de capa de red; los de acceso al medio operan solo en capas de enlace y/o física."
    },
    {
      q: "Un enlace en el que el canal es exclusivo para dos únicos nodos es un enlace:",
      o: ["De difusión", "Punto a punto", "Multiacceso", "Compartido"],
      a: 1,
      e: "Un enlace punto a punto es aquel en el que el canal es exclusivo para dos únicos nodos; los de difusión pueden ser compartidos por más de dos."
    },
    {
      q: "¿Cuál es el objetivo principal de la capa de enlace?",
      o: [
        "Encaminar paquetes entre redes diferentes",
        "Asegurar una línea de comunicación libre de errores entre dos ordenadores del mismo enlace local",
        "Cifrar los datos de aplicación",
        "Asignar direcciones IP"
      ],
      a: 1,
      e: "La capa de enlace asegura una línea de comunicación libre de errores entre dos equipos del mismo enlace local, solventando deficiencias de la capa física."
    },
    {
      q: "¿Cuál de los siguientes NO es un servicio de la capa de enlace?",
      o: ["Entramado (framing)", "Control de flujo", "Encaminamiento entre redes", "Direccionamiento físico"],
      a: 2,
      e: "El encaminamiento entre redes es función de la capa de red (3). La capa de enlace ofrece entramado, acceso al medio, sincronismo, direccionamiento físico, control de flujo, detección de errores y multiplexación de protocolos."
    },
    {
      q: "El entramado o framing consiste en:",
      o: [
        "Asignar direcciones IP a las tramas",
        "Marcar (encapsular) el principio y el final de un bloque de datos formando tramas",
        "Cifrar las tramas",
        "Calcular la ruta óptima"
      ],
      a: 1,
      e: "El entramado marca el principio y el final de un bloque de datos formando tramas, ya que el nivel físico solo transmite bits sin interpretarlos."
    },
    {
      q: "¿En qué se implementa principalmente la capa de enlace?",
      o: [
        "En el router de borde",
        "En la tarjeta de interfaz de red (NIC), su firmware y el driver",
        "Exclusivamente en el kernel del sistema operativo",
        "En el cableado físico"
      ],
      a: 1,
      e: "La capa de enlace se implementa principalmente en la tarjeta de interfaz de red (NIC), su firmware interno y el driver del sistema operativo."
    },
    {
      q: "En el adaptador de red, ¿qué elemento convierte las señales en bits y los bits en señales?",
      o: ["El chip controlador", "El transceptor", "La memoria buffer", "La ROM/Flash BIOS"],
      a: 1,
      e: "El transceptor es el elemento encargado de convertir las señales en bits y los bits en señales."
    },
    {
      q: "La técnica de delimitación de tramas que pone un campo en el encabezado indicando cuántos caracteres ocupa la trama es:",
      o: ["Conteo de caracteres", "Carácter stuffing", "Bit stuffing", "Bandera de bits"],
      a: 0,
      e: "El conteo de caracteres pone un campo en la cabecera con el número de caracteres; es una técnica débil porque un error en el contador estropea las siguientes tramas."
    },
    {
      q: "En la técnica de carácter stuffing, ¿qué significa la secuencia DLE-STX?",
      o: ["Fin de trama", "Inicio de trama", "Un dato accidental", "Un error de transmisión"],
      a: 1,
      e: "En carácter stuffing, DLE-STX significa inicio de trama y DLE-ETX significa fin de trama."
    },
    {
      q: "En carácter stuffing, si en mitad de los datos aparece un carácter DLE accidental, ¿qué se hace?",
      o: [
        "Se elimina",
        "Se señaliza con otro DLE (los DLE accidentales siempre se doblan)",
        "Se interpreta como fin de trama",
        "Se ignora por completo"
      ],
      a: 1,
      e: "Si en los datos aparece un DLE accidental, se señaliza con otro DLE: los DLE accidentales siempre se doblan."
    },
    {
      q: "¿Cuál es la bandera de bits que delimita una trama en los protocolos orientados a bit?",
      o: ["11111111", "01111110", "10101010", "00000000"],
      a: 1,
      e: "En los protocolos orientados a bit cada trama empieza y termina con la secuencia 01111110, llamada bandera de bits."
    },
    {
      q: "En bit stuffing, ¿cuándo se introduce un bit 0 de relleno?",
      o: [
        "Cada vez que aparecen 5 unos consecutivos (y no es el final de trama)",
        "Cada vez que aparecen 6 ceros consecutivos",
        "Al inicio de cada byte",
        "Solo al final de la trama"
      ],
      a: 0,
      e: "Se introduce un bit 0 de relleno cada vez que aparecen 5 unos consecutivos y no sea el final de la trama, evitando confundirlo con la bandera."
    },
    {
      q: "¿Cuál es la ventaja del bit stuffing frente al carácter stuffing?",
      o: [
        "No necesita ninguna delimitación",
        "Inserta un bit de relleno donde antes insertaba un byte completo",
        "Elimina por completo los errores",
        "No requiere bandera"
      ],
      a: 1,
      e: "La ventaja del bit stuffing es que inserta un bit de relleno donde el carácter stuffing insertaba un byte (carácter) completo."
    },
    {
      q: "¿Cuántos bits tiene una dirección MAC?",
      o: ["32 bits", "48 bits", "64 bits", "128 bits"],
      a: 1,
      e: "Las redes Ethernet y 802.11 utilizan direccionamiento MAC de 48 bits."
    },
    {
      q: "En una dirección MAC, ¿qué identifican los 24 primeros bits?",
      o: [
        "El número de serie del adaptador",
        "El Identificador Único de la Organización (OUI), que identifica al fabricante",
        "La dirección de broadcast",
        "El protocolo de capa superior"
      ],
      a: 1,
      e: "Los 24 primeros bits son el OUI (Organizationally Unique Identifier) que identifica al fabricante; los últimos 24 los asigna el fabricante."
    },
    {
      q: "¿Qué entidad controla que las direcciones MAC de fábrica no se repitan?",
      o: ["La IANA", "El IEEE", "El IETF", "La ICANN"],
      a: 1,
      e: "El IEEE es la entidad encargada de controlar que las direcciones MAC de fábrica no se repitan (asignando los OUI)."
    },
    {
      q: "Cuando un adaptador de red acepta todas las tramas que recibe, vayan o no destinadas a él, está en modo:",
      o: ["Promiscuo", "Half-duplex", "Multicast", "Unicast"],
      a: 0,
      e: "El modo promiscuo hace que el adaptador acepte todas las tramas, útil para analizar todo el tráfico de un punto de la red."
    },
    {
      q: "¿Cuál es la dirección MAC de broadcast o difusión?",
      o: ["00:00:00:00:00:00", "FF:FF:FF:FF:FF:FF", "01:00:5E:00:00:00", "FE:80:00:00:00:00"],
      a: 1,
      e: "La dirección de difusión (broadcast) en Ethernet tiene todos los bits a 1: FF:FF:FF:FF:FF:FF, y la reciben todas las NIC de la red."
    },
    {
      q: "Una dirección MAC es de multicast cuando:",
      o: [
        "Todos sus bits son 1",
        "El bit menos significativo del primer octeto está a 1",
        "El segundo bit del primer byte está a 1",
        "Todos sus bits son 0"
      ],
      a: 1,
      e: "Las MAC multicast son las que tienen el bit menos significativo del primer octeto a 1 (bit I/G = 1)."
    },
    {
      q: "Las direcciones MAC localmente administradas (arbitrarias) tienen reservado:",
      o: [
        "El bit menos significativo del primer octeto a 1",
        "El segundo bit del primer byte a 1",
        "Todos los bits a 1",
        "Los primeros 24 bits a 0"
      ],
      a: 1,
      e: "Las MAC localmente administradas tienen el segundo bit del primer byte a 1, reservadas para uso local."
    },
    {
      q: "Un error de ráfaga se produce cuando:",
      o: [
        "Solo un bit cambia de 1 a 0 o viceversa",
        "Dos o más bits de la unidad de datos han cambiado",
        "No hay ningún error",
        "Se pierde la trama completa"
      ],
      a: 1,
      e: "El error de ráfaga es cuando dos o más bits cambian (habitualmente seguidos, pero no necesariamente). El error de bit afecta a un solo bit."
    },
    {
      q: "En la verificación de paridad par, se añade un bit de paridad de forma que el número total de unos sea:",
      o: ["Impar", "Par", "Cero", "Múltiplo de 8"],
      a: 1,
      e: "En la paridad par se añade un bit de paridad para que el número total de unos (incluyendo el bit de paridad) sea par."
    },
    {
      q: "Si los datos a enviar son 1100001 (3 unos) con paridad impar, ¿qué bit de paridad se añade?",
      o: ["1, quedando 11000011", "0, quedando 11000010", "1, para que sean 4 unos", "No se añade ninguno"],
      a: 1,
      e: "Con paridad impar el total de unos debe ser impar; como ya hay 3 unos (impar), se añade un 0: 1100001 0."
    },
    {
      q: "¿Qué método de detección de errores es el más utilizado para errores complejos en varios dígitos?",
      o: ["Paridad", "Códigos de redundancia cíclica (CRC)", "Conteo de caracteres", "Bit stuffing"],
      a: 1,
      e: "Los CRC (Códigos de Redundancia Cíclica) son los más utilizados para detectar errores en varios dígitos; incluyen dígitos redundantes al final."
    },
    {
      q: "¿Qué polinomio generador usa el CRC-32 de Ethernet en su grado más alto?",
      o: ["X12", "X16", "X32", "X8"],
      a: 2,
      e: "El CRC-32 de Ethernet tiene como término de mayor grado X32 (polinomio X32+X26+X23+...+X+1)."
    },
    {
      q: "En la recepción con CRC, ¿qué indica que no ha habido ningún error?",
      o: [
        "Que el resto de la división por el polinomio es todo ceros",
        "Que el resto no es todo ceros",
        "Que la palabra es más corta",
        "Que el polinomio cambia"
      ],
      a: 0,
      e: "El receptor divide la palabra codificada entre el polinomio generador; si el resto es todo ceros, no hay error."
    },
    {
      q: "En el método de checksum, ¿qué se hace con el resultado de sumar los segmentos antes de añadirlo?",
      o: [
        "Se cifra",
        "Se complementa (se invierten unos por ceros y ceros por unos)",
        "Se duplica",
        "Se descarta"
      ],
      a: 1,
      e: "En el checksum se suman los segmentos y el resultado se complementa (se invierten los bits) y se añade al final de la unidad de datos."
    },
    {
      q: "¿Qué se produce cuando dos transmisiones coinciden en un medio y sus señales se mezclan?",
      o: ["Una multiplexación", "Una colisión", "Un encaminamiento", "Una encapsulación"],
      a: 1,
      e: "Cuando dos transmisiones coinciden en un medio, las señales se mezclan y se produce una colisión, perdiéndose la información."
    },
    {
      q: "Respecto a las colisiones, ¿qué dispositivos las propagan?",
      o: [
        "Los conmutadores y routers",
        "Los hubs y los repetidores",
        "Los puentes",
        "Ninguno las propaga"
      ],
      a: 1,
      e: "Los hubs y los repetidores propagan las colisiones; los conmutadores, puentes y routers no las propagan."
    },
    {
      q: "¿Qué dispositivos NO propagan las tramas de difusión (broadcast)?",
      o: ["Los hubs", "Los switches", "Los routers", "Los repetidores"],
      a: 2,
      e: "Los repetidores, hubs, puentes y switches propagan las tramas de difusión; solo los routers NO las propagan."
    },
    {
      q: "El control de acceso al medio (MAC) solo es necesario en redes:",
      o: ["Punto a punto", "Multipunto", "De fibra óptica", "Cifradas"],
      a: 1,
      e: "El control de acceso al medio SOLO es necesario en las redes MULTIPUNTO (medio compartido)."
    },
    {
      q: "El método de acceso al medio en el que una trama especial pequeña va siendo intercambiada entre los nodos en un orden preestablecido es:",
      o: ["ALOHA", "Paso de testigo (token)", "CSMA/CD", "Mapa de bits"],
      a: 1,
      e: "En el paso de testigo (token) una trama especial pequeña va circulando entre los nodos; solo quien tiene el testigo puede transmitir. Usado en topología de anillo."
    },
    {
      q: "En el método ALOHA, cuando se detecta una colisión, los emisores:",
      o: [
        "Retransmiten inmediatamente",
        "Esperan un tiempo aleatorio y emiten de nuevo",
        "Dejan de transmitir para siempre",
        "Solicitan un testigo"
      ],
      a: 1,
      e: "En ALOHA, detectada la colisión se desechan las tramas y los emisores esperan un tiempo aleatorio antes de emitir de nuevo, para evitar otra colisión."
    },
    {
      q: "¿Qué mejora aporta CSMA/CD respecto a ALOHA?",
      o: [
        "Permite escuchar el canal antes de emitir para saber si está ocupado",
        "Elimina por completo las colisiones",
        "Usa un testigo",
        "No necesita detectar colisiones"
      ],
      a: 0,
      e: "CSMA/CD añade circuitería para escuchar el canal antes de emitir (Carrier Sense), evitando muchas colisiones, aunque no todas."
    },
    {
      q: "En CSMA/CD, el tiempo de espera tras una colisión se determina mediante:",
      o: ["Round Robin", "Binary Exponential Backoff", "Token passing", "Piggybacking"],
      a: 1,
      e: "Tras una colisión, CSMA/CD usa Binary Exponential Backoff: cada estación espera un tiempo aleatorio entre 0 y 2^k − 1 múltiplos del slot time."
    },
    {
      q: "En CSMA persistencia 1, cuando el canal está ocupado la estación:",
      o: [
        "Espera un tiempo aleatorio",
        "Sigue testeándolo hasta que se desocupa y transmite con probabilidad del 100%",
        "Abandona la transmisión",
        "Transmite igualmente provocando colisión"
      ],
      a: 1,
      e: "CSMA persistencia 1: la estación testea el canal hasta que se desocupa y entonces transmite con probabilidad del 100%."
    },
    {
      q: "¿Qué protocolo de acceso al medio utilizan las redes inalámbricas 802.11?",
      o: ["CSMA/CD", "CSMA/CA", "Token Ring", "ALOHA puro"],
      a: 1,
      e: "Las redes inalámbricas 802.11 usan CSMA/CA (Collision Avoidance), que evita muchas colisiones (aunque no todas, por el problema de nodos ocultos)."
    },
    {
      q: "En CSMA/CA, ¿qué trama envía la estación de destino para autorizar la transmisión?",
      o: ["RTS (Request To Send)", "CTS (Clear To Send)", "ACK", "BPDU"],
      a: 1,
      e: "La estación origen envía RTS (Request To Send) y el destino responde con CTS (Clear To Send) si está en condiciones de recibir."
    },
    {
      q: "El método de control de flujo en el que el emisor espera la confirmación (ACK) tras cada trama antes de continuar es:",
      o: ["Ventana deslizante", "Parada y espera", "Piggybacking", "Backoff"],
      a: 1,
      e: "En parada y espera, el emisor envía una trama y espera la confirmación (ACK) del destino antes de seguir enviando."
    },
    {
      q: "El piggybacking consiste en:",
      o: [
        "Enviar el ACK inmediatamente y por separado",
        "Combinar en una única trama un acuse (ACK) y una trama de datos",
        "Enviar varias tramas sin ACK",
        "Descartar los acuses"
      ],
      a: 1,
      e: "El piggybacking combina en una única trama un acuse y una trama de datos; requiere que la línea sea full-dúplex y mejora el uso del ancho de banda."
    },
    {
      q: "El método de ventana deslizante permite:",
      o: [
        "Enviar solo una trama y esperar",
        "Ocupar el enlace con varias tramas 'en ruta' y emitir hasta N paquetes sin recibir ACK",
        "Eliminar los ACK",
        "Transmitir solo en half-duplex"
      ],
      a: 1,
      e: "La ventana deslizante permite tener varias tramas en ruta; el emisor puede enviar hasta N paquetes (tamaño de ventana) sin haber recibido los ACK."
    },
    {
      q: "¿Qué almacena la tabla de direccionamiento MAC de un switch?",
      o: [
        "Las direcciones IP de los hosts",
        "La asociación entre direcciones MAC y el número de puerto al que están conectados",
        "Las rutas hacia otras redes",
        "Las contraseñas de los dispositivos"
      ],
      a: 1,
      e: "La tabla de direccionamiento MAC asocia las direcciones MAC de los dispositivos con el número de puerto al que están conectados."
    },
    {
      q: "¿Qué hace un switch cuando la MAC destino no está en su tabla?",
      o: [
        "Descarta la trama",
        "Realiza flooding: envía la trama por todos los puertos activos excepto por el que la recibió",
        "La devuelve al origen",
        "La cifra"
      ],
      a: 1,
      e: "Si la MAC destino no está en la tabla, el switch hace flooding: envía la trama por todos los puertos activos (de la misma VLAN) excepto por el de entrada."
    },
    {
      q: "¿Qué ocurre cuando la tabla MAC del switch se llena?",
      o: [
        "El switch se apaga",
        "Se eliminan las entradas más antiguas para dejar espacio",
        "Deja de aprender direcciones para siempre",
        "Borra toda la tabla"
      ],
      a: 1,
      e: "Si la tabla se llena, se van eliminando las entradas más antiguas para dejar espacio a los nuevos valores. Además, las entradas tienen un timeout."
    },
    {
      q: "¿Qué tipo de switch alimenta dispositivos por Ethernet (cámaras IP, APs, teléfonos VoIP)?",
      o: ["Switch apilable", "Switch modular", "Switch PoE", "Switch compacto"],
      a: 2,
      e: "El switch PoE (Power over Ethernet) alimenta dispositivos por Ethernet usando estándares como 802.3af, 802.3at y 802.3bt."
    },
    {
      q: "¿En qué capa opera un puente (bridge) y qué función tiene?",
      o: [
        "Capa 3, encamina paquetes",
        "Capa 2, conecta segmentos de red formando una sola subred",
        "Capa 1, repite la señal",
        "Capa 4, controla el flujo"
      ],
      a: 1,
      e: "El puente opera en la capa 2 del OSI y conecta segmentos de red formando una sola subred, con autoaprendizaje y capacidad de filtrado."
    },
    {
      q: "¿Cuál es la función del protocolo Spanning Tree (STP)?",
      o: [
        "Asignar direcciones IP",
        "Gestionar la presencia de bucles en topologías con enlaces redundantes",
        "Cifrar las tramas",
        "Acelerar la conmutación"
      ],
      a: 1,
      e: "STP (protocolo de nivel 2) gestiona la presencia de bucles (que pueden causar tormentas broadcast) en topologías con enlaces redundantes."
    },
    {
      q: "¿Qué tramas especiales intercambian los switches en STP?",
      o: ["ACK", "BPDU (Bridge Protocol Data Unit)", "RTS/CTS", "Tokens"],
      a: 1,
      e: "Los switches intercambian tramas multicast especiales llamadas BPDU (Bridge Protocol Data Unit) para converger a una red sin bucles."
    },
    {
      q: "En STP, ¿qué switch será el SWITCH RAÍZ?",
      o: [
        "El que tenga el BID más alto",
        "El que tenga el BID (Bridge ID) más bajo",
        "El primero que se encienda",
        "El que tenga más puertos"
      ],
      a: 1,
      e: "El switch raíz será el que tenga el BRIDGE_ID (BID) más bajo. El BID se compone de la prioridad (por defecto 32768) y la MAC."
    },
    {
      q: "En STP, el PUERTO RAÍZ de un switch no raíz es:",
      o: [
        "El puerto con la ruta de mayor costo hasta el switch raíz",
        "El puerto con la ruta de menor costo hasta el switch raíz",
        "Cualquier puerto bloqueado",
        "El puerto con mayor BID"
      ],
      a: 1,
      e: "El puerto raíz es el puerto del switch no raíz con la ruta de menor COSTO hasta el switch raíz (el costo se relaciona con el ancho de banda)."
    },
    {
      q: "En STP, ¿qué ocurre con los puertos que no son elegidos ni RAÍZ ni DESIGNADOS?",
      o: [
        "Se eliminan físicamente",
        "Se bloquean (no participan en el tráfico de datos pero sí reciben BPDUs)",
        "Transmiten a doble velocidad",
        "Se convierten en puertos raíz"
      ],
      a: 1,
      e: "Los puertos no designados se bloquean para evitar bucles; no participan en el tráfico de datos pero reciben BPDUs y pueden reactivarse si cambia la topología."
    },
    {
      q: "¿Qué consorcio publicó el primer estándar de Ethernet?",
      o: [
        "DIX (Digital Equipment Corporation, Intel y Xerox)",
        "IBM y Microsoft",
        "Cisco y Juniper",
        "ISO e IETF"
      ],
      a: 0,
      e: "El primer estándar de Ethernet lo publicó el consorcio DIX (Digital Equipment Corporation, Intel y Xerox) a principios de los años 80."
    },
    {
      q: "Ethernet divide el nivel de enlace en dos subcapas. ¿Cuáles?",
      o: [
        "MAC (802.3) y LLC (802.2)",
        "Física y de red",
        "TCP y UDP",
        "Sesión y presentación"
      ],
      a: 0,
      e: "Ethernet divide el enlace en la subcapa LLC (Control de enlace lógico, IEEE 802.2) y la subcapa MAC (Control de acceso al medio, IEEE 802.3)."
    },
    {
      q: "¿Qué estándar IEEE corresponde a las redes inalámbricas Wi-Fi?",
      o: ["IEEE 802.3", "IEEE 802.5", "IEEE 802.11", "IEEE 802.15"],
      a: 2,
      e: "IEEE 802.11 corresponde a redes inalámbricas (Wi-Fi); 802.3 es Ethernet, 802.5 Token Ring y 802.15 Bluetooth."
    },
    {
      q: "¿Cuáles son los tamaños mínimo y máximo de una trama Ethernet?",
      o: [
        "Mínimo 46 bytes, máximo 1500 bytes",
        "Mínimo 64 bytes, máximo 1518 bytes",
        "Mínimo 8 bytes, máximo 1024 bytes",
        "Mínimo 12 bytes, máximo 1460 bytes"
      ],
      a: 1,
      e: "Tanto Ethernet II (DIX) como IEEE 802.3 definen el tamaño mínimo de trama en 64 bytes y el máximo en 1518 bytes (sin contar preámbulo ni SFD)."
    },
    {
      q: "En la trama Ethernet II, el campo 'Tipo' con valor 0x0800 indica que se encapsula:",
      o: ["IPv6", "ARP", "IPv4", "TCP"],
      a: 2,
      e: "El campo Tipo indica el protocolo encapsulado: 0x0800 = IPv4, 0x86DD = IPv6, 0x0806 = ARP."
    },
    {
      q: "El campo FCS de la trama Ethernet contiene:",
      o: [
        "La dirección de destino",
        "Un CRC32 calculado por el emisor para verificación de integridad",
        "El tipo de protocolo",
        "El preámbulo"
      ],
      a: 1,
      e: "El FCS (Frame Check Sequence) es un CRC32 calculado por el emisor para la verificación de integridad de la trama."
    },
    {
      q: "En la nomenclatura Ethernet 'X Base Z', ¿qué indica la 'X'?",
      o: [
        "El medio utilizado",
        "El método de modulación",
        "La velocidad de transmisión en Mbps",
        "El número de pares"
      ],
      a: 2,
      e: "En 'X Base Z', la X indica la velocidad en Mbps (10, 100, 1000, 10G), Base el método de modulación (banda base) y Z el medio (T, F, etc.)."
    },
    {
      q: "En la nomenclatura Ethernet, ¿qué medio indica la letra 'T'?",
      o: ["Fibra óptica", "Par trenzado (Twisted pairs)", "Coaxial grueso", "Coaxial fino"],
      a: 1,
      e: "En 'X Base Z', T = par trenzado (Twisted pairs), F = fibra óptica, 5 = coaxial grueso, 2 = coaxial fino."
    },
    {
      q: "El estándar 10Base2 (Thin Ethernet) utiliza:",
      o: [
        "Coaxial grueso, 500 m",
        "Coaxial fino, 185 m, conector BNC",
        "Par trenzado, 100 m",
        "Fibra óptica, 2 km"
      ],
      a: 1,
      e: "10Base2 (Thin Ethernet) usa coaxial fino, alcanza 185 m con topología en bus y conector BNC."
    },
    {
      q: "El estándar 1000BaseT (Gigabit Ethernet sobre cobre) emplea:",
      o: [
        "UTP Cat 5e-6, 100 m, estrella full duplex",
        "Fibra monomodo, 5 km",
        "Coaxial grueso, 500 m",
        "Fibra multimodo, 550 m"
      ],
      a: 0,
      e: "1000BaseT usa UTP Cat 5e-6 (4 pares), alcance 100 m, topología en estrella full duplex con switch."
    },
    {
      q: "Las redes 802.11 (Wi-Fi), ¿qué utilizan para confirmar que una trama se recibió correctamente?",
      o: [
        "Bit stuffing",
        "Acuses de recibo (ACK) de enlace de datos",
        "Solo el preámbulo",
        "El campo FCS exclusivamente"
      ],
      a: 1,
      e: "Las redes 802.11 usan acuses de recibo de enlace de datos; si no se detecta el ACK, se retransmite la trama (superando interferencias de radio)."
    },
    {
      q: "El proceso del switch al recibir una trama incluye aprender la MAC origen. ¿Qué hace si esa asociación no existe en la tabla?",
      o: [
        "Descarta la trama",
        "La crea y la almacena en memoria",
        "Hace flooding inmediato",
        "Bloquea el puerto"
      ],
      a: 1,
      e: "Si la asociación entre la MAC origen y el puerto de entrada no existe en la tabla, el switch la crea y la almacena en memoria."
    },
    {
      q: "La multiplexación de protocolos en la capa de enlace consiste en:",
      o: [
        "Enviar varias copias de la misma trama",
        "Etiquetar las tramas indicando el protocolo de capa de red que se encapsula",
        "Dividir el medio en frecuencias",
        "Cifrar los datos"
      ],
      a: 1,
      e: "La multiplexación de protocolos etiqueta las tramas indicando el protocolo encapsulado, para que el receptor sepa qué transporta sin analizar los datos."
    },
    {
      q: "Las direcciones MAC tienen significado:",
      o: [
        "Global, en toda Internet",
        "Solo a nivel local (entregas locales en el enlace)",
        "Solo para multicast",
        "Únicamente en redes inalámbricas"
      ],
      a: 1,
      e: "La dirección de capa de enlace solo se utiliza para entregas locales; no tiene significado más allá del enlace local."
    },
    {
      q: "¿Qué tres tablas mantiene un router con EIGRP? (Relación con capa de enlace/red) En el contexto de STP, ¿cada cuánto envían los switches BPDUs tras converger?",
      o: ["Cada 30 segundos", "Cada 2 segundos", "Cada 90 segundos", "Cada 180 segundos"],
      a: 1,
      e: "Tras converger, los switches envían tramas BPDU cada 2 segundos para informar si detectan algún cambio en la topología de la red."
    },
    {
      q: "El método de mapa de bits es un método de acceso al medio:",
      o: [
        "Basado en contención",
        "Controlado (libre de colisiones), con un periodo previo de contención de tantas ranuras como estaciones",
        "Sin ningún control",
        "Exclusivo de redes inalámbricas"
      ],
      a: 1,
      e: "El mapa de bits es un método controlado: hay un periodo previo de contención con tantas ranuras como estaciones numeradas, que anuncian si tienen trama (bit 1)."
    },
    {
      q: "¿Qué define el estándar IEEE 802.1 en Ethernet?",
      o: [
        "La interfaz con los niveles superiores (el nivel de red)",
        "La subcapa LLC",
        "El cableado coaxial",
        "Las redes inalámbricas"
      ],
      a: 0,
      e: "El IEEE 802.1 define la interfaz con los niveles superiores (el nivel de red)."
    },
    {
      q: "Un puente, al traspasar una trama de un segmento a otro, ¿qué hace primero?",
      o: [
        "La cifra",
        "Almacena la trama recibida para su posterior análisis",
        "La descarta siempre",
        "La envía sin comprobar nada"
      ],
      a: 1,
      e: "El puente almacena la trama recibida, comprueba su integridad (si es incorrecta la elimina), reconfigura su formato y la reexpide al segmento destino."
    }
  ]
};
