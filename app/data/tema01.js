// Tema 1 - Caracterización de redes
// Cada pregunta: { q: enunciado, o: [4 opciones], a: índice respuesta correcta (0-3), e: explicación }
window.TEMAS = window.TEMAS || {};
window.TEMAS["tema01"] = {
  titulo: "Tema 1 · Caracterización de redes",
  preguntas: [
    {
      q: "¿Qué es la comunicación según el tema?",
      o: [
        "El proceso que involucra a un emisor, un mensaje transmitido a través de un canal y a un receptor",
        "El simple almacenamiento de datos en un dispositivo",
        "La conversión de señales analógicas en digitales únicamente",
        "El proceso de cifrado de la información antes de guardarla"
      ],
      a: 0,
      e: "La comunicación es el proceso que involucra a un emisor, a un mensaje que se transmite por un canal y a un receptor."
    },
    {
      q: "En un sistema de comunicación, ¿qué elemento transforma la información en una forma entendible para el canal?",
      o: ["El decodificador", "El codificador", "El receptor", "El ruido"],
      a: 1,
      e: "El codificador transforma la información en una forma entendible para el canal; el decodificador interpreta el código y recupera el mensaje."
    },
    {
      q: "¿Qué elemento del sistema de comunicación define las reglas y convenciones que comparten emisor y receptor?",
      o: ["El código", "La señal", "El lenguaje", "El canal"],
      a: 2,
      e: "El lenguaje son las reglas y convenciones que comparten emisor y receptor (por ejemplo, el español). El código es el sistema de signos y reglas."
    },
    {
      q: "¿Qué es el ruido en un sistema de comunicación?",
      o: [
        "La información transmitida por el emisor",
        "El medio por el que viaja la señal",
        "Cualquier perturbación que afecta a la señal durante la transmisión",
        "El conjunto de signos y reglas del código"
      ],
      a: 2,
      e: "El ruido es cualquier perturbación que afecta a la señal durante la transmisión."
    },
    {
      q: "En condiciones reales, ¿cómo se expresa la señal recibida respecto a la enviada?",
      o: [
        "S recibida = S enviada",
        "S recibida = S enviada + Ruido",
        "S recibida = S enviada − Ruido",
        "S recibida = Ruido únicamente"
      ],
      a: 1,
      e: "Lo ideal sería S recibida = S enviada, pero la realidad es S recibida = S enviada + Ruido."
    },
    {
      q: "¿Qué perturbación aumenta cuanto mayor es la distancia recorrida por la señal?",
      o: ["La distorsión", "La atenuación", "Las interferencias externas", "El ruido intrínseco"],
      a: 1,
      e: "La atenuación es mayor a más distancia."
    },
    {
      q: "Una red informática se define como...",
      o: [
        "Un único ordenador con varios programas instalados",
        "La unión de dos o más dispositivos mediante un medio de transmisión para intercambiar datos y compartir recursos",
        "Un conjunto de cables sin dispositivos conectados",
        "Un programa que cifra la información"
      ],
      a: 1,
      e: "Una red es la unión de dos o más dispositivos mediante un medio de transmisión con el objetivo de intercambiar datos y compartir recursos."
    },
    {
      q: "¿Cuál NO es un criterio de clasificación de redes mencionado en el tema?",
      o: [
        "Según el ámbito geográfico",
        "Según la naturaleza de la señal",
        "Según el color del cableado",
        "Según el método de transmisión"
      ],
      a: 2,
      e: "Los criterios son: ámbito geográfico, naturaleza de la señal, medio de transmisión, modo de transmisión y método de transmisión."
    },
    {
      q: "¿Qué tipo de red conecta dispositivos cercanos a una persona en un radio normalmente inferior a 10 metros?",
      o: ["LAN", "MAN", "WAN", "PAN"],
      a: 3,
      e: "Las PAN (Personal Area Network) operan en un espacio muy reducido, normalmente inferior a 10 metros, usando tecnologías como Bluetooth."
    },
    {
      q: "¿Qué red cubre un área pequeña como una casa, oficina o centro educativo, con alta velocidad y propiedad privada?",
      o: ["LAN", "WAN", "MAN", "PAN"],
      a: 0,
      e: "Las LAN (Local Area Network) conectan dispositivos en un área pequeña, a alta velocidad (100 Mbps a varios Gbps) y son de propiedad privada."
    },
    {
      q: "Una red que interconecta varias LAN dentro de una ciudad o campus universitario se denomina:",
      o: ["PAN", "LAN", "MAN", "WAN"],
      a: 2,
      e: "La MAN (Metropolitan Area Network) cubre un área mayor que una LAN e interconecta varias redes locales dentro de una ciudad o campus."
    },
    {
      q: "¿Qué red de gran extensión geográfica conecta múltiples LAN y MAN y suele ser gestionada por proveedores (ISP)?",
      o: ["PAN", "WAN", "MAN", "LAN"],
      a: 1,
      e: "La WAN (Wide Area Network) abarca regiones, países o todo el mundo, conecta LAN y MAN y la gestionan proveedores de comunicaciones (ISP)."
    },
    {
      q: "Según la naturaleza de la señal, las redes que transmiten mediante ondas continuas que varían en amplitud, frecuencia o fase son:",
      o: ["Digitales", "Analógicas", "Cableadas", "Inalámbricas"],
      a: 1,
      e: "Las redes analógicas transmiten información mediante señales analógicas (ondas continuas) y son más susceptibles al ruido."
    },
    {
      q: "¿Qué ventaja presentan las redes digitales frente a las analógicas?",
      o: [
        "Mayor susceptibilidad al ruido",
        "Menor velocidad de transmisión",
        "Señales discretas más resistentes al ruido y facilitan compresión y cifrado",
        "Imposibilidad de cifrar los datos"
      ],
      a: 2,
      e: "Las redes digitales usan señales discretas más resistentes al ruido, con mayor velocidad y que facilitan compresión y cifrado."
    },
    {
      q: "¿Qué inconveniente tienen las redes inalámbricas frente a las cableadas?",
      o: [
        "Menor movilidad",
        "Instalación más cara",
        "Son vulnerables a ruido, interferencias y ataques",
        "No permiten movilidad"
      ],
      a: 2,
      e: "Las inalámbricas son vulnerables a ruido, interferencias y ataques, además de menor velocidad y estabilidad; su ventaja es la movilidad y menor coste."
    },
    {
      q: "La transmisión unidireccional, donde un dispositivo solo emite y el otro solo recibe (como la TV tradicional), se denomina:",
      o: ["Half-duplex", "Full-duplex", "Simplex", "Multiplex"],
      a: 2,
      e: "Simplex es la transmisión unidireccional. Ejemplo: la televisión tradicional."
    },
    {
      q: "El modo de transmisión de los walkie-talkies, en ambos sentidos pero no simultáneamente, es:",
      o: ["Simplex", "Half-duplex (semiduplex)", "Full-duplex", "Broadcast"],
      a: 1,
      e: "Half-duplex permite la transmisión en ambos sentidos, pero no a la vez. Ejemplo: walkie-talkies."
    },
    {
      q: "Una llamada telefónica, donde ambos pueden hablar y escuchar a la vez, es un ejemplo de:",
      o: ["Simplex", "Half-duplex", "Full-duplex (duplex completo)", "Punto a punto"],
      a: 2,
      e: "Full-duplex permite la transmisión en ambos sentidos al mismo tiempo. Ejemplo: la llamada telefónica."
    },
    {
      q: "En las redes según el método de transmisión, ¿qué caracteriza a las redes punto a punto (P2P)?",
      o: [
        "Existe un único canal compartido por todos los dispositivos",
        "Cada enlace conecta exactamente 2 nodos",
        "Cuando un nodo transmite, todos los demás lo reciben",
        "Se producen colisiones constantemente"
      ],
      a: 1,
      e: "En las redes punto a punto cada enlace conecta exactamente 2 nodos; para llegar a destinos no conectados directamente se pasa por nodos intermedios."
    },
    {
      q: "¿Cuál es un inconveniente de las redes de difusión (broadcast)?",
      o: [
        "Necesitan muchos enlaces si hay muchos dispositivos",
        "Se pueden producir colisiones si dos nodos transmiten a la vez",
        "Solo conectan dos nodos",
        "No permiten identificar al destinatario"
      ],
      a: 1,
      e: "En las redes de difusión hay un único canal compartido; pueden producirse colisiones si dos nodos transmiten al mismo tiempo."
    },
    {
      q: "¿Qué es la topología de una red?",
      o: [
        "El protocolo de cifrado utilizado",
        "La disposición física o lógica de los elementos que forman una red",
        "El número de bits transmitidos por segundo",
        "El tipo de señal empleada"
      ],
      a: 1,
      e: "La topología es la disposición física/lógica de los elementos que forman una red."
    },
    {
      q: "En la topología en bus, ¿para qué sirven los terminadores en los extremos del cable?",
      o: [
        "Para amplificar la señal",
        "Para indicar que no hay más ordenadores en el extremo y cerrar el bus",
        "Para convertir la señal analógica en digital",
        "Para conectar la red a Internet"
      ],
      a: 1,
      e: "El terminador es una resistencia que indica que no existen más ordenadores en el extremo y permite cerrar el bus."
    },
    {
      q: "¿Qué inconveniente es característico de la topología en bus?",
      o: [
        "Es muy cara por el cableado",
        "Colisiones frecuentes y poca seguridad",
        "Requiere un nodo central costoso",
        "El tráfico solo fluye en una dirección"
      ],
      a: 1,
      e: "La topología en bus es sencilla y económica pero sufre colisiones frecuentes y poca seguridad (cualquier nodo ve las señales de los demás)."
    },
    {
      q: "En la topología en anillo, ¿qué debe poseer un equipo para poder transmitir?",
      o: ["El terminador", "El testigo (token)", "La dirección de broadcast", "El nodo central"],
      a: 1,
      e: "Solo el equipo que posee el testigo puede transmitir; la información viaja en un único sentido evitando colisiones."
    },
    {
      q: "¿Qué ocurre en una topología en anillo si un nodo deja de funcionar?",
      o: [
        "No afecta al resto de la red",
        "La comunicación en todo el anillo se pierde",
        "Se duplica la velocidad",
        "Aumenta la seguridad de la red"
      ],
      a: 1,
      e: "Si algún nodo del anillo deja de funcionar, la comunicación en todo el anillo se pierde."
    },
    {
      q: "En la topología en estrella, ¿qué consecuencia tiene el fallo del nodo central?",
      o: [
        "No afecta a la red",
        "Solo afecta a un nodo periférico",
        "Puede echar abajo la red entera",
        "Mejora el rendimiento"
      ],
      a: 2,
      e: "En estrella, el fallo de un nodo periférico no influye en el resto, pero el fallo del nodo central puede echar abajo toda la red."
    },
    {
      q: "¿Qué topología conecta cada dispositivo directamente a varios otros, ofreciendo múltiples rutas y gran redundancia?",
      o: ["Topología en bus", "Topología mallada", "Topología en estrella", "Topología en anillo"],
      a: 1,
      e: "La topología mallada interconecta los nodos de forma descentralizada con múltiples rutas, mejorando redundancia y tolerancia a fallos."
    },
    {
      q: "¿Cuál es el principal inconveniente de la topología mallada?",
      o: [
        "Baja redundancia",
        "Depende de un nodo central",
        "Es muy cara porque requiere mucho cableado y es difícil de gestionar",
        "Solo permite un camino entre dispositivos"
      ],
      a: 2,
      e: "La malla es muy cara por la gran cantidad de cableado y resulta difícil de gestionar y solucionar problemas."
    },
    {
      q: "La topología en árbol (jerárquica) puede verse como:",
      o: [
        "Una combinación de varias topologías en estrella",
        "Un único bus con terminadores",
        "Un anillo cerrado",
        "Una malla completa"
      ],
      a: 0,
      e: "La topología en árbol coloca los nodos en forma de árbol y puede verse como una combinación de varias topologías en estrella."
    },
    {
      q: "Según el tema, una topología física en estrella con un hub como elemento central se comporta como una topología lógica de:",
      o: ["Anillo", "Bus", "Malla", "Árbol"],
      a: 1,
      e: "Una topología física en estrella con un hub central da lugar a una topología lógica de bus."
    },
    {
      q: "¿En qué se diferencian la topología física y la lógica?",
      o: [
        "La física es el comportamiento global y la lógica la disposición de cables",
        "La física es la disposición de los elementos y la lógica el comportamiento global de la red",
        "Son exactamente lo mismo",
        "La lógica solo se aplica a redes inalámbricas"
      ],
      a: 1,
      e: "La topología física es cómo están dispuestos físicamente los elementos; la lógica es el comportamiento global determinado por los elementos de interconexión."
    },
    {
      q: "Los sistemas de numeración en los que el valor depende solo del símbolo (como los números romanos) se llaman:",
      o: ["Posicionales", "No posicionales", "Binarios", "Hexadecimales"],
      a: 1,
      e: "En los no posicionales el valor depende solo del símbolo (ej.: números romanos). En los posicionales depende del símbolo y de su posición."
    },
    {
      q: "En un sistema de numeración posicional, ¿qué es la base (radix)?",
      o: [
        "El número de dígitos distintos del sistema",
        "El primer dígito del número",
        "La suma de todos los dígitos",
        "El número total de posiciones"
      ],
      a: 0,
      e: "La base (radix) es el número de dígitos distintos. Base 10 → dígitos 0-9; base 2 → 0 y 1; base 16 → 0-9 y A-F."
    },
    {
      q: "¿Por qué el sistema binario se adapta bien a la informática y electrónica digital?",
      o: [
        "Porque tiene 10 dígitos como los dedos de las manos",
        "Porque se adapta al funcionamiento de los transistores (dos estados: encendido/apagado)",
        "Porque usa letras además de números",
        "Porque ocupa menos símbolos que el hexadecimal"
      ],
      a: 1,
      e: "El binario (base 2, dígitos 0 y 1) se adapta a los transistores, que tienen dos estados: encendido/apagado."
    },
    {
      q: "El sistema hexadecimal utiliza base 16. ¿Qué dígitos emplea?",
      o: ["Solo 0 y 1", "Del 0 al 9", "Del 0 al 9 y letras A-F", "Del 0 al 15 en decimal"],
      a: 2,
      e: "El hexadecimal usa los dígitos 0–9 y las letras A–F (donde A=10 ... F=15)."
    },
    {
      q: "¿Cuál es el resultado de convertir el binario (101)₂ a decimal?",
      o: ["3", "4", "5", "6"],
      a: 2,
      e: "(101)₂ = (1×2²)+(0×2¹)+(1×2⁰) = 4+0+1 = 5."
    },
    {
      q: "¿A qué valor decimal equivale el hexadecimal (2F)₁₆?",
      o: ["31", "47", "57", "45"],
      a: 1,
      e: "(2F)₁₆ = (2×16¹)+(15×16⁰) = 32+15 = 47."
    },
    {
      q: "¿Qué método se usa para convertir un número decimal a binario?",
      o: [
        "Sumar potencias de 2",
        "Divisiones sucesivas entre 2 y leer los restos de abajo hacia arriba",
        "Multiplicar por 16",
        "Agrupar en bloques de 4 bits"
      ],
      a: 1,
      e: "Decimal → Binario se hace por divisiones sucesivas entre 2, leyendo el último cociente y los restos de abajo hacia arriba."
    },
    {
      q: "Para convertir de binario a hexadecimal de forma sencilla se agrupan los bits en grupos de:",
      o: ["2 bits", "3 bits", "4 bits", "8 bits"],
      a: 2,
      e: "4 bits equivalen a 1 dígito hexadecimal, por lo que se agrupa el binario en grupos de 4 bits."
    },
    {
      q: "¿Cuántos hosts puede haber como máximo en un sistema decimal de ejemplo? (Pregunta de relación) ¿Cuántas combinaciones representa cada dígito en base 2?",
      o: ["10 combinaciones", "16 combinaciones", "2 combinaciones", "8 combinaciones"],
      a: 2,
      e: "En base 2 cada dígito (bit) representa 2 combinaciones posibles: 0 o 1."
    },
    {
      q: "¿Para qué se utiliza ampliamente el sistema hexadecimal según el tema?",
      o: [
        "Para contar con los dedos",
        "En direcciones de memoria, IPv6, direcciones MAC, colores HTML y programación a bajo nivel",
        "Solo en operaciones decimales",
        "Para representar señales analógicas"
      ],
      a: 1,
      e: "El hexadecimal se usa en direcciones de memoria, IPv6, MAC, colores HTML y programación a bajo nivel, por su conversión sencilla con binario."
    },
    {
      q: "Una de las perturbaciones de la SNR donde unas señales compiten con otras se denomina:",
      o: ["Atenuación", "Distorsión", "Ruido intrínseco", "Codificación"],
      a: 1,
      e: "La distorsión se produce cuando unas señales compiten con otras."
    },
    {
      q: "¿Qué representa la 'señal emitida' en un sistema de comunicación?",
      o: [
        "La versión de la señal que llega al receptor",
        "La forma física del mensaje codificado al salir del emisor",
        "El medio por el que viaja la señal",
        "La perturbación que afecta a la transmisión"
      ],
      a: 1,
      e: "La señal emitida es la forma física del mensaje codificado al salir del emisor; la señal recibida es la versión que llega al receptor."
    },
    {
      q: "Una ventaja de la topología en estrella es:",
      o: [
        "Que el fallo del nodo central no afecta a nada",
        "Que es fácil de implementar y ampliar, incluso en grandes redes",
        "Que no necesita ningún dispositivo central",
        "Que evita por completo el uso de cable"
      ],
      a: 1,
      e: "La estrella es fácil de implementar y ampliar; además el fallo de un nodo periférico no afecta al resto de la red."
    },
    {
      q: "¿Qué objetivo persiguen las topologías de red?",
      o: [
        "Maximizar la fiabilidad y usar la vía de coste mínimo con tiempo de respuesta mínimo",
        "Aumentar el número de colisiones",
        "Reducir la velocidad de la red",
        "Eliminar la necesidad de direcciones"
      ],
      a: 0,
      e: "Las topologías buscan maximizar la fiabilidad, encaminar por la vía de coste mínimo y lograr rendimiento óptimo con tiempo de respuesta mínimo."
    },
    {
      q: "En el sistema decimal, ¿cuál es su principal inconveniente en informática?",
      o: [
        "Es difícil de entender para los humanos",
        "Es difícil representarlo con circuitos electrónicos",
        "No permite representar números grandes",
        "Solo usa dos símbolos"
      ],
      a: 1,
      e: "El decimal es natural para los humanos (10 dedos) pero es difícil de representar con circuitos electrónicos."
    },
    {
      q: "Un ejemplo de tecnología usada habitualmente en redes PAN es:",
      o: ["Fibra óptica submarina", "Bluetooth", "Enlaces de microondas de larga distancia", "Satélites GEO"],
      a: 1,
      e: "Las PAN suelen usar tecnologías inalámbricas de corto alcance como Bluetooth, infrarrojos o Wi-Fi."
    },
    {
      q: "¿Qué afirmación sobre las WAN es correcta?",
      o: [
        "Suele pertenecer a una sola organización privada",
        "No suele pertenecer a una sola organización y la gestionan proveedores (ISP)",
        "Solo cubre una habitación",
        "Tiene tasas de error siempre nulas"
      ],
      a: 1,
      e: "La WAN no suele pertenecer a una sola organización; la gestionan proveedores de comunicaciones (ISP) usando infraestructuras públicas y/o privadas."
    },
    {
      q: "El medio cableado tiene como ventaja principal frente al inalámbrico:",
      o: [
        "Mayor movilidad",
        "Menor coste de instalación",
        "Alta velocidad, estabilidad y seguridad",
        "Inmunidad total a cualquier interferencia"
      ],
      a: 2,
      e: "Las redes cableadas ofrecen alta velocidad, son estables y seguras; sus inconvenientes son menor movilidad e instalación más cara."
    }
  ]
};
