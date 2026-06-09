// Tema 3 - Preguntas adicionales (ampliación de cobertura)
window.TEMAS["tema03"].preguntas.push(
  {
    q: "Las características FUNCIONALES de la interfaz física definen:",
    o: [
      "Las dimensiones y forma del conector",
      "El significado o función de cada señal/circuito (qué hace cada pin)",
      "Los niveles de tensión de los bits",
      "La secuencia de eventos para transmitir"
    ],
    a: 1,
    e: "Las características funcionales definen el significado o función de cada circuito; las mecánicas la forma, las eléctricas los niveles y las de procedimiento la secuencia de eventos."
  },
  {
    q: "Las características ELÉCTRICAS de la interfaz física se ocupan de:",
    o: [
      "La forma del conector",
      "Los niveles de tensión que representan los bits y su temporización",
      "El significado de cada pin",
      "La secuencia de eventos"
    ],
    a: 1,
    e: "Las características eléctricas determinan los niveles de tensión que representan los bits y aspectos de temporización."
  },
  {
    q: "¿A cuántos bits equivale 1 Byte?",
    o: ["4 bits", "8 bits", "16 bits", "1024 bits"],
    a: 1,
    e: "1 Byte = 8 bits. Es importante no confundir bit (b) con byte (B)."
  },
  {
    q: "¿Cuántos bps son 2 Mbps?",
    o: ["2.000 bps", "2.000.000 bps", "2.097.152 bps", "200.000 bps"],
    a: 1,
    e: "La velocidad usa base 10: 2 Mbps = 2.000.000 bps (2 × 1000 × 1000)."
  },
  {
    q: "La capacidad de un canal (teorema relacionado con Shannon/Nyquist) depende principalmente de:",
    o: [
      "El color del cable",
      "El ancho de banda y la relación señal/ruido",
      "El número de conectores",
      "La temperatura ambiente únicamente"
    ],
    a: 1,
    e: "La capacidad máxima de un canal depende de su ancho de banda y de la relación señal/ruido (SNR)."
  },
  {
    q: "¿Qué se usa para corregir la distorsión de retardo, originada porque la velocidad varía con la frecuencia?",
    o: ["Amplificadores", "Ecualizadores", "Terminadores", "Repetidores"],
    a: 1,
    e: "La distorsión de retardo se corrige con ecualizadores, que compensan las distintas velocidades de propagación según la frecuencia."
  },
  {
    q: "El ruido térmico se debe a:",
    o: [
      "La caída de un rayo",
      "La agitación térmica de los electrones, presente en todos los medios",
      "El acoplamiento entre pares cercanos",
      "Una mala conexión del conector"
    ],
    a: 1,
    e: "El ruido térmico (o blanco) se debe a la agitación térmica de los electrones y está presente en todos los dispositivos y medios de transmisión."
  },
  {
    q: "¿Cuántos hilos/alambres forma cada par del cable de par trenzado?",
    o: ["1", "2", "4", "8"],
    a: 1,
    e: "Cada par está formado por 2 alambres de cobre trenzados entre sí; el cable suele tener 4 pares (8 hilos)."
  },
  {
    q: "En la nomenclatura del apantallamiento (p. ej. S/FTP), la primera letra (antes de la barra) hace referencia a:",
    o: [
      "La protección individual de cada par",
      "La protección global del conjunto de todos los pares",
      "El color del cable",
      "El número de pares"
    ],
    a: 1,
    e: "En la notación XX/YYY, lo de antes de la barra indica el apantallamiento GLOBAL del cable, y lo de después el de cada par."
  },
  {
    q: "Un cable U/UTP es un cable de par trenzado:",
    o: [
      "Totalmente apantallado",
      "Sin ningún apantallamiento (ni global ni por pares)",
      "Con malla global y lámina por par",
      "De fibra óptica"
    ],
    a: 1,
    e: "U/UTP = Unshielded/Unshielded Twisted Pair: no tiene apantallamiento ni global ni individual. Es flexible y económico, pero sensible a interferencias."
  },
  {
    q: "¿Qué categoría de par trenzado se asocia a 10GBASE-T con 600 MHz y conector GG-45 o TERA?",
    o: ["Cat 5e", "Cat 6", "Cat 6a", "Cat 7"],
    a: 3,
    e: "La Cat 7 (Clase F) ofrece 600 MHz, soporta 10G y usa conectores como GG-45 o TERA, siempre apantallada."
  },
  {
    q: "¿Cuántos hilos utiliza realmente Fast Ethernet (100BASE-TX) de los 8 disponibles en el RJ-45?",
    o: ["2 hilos (1 par)", "4 hilos (2 pares)", "6 hilos (3 pares)", "8 hilos (4 pares)"],
    a: 1,
    e: "100BASE-TX usa 4 hilos (2 pares): uno para transmitir y otro para recibir. Gigabit (1000BASE-T) usa los 4 pares."
  },
  {
    q: "La norma T568A y la T568B se diferencian en:",
    o: [
      "El número de pines del conector",
      "El orden (código de colores) de los pares en el conector",
      "El tipo de cable (fibra o cobre)",
      "La longitud máxima"
    ],
    a: 1,
    e: "T568A y T568B definen distintos órdenes de colores de los pares en el RJ-45; ambas son válidas pero no deben mezclarse en un cable directo."
  },
  {
    q: "Un haz de luz se confina en el núcleo de la fibra gracias al fenómeno de:",
    o: [
      "La difracción total",
      "La reflexión total interna (por la diferencia de índice de refracción)",
      "La atenuación",
      "La dispersión cromática"
    ],
    a: 1,
    e: "La luz se mantiene en el núcleo por reflexión total interna, posible gracias al distinto índice de refracción del revestimiento."
  },
  {
    q: "En fibra óptica, el emisor de luz puede ser un LED o un:",
    o: ["Fotodiodo", "Láser (diodo láser)", "Transformador", "Condensador"],
    a: 1,
    e: "Como emisores se usan LED (más baratos, multimodo) o diodos láser (más potentes y coherentes, usados en monomodo); el receptor es un fotodiodo."
  },
  {
    q: "¿Qué categoría de fibra multimodo se recomienda con color aqua y optimizada para láser (10 Gbps)?",
    o: ["OM1", "OM2", "OM3/OM4", "OS2"],
    a: 2,
    e: "OM3 y OM4 son multimodo optimizadas para láser (aptas para 10 Gbps) y se recomiendan en color aqua; OM1/OM2 en naranja."
  },
  {
    q: "El conector de fibra tipo LC se caracteriza por ser:",
    o: [
      "De gran tamaño y giro",
      "De formato pequeño (small form factor), muy usado en alta densidad",
      "Exclusivo de cobre",
      "Idéntico al RJ-45"
    ],
    a: 1,
    e: "El LC (Lucent Connector) es de formato pequeño (SFF), muy utilizado por su alta densidad en paneles y equipos."
  },
  {
    q: "El pulido de férula PC (Physical Contact) frente al UPC y APC ofrece:",
    o: [
      "La mejor pérdida de retorno",
      "La peor pérdida de retorno de los tres (pulido más básico)",
      "Un ángulo de 8°",
      "Reflexión nula"
    ],
    a: 1,
    e: "El orden de calidad (pérdida de retorno) es PC (peor) < UPC < APC (mejor, con férula en ángulo de 8°)."
  },
  {
    q: "¿Qué cable coaxial fue típico en las antiguas redes Ethernet 10Base2?",
    o: [
      "Coaxial fino (Thin, 50 Ω)",
      "Coaxial de banda ancha (75 Ω)",
      "Par trenzado Cat 6",
      "Fibra monomodo"
    ],
    a: 0,
    e: "10Base2 (Thin Ethernet) usaba coaxial fino de 50 Ω (banda base) con conectores BNC."
  },
  {
    q: "Una ventaja de la tecnología PLC es:",
    o: [
      "No necesitar instalar nuevo cableado, aprovechando la red eléctrica existente",
      "Ser inmune a todo tipo de ruido",
      "Alcanzar cientos de kilómetros",
      "No requerir mecanismos de acceso al medio"
    ],
    a: 0,
    e: "La principal ventaja de PLC es aprovechar las líneas eléctricas existentes sin instalar cableado nuevo; su inconveniente es el ruido eléctrico."
  },
  {
    q: "En una configuración de emisión OMNIDIRECCIONAL, la energía:",
    o: [
      "Se concentra en un haz en una dirección",
      "Se irradia en todas las direcciones, sin necesidad de alinear emisor y receptor",
      "No se propaga",
      "Solo viaja por cable"
    ],
    a: 1,
    e: "En la configuración omnidireccional la energía se irradia en todas las direcciones; no requiere alineación entre emisor y receptor."
  },
  {
    q: "¿Qué satélites tienen la órbita más baja y se usan, por ejemplo, en constelaciones de Internet?",
    o: ["GEO", "MEO", "LEO", "HEO"],
    a: 2,
    e: "Los satélites LEO (Órbita Terrestre Baja) están a baja altura; su periodo es corto y se usan en constelaciones de comunicaciones."
  },
  {
    q: "La alteración inalámbrica de REFLEXIÓN se produce cuando la señal:",
    o: [
      "Bordea un obstáculo",
      "Rebota en una superficie y cambia de dirección",
      "Se difunde por la lluvia",
      "Se atenúa con la distancia"
    ],
    a: 1,
    e: "La reflexión ocurre cuando la señal rebota en una superficie (paredes, suelo) y cambia de dirección, pudiendo llegar por múltiples caminos."
  },
  {
    q: "¿Cuántos canales NO solapados suelen usarse en la práctica en la banda de 2.4 GHz?",
    o: ["1, 6 y 11", "Todos los 14", "Solo el 1", "Del 1 al 5"],
    a: 0,
    e: "Como cada canal de 2.4 GHz necesita 22 MHz y la separación es de 5 MHz, en la práctica se usan los canales 1, 6 y 11 para no solaparse."
  },
  {
    q: "¿Qué estándar Wi-Fi corresponde a Wi-Fi 5?",
    o: ["802.11n", "802.11ac", "802.11ax", "802.11g"],
    a: 1,
    e: "802.11ac es Wi-Fi 5; 802.11n es Wi-Fi 4, 802.11ax es Wi-Fi 6 y 802.11be es Wi-Fi 7."
  },
  {
    q: "El protocolo de seguridad WEP se considera hoy:",
    o: [
      "El más seguro",
      "Obsoleto e inseguro (fácilmente vulnerable)",
      "El estándar actual recomendado",
      "Imposible de descifrar"
    ],
    a: 1,
    e: "WEP fue el primer mecanismo de seguridad Wi-Fi pero quedó obsoleto por ser fácilmente vulnerable; le sucedieron WPA, WPA2 y WPA3."
  },
  {
    q: "En el modo PUENTE (bridge) de un punto de acceso, su función es:",
    o: [
      "Dar conectividad a clientes finales como un AP normal",
      "Unir dos redes/segmentos a través de un enlace inalámbrico",
      "Hacer de repetidor con el mismo SSID",
      "Asignar direcciones IP"
    ],
    a: 1,
    e: "En modo puente, el AP une dos redes o segmentos mediante un enlace inalámbrico entre ellos."
  },
  {
    q: "El distribuidor de campus (CD) en un SCE es:",
    o: [
      "El punto de mayor jerarquía, del que dependen los distribuidores de edificio",
      "La roseta del puesto de trabajo",
      "Un elemento opcional sin función",
      "El cable horizontal"
    ],
    a: 0,
    e: "El distribuidor de campus (CD) es el de mayor jerarquía; de él cuelgan los distribuidores de edificio (BD) y estos los de planta (FD)."
  },
  {
    q: "El subsistema de cableado que une los distintos edificios de un recinto se denomina:",
    o: [
      "Cableado horizontal",
      "Cableado troncal o vertical (de campus/edificio)",
      "Cableado de área de trabajo",
      "Punto de consolidación"
    ],
    a: 1,
    e: "El cableado troncal o vertical (backbone) interconecta los distribuidores (campus y edificio); el horizontal llega hasta las tomas."
  },
  {
    q: "Para una sala con 48 tomas de datos, ¿cuántas U de patch panel habría que reservar (1U/24 tomas)?",
    o: ["1U", "2U", "4U", "8U"],
    a: 1,
    e: "Reservando 1U por cada 24 tomas de datos, 48 tomas requieren 2U de paneles de parcheo."
  }
);
