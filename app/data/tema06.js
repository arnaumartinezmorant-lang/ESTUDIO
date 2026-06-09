// Tema 6 - Capa de transporte
window.TEMAS = window.TEMAS || {};
window.TEMAS["tema06"] = {
  titulo: "Tema 6 · Capa de transporte",
  preguntas: [
    {
      q: "¿De qué se encarga principalmente la capa de transporte?",
      o: [
        "De la transmisión de bits por el medio físico",
        "De la comunicación extremo a extremo entre aplicaciones",
        "Del encaminamiento de paquetes entre redes",
        "De convertir señales en bits"
      ],
      a: 1,
      e: "La capa de transporte se encarga de la comunicación extremo a extremo entre aplicaciones, aportando fiabilidad, control de flujo y multiplexación que la capa de red no ofrece."
    },
    {
      q: "¿Qué número de capa ocupa la capa de transporte en el modelo OSI?",
      o: ["Capa 2", "Capa 3", "Capa 4", "Capa 5"],
      a: 2,
      e: "La capa de transporte es la capa 4 del modelo OSI."
    },
    {
      q: "¿Qué elemento añade la capa de transporte para distinguir entre los diferentes destinos dentro de un mismo host?",
      o: ["La dirección IP", "La dirección MAC", "El puerto", "El número de secuencia"],
      a: 2,
      e: "La capa de transporte añade el puerto para distinguir entre los diferentes destinos (aplicaciones) dentro de un mismo host."
    },
    {
      q: "Completa la frase clave del tema: 'IP conecta máquinas, la capa de transporte conecta...'",
      o: ["cables", "aplicaciones", "routers", "redes"],
      a: 1,
      e: "IP conecta máquinas (host a host); la capa de transporte conecta aplicaciones (extremo a extremo)."
    },
    {
      q: "¿Cuál es la unidad de datos (PDU) de la capa de transporte en TCP?",
      o: ["Trama", "Paquete", "Segmento", "Bit"],
      a: 2,
      e: "La capa de transporte trabaja con segmentos (en TCP) o datagramas (en UDP), que se encapsulan dentro de paquetes IP."
    },
    {
      q: "La capa de red (IP), por diseño...",
      o: [
        "garantiza el orden y la entrega fiable",
        "es no fiable: no garantiza orden, entrega ni fiabilidad",
        "cifra todos los datos",
        "controla la congestión"
      ],
      a: 1,
      e: "IP es no fiable por diseño: no garantiza orden, entrega ni fiabilidad. La capa de transporte añade ese control."
    },
    {
      q: "¿Cuál de los siguientes NO es un problema que pueda resolver la capa de transporte?",
      o: [
        "Detectar errores y reordenar paquetes",
        "Evitar pérdidas de datos y adaptar la velocidad",
        "Gestionar múltiples aplicaciones simultáneamente",
        "Elegir la ruta física que siguen los paquetes"
      ],
      a: 3,
      e: "Elegir la ruta es función de la capa de red. La capa de transporte detecta errores, reordena, evita pérdidas, adapta velocidad y gestiona varias aplicaciones."
    },
    {
      q: "¿Cuáles son las cuatro funcionalidades clave que añade la capa de transporte sobre IP?",
      o: [
        "Multiplexación/demultiplexación, control de errores, control de flujo y control de congestión",
        "Encaminamiento, cifrado, compresión y direccionamiento",
        "Entramado, acceso al medio, sincronismo y CRC",
        "Modulación, atenuación, ecualización y conmutación"
      ],
      a: 0,
      e: "Sobre IP, la capa de transporte añade: multiplexación/demultiplexación, control de errores, control de flujo y control de congestión."
    },
    {
      q: "En la MULTIPLEXACIÓN (en el emisor), ¿qué se hace?",
      o: [
        "Se entregan los segmentos a la aplicación correcta",
        "Se juntan datos de distintas aplicaciones y se etiquetan con un puerto",
        "Se descartan los segmentos erróneos",
        "Se cifran los datos"
      ],
      a: 1,
      e: "La multiplexación (emisor) junta los datos de distintas aplicaciones y los etiqueta con un puerto."
    },
    {
      q: "En la DEMULTIPLEXACIÓN (en el receptor), ¿según qué se entregan los segmentos a la aplicación correcta?",
      o: ["Según la dirección MAC", "Según el puerto", "Según el número de trama", "Según el TTL"],
      a: 1,
      e: "La demultiplexación (receptor) recibe los segmentos y los entrega a la aplicación correcta según el puerto."
    },
    {
      q: "¿Qué tres mecanismos usa el control de errores de la capa de transporte?",
      o: [
        "Checksum, ACK y retransmisión",
        "Bit stuffing, CRC y paridad",
        "SYN, FIN y RST",
        "NAT, PAT y DNS"
      ],
      a: 0,
      e: "El control de errores usa checksum (detectar), ACK (confirmar) y retransmisión (reenviar lo perdido o dañado)."
    },
    {
      q: "¿Cuál es el objetivo del control de flujo?",
      o: [
        "Evitar que el emisor envíe datos más rápido de lo que el receptor puede procesar",
        "Elegir la mejor ruta",
        "Cifrar la comunicación",
        "Asignar direcciones IP"
      ],
      a: 0,
      e: "El control de flujo evita que el emisor sature al receptor: el receptor indica cuánto puede recibir y el emisor adapta su velocidad."
    },
    {
      q: "¿Qué mecanismo se utiliza habitualmente para el control de flujo?",
      o: ["Three-Way Handshake", "Ventana deslizante (sliding window)", "NAT", "Checksum"],
      a: 1,
      e: "El control de flujo se realiza habitualmente con el mecanismo de ventana deslizante (sliding window)."
    },
    {
      q: "¿Qué pretende evitar el control de congestión?",
      o: [
        "Que el receptor se sature",
        "Que se produzcan colapsos en la red global por exceso de tráfico",
        "Que se pierdan las direcciones IP",
        "Que se mezclen los puertos"
      ],
      a: 1,
      e: "El control de congestión evita colapsos en la red global, ajustando dinámicamente la velocidad de envío según las pérdidas y los retrasos."
    },
    {
      q: "¿Qué rango de valores puede tomar un número de puerto?",
      o: ["0 a 255", "0 a 1023", "0 a 65535", "1 a 49151"],
      a: 2,
      e: "Un puerto es un número de 0 a 65535 que identifica una aplicación o servicio dentro de un sistema."
    },
    {
      q: "Los puertos bien conocidos (well-known) ocupan el rango:",
      o: ["0 – 1023", "1024 – 49151", "49152 – 65535", "0 – 255"],
      a: 0,
      e: "Los puertos bien conocidos (0–1023) están reservados para servicios estándar de Internet."
    },
    {
      q: "Los puertos registrados ocupan el rango:",
      o: ["0 – 1023", "1024 – 49151", "49152 – 65535", "256 – 1024"],
      a: 1,
      e: "Los puertos registrados (1024–49151) se asignan a aplicaciones concretas, pero no son obligatorios."
    },
    {
      q: "Los puertos efímeros o dinámicos ocupan el rango:",
      o: ["0 – 1023", "1024 – 49151", "49152 – 65535", "1 – 1024"],
      a: 2,
      e: "Los puertos dinámicos o efímeros (49152–65535) son temporales y los asigna el sistema, típicamente a los clientes."
    },
    {
      q: "¿Qué puerto usa HTTP?",
      o: ["80", "443", "53", "22"],
      a: 0,
      e: "HTTP usa el puerto 80; HTTPS el 443, DNS el 53 y SSH el 22."
    },
    {
      q: "¿Qué puerto usa HTTPS?",
      o: ["80", "443", "21", "25"],
      a: 1,
      e: "HTTPS utiliza el puerto 443."
    },
    {
      q: "¿Qué servicio está asociado al puerto 53?",
      o: ["SSH", "DNS", "HTTP", "FTP"],
      a: 1,
      e: "El puerto 53 corresponde a DNS."
    },
    {
      q: "¿Qué servicio está asociado al puerto 22?",
      o: ["DNS", "HTTPS", "SSH", "HTTP"],
      a: 2,
      e: "El puerto 22 corresponde a SSH."
    },
    {
      q: "¿Por qué son necesarios los puertos dinámicos en un cliente?",
      o: [
        "Para que el servidor sepa a qué puerto conectarse",
        "Para que un mismo cliente pueda abrir muchas conexiones simultáneas (p. ej. varias pestañas)",
        "Para cifrar los datos",
        "Para reducir la latencia de la red"
      ],
      a: 1,
      e: "Los puertos dinámicos permiten que un mismo cliente abra muchas conexiones simultáneas (por ejemplo, varias pestañas del navegador)."
    },
    {
      q: "¿Qué organización mantiene la lista oficial de puertos y sus servicios asociados?",
      o: ["IEEE", "IANA", "ETSI", "AENOR"],
      a: 1,
      e: "La IANA mantiene la lista de números de puerto y nombres de servicio asociados."
    },
    {
      q: "¿Cuáles son los dos protocolos principales de la capa de transporte?",
      o: ["IP y ICMP", "TCP y UDP", "HTTP y FTP", "ARP y RARP"],
      a: 1,
      e: "Los dos protocolos principales de la capa de transporte son TCP (fiable, orientado a conexión) y UDP (rápido, sin conexión ni garantías)."
    },
    {
      q: "¿Cuál de estas características corresponde a TCP?",
      o: [
        "No orientado a conexión y sin garantías",
        "Orientado a conexión, fiable y con entrega ordenada",
        "No detecta errores",
        "No tiene control de flujo"
      ],
      a: 1,
      e: "TCP es orientado a conexión, fiable, con entrega ordenada y control de flujo y congestión, aunque es más lento."
    },
    {
      q: "¿Por qué TCP es más lento que UDP?",
      o: [
        "Porque no usa puertos",
        "Debido al establecimiento de conexión y a todos los controles (latencia elevada)",
        "Porque cifra siempre los datos",
        "Porque usa direcciones MAC"
      ],
      a: 1,
      e: "TCP tiene mayor latencia por el establecimiento de conexión y sus mecanismos de control (fiabilidad, orden, flujo, congestión)."
    },
    {
      q: "¿Cuáles son ejemplos típicos de uso de TCP?",
      o: [
        "DNS, streaming y juegos online",
        "Web, email y FTP",
        "VoIP y videollamadas",
        "Solo descubrimiento de red"
      ],
      a: 1,
      e: "TCP se usa donde importa la fiabilidad: Web, Email y FTP."
    },
    {
      q: "Aunque los segmentos sigan diferentes caminos, TCP garantiza que se entreguen:",
      o: [
        "En cualquier orden",
        "En el orden correcto",
        "Sin números de secuencia",
        "Solo si caben en una trama"
      ],
      a: 1,
      e: "TCP garantiza la entrega ordenada: aunque los segmentos se fragmenten y sigan caminos distintos, llegan al destinatario en el orden correcto."
    },
    {
      q: "En la cabecera TCP, ¿cuántos bits ocupa el campo Puerto fuente?",
      o: ["8 bits", "16 bits", "32 bits", "4 bits"],
      a: 1,
      e: "El puerto fuente ocupa 16 bits, al igual que el puerto destino."
    },
    {
      q: "¿Qué indica el campo 'Número de secuencia' (32 bits) de un segmento TCP?",
      o: [
        "El número de secuencia del primer byte que transporta el segmento",
        "El puerto de destino",
        "El número de saltos restantes",
        "La longitud de la cabecera"
      ],
      a: 0,
      e: "El número de secuencia (32 bits) indica el número de secuencia del primer byte que transporta el segmento."
    },
    {
      q: "¿Qué significa el campo 'Número de acuse de recibo' en TCP?",
      o: [
        "El número de secuencia del siguiente byte que se espera recibir",
        "El puerto fuente",
        "El tamaño de la ventana",
        "El checksum del segmento"
      ],
      a: 0,
      e: "El número de acuse de recibo (32 bits) indica el siguiente byte que se espera recibir, confirmando que los anteriores llegaron bien."
    },
    {
      q: "El campo HLEN de la cabecera TCP tiene un valor mínimo de 5, que corresponde a:",
      o: [
        "Un segmento sin datos (20 bytes de cabecera)",
        "5 bytes de datos",
        "5 segmentos",
        "5 puertos"
      ],
      a: 0,
      e: "HLEN (4 bits) mide la cabecera en múltiplos de 32 bits; su mínimo es 5, que equivale a una cabecera de 20 bytes (segmento sin datos)."
    },
    {
      q: "¿Cuáles son los 6 bits de código (flags) de un segmento TCP?",
      o: [
        "URG, ACK, PSH, RST, SYN y FIN",
        "SYN, SEQ, ACK, MTU, TTL y FIN",
        "GET, POST, PUT, DEL, ACK y SYN",
        "URG, NAT, PAT, DNS, TCP y UDP"
      ],
      a: 0,
      e: "Los bits de código de TCP son: URG, ACK, PSH, RST, SYN y FIN."
    },
    {
      q: "El flag SYN de TCP se utiliza para:",
      o: [
        "Cerrar la conexión de forma ordenada",
        "Iniciar una conexión sincronizando números de secuencia",
        "Reiniciar la conexión de forma abrupta",
        "Confirmar la recepción de datos"
      ],
      a: 1,
      e: "El flag SYN (Synchronize) inicia una conexión sincronizando los números de secuencia."
    },
    {
      q: "El flag FIN de TCP indica:",
      o: [
        "Inicio de conexión",
        "Cierre ordenado cuando un extremo quiere cerrar la conexión",
        "Datos urgentes",
        "Reset de la conexión"
      ],
      a: 1,
      e: "El flag FIN (Finish) realiza el cierre ordenado cuando un extremo quiere terminar la conexión."
    },
    {
      q: "El flag RST de TCP sirve para:",
      o: [
        "Confirmar la recepción",
        "El cierre abrupto de la conexión (errores graves, puerto cerrado, conexión inválida)",
        "Sincronizar números de secuencia",
        "Indicar datos urgentes"
      ],
      a: 1,
      e: "El flag RST (Reset) realiza un cierre abrupto, útil para errores graves, puerto cerrado o conexión inválida."
    },
    {
      q: "El flag PSH (Push) indica que:",
      o: [
        "Los datos deben entregarse a la aplicación sin esperar a llenar los buffers",
        "La conexión debe reiniciarse",
        "Hay datos urgentes",
        "Se cierra la conexión"
      ],
      a: 0,
      e: "El flag PSH (Push) fuerza la entrega inmediata de los datos a la aplicación sin esperar a llenar los buffers; se usa con frecuencia."
    },
    {
      q: "El flag ACK de TCP sirve para:",
      o: [
        "Iniciar la conexión",
        "Confirmar la recepción de datos (el campo ACK contiene el siguiente byte esperado)",
        "Indicar datos urgentes",
        "Cerrar la conexión"
      ],
      a: 1,
      e: "El flag ACK (Acknowledgment) confirma la recepción; el campo ACK contiene el siguiente byte esperado."
    },
    {
      q: "El campo 'Ventana' (16 bits) de la cabecera TCP indica:",
      o: [
        "El número de bytes que el emisor del segmento está dispuesto a aceptar del destino",
        "El número de saltos máximos",
        "El puerto de origen",
        "El tamaño total del segmento"
      ],
      a: 0,
      e: "El campo Ventana indica cuántos bytes está dispuesto a aceptar quien envía el segmento; es la base del control de flujo."
    },
    {
      q: "Para calcular la suma de verificación de TCP se usa una pseudo-cabecera que incluye:",
      o: [
        "Las direcciones MAC origen y destino",
        "Las direcciones IP origen y destino",
        "Los números de puerto solamente",
        "El TTL y el checksum IP"
      ],
      a: 1,
      e: "La suma de verificación de TCP se calcula usando una pseudo-cabecera que también incluye las direcciones IP origen y destino."
    },
    {
      q: "El campo 'Puntero de urgencia' de TCP se utiliza para:",
      o: [
        "Indicar dónde terminan los datos urgentes dentro del segmento",
        "Apuntar al siguiente router",
        "Señalar el puerto dinámico",
        "Calcular la ventana"
      ],
      a: 0,
      e: "El puntero de urgencia indica el byte donde terminan los datos urgentes (que tienen preferencia) y empiezan los normales."
    },
    {
      q: "El mecanismo de establecimiento de conexión TCP se llama:",
      o: [
        "Four-Way Handshake",
        "Three-Way Handshake (tres vías)",
        "Sliding Window",
        "Slow Start"
      ],
      a: 1,
      e: "TCP establece la conexión mediante el Three-Way Handshake (tres vías), donde un extremo hace apertura pasiva y el otro activa."
    },
    {
      q: "¿Cuál es la secuencia correcta del Three-Way Handshake?",
      o: [
        "Cliente SYN → Servidor SYN+ACK → Cliente ACK",
        "Cliente ACK → Servidor SYN → Cliente FIN",
        "Servidor SYN → Cliente ACK → Servidor FIN",
        "Cliente SYN → Servidor RST → Cliente ACK"
      ],
      a: 0,
      e: "El handshake es: 1) Cliente envía SYN, 2) Servidor responde SYN+ACK, 3) Cliente envía ACK. Así sincronizan números de secuencia."
    },
    {
      q: "En el handshake, si el cliente envía SYN con Seq=x, el servidor responde con SYN+ACK donde ACK vale:",
      o: ["x", "x + 1", "y", "0"],
      a: 1,
      e: "El servidor responde con ACK = x + 1 (confirma el SYN del cliente) y su propio Seq = y."
    },
    {
      q: "¿Para qué sirve el número de secuencia en la segmentación y reensamblado?",
      o: [
        "Para cifrar cada segmento",
        "Para identificar cada segmento y que el receptor los reensamble en el orden correcto",
        "Para elegir la ruta",
        "Para asignar el puerto"
      ],
      a: 1,
      e: "El número de secuencia permite identificar cada segmento para que el receptor pueda reensamblarlos en el orden correcto."
    },
    {
      q: "¿Cuál es uno de los beneficios de la segmentación en la capa de transporte?",
      o: [
        "Lidiar con las limitaciones físicas de la red (MTU) y evitar la fragmentación IP",
        "Eliminar la necesidad de puertos",
        "Aumentar la latencia",
        "Cifrar automáticamente los datos"
      ],
      a: 0,
      e: "Segmentar permite lidiar con la MTU de la red, evitar la fragmentación IP, mejorar el control de errores y aumentar la eficiencia."
    },
    {
      q: "¿Cuál de estas características corresponde a UDP?",
      o: [
        "Orientado a conexión y fiable",
        "No orientado a conexión, no fiable y muy rápido",
        "Garantiza el orden de entrega",
        "Realiza un handshake de 3 vías"
      ],
      a: 1,
      e: "UDP es no orientado a conexión, no fiable, no garantiza el orden y es muy rápido y liviano (sin handshake)."
    },
    {
      q: "¿Cuáles son ejemplos típicos de uso de UDP?",
      o: [
        "Web, email y FTP",
        "DNS, streaming, VoIP y juegos online",
        "Transferencias bancarias",
        "Descargas de archivos grandes con integridad garantizada"
      ],
      a: 1,
      e: "UDP se usa donde prima la velocidad sobre la fiabilidad: DNS, streaming, VoIP y juegos online."
    },
    {
      q: "¿Por qué UDP es muy rápido?",
      o: [
        "Porque cifra menos datos",
        "Porque no establece conexión y es muy liviano",
        "Porque usa direcciones MAC",
        "Porque tiene una cabecera de 60 bytes"
      ],
      a: 1,
      e: "UDP es rápido porque no tiene que establecer conexión (sin handshake) y su cabecera es muy ligera."
    },
    {
      q: "¿Cuál es la longitud mínima de un mensaje UDP (incluyendo la cabecera)?",
      o: ["8 bytes", "20 bytes", "16 bytes", "4 bytes"],
      a: 0,
      e: "El campo 'Longitud del mensaje' de UDP incluye la cabecera; la longitud mínima es de 8 bytes (la cabecera UDP)."
    },
    {
      q: "La suma de verificación en UDP es...",
      o: [
        "Obligatoria siempre en IPv4",
        "Opcional en IPv4 pero obligatoria en IPv6",
        "Inexistente",
        "De 32 bits"
      ],
      a: 1,
      e: "La suma de verificación de UDP (16 bits) es opcional en IPv4 y obligatoria en IPv6."
    },
    {
      q: "¿Cuántos campos componen la cabecera UDP?",
      o: [
        "Puerto fuente, puerto destino, longitud y suma de verificación",
        "Solo puerto fuente y datos",
        "Los mismos 10 campos que TCP",
        "Número de secuencia y ACK"
      ],
      a: 0,
      e: "La cabecera UDP es muy simple: puerto fuente, puerto destino, longitud del mensaje y suma de verificación (más los datos)."
    },
    {
      q: "¿Qué permite NAT (Network Address Translation)?",
      o: [
        "Que múltiples dispositivos de una red privada compartan una única IP pública",
        "Cifrar el tráfico de la red",
        "Asignar nombres de dominio",
        "Aumentar el TTL de los paquetes"
      ],
      a: 0,
      e: "NAT permite que múltiples dispositivos de una red privada compartan una única IP pública, traduciendo direcciones y puertos."
    },
    {
      q: "¿Dónde se implementa habitualmente NAT?",
      o: ["En los switches", "En los routers", "En las tarjetas de red", "En los hubs"],
      a: 1,
      e: "NAT se implementa habitualmente en los routers, que modifican las direcciones IP de los paquetes."
    },
    {
      q: "¿Qué problema principal resuelve NAT?",
      o: [
        "La escasez de direcciones IPv4",
        "La lentitud de TCP",
        "La pérdida de paquetes en Wi-Fi",
        "La falta de cifrado"
      ],
      a: 0,
      e: "NAT resuelve la escasez de direcciones IPv4, permitiendo que muchos dispositivos de una casa salgan con una sola IP pública."
    },
    {
      q: "¿Qué información guarda el router en su tabla NAT?",
      o: [
        "IP privada, puerto privado, IP pública y puerto público",
        "Solo la dirección MAC",
        "El número de secuencia TCP",
        "El nombre de dominio y la IP"
      ],
      a: 0,
      e: "La tabla NAT relaciona la IP privada, el puerto privado, la IP pública y el puerto público de cada conexión."
    },
    {
      q: "Cuando vuelve la respuesta de un servidor, ¿cómo sabe el router NAT a qué equipo interno entregarla?",
      o: [
        "Por la dirección MAC del servidor",
        "Consultando su tabla NAT (relaciona IP/puerto público con IP/puerto privado)",
        "Preguntando por DNS",
        "Mediante broadcast a toda la red"
      ],
      a: 1,
      e: "El router consulta su tabla NAT: el par IP pública:puerto público le indica a qué IP privada:puerto privado debe reescribir y entregar el paquete."
    },
    {
      q: "¿Cuál es una limitación importante de NAT?",
      o: [
        "Aumenta la velocidad de la red",
        "Rompe el modelo extremo a extremo y da problemas con servidores locales, P2P y VoIP",
        "Impide el uso de IPv4",
        "Cifra el tráfico sin permiso"
      ],
      a: 1,
      e: "NAT rompe el modelo extremo a extremo y causa problemas con servidores en red local, P2P y VoIP."
    },
    {
      q: "¿Qué protocolo moderno, desarrollado inicialmente por Google, busca solucionar los problemas de TCP?",
      o: ["QUIC", "SPDY", "SCTP", "DCCP"],
      a: 0,
      e: "QUIC, desarrollado inicialmente por Google, soluciona la mayoría de los problemas de TCP (handshake lento, head-of-line blocking, difícil evolución)."
    },
    {
      q: "¿Sobre qué protocolo de transporte se construye QUIC?",
      o: ["TCP", "UDP", "ICMP", "IP directamente"],
      a: 1,
      e: "QUIC usa UDP como base e implementa encima fiabilidad, control de congestión y seguridad (TLS integrado). Es 'como un TCP moderno en espacio de usuario'."
    },
    {
      q: "¿Cuál de estos es un problema de TCP que QUIC pretende resolver?",
      o: [
        "El head-of-line blocking (bloqueo por orden)",
        "La ausencia de puertos",
        "La falta de direcciones IP",
        "El exceso de velocidad"
      ],
      a: 0,
      e: "TCP sufre handshake lento, head-of-line blocking (si se pierde un paquete bloquea todo) y es difícil de evolucionar al estar en el kernel."
    },
    {
      q: "QUIC es la base del protocolo de aplicación:",
      o: ["HTTP/1.1", "HTTP/2", "HTTP/3", "FTP"],
      a: 2,
      e: "QUIC es la base de HTTP/3, y cada vez más webs lo están adoptando."
    },
    {
      q: "Una ventaja clave de QUIC frente a TCP es que, al cambiar de WiFi a 4G/5G...",
      o: [
        "la conexión se rompe siempre",
        "la conexión no se rompe (adaptación a redes modernas)",
        "se pierde toda la seguridad",
        "deja de usar puertos"
      ],
      a: 1,
      e: "QUIC se adapta a redes modernas: puedes cambiar de WiFi a 4G/5G y la conexión no se rompe; además ofrece multiplexación sin bloqueos."
    },
    {
      q: "En la comparación TCP clásico vs tendencias actuales (QUIC), ¿dónde se implementa cada uno?",
      o: [
        "TCP en el kernel; QUIC en espacio de usuario (user-space)",
        "Ambos en el kernel",
        "TCP en user-space; QUIC en el kernel",
        "Ambos en hardware"
      ],
      a: 0,
      e: "TCP clásico se implementa en el kernel (evolución lenta); QUIC en espacio de usuario (user-space), lo que permite una evolución más rápida."
    },
    {
      q: "Respecto a la seguridad, ¿qué diferencia hay entre TCP clásico y QUIC?",
      o: [
        "En TCP la seguridad (TLS) es opcional; en QUIC va integrada por defecto",
        "Ninguno ofrece seguridad",
        "TCP la integra y QUIC no",
        "Ambos prohíben el cifrado"
      ],
      a: 0,
      e: "En TCP el TLS es opcional y se añade aparte; QUIC integra la seguridad (TLS) por defecto."
    }
  ]
};
