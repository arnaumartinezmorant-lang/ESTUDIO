// Tema 5 - Preguntas adicionales (ampliación de cobertura)
window.TEMAS["tema05"].preguntas.push(
  {
    q: "El proceso de fragmentar un paquete grande para que pase por una red con MTU menor lo realiza la capa de:",
    o: ["Enlace", "Red", "Transporte", "Sesión"],
    a: 1,
    e: "La capa de red puede fragmentar los paquetes para adaptarlos a la MTU (tamaño máximo) de la red que deben atravesar."
  },
  {
    q: "Si una IP tiene máscara /16, ¿cuántos octetos son de red?",
    o: ["1 octeto", "2 octetos", "3 octetos", "4 octetos"],
    a: 1,
    e: "/16 = 16 bits de red = 2 octetos completos de red (por ejemplo, una clase B por defecto: 255.255.0.0)."
  },
  {
    q: "¿Cuál es el primer host utilizable de la red 192.168.1.0/24?",
    o: ["192.168.1.0", "192.168.1.1", "192.168.1.254", "192.168.1.255"],
    a: 1,
    e: "192.168.1.0 es la dirección de red y 192.168.1.255 la de broadcast; el primer host válido es 192.168.1.1."
  },
  {
    q: "¿Cuál es la dirección de broadcast de la red 10.0.0.0/8?",
    o: ["10.0.0.255", "10.255.255.255", "10.0.0.1", "255.255.255.255"],
    a: 1,
    e: "Con /8, los 3 últimos octetos son de host; el broadcast pone todos esos bits a 1: 10.255.255.255."
  },
  {
    q: "¿Cuántas subredes se obtienen al tomar prestados 3 bits de host?",
    o: ["3 subredes", "6 subredes", "8 subredes", "16 subredes"],
    a: 2,
    e: "Con 3 bits prestados se obtienen 2^3 = 8 subredes."
  },
  {
    q: "La máscara /30 (255.255.255.252) es muy usada en enlaces punto a punto porque proporciona:",
    o: [
      "2 hosts utilizables (justo para los dos extremos del enlace)",
      "254 hosts",
      "0 hosts",
      "62 hosts"
    ],
    a: 0,
    e: "/30 deja 2 bits de host: 2^2 − 2 = 2 hosts utilizables, ideal para enlaces punto a punto entre dos routers."
  },
  {
    q: "El rango de direcciones de Clase B va, en el primer octeto, de:",
    o: ["1 a 126", "128 a 191", "192 a 223", "224 a 239"],
    a: 1,
    e: "Clase B: primer octeto de 128 a 191 (máscara por defecto 255.255.0.0)."
  },
  {
    q: "La dirección 0.0.0.0 se utiliza habitualmente para representar:",
    o: [
      "El loopback",
      "Una ruta o red por defecto / 'cualquier dirección'",
      "El broadcast global de Internet",
      "Una dirección de multicast"
    ],
    a: 1,
    e: "0.0.0.0 se usa para indicar 'esta red/cualquier dirección' y, con /0, la ruta por defecto en las tablas de enrutamiento."
  },
  {
    q: "El protocolo que traduce nombres de dominio (como www.ejemplo.com) en direcciones IP es:",
    o: ["DHCP", "DNS", "ARP", "ICMP"],
    a: 1,
    e: "DNS (Domain Name System) resuelve nombres de dominio a direcciones IP."
  },
  {
    q: "En el proceso DHCP (DORA), el mensaje que el servidor envía OFRECIENDO una configuración es:",
    o: ["DHCP Discover", "DHCP Offer", "DHCP Request", "DHCP Ack"],
    a: 1,
    e: "Tras el Discover del cliente, el servidor responde con un DHCP Offer ofreciéndole una configuración IP."
  },
  {
    q: "El primer mensaje DHCP, enviado por el cliente para localizar servidores, es de tipo:",
    o: ["Discover (difusión)", "Offer", "Request", "Acknowledge"],
    a: 0,
    e: "El cliente, sin IP aún, envía un DHCP Discover por difusión (broadcast) para localizar servidores DHCP disponibles."
  },
  {
    q: "ARP realiza su petición inicial mediante:",
    o: [
      "Un mensaje unicast al destino",
      "Una difusión (broadcast) preguntando quién tiene una IP determinada",
      "Una conexión TCP",
      "Un mensaje al servidor DNS"
    ],
    a: 1,
    e: "ARP envía una petición en broadcast ('¿quién tiene la IP X?'); el equipo con esa IP responde en unicast con su MAC."
  },
  {
    q: "El comando 'ping' utiliza mensajes ICMP de tipo:",
    o: [
      "Echo Request y Echo Reply",
      "Discover y Offer",
      "SYN y ACK",
      "Query y Response"
    ],
    a: 0,
    e: "Ping envía un ICMP Echo Request y espera un ICMP Echo Reply para comprobar conectividad y medir el tiempo de ida y vuelta."
  },
  {
    q: "Cuando un router descarta un paquete porque su TTL llega a 0, suele avisar al origen con un mensaje:",
    o: ["ICMP (Time Exceeded)", "DHCP Nak", "ARP Reply", "DNS Error"],
    a: 0,
    e: "Al expirar el TTL, el router descarta el paquete y puede enviar un ICMP 'Time Exceeded' al origen (base de funcionamiento de traceroute)."
  },
  {
    q: "El tipo de NAT que permite que muchos equipos privados compartan una sola IP pública usando puertos se llama:",
    o: ["NAT estático", "PAT / NAT overload (sobrecarga)", "DNS dinámico", "Proxy ARP"],
    a: 1,
    e: "PAT (Port Address Translation) o NAT overload diferencia las conexiones por número de puerto, permitiendo compartir una única IP pública."
  },
  {
    q: "Una desventaja del encaminamiento ESTÁTICO es:",
    o: [
      "Que no escala bien y no se adapta solo a caídas de enlaces",
      "Que consume mucho ancho de banda con actualizaciones",
      "Que es inseguro por naturaleza",
      "Que necesita siempre BGP"
    ],
    a: 0,
    e: "El enrutamiento estático no se adapta automáticamente a cambios/fallos y es difícil de mantener en redes grandes; su ventaja es no consumir ancho de banda ni CPU en actualizaciones."
  },
  {
    q: "OSPF pertenece a la categoría de protocolos de encaminamiento:",
    o: [
      "Vector distancia",
      "Estado de enlace (link-state)",
      "Exterior (entre sistemas autónomos)",
      "Estáticos"
    ],
    a: 1,
    e: "OSPF es un protocolo de estado de enlace (link-state): cada router construye un mapa completo de la topología y calcula la ruta más corta."
  },
  {
    q: "En RIP, una métrica de 16 saltos significa que el destino es:",
    o: [
      "Muy cercano",
      "Inalcanzable (16 es el valor de 'infinito' en RIP)",
      "El más rápido",
      "La puerta de enlace"
    ],
    a: 1,
    e: "RIP admite un máximo de 15 saltos; 16 se interpreta como 'infinito', es decir, red inalcanzable."
  },
  {
    q: "La principal ventaja de una VLAN frente a separar físicamente las redes es:",
    o: [
      "Que requiere más cableado",
      "Que segmenta lógicamente sin necesidad de duplicar la infraestructura física",
      "Que elimina los switches",
      "Que no necesita routers nunca"
    ],
    a: 1,
    e: "Las VLAN segmentan la red de forma lógica sobre la misma infraestructura física, ahorrando cableado y dando flexibilidad."
  },
  {
    q: "En el etiquetado 802.1Q, ¿dónde se inserta la etiqueta de VLAN?",
    o: [
      "En la cabecera de la trama Ethernet (campo VLAN tag)",
      "En la dirección IP",
      "En el campo FCS",
      "En el preámbulo"
    ],
    a: 0,
    e: "802.1Q inserta una etiqueta (tag) de 4 bytes en la cabecera de la trama Ethernet, que identifica la VLAN (VID)."
  },
  {
    q: "Un puerto de acceso (access) de un switch, a diferencia de un trunk:",
    o: [
      "Pertenece a una sola VLAN y conecta normalmente un equipo final",
      "Transporta todas las VLANs",
      "Solo se usa entre routers",
      "No puede conectar equipos"
    ],
    a: 0,
    e: "Un puerto de acceso pertenece a una única VLAN y se usa para conectar dispositivos finales; el trunk transporta varias VLANs entre switches."
  },
  {
    q: "La técnica 'router-on-a-stick' consiste en:",
    o: [
      "Usar un router con una única interfaz con subinterfaces para enrutar entre varias VLANs",
      "Conectar un router por cada VLAN físicamente",
      "Eliminar el router",
      "Usar solo un hub"
    ],
    a: 0,
    e: "Router-on-a-stick usa una sola interfaz física del router dividida en subinterfaces (una por VLAN) por un enlace trunk para encaminar entre VLANs."
  },
  {
    q: "Una dirección IPv6 se representa en:",
    o: [
      "4 octetos decimales",
      "8 grupos de 4 dígitos hexadecimales separados por dos puntos",
      "6 grupos hexadecimales separados por guiones",
      "32 bits decimales"
    ],
    a: 1,
    e: "IPv6 usa 128 bits escritos como 8 grupos de 4 dígitos hexadecimales separados por ':'."
  },
  {
    q: "En IPv6, la abreviación '::' solo puede aparecer:",
    o: [
      "Una sola vez en la dirección",
      "Tantas veces como se quiera",
      "Solo al principio",
      "Solo si la dirección es multicast"
    ],
    a: 0,
    e: "El '::' (que sustituye uno o varios grupos consecutivos de ceros) solo puede usarse una vez por dirección, para evitar ambigüedad."
  },
  {
    q: "Abrevia correctamente la dirección IPv6 2001:0db8:0000:0000:0000:0000:0000:0001",
    o: [
      "2001:db8::1",
      "2001:0db8::0:1",
      "21:db8::1",
      "2001::db8::1"
    ],
    a: 0,
    e: "Se quitan los ceros a la izquierda (0db8→db8) y el bloque largo de ceros se sustituye por '::': 2001:db8::1."
  },
  {
    q: "Las direcciones IPv6 'Global Unicast' (GUA), equivalentes a las IP públicas, suelen empezar por:",
    o: ["FE80", "2000::/3 (p. ej. 2001:...)", "FF00", "::1"],
    a: 1,
    e: "Las GUA pertenecen al bloque 2000::/3 (direcciones que empiezan por 2 o 3) y son enrutables globalmente, como las IP públicas."
  },
  {
    q: "En IPv6, las direcciones multicast empiezan por:",
    o: ["FE80", "FF00::/8 (FF...)", "2001", "::1"],
    a: 1,
    e: "Las direcciones multicast de IPv6 empiezan por FF (bloque FF00::/8)."
  },
  {
    q: "¿Qué mecanismo permite a un equipo IPv6 autoconfigurarse una dirección sin servidor DHCP?",
    o: [
      "SLAAC (autoconfiguración sin estado)",
      "NAT",
      "ARP",
      "STP"
    ],
    a: 0,
    e: "SLAAC (StateLess Address AutoConfiguration) permite a un host IPv6 generar su propia dirección usando el prefijo anunciado por el router."
  },
  {
    q: "¿Qué dispositivo necesita tener al menos una interfaz en cada red que interconecta?",
    o: ["El hub", "El router", "El repetidor", "El terminador"],
    a: 1,
    e: "El router interconecta redes y necesita una interfaz (con su IP) en cada una de las redes que une."
  },
  {
    q: "La 'distancia administrativa' en enrutamiento sirve para:",
    o: [
      "Medir el ancho de banda",
      "Decidir qué fuente de información de ruta es más fiable cuando hay varias para un mismo destino",
      "Calcular el broadcast",
      "Asignar VLANs"
    ],
    a: 1,
    e: "La distancia administrativa indica la fiabilidad de la fuente de la ruta (estática, OSPF, RIP...); a menor valor, más preferente."
  },
  {
    q: "En una tabla de enrutamiento, cuando varias rutas coinciden con un destino, el router elige:",
    o: [
      "La ruta con la máscara más larga (coincidencia más específica)",
      "La primera de la lista",
      "La de mayor métrica",
      "La ruta por defecto siempre"
    ],
    a: 0,
    e: "Se aplica el principio de 'longest prefix match': se elige la ruta cuya máscara (prefijo) sea más larga, es decir, la más específica."
  }
);
