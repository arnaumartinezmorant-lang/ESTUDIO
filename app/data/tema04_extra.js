// Tema 4 - Preguntas adicionales (ampliación de cobertura)
window.TEMAS["tema04"].preguntas.push(
  {
    q: "¿Qué subcapa del nivel de enlace se encarga del control de acceso al medio?",
    o: ["LLC (802.2)", "MAC (802.3)", "Física", "Red"],
    a: 1,
    e: "La subcapa MAC (Media Access Control, 802.3) controla el acceso al medio compartido; la LLC (802.2) hace de interfaz con la capa superior."
  },
  {
    q: "La subcapa LLC (Logical Link Control) tiene como función principal:",
    o: [
      "Controlar el acceso físico al cable",
      "Servir de interfaz con la capa de red y gestionar control de flujo/errores lógicos",
      "Convertir bits en señales",
      "Asignar direcciones IP"
    ],
    a: 1,
    e: "La LLC (IEEE 802.2) actúa como interfaz con la capa de red y se encarga del control lógico del enlace (flujo y errores)."
  },
  {
    q: "Un dispositivo de acceso al medio (como un hub) se diferencia de un nodo en que:",
    o: [
      "Tiene dirección de red (IP)",
      "Opera solo en las capas física y/o de enlace, sin dirección de red",
      "Encamina paquetes entre redes",
      "Asigna direcciones MAC"
    ],
    a: 1,
    e: "Los dispositivos de acceso al medio operan en capas física y/o de enlace y no tienen dirección de red; los nodos sí son direccionables a nivel de red."
  },
  {
    q: "¿Por qué la técnica de conteo de caracteres para delimitar tramas es poco fiable?",
    o: [
      "Porque consume mucho ancho de banda",
      "Porque si el contador se altera por un error, se pierde la sincronización de las tramas siguientes",
      "Porque no funciona en redes digitales",
      "Porque requiere fibra óptica"
    ],
    a: 1,
    e: "Si un error modifica el campo contador, el receptor pierde dónde empieza la siguiente trama, estropeando todas las posteriores."
  },
  {
    q: "En el carácter stuffing, la secuencia que indica el FIN de una trama es:",
    o: ["DLE-STX", "DLE-ETX", "01111110", "FF-FF"],
    a: 1,
    e: "En carácter stuffing, DLE-STX marca el inicio y DLE-ETX marca el fin de la trama."
  },
  {
    q: "En el lado receptor, ¿qué hace el bit stuffing con los ceros insertados artificialmente?",
    o: [
      "Los deja en los datos",
      "Elimina el 0 que sigue a cinco 1 consecutivos, recuperando los datos originales",
      "Los convierte en banderas",
      "Los duplica"
    ],
    a: 1,
    e: "El receptor, al ver cinco 1 seguidos de un 0 insertado, elimina ese 0 de relleno y recupera la secuencia original."
  },
  {
    q: "Una dirección MAC suele representarse en notación:",
    o: [
      "Decimal con puntos",
      "Hexadecimal (6 grupos de 2 dígitos)",
      "Binaria de 32 bits",
      "Octal"
    ],
    a: 1,
    e: "Las MAC de 48 bits se representan en hexadecimal: 6 grupos de 2 dígitos, por ejemplo 00:1A:2B:3C:4D:5E."
  },
  {
    q: "Los 24 últimos bits de una dirección MAC los asigna:",
    o: [
      "El IEEE",
      "El fabricante del adaptador (número de serie único)",
      "El sistema operativo",
      "El router"
    ],
    a: 1,
    e: "Los 24 primeros bits (OUI) los asigna el IEEE al fabricante; los 24 últimos los asigna el fabricante como número de serie único."
  },
  {
    q: "¿Para qué resulta útil el modo promiscuo de un adaptador de red?",
    o: [
      "Para acelerar la conexión",
      "Para analizar (capturar) todo el tráfico que circula por ese punto de la red",
      "Para asignar IPs",
      "Para cifrar las tramas"
    ],
    a: 1,
    e: "El modo promiscuo permite a herramientas de análisis (sniffers) capturar todas las tramas que pasan, no solo las dirigidas al equipo."
  },
  {
    q: "El método de detección de errores por paridad falla cuando:",
    o: [
      "Cambia un solo bit",
      "Cambia un número par de bits (los errores se compensan y no se detectan)",
      "No hay ningún error",
      "Se usa paridad impar"
    ],
    a: 1,
    e: "La paridad detecta un número impar de bits erróneos, pero si cambia un número par de bits el recuento de paridad coincide y el error pasa inadvertido."
  },
  {
    q: "En el método CRC, el emisor añade al mensaje los bits de:",
    o: [
      "Relleno aleatorio",
      "Redundancia obtenidos del resto de dividir el mensaje por el polinomio generador",
      "La dirección MAC",
      "El preámbulo"
    ],
    a: 1,
    e: "En CRC, el emisor divide el mensaje (ampliado) por el polinomio generador y añade el resto como bits de redundancia (FCS)."
  },
  {
    q: "¿Qué afirmación sobre el checksum es correcta?",
    o: [
      "Suma los segmentos de datos y añade el complemento del resultado para que el receptor verifique",
      "Cifra los datos con una clave secreta",
      "Solo detecta errores de un bit",
      "Es idéntico al bit stuffing"
    ],
    a: 0,
    e: "El checksum suma los segmentos, complementa el resultado y lo añade; el receptor vuelve a sumar todo y, si da el resultado esperado, no hay error."
  },
  {
    q: "Un 'dominio de colisión' es:",
    o: [
      "El conjunto de equipos cuyas tramas pueden colisionar entre sí al compartir el medio",
      "El área de cobertura Wi-Fi",
      "Un rango de direcciones IP",
      "Una VLAN"
    ],
    a: 0,
    e: "Un dominio de colisión es el conjunto de dispositivos que comparten el medio y cuyas transmisiones pueden colisionar."
  },
  {
    q: "¿Qué dispositivo divide la red en varios dominios de colisión (uno por puerto)?",
    o: ["El hub", "El switch", "El repetidor", "El cable coaxial"],
    a: 1,
    e: "El switch crea un dominio de colisión por puerto, eliminando prácticamente las colisiones; el hub mantiene un único dominio de colisión."
  },
  {
    q: "Un 'dominio de difusión' (broadcast) queda delimitado por:",
    o: [
      "Un hub",
      "Un router (los routers no propagan el broadcast)",
      "Un repetidor",
      "Un terminador"
    ],
    a: 1,
    e: "El dominio de difusión lo delimita el router, ya que no reenvía las tramas de broadcast; switches y hubs sí las propagan."
  },
  {
    q: "En el método de paso de testigo, ¿qué topología es la habitual?",
    o: ["Bus", "Anillo", "Malla", "Árbol"],
    a: 1,
    e: "El paso de testigo (token) es característico de la topología en anillo (Token Ring): solo transmite quien posee el testigo."
  },
  {
    q: "CSMA significa, en el control de acceso al medio:",
    o: [
      "Carrier Sense Multiple Access (acceso múltiple con detección de portadora)",
      "Collision Sensitive Media Adapter",
      "Central Switch Management Access",
      "Continuous Sending Method Algorithm"
    ],
    a: 0,
    e: "CSMA = Carrier Sense Multiple Access: las estaciones escuchan el medio (detección de portadora) antes de transmitir."
  },
  {
    q: "La diferencia entre CSMA/CD y CSMA/CA es que:",
    o: [
      "CD detecta colisiones (redes cableadas) y CA trata de evitarlas (redes inalámbricas)",
      "CD es inalámbrico y CA cableado",
      "Son exactamente iguales",
      "CA no escucha el medio"
    ],
    a: 0,
    e: "CSMA/CD (Collision Detection) se usa en Ethernet cableada; CSMA/CA (Collision Avoidance) evita colisiones y se usa en Wi-Fi (802.11)."
  },
  {
    q: "El 'problema del nodo oculto' es una razón por la que en Wi-Fi:",
    o: [
      "No se pueden evitar todas las colisiones aun usando CSMA/CA",
      "No se necesita ningún control de acceso",
      "El cable se calienta",
      "Las MAC se duplican"
    ],
    a: 0,
    e: "El nodo oculto (dos estaciones que no se 'oyen' entre sí pero alcanzan al AP) hace que CSMA/CA no pueda evitar todas las colisiones; por eso se usan RTS/CTS."
  },
  {
    q: "En el control de flujo por 'parada y espera', el principal inconveniente es:",
    o: [
      "Que provoca muchas colisiones",
      "El bajo aprovechamiento del enlace, pues el emisor permanece inactivo esperando cada ACK",
      "Que no detecta errores",
      "Que no usa acuses de recibo"
    ],
    a: 1,
    e: "En parada y espera el emisor envía una trama y espera el ACK; mientras espera no transmite, desaprovechando el enlace (sobre todo en enlaces largos)."
  },
  {
    q: "El tamaño de la 'ventana' en el control de flujo por ventana deslizante determina:",
    o: [
      "El número de tramas que se pueden enviar sin haber recibido confirmación",
      "El tamaño de la dirección MAC",
      "La velocidad del cable",
      "El número de colisiones permitidas"
    ],
    a: 0,
    e: "La ventana indica cuántas tramas pueden estar 'en vuelo' (enviadas sin ACK) simultáneamente, mejorando el aprovechamiento del enlace."
  },
  {
    q: "Cuando un switch reenvía una trama únicamente por el puerto donde está la MAC destino, realiza:",
    o: ["Flooding", "Forwarding (reenvío selectivo)", "Filtering total", "Broadcasting"],
    a: 1,
    e: "El forwarding o reenvío selectivo envía la trama solo por el puerto asociado a la MAC destino (cuando está en la tabla)."
  },
  {
    q: "¿Qué ocurre si un switch recibe una trama cuya MAC destino está en el MISMO puerto que la MAC origen?",
    o: [
      "La reenvía por todos los puertos",
      "La filtra/descarta (no necesita salir por otro puerto)",
      "La envía al router",
      "Genera una colisión"
    ],
    a: 1,
    e: "Si origen y destino están en el mismo segmento/puerto, el switch filtra la trama: no la reenvía, porque ya está en su destino."
  },
  {
    q: "Las entradas dinámicas de la tabla MAC de un switch se eliminan tras un tiempo de inactividad llamado:",
    o: ["TTL", "Aging time (timeout)", "Backoff", "RTT"],
    a: 1,
    e: "Las entradas aprendidas dinámicamente expiran tras el aging time (tiempo de envejecimiento) si no se vuelve a ver tráfico de esa MAC."
  },
  {
    q: "El estándar de PoE que proporciona mayor potencia (hasta ~90 W) es:",
    o: ["802.3af", "802.3at", "802.3bt", "802.3u"],
    a: 2,
    e: "802.3bt (PoE++/4PPoE) ofrece la mayor potencia (hasta ~90 W); 802.3af (~15 W) y 802.3at (~30 W) son anteriores."
  },
  {
    q: "El principal problema que evita el protocolo Spanning Tree (STP) es:",
    o: [
      "El agotamiento de IPs",
      "Las tormentas de broadcast y bucles de capa 2 en topologías con redundancia",
      "La duplicación de direcciones MAC",
      "La pérdida de potencia eléctrica"
    ],
    a: 1,
    e: "STP evita los bucles de capa 2 (y las tormentas de broadcast que provocan) bloqueando enlaces redundantes hasta que se necesiten."
  },
  {
    q: "El BID (Bridge ID) en STP se compone de:",
    o: [
      "La prioridad del switch más su dirección MAC",
      "Solo la dirección IP",
      "El número de puertos",
      "El ancho de banda total"
    ],
    a: 0,
    e: "El BID se forma con la prioridad (por defecto 32768) y la dirección MAC del switch; el menor BID gana y se convierte en raíz."
  },
  {
    q: "En STP, en cada segmento se elige un PUERTO DESIGNADO, que es:",
    o: [
      "El puerto bloqueado",
      "El puerto con el mejor (menor) coste hacia la raíz en ese segmento",
      "El puerto del switch raíz con mayor BID",
      "Cualquier puerto al azar"
    ],
    a: 1,
    e: "En cada segmento se designa el puerto que ofrece el mejor camino (menor coste) hacia el switch raíz; el resto se bloquean."
  },
  {
    q: "El consorcio que publicó el primer Ethernet (DIX) estaba formado por:",
    o: [
      "Digital, Intel y Xerox",
      "Dell, IBM y Xerox",
      "Cisco, Intel y Apple",
      "Microsoft, Intel y HP"
    ],
    a: 0,
    e: "DIX corresponde a Digital Equipment Corporation, Intel y Xerox, autores del primer estándar Ethernet."
  },
  {
    q: "En la trama Ethernet, el campo 'Preámbulo' sirve para:",
    o: [
      "Llevar los datos del usuario",
      "Sincronizar el reloj del receptor antes de la trama",
      "Almacenar la MAC destino",
      "Calcular el CRC"
    ],
    a: 1,
    e: "El preámbulo (y el SFD) sincroniza el reloj del receptor con el del emisor para que pueda leer correctamente los bits de la trama."
  },
  {
    q: "El valor 0x86DD en el campo Tipo de una trama Ethernet II indica que se transporta:",
    o: ["IPv4", "IPv6", "ARP", "RARP"],
    a: 1,
    e: "0x86DD = IPv6; 0x0800 = IPv4 y 0x0806 = ARP."
  },
  {
    q: "El estándar 100BaseT (Fast Ethernet) ofrece una velocidad de:",
    o: ["10 Mbps", "100 Mbps", "1000 Mbps", "10 Gbps"],
    a: 1,
    e: "En la nomenclatura, el número inicial es la velocidad en Mbps: 100BaseT = 100 Mbps (Fast Ethernet)."
  }
);
