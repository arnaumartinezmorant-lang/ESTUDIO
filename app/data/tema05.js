// Tema 5 - Capa de red
window.TEMAS = window.TEMAS || {};
window.TEMAS["tema05"] = {
  titulo: "Tema 5 · Capa de red",
  preguntas: [
    {
      q: "¿Cuál es la función principal de la capa de red?",
      o: [
        "Transmitir bits por el medio físico",
        "Hacer llegar los paquetes desde el origen al destino, encaminándolos a través de distintas redes",
        "Detectar errores en las tramas locales",
        "Cifrar los datos de aplicación"
      ],
      a: 1,
      e: "La capa de red (nivel 3 OSI) hace llegar los paquetes del origen al destino, encaminándolos a través de redes diferentes (encaminamiento)."
    },
    {
      q: "¿Cómo se denomina la PDU de la capa de red?",
      o: ["Trama", "Segmento", "Paquete (o datagrama)", "Bit"],
      a: 2,
      e: "La PDU de la capa de red es el paquete; en el protocolo IP se denomina datagrama."
    },
    {
      q: "¿Cuántos bits tiene una dirección IPv4?",
      o: ["16 bits", "32 bits", "48 bits", "128 bits"],
      a: 1,
      e: "Una dirección IPv4 tiene 32 bits, divididos en 4 octetos de 8 bits, representados en decimal separados por puntos."
    },
    {
      q: "Una dirección IP está compuesta por dos partes. ¿Cuáles?",
      o: [
        "Dirección MAC y puerto",
        "Identificador de red e identificador de host",
        "OUI y número de serie",
        "Bandera y FCS"
      ],
      a: 1,
      e: "Una dirección IP se compone del identificador de red (los bits a la izquierda) y el identificador de host (los bits a la derecha)."
    },
    {
      q: "¿Para qué sirve la máscara de subred?",
      o: [
        "Para cifrar la dirección IP",
        "Para distinguir qué parte de la IP corresponde a la red y qué parte al host",
        "Para asignar direcciones MAC",
        "Para calcular el checksum"
      ],
      a: 1,
      e: "La máscara de subred distingue la parte de red (bits a 1) de la parte de host (bits a 0) de una dirección IP."
    },
    {
      q: "¿A qué clase pertenece la dirección IP 150.214.5.10?",
      o: ["Clase A", "Clase B", "Clase C", "Clase D"],
      a: 1,
      e: "Clase B: primer octeto entre 128 y 191. 150 está en ese rango, por lo que es clase B (máscara por defecto 255.255.0.0)."
    },
    {
      q: "¿Cuál es el rango del primer octeto de las direcciones de Clase A?",
      o: ["0 a 127", "128 a 191", "192 a 223", "224 a 239"],
      a: 0,
      e: "Clase A: 1 a 126 (el 0 y el 127 reservados); Clase B: 128-191; Clase C: 192-223; Clase D (multicast): 224-239."
    },
    {
      q: "La máscara por defecto de una dirección de Clase C es:",
      o: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
      a: 2,
      e: "Clase A: 255.0.0.0 (/8); Clase B: 255.255.0.0 (/16); Clase C: 255.255.255.0 (/24)."
    },
    {
      q: "¿Qué clase de direcciones IP está reservada para multicast?",
      o: ["Clase A", "Clase B", "Clase C", "Clase D"],
      a: 3,
      e: "La Clase D (224.0.0.0 a 239.255.255.255) está reservada para multicast; la Clase E para usos experimentales."
    },
    {
      q: "En una red, la dirección con todos los bits de host a 0 representa:",
      o: [
        "La dirección de broadcast",
        "La dirección de red",
        "La puerta de enlace",
        "Un host válido"
      ],
      a: 1,
      e: "La dirección de red tiene todos los bits de host a 0; identifica la subred y no se asigna a ningún equipo."
    },
    {
      q: "En una red, la dirección con todos los bits de host a 1 representa:",
      o: [
        "La dirección de red",
        "La dirección de broadcast de esa red",
        "El primer host",
        "La máscara de subred"
      ],
      a: 1,
      e: "La dirección de difusión (broadcast) tiene todos los bits de host a 1; sirve para enviar a todos los hosts de la subred."
    },
    {
      q: "¿Cuántos hosts utilizables tiene una red con máscara /24 (255.255.255.0)?",
      o: ["256", "254", "255", "128"],
      a: 1,
      e: "Con /24 hay 8 bits de host: 2^8 = 256 direcciones, menos la de red y la de broadcast = 254 hosts utilizables."
    },
    {
      q: "La fórmula para calcular el número de hosts utilizables en una subred es:",
      o: ["2^n", "2^n − 2", "2^n + 2", "n^2 − 2"],
      a: 1,
      e: "El número de hosts utilizables es 2^n − 2, donde n es el número de bits de host (se restan red y broadcast)."
    },
    {
      q: "¿Cuál de los siguientes rangos es una dirección IP privada según el RFC 1918?",
      o: ["8.8.8.0/24", "192.168.0.0/16", "172.15.0.0/16", "200.1.1.0/24"],
      a: 1,
      e: "Las privadas son: 10.0.0.0/8, 172.16.0.0/12 (172.16-172.31) y 192.168.0.0/16."
    },
    {
      q: "El rango de direcciones privadas de Clase A es:",
      o: ["10.0.0.0 a 10.255.255.255", "172.16.0.0 a 172.31.255.255", "192.168.0.0 a 192.168.255.255", "127.0.0.0 a 127.255.255.255"],
      a: 0,
      e: "Privadas Clase A: 10.0.0.0/8 (10.0.0.0 a 10.255.255.255). Clase B: 172.16.0.0/12 y Clase C: 192.168.0.0/16."
    },
    {
      q: "La dirección 127.0.0.1 se conoce como:",
      o: ["Dirección de broadcast", "Dirección de loopback (bucle local)", "Puerta de enlace por defecto", "Dirección APIPA"],
      a: 1,
      e: "127.0.0.1 es la dirección de loopback o bucle local, usada para que un host se refiera a sí mismo (pruebas de la pila TCP/IP)."
    },
    {
      q: "Las direcciones APIPA (autoconfiguración cuando falla el DHCP) pertenecen al rango:",
      o: ["10.0.0.0/8", "169.254.0.0/16", "192.168.0.0/16", "172.16.0.0/12"],
      a: 1,
      e: "APIPA (Automatic Private IP Addressing) usa el rango 169.254.0.0/16 cuando un equipo no obtiene IP del servidor DHCP."
    },
    {
      q: "¿En qué consiste la división en subredes (subnetting)?",
      o: [
        "Unir varias redes en una sola",
        "Tomar bits de la parte de host para crear subredes más pequeñas",
        "Eliminar la máscara de subred",
        "Cambiar la clase de la dirección"
      ],
      a: 1,
      e: "El subnetting toma bits prestados de la parte de host para crear varias subredes más pequeñas a partir de una red mayor."
    },
    {
      q: "Si a una red Clase C (/24) le pedimos crear 4 subredes, ¿cuántos bits debemos tomar prestados?",
      o: ["1 bit", "2 bits", "3 bits", "4 bits"],
      a: 1,
      e: "Con 2 bits se obtienen 2^2 = 4 subredes. La nueva máscara sería /26 (255.255.255.192)."
    },
    {
      q: "La técnica VLSM (Variable Length Subnet Mask) permite:",
      o: [
        "Usar la misma máscara en todas las subredes",
        "Usar máscaras de distinta longitud para aprovechar mejor el direccionamiento según las necesidades de cada subred",
        "Eliminar el uso de máscaras",
        "Convertir IPv4 en IPv6"
      ],
      a: 1,
      e: "VLSM usa máscaras de longitud variable, asignando a cada subred el tamaño que necesita y evitando desperdiciar direcciones."
    },
    {
      q: "¿Qué notación CIDR equivale a la máscara 255.255.255.192?",
      o: ["/24", "/25", "/26", "/27"],
      a: 2,
      e: "255.255.255.192 = 11111111.11111111.11111111.11000000 = 26 bits a 1, es decir /26."
    },
    {
      q: "El protocolo que asigna direcciones IP de forma dinámica y automática a los hosts es:",
      o: ["DNS", "DHCP", "ARP", "ICMP"],
      a: 1,
      e: "DHCP (Dynamic Host Configuration Protocol) asigna IP, máscara, puerta de enlace y DNS de forma automática a los hosts."
    },
    {
      q: "¿Cuál es la secuencia de mensajes del proceso DHCP (DORA)?",
      o: [
        "Discover, Offer, Request, Acknowledge",
        "Demand, Open, Reply, Accept",
        "Detect, Order, Receive, Acknowledge",
        "Discover, Order, Request, Apply"
      ],
      a: 0,
      e: "El proceso DHCP es DORA: Discover (cliente), Offer (servidor), Request (cliente) y Acknowledge (servidor)."
    },
    {
      q: "El protocolo ARP se utiliza para:",
      o: [
        "Resolver nombres de dominio en IP",
        "Obtener la dirección MAC asociada a una dirección IP conocida",
        "Asignar IP automáticamente",
        "Enrutar paquetes entre redes"
      ],
      a: 1,
      e: "ARP (Address Resolution Protocol) obtiene la dirección MAC (física) a partir de una dirección IP conocida dentro de la red local."
    },
    {
      q: "El protocolo ICMP es utilizado por herramientas como:",
      o: ["nslookup y dig", "ping y traceroute", "ftp y http", "telnet y ssh"],
      a: 1,
      e: "ICMP (Internet Control Message Protocol) gestiona mensajes de control/error y lo usan herramientas como ping y traceroute."
    },
    {
      q: "¿Qué tecnología permite que varios equipos de una red privada compartan una única IP pública?",
      o: ["DNS", "NAT (Network Address Translation)", "ARP", "STP"],
      a: 1,
      e: "NAT (Network Address Translation) traduce las direcciones privadas a una IP pública, permitiendo compartir una sola IP pública."
    },
    {
      q: "El encaminamiento (routing) es el proceso de:",
      o: [
        "Convertir señales en bits",
        "Determinar la ruta que deben seguir los paquetes hasta su destino",
        "Asignar direcciones MAC",
        "Detectar colisiones"
      ],
      a: 1,
      e: "El encaminamiento o routing determina la mejor ruta que deben seguir los paquetes para alcanzar su destino, función de los routers."
    },
    {
      q: "¿Qué diferencia hay entre encaminamiento estático y dinámico?",
      o: [
        "El estático lo configura manualmente el administrador; el dinámico lo aprenden los routers automáticamente mediante protocolos",
        "El estático es más rápido en converger ante caídas",
        "El dinámico no necesita protocolos",
        "No hay ninguna diferencia"
      ],
      a: 0,
      e: "El encaminamiento estático lo configura manualmente el administrador; el dinámico usa protocolos (RIP, OSPF...) para que los routers aprendan las rutas."
    },
    {
      q: "¿Cuál de los siguientes es un protocolo de encaminamiento basado en el estado del enlace (link-state)?",
      o: ["RIP", "OSPF", "BGP", "DHCP"],
      a: 1,
      e: "OSPF (Open Shortest Path First) es un protocolo de estado de enlace; RIP es de vector distancia."
    },
    {
      q: "El protocolo de encaminamiento RIP utiliza como métrica:",
      o: [
        "El ancho de banda",
        "El número de saltos (máximo 15)",
        "El retardo",
        "El coste administrativo"
      ],
      a: 1,
      e: "RIP (vector distancia) usa el número de saltos como métrica, con un máximo de 15 (16 se considera inalcanzable)."
    },
    {
      q: "La puerta de enlace por defecto (default gateway) es:",
      o: [
        "El servidor DNS de la red",
        "La dirección del router al que se envían los paquetes destinados a otras redes",
        "La dirección de broadcast",
        "La dirección de loopback"
      ],
      a: 1,
      e: "La puerta de enlace por defecto es la dirección IP del router al que un host envía los paquetes destinados a redes distintas a la suya."
    },
    {
      q: "¿Qué es una VLAN?",
      o: [
        "Una red física independiente con su propio cableado",
        "Una red de área local virtual que segmenta lógicamente una red física en varios dominios de difusión",
        "Un protocolo de cifrado",
        "Un tipo de cable de fibra"
      ],
      a: 1,
      e: "Una VLAN (Virtual LAN) segmenta lógicamente una red física en varios dominios de difusión independientes, mejorando seguridad y rendimiento."
    },
    {
      q: "¿Qué estándar IEEE define el etiquetado de tramas para VLANs?",
      o: ["IEEE 802.3", "IEEE 802.1Q", "IEEE 802.11", "IEEE 802.1D"],
      a: 1,
      e: "IEEE 802.1Q define el etiquetado (tagging) de las tramas Ethernet para identificar a qué VLAN pertenecen."
    },
    {
      q: "Un puerto de switch configurado como 'trunk' sirve para:",
      o: [
        "Conectar un único equipo final",
        "Transportar el tráfico de varias VLANs entre switches",
        "Bloquear todo el tráfico",
        "Asignar IPs automáticamente"
      ],
      a: 1,
      e: "Un puerto trunk transporta el tráfico de múltiples VLANs entre switches (o entre switch y router), usando el etiquetado 802.1Q."
    },
    {
      q: "Para comunicar dispositivos de distintas VLANs se necesita:",
      o: [
        "Un hub",
        "Encaminamiento entre VLANs (router o switch de capa 3)",
        "Un repetidor",
        "Nada, se comunican directamente"
      ],
      a: 1,
      e: "Las VLAN están aisladas entre sí; para que se comuniquen se necesita encaminamiento entre VLANs (router-on-a-stick o switch de capa 3)."
    },
    {
      q: "¿Cuántos bits tiene una dirección IPv6?",
      o: ["32 bits", "64 bits", "128 bits", "256 bits"],
      a: 2,
      e: "Una dirección IPv6 tiene 128 bits, representados en 8 grupos de 4 dígitos hexadecimales separados por dos puntos."
    },
    {
      q: "¿Cuál fue la principal motivación para crear IPv6?",
      o: [
        "Mejorar la velocidad del cableado",
        "El agotamiento de las direcciones IPv4",
        "Eliminar el uso de routers",
        "Sustituir las direcciones MAC"
      ],
      a: 1,
      e: "IPv6 surge principalmente por el agotamiento del espacio de direcciones IPv4 (solo ~4.300 millones de direcciones)."
    },
    {
      q: "En IPv6, ¿qué regla de abreviación es correcta?",
      o: [
        "Se pueden eliminar todos los dos puntos",
        "Los ceros a la izquierda de cada grupo se pueden omitir y un único bloque de ceros consecutivos se sustituye por ::",
        "Solo se pueden abreviar los grupos del final",
        "No se permite ninguna abreviación"
      ],
      a: 1,
      e: "En IPv6 se omiten los ceros a la izquierda de cada grupo y un único conjunto de grupos consecutivos a cero se sustituye por '::' (una sola vez)."
    },
    {
      q: "La dirección de loopback en IPv6 es:",
      o: ["127.0.0.1", "::1", "FF02::1", "FE80::1"],
      a: 1,
      e: "La dirección de loopback en IPv6 es ::1 (equivalente a 127.0.0.1 de IPv4)."
    },
    {
      q: "Las direcciones IPv6 que empiezan por FE80:: son de tipo:",
      o: [
        "Global unicast",
        "Link-local (enlace local)",
        "Multicast",
        "Loopback"
      ],
      a: 1,
      e: "Las direcciones link-local (enlace local) en IPv6 empiezan por FE80::/10 y solo son válidas dentro del enlace local."
    },
    {
      q: "¿Qué tipo de comunicación NO existe en IPv6 (a diferencia de IPv4)?",
      o: ["Unicast", "Multicast", "Broadcast", "Anycast"],
      a: 2,
      e: "IPv6 elimina el broadcast; sus tipos son unicast, multicast y anycast. La difusión se sustituye por multicast."
    },
    {
      q: "El protocolo de encaminamiento exterior que conecta los sistemas autónomos de Internet es:",
      o: ["RIP", "OSPF", "BGP", "EIGRP"],
      a: 2,
      e: "BGP (Border Gateway Protocol) es el protocolo de encaminamiento exterior que interconecta los sistemas autónomos (AS) de Internet."
    },
    {
      q: "¿Qué información NO contiene normalmente una entrada de la tabla de enrutamiento?",
      o: [
        "La red de destino",
        "La máscara de subred",
        "La dirección MAC del host de destino final",
        "El siguiente salto (next hop) o interfaz de salida"
      ],
      a: 2,
      e: "Una tabla de enrutamiento contiene la red destino, la máscara, el siguiente salto/interfaz y la métrica; no la MAC del host final (eso lo resuelve ARP localmente)."
    },
    {
      q: "Una ruta por defecto (default route) en una tabla de enrutamiento se representa como:",
      o: ["127.0.0.1/32", "0.0.0.0/0", "255.255.255.255/32", "192.168.1.1/24"],
      a: 1,
      e: "La ruta por defecto 0.0.0.0/0 se usa para los paquetes cuyo destino no coincide con ninguna otra entrada más específica de la tabla."
    },
    {
      q: "¿Qué ventaja aporta el uso de VLANs en cuanto a seguridad?",
      o: [
        "Aumenta el número de colisiones",
        "Aísla el tráfico de cada grupo, de modo que un dominio de difusión no ve el tráfico de otro",
        "Permite que todos los equipos vean todo el tráfico",
        "Elimina la necesidad de routers"
      ],
      a: 1,
      e: "Las VLAN aíslan el tráfico de cada grupo en dominios de difusión separados, mejorando la seguridad y reduciendo el tráfico broadcast."
    },
    {
      q: "En el direccionamiento sin clases (CIDR), la notación 192.168.10.0/27 indica que hay:",
      o: [
        "27 bits de host",
        "27 bits de red y 5 bits de host (30 hosts utilizables)",
        "27 subredes",
        "27 hosts en total"
      ],
      a: 1,
      e: "/27 indica 27 bits de red y 5 de host: 2^5 − 2 = 30 hosts utilizables por subred (máscara 255.255.255.224)."
    },
    {
      q: "El campo TTL (Time To Live) de un datagrama IPv4 sirve para:",
      o: [
        "Cifrar el paquete",
        "Limitar el número de saltos (routers) que puede atravesar y evitar bucles infinitos",
        "Indicar la velocidad de transmisión",
        "Almacenar la dirección MAC"
      ],
      a: 1,
      e: "El TTL se decrementa en cada router; cuando llega a 0 el paquete se descarta, evitando que circule indefinidamente por bucles de enrutamiento."
    },
    {
      q: "En IPv6, el campo equivalente al TTL de IPv4 se denomina:",
      o: ["Hop Limit (Límite de saltos)", "Flow Label", "Traffic Class", "Next Header"],
      a: 0,
      e: "En IPv6 el campo Hop Limit (Límite de saltos) cumple la misma función que el TTL de IPv4."
    },
    {
      q: "¿Qué dispositivo opera principalmente en la capa de red (capa 3) interconectando redes diferentes?",
      o: ["El hub", "El switch de capa 2", "El router (encaminador)", "El repetidor"],
      a: 2,
      e: "El router opera en la capa de red (3), interconectando redes diferentes y tomando decisiones de encaminamiento basadas en direcciones IP."
    }
  ]
};
