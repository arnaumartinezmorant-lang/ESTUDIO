// Tema 3 - Capa física
window.TEMAS = window.TEMAS || {};
window.TEMAS["tema03"] = {
  titulo: "Tema 3 · Capa física",
  preguntas: [
    {
      q: "¿Cuál es la función principal de la capa física?",
      o: [
        "El encaminamiento de paquetes",
        "La transmisión de bits a lo largo de un canal de comunicación",
        "El cifrado de los datos",
        "La detección de errores en las tramas"
      ],
      a: 1,
      e: "La capa física es la primera del modelo OSI y su función principal es la transmisión de bits a lo largo de un canal de comunicación."
    },
    {
      q: "Las características de la interfaz física relativas a dimensiones, forma del conector y número de pines son de tipo:",
      o: ["Eléctricas", "Mecánicas", "Funcionales", "De procedimiento"],
      a: 1,
      e: "Las características mecánicas son las propiedades de la interfaz física: dimensiones, forma del conector, número de cables/pines, tipo de antena, etc."
    },
    {
      q: "¿Cómo se define el ancho de banda de un canal?",
      o: [
        "La velocidad máxima de bits por segundo",
        "El rango de frecuencias que el medio puede soportar (frecuencia máxima − frecuencia mínima)",
        "El tiempo que tarda la señal en recorrer el canal",
        "El número de bits de una trama"
      ],
      a: 1,
      e: "El ancho de banda es el rango de frecuencias que un medio puede soportar: frecuencia máxima − frecuencia mínima."
    },
    {
      q: "El tiempo que tarda la señal en recorrer el canal se denomina:",
      o: ["Ancho de banda", "Capacidad del canal", "Retardo de propagación", "Atenuación"],
      a: 2,
      e: "El retardo de propagación es el tiempo que tarda la señal en recorrer el canal."
    },
    {
      q: "Respecto a las unidades de información, ¿a cuántos bytes equivale 1 KB?",
      o: ["1000 bytes", "1024 bytes", "8 bytes", "100 bytes"],
      a: 1,
      e: "El tamaño de archivos usa múltiplos de byte en base 2: 1 KB = 1024 Bytes."
    },
    {
      q: "En transmisión de datos, ¿a cuántos bps equivale 1 Kbps?",
      o: ["1024 bps", "1000 bps", "8 bps", "100 bps"],
      a: 1,
      e: "La velocidad de transferencia usa base 10: 1 Kbps = 1000 bps (a diferencia del KB de almacenamiento que es 1024)."
    },
    {
      q: "¿Cuál es la diferencia clave entre los múltiplos de tamaño (KB) y de velocidad (Kbps)?",
      o: [
        "Ambos usan base 2",
        "KB usa base 2 (1024) y Kbps usa base 10 (1000)",
        "Ambos usan base 10",
        "KB usa base 10 y Kbps usa base 2"
      ],
      a: 1,
      e: "El tamaño se expresa en base 2 (1 KB = 1024 B) y la velocidad en base 10 (1 Kbps = 1000 bps)."
    },
    {
      q: "En medios guiados, ¿cómo es la reducción de la señal por atenuación?",
      o: [
        "Lineal con la distancia",
        "Exponencial, expresada en decibelios por unidad de longitud",
        "Constante e independiente de la distancia",
        "Inexistente"
      ],
      a: 1,
      e: "En medios guiados la reducción por atenuación es exponencial y se expresa en decibelios por unidad de longitud."
    },
    {
      q: "Para controlar la energía de la señal, ¿qué se usa cuando la señal es digital?",
      o: ["Amplificadores", "Repetidores", "Ecualizadores", "Terminadores"],
      a: 1,
      e: "Se usan amplificadores cuando la señal es analógica y repetidores cuando es digital."
    },
    {
      q: "La distorsión de retardo deforma la señal porque la velocidad de propagación en un medio guiado:",
      o: [
        "Es siempre constante",
        "Varía según la frecuencia",
        "Depende solo de la distancia",
        "Aumenta con el ruido"
      ],
      a: 1,
      e: "La distorsión de retardo se debe a que la velocidad de propagación varía según la frecuencia; se corrige con ecualizadores."
    },
    {
      q: "¿Qué tipo de ruido consiste en el acoplamiento no deseado de otra señal entre cables de pares cercanos?",
      o: ["Ruido térmico", "Diafonía", "Ruido impulsivo", "Atenuación"],
      a: 1,
      e: "La diafonía es el acoplamiento no deseado de otra señal entre cables de pares cercanos."
    },
    {
      q: "La caída de un rayo, que produce pulsos o picos irregulares de corta duración, es un ejemplo de:",
      o: ["Ruido térmico", "Diafonía", "Ruido impulsivo", "Distorsión"],
      a: 2,
      e: "El ruido impulsivo está constituido por pulsos o picos irregulares de corta duración, como la caída de un rayo."
    },
    {
      q: "Según el tema, ¿cuál es el factor que más limita las prestaciones de un sistema de comunicación?",
      o: ["La atenuación", "El ruido", "La distorsión de retardo", "El ancho de banda"],
      a: 1,
      e: "El ruido (señales no deseadas) es el factor que más limita las prestaciones de un sistema de comunicación."
    },
    {
      q: "¿Por qué se trenzan los pares de alambres en el cable de par trenzado?",
      o: [
        "Para aumentar el grosor del cable",
        "Para que las ondas de diferentes vueltas se cancelen y se reduzca la interferencia eléctrica",
        "Para hacerlo más rígido",
        "Para aumentar la atenuación"
      ],
      a: 1,
      e: "Al trenzar los alambres, las ondas de diferentes vueltas se cancelan, reduciendo la interferencia eléctrica (dos alambres paralelos formarían una antena)."
    },
    {
      q: "¿Cuántos pares trenzados tiene un cable de par trenzado típico?",
      o: ["2 pares", "4 pares", "8 pares", "1 par"],
      a: 1,
      e: "Un cable de par trenzado está formado por 4 pares trenzados recubiertos por un material aislante."
    },
    {
      q: "En la nomenclatura de protección del par trenzado, ¿qué significa la letra 'U'?",
      o: [
        "Cubierta de aluminio",
        "Malla metálica",
        "Unshielded (sin protección)",
        "Universal"
      ],
      a: 2,
      e: "U = Unshielded (sin protección); F = Foil (lámina de aluminio); S = braided Shielding (malla metálica, solo en la global)."
    },
    {
      q: "¿Qué tipo de par trenzado posee gran inmunidad al ruido pero la máxima rigidez?",
      o: [
        "No apantallado (UTP)",
        "Apantallado con malla global",
        "Apantallado individualmente por pares",
        "Coaxial"
      ],
      a: 2,
      e: "Los apantallados individualmente poseen gran inmunidad al ruido, pero la máxima rigidez; los UTP son más flexibles pero sensibles a interferencias."
    },
    {
      q: "¿Qué estándar de cableado estructurado clasifica los cables de par trenzado en categorías/clases?",
      o: ["RFC 1918", "ISO/IEC 11801", "IEEE 802.11", "RFC 2328"],
      a: 1,
      e: "El estándar ISO/IEC 11801 (2017 Ed3 + 2020) clasifica los cables de par trenzado en categorías y clases."
    },
    {
      q: "¿Qué categoría de par trenzado se asocia a 10GBASE-T con 500 MHz y alcance de 100 m?",
      o: ["Cat 5e", "Cat 6", "Cat 6a", "Cat 7"],
      a: 2,
      e: "La Cat 6a (Clase EA) ofrece 500 MHz, soporta 10GBASE-T con alcance de 100 m. La Cat 6 (250 MHz) solo alcanza 55 m en 10G."
    },
    {
      q: "¿Cuál es el conector más extendido para par trenzado, también llamado 8P8C?",
      o: ["BNC", "RJ-45", "SC", "GG-45"],
      a: 1,
      e: "El conector RJ-45 (Registered Jack) o 8P8C es el más extendido, con 8 pines para 8 cables."
    },
    {
      q: "¿Qué conector es una mejora del RJ-45 para cables de alta velocidad de Categoría 7, compatible con los tradicionales 8P8C?",
      o: ["RJ-49", "ARJ-45", "GG-45 (GigaGate)", "TERA"],
      a: 2,
      e: "El conector GG-45 (GigaGate) es para cables de alta velocidad de Categoría 7 y es compatible con los tradicionales 8P8C."
    },
    {
      q: "¿Qué norma de par trenzado se usa más en Europa?",
      o: ["568A", "568B", "RG-58", "FOCIS-3"],
      a: 1,
      e: "La norma 568B se usa más en Europa; la 568A se usa más en EE.UU. por aparecer antes."
    },
    {
      q: "Un cable directo se utiliza para conectar dispositivos de... y ambos extremos se montan con...",
      o: [
        "mismo tipo / estándares diferentes",
        "diferente tipo / el mismo estándar",
        "mismo tipo / el mismo estándar",
        "diferente tipo / estándares diferentes"
      ],
      a: 1,
      e: "El cable directo conecta dispositivos de diferente tipo (PC-switch) y ambos extremos se montan con el mismo estándar (568A o 568B)."
    },
    {
      q: "Un cable cruzado conecta dispositivos del mismo tipo y se monta:",
      o: [
        "Con el mismo estándar en ambos extremos",
        "Con un estándar diferente en cada extremo (uno 568A y otro 568B)",
        "Sin conectores",
        "Solo con fibra óptica"
      ],
      a: 1,
      e: "El cable cruzado conecta dispositivos del mismo tipo (PC-PC) y cada extremo usa un estándar diferente (uno 568A y otro 568B)."
    },
    {
      q: "¿Qué tecnología detecta y corrige automáticamente el tipo de conexión (directo/cruzado)?",
      o: ["Auto-MDI/MDIX", "CSMA/CD", "PoE", "STP"],
      a: 0,
      e: "Auto-MDI/MDIX detecta y corrige automáticamente la conexión, por lo que sirve tanto cable directo como cruzado."
    },
    {
      q: "En un sistema de transmisión óptico, ¿qué indica convencionalmente un pulso de luz?",
      o: ["Un bit 0", "Un bit 1", "Un byte completo", "El fin de trama"],
      a: 1,
      e: "Convencionalmente un pulso de luz indica un bit 1 y la ausencia de luz un bit 0."
    },
    {
      q: "¿Cuáles son las tres secciones concéntricas de un cable de fibra óptica?",
      o: [
        "Núcleo, revestimiento y cubierta",
        "Cobre, malla y aislante",
        "Emisor, medio y detector",
        "PC, UPC y APC"
      ],
      a: 0,
      e: "La fibra óptica tiene tres secciones concéntricas: el núcleo, el revestimiento y la cubierta."
    },
    {
      q: "En la fibra óptica, ¿qué elemento confina el haz de luz e impide que escape del núcleo?",
      o: ["La cubierta", "El revestimiento (por su índice de refracción)", "El detector", "La férula"],
      a: 1,
      e: "El revestimiento, al poseer un índice de refracción distinto, confina el haz de luz e impide que escape del núcleo."
    },
    {
      q: "¿Qué tipo de fibra transmite un solo haz de luz, alcanza hasta 300 km y suele tener cubierta amarilla?",
      o: ["Multimodo de índice escalonado", "Multimodo de índice gradual", "Monomodo", "Coaxial"],
      a: 2,
      e: "La fibra monomodo transmite un solo haz de luz, alcanza hasta 300 km en condiciones ideales y suele ser de color amarillo."
    },
    {
      q: "¿Qué caracteriza a la fibra multimodo frente a la monomodo?",
      o: [
        "Mayor alcance (300 km)",
        "Transmite varios haces de luz, alcanza distancias cortas (2-3 km) pero es más barata y fácil de instalar",
        "Solo se usa en exteriores",
        "No admite LED como emisor"
      ],
      a: 1,
      e: "La multimodo transmite varios haces de luz, alcanza distancias cortas (2-3 km) y es más barata y fácil de instalar."
    },
    {
      q: "La multiplexación WDM en fibra óptica consiste en:",
      o: [
        "Dividir la señal en el tiempo",
        "Introducir varias longitudes de onda en la misma fibra",
        "Usar un solo haz de luz",
        "Reducir el ancho de banda"
      ],
      a: 1,
      e: "WDM (Wavelength Division Multiplexing) introduce varias longitudes de onda en la fibra; se llegan a multiplexar 50 longitudes de onda."
    },
    {
      q: "Las categorías de fibra óptica OM (según ISO/IEC 11801) se refieren a fibra:",
      o: ["Monomodo", "Multimodo (Optical Multimode)", "Coaxial", "De par trenzado"],
      a: 1,
      e: "OM (Optical Multimode) designa fibra multimodo y OS (Optical Single-mode) designa fibra monomodo."
    },
    {
      q: "¿Qué color se recomienda para la fibra OS1/OS2 (monomodo)?",
      o: ["Naranja", "Aqua", "Amarillo", "Verde"],
      a: 2,
      e: "OS1 y OS2 (monomodo) recomiendan color amarillo; OM1/OM2 naranja y OM3/OM4 aqua."
    },
    {
      q: "El conector de fibra que requiere un giro para la inserción, semejante a los coaxiales, es el:",
      o: ["SC (Standard Connector)", "ST (Straight Tip)", "LC (Lucent Connector)", "GG-45"],
      a: 1,
      e: "El conector ST (Straight Tip) requiere un giro del conector para la inserción, de modo semejante a los conectores coaxiales."
    },
    {
      q: "El pulido de férula tipo APC se caracteriza por:",
      o: [
        "Pulido convexo básico (-35 a -40 dB)",
        "Pulido fino con curvatura pronunciada (-50 a -55 dB)",
        "Férula pulida en ángulo de 8° con mínima reflexión (-60 dB)",
        "No tener pulido"
      ],
      a: 2,
      e: "El APC (Angled Physical Contact) tiene la férula pulida en ángulo de 8°, mínima reflexión y pérdida de retorno de -60 dB."
    },
    {
      q: "¿Qué impedancia tiene el cable coaxial de banda base, usado en radiofrecuencia y laboratorios?",
      o: ["50 Ω", "75 Ω", "100 Ω", "120 Ω"],
      a: 0,
      e: "El coaxial de banda base tiene impedancia de 50 Ω; el de banda ancha (TV, Internet por cable) tiene 75 Ω."
    },
    {
      q: "¿Qué impedancia tiene el cable coaxial de banda ancha, usado en TV e Internet por cable?",
      o: ["50 Ω", "75 Ω", "93 Ω", "120 Ω"],
      a: 1,
      e: "El coaxial de banda ancha tiene impedancia de 75 Ω y se usa en televisión, vídeo, antenas e Internet por cable."
    },
    {
      q: "¿Cuál es un inconveniente del cable coaxial?",
      o: [
        "Muy susceptible a interferencias",
        "Si el cable se corta o falla un conector, toda la red deja de funcionar (intolerancia a fallos)",
        "Ancho de banda muy bajo",
        "No admite señales digitales"
      ],
      a: 1,
      e: "El coaxial es inflexible, grueso y tiene intolerancia a fallos: si se corta o falla un conector, toda la red deja de funcionar."
    },
    {
      q: "La tecnología PLC utiliza para transmitir datos:",
      o: [
        "Fibra óptica",
        "Las líneas de energía eléctrica",
        "Ondas de radio de satélite",
        "Cable coaxial de TV"
      ],
      a: 1,
      e: "PLC (Power Line Communications) utiliza las líneas de energía eléctrica para transmitir datos, multiplexando los datos a frecuencia superior."
    },
    {
      q: "¿En qué modo funciona PLC respecto al medio de acceso?",
      o: [
        "Full-duplex con medio dedicado",
        "Half-duplex con medio compartido (mecanismos como CSMA/CD)",
        "Simplex unidireccional",
        "Sin ningún mecanismo de acceso"
      ],
      a: 1,
      e: "PLC funciona como Ethernet con medio compartido en half-duplex, usando mecanismos de acceso al medio como CSMA/CD."
    },
    {
      q: "En medios no guiados, la velocidad de propagación es:",
      o: [
        "Muy lenta",
        "Cercana a la de la luz en el vacío",
        "Igual a la del par trenzado",
        "Constante a 50 Hz"
      ],
      a: 1,
      e: "En medios no guiados la velocidad de propagación es cercana a la de la luz en el vacío."
    },
    {
      q: "Una configuración de emisión donde toda la energía se concentra en un haz, exigiendo que emisor y receptor estén alineados, es:",
      o: ["Omnidireccional", "Direccional", "Difusa", "Broadcast"],
      a: 1,
      e: "En la configuración direccional la energía se concentra en un haz en cierta dirección, por lo que emisor y receptor deben estar alineados."
    },
    {
      q: "¿Qué son las bandas ISM?",
      o: [
        "Bandas reservadas internacionalmente para uso no comercial (industrial, científico y médico), abiertas sin licencia",
        "Bandas exclusivas de la telefonía móvil",
        "Bandas reservadas para satélites militares",
        "Bandas de fibra óptica"
      ],
      a: 0,
      e: "Las bandas ISM (Industrial, Scientific and Medical) están reservadas para uso no comercial y abiertas a todos sin licencia (las usan Wi-Fi y Bluetooth)."
    },
    {
      q: "El rango de frecuencias óptimo para transmisión vía satélite está entre:",
      o: ["3 Hz y 300 GHz", "1 y 40 GHz", "Por debajo de 1 GHz", "Por encima de 40 GHz"],
      a: 1,
      e: "El rango óptimo para satélite está entre 1 y 40 GHz; por debajo de 1 GHz hay saturación y por encima de 20 GHz mucha atenuación por lluvia."
    },
    {
      q: "Los satélites GEO (geoestacionarios) se encuentran a una altura de:",
      o: ["160 km", "2000 km", "35.786 km", "1.000.000 km"],
      a: 2,
      e: "Los satélites GEO están a 35.786 km y su periodo orbital coincide con el de la Tierra (se usan en Internet, televisión, etc.)."
    },
    {
      q: "El sistema GPS utiliza satélites de tipo:",
      o: ["LEO", "MEO", "GEO", "HEO"],
      a: 1,
      e: "El sistema GPS usa satélites MEO (Órbita Terrestre Media, 2000 a 35.786 km) con periodo orbital de unas 12 horas."
    },
    {
      q: "La alteración inalámbrica en la que la señal bordea los obstáculos y llega al destino por varios caminos desfasados es:",
      o: ["Atenuación", "Reflexión", "Difracción", "Dispersión"],
      a: 2,
      e: "En la difracción la señal divide su camino y bordea obstáculos, llegando al destino por varios caminos desfasados (esquinas, mobiliario)."
    },
    {
      q: "La dispersión de la señal inalámbrica suele producirse por obstáculos como:",
      o: ["Paredes grandes", "La lluvia, la niebla o el granizo", "Edificios completos", "Montañas"],
      a: 1,
      e: "La dispersión ocurre con obstáculos de dimensiones muy pequeñas como la lluvia, la niebla o el granizo, difundiendo la señal sin control direccional."
    },
    {
      q: "¿En qué banda ISM opera Bluetooth?",
      o: ["5 GHz", "2.4 GHz", "900 MHz", "60 GHz"],
      a: 1,
      e: "Bluetooth (WPAN) usa un enlace por radiofrecuencia en la banda ISM de los 2.4 GHz, estandarizado por el IEEE en 1999."
    },
    {
      q: "¿Qué estándar IEEE define las redes Wi-Fi (WLAN)?",
      o: ["IEEE 802.3", "IEEE 802.11", "IEEE 802.16", "IEEE 802.15"],
      a: 1,
      e: "Las redes Wi-Fi (WLAN) están estandarizadas por el IEEE 802.11 desde 1997."
    },
    {
      q: "¿Qué estándar 802.11 corresponde a Wi-Fi 6?",
      o: ["802.11n", "802.11ac", "802.11ax", "802.11be"],
      a: 2,
      e: "802.11ax es Wi-Fi 6 (2019, 9,6 Gbps). 802.11n=Wi-Fi 4, 802.11ac=Wi-Fi 5, 802.11be=Wi-Fi 7."
    },
    {
      q: "En la banda de 2.4 GHz, ¿en cuántos canales se divide y con qué separación?",
      o: ["11 canales, 10 MHz", "14 canales, separados por 5 MHz", "20 canales, 20 MHz", "8 canales, 22 MHz"],
      a: 1,
      e: "La banda de 2.4 GHz se divide en 14 canales separados por 5 MHz, pero como cada canal necesita 22 MHz se produce solapamiento."
    },
    {
      q: "¿Qué protocolo de seguridad Wi-Fi introdujo AES-CCMP y claves de 128 bits?",
      o: ["WEP", "WPA", "WPA2", "WPA3"],
      a: 2,
      e: "WPA2 (2004) introdujo AES-CCMP y claves de 128 bits; fue estándar durante más de 15 años (vulnerable a KRACK en 2017)."
    },
    {
      q: "¿Cuál es el estándar de seguridad Wi-Fi actual que usa SAE (Simultaneous Authentication of Equals)?",
      o: ["WEP", "WPA", "WPA2", "WPA3"],
      a: 3,
      e: "WPA3 (2018) es el estándar actual; usa SAE (Simultaneous Authentication of Equals) y cifrado más fuerte."
    },
    {
      q: "En los modos de funcionamiento de un AP, el modo que aumenta el alcance de la red de otro AP con el mismo SSID y canal es:",
      o: ["Modo punto de acceso", "Modo repetidor", "Modo puente (bridge)", "Modo cliente"],
      a: 1,
      e: "El modo repetidor aumenta el alcance de la red de otro AP; debe estar dentro de su alcance y usa el mismo SSID y canal."
    },
    {
      q: "¿Qué tecnología (IEEE 802.16) tiene cobertura de hasta 50 km pero está actualmente en desuso frente a LTE/5G?",
      o: ["Bluetooth", "Wi-Fi", "WiMAX", "PLC"],
      a: 2,
      e: "WiMAX (IEEE 802.16) ofrece hasta 50 km y 75 Mbps, pero está en desuso porque LTE (4G) ganó el respaldo de la industria."
    },
    {
      q: "En una red celular, el cambio de célula al moverse un móvil se denomina:",
      o: ["Roaming estático", "Handover o traspaso", "Broadcast", "Multiplexación"],
      a: 1,
      e: "El handover o traspaso es el cambio de célula al moverse; permite reutilizar frecuencias en celdas lejanas."
    },
    {
      q: "¿Qué proponen los sistemas de cableado estructurado (SCE)?",
      o: [
        "Una infraestructura distinta para cada protocolo",
        "Una plataforma única y universal de cableado donde coexisten todos los protocolos de voz, datos y vídeo",
        "Eliminar todo el cableado",
        "Usar únicamente fibra monomodo"
      ],
      a: 1,
      e: "Los SCE proponen una plataforma única y universal de cableado en la que coexisten todos los protocolos para voz, datos y vídeo."
    },
    {
      q: "¿Cuál es la longevidad mínima (vida útil) de un SCE?",
      o: ["1 año", "5 años", "10 años como mínimo", "50 años"],
      a: 2,
      e: "La longevidad de un SCE es de 10 años como mínimo; su principal inconveniente es el mayor coste inicial."
    },
    {
      q: "El estándar estadounidense que define los SCE en edificios comerciales (publicado en 1991) es:",
      o: ["ANSI/EIA/TIA 568", "ISO/IEC 11801", "EN 50173", "IEEE 802.3"],
      a: 0,
      e: "El estándar ANSI/EIA/TIA 568 (1991) define los SCE en edificios comerciales; la última actualización es la 568-E (2020)."
    },
    {
      q: "La normativa europea EN 50173 está basada en:",
      o: ["ANSI/TIA 569", "ISO/IEC 11801", "IEEE 802.11", "RFC 1918"],
      a: 1,
      e: "EN 50173 está basada en ISO/IEC 11801 y es de obligado cumplimiento en los países de la Unión Europea."
    },
    {
      q: "El elemento funcional de un SCE del que parte el cableado horizontal es:",
      o: [
        "Distribuidor de campus (CD)",
        "Distribuidor de edificio (BD)",
        "Distribuidor de planta (FD)",
        "Roseta de telecomunicaciones (TO)"
      ],
      a: 2,
      e: "El distribuidor de planta (FD, Floor Distributor) es el punto central del subsistema de la planta y de él parte el cableado horizontal."
    },
    {
      q: "La roseta de telecomunicaciones (TO) es el punto donde:",
      o: [
        "Se conectan los equipos terminales de la red",
        "Parte el cableado troncal de campus",
        "Se ubica el switch core",
        "Termina el cableado de campus"
      ],
      a: 0,
      e: "La TO (Telecommunications Outlet) es el punto donde se conectan los equipos terminales; está en las áreas de trabajo y es un elemento pasivo."
    },
    {
      q: "El punto de consolidación (CP) es un elemento que:",
      o: [
        "Es obligatorio en toda instalación",
        "Es opcional, intermedio entre los FD y las TO, y da flexibilidad a la parte fija",
        "Contiene siempre elementos activos",
        "Sustituye al distribuidor de campus"
      ],
      a: 1,
      e: "El punto de consolidación (CP) es opcional, intermedio entre FD y TO, solo con elementos pasivos, y da flexibilidad sin cambiar el cableado horizontal."
    },
    {
      q: "El estándar recomienda conectar los elementos de un SCE formando una topología:",
      o: ["En bus", "En anillo", "Jerárquica en estrella", "Mallada completa"],
      a: 2,
      e: "El estándar recomienda conectar los distintos elementos formando una topología jerárquica en estrella."
    },
    {
      q: "¿Cuál es el límite de longitud del cableado horizontal según los requisitos del SCE?",
      o: ["No deberá exceder los 90 m", "No deberá exceder los 100 m", "No deberá exceder los 5 m", "No deberá exceder los 10 m"],
      a: 0,
      e: "El cableado horizontal no debe exceder los 90 m (D ≤ 90 m); el total horizontal + área de trabajo no debe superar los 100 m."
    },
    {
      q: "¿Cuál es el ancho estandarizado de un rack de comunicaciones?",
      o: ["19 pulgadas", "24 pulgadas", "42 pulgadas", "12 pulgadas"],
      a: 0,
      e: "El ancho de un rack está estandarizado en 19 pulgadas (≈48,26 cm)."
    },
    {
      q: "¿A cuánto equivale 1 unidad rack (U)?",
      o: ["19 mm", "44,45 mm (≈4,44 cm)", "60 cm", "10 cm"],
      a: 1,
      e: "La altura se expresa en U, donde 1U = 44,45 mm (≈4,44 cm). Los racks más habituales son de 12U, 24U y 42U."
    },
    {
      q: "Para los cuartos de telecomunicaciones, ¿en qué rango debe mantenerse la temperatura?",
      o: ["Entre 0 y 10 °C", "Entre 18 y 27 °C", "Entre 30 y 40 °C", "Entre 10 y 15 °C"],
      a: 1,
      e: "La temperatura debe mantenerse entre 18 y 27 °C y la humedad relativa por debajo del 60%."
    },
    {
      q: "Un hub o concentrador opera en:",
      o: [
        "La capa 1 (física) del modelo OSI",
        "La capa 2 (enlace)",
        "La capa 3 (red)",
        "La capa 4 (transporte)"
      ],
      a: 0,
      e: "El hub (concentrador o repetidor multipuerto) opera a nivel físico (capa 1 OSI); está obsoleto y fue sustituido por los switches."
    },
    {
      q: "Un switch o conmutador opera en la capa 2 y su función principal es:",
      o: [
        "Cifrar las tramas",
        "Segmentar la red en dominios de colisiones para aumentar el rendimiento",
        "Asignar direcciones IP",
        "Transmitir bits sin interpretarlos"
      ],
      a: 1,
      e: "El switch opera en la capa 2 (enlace) y segmenta la red en dominios de colisiones, dirigiendo las tramas según la MAC de destino."
    },
    {
      q: "En el etiquetado del cableado estructurado, ¿dónde deben marcarse los cables?",
      o: ["Solo en un extremo", "En ambos extremos", "En el centro del cable", "No es necesario etiquetarlos"],
      a: 1,
      e: "Según la normativa (ANSI/TIA-606 e ISO/IEC 14763-2), los cables deben marcarse en ambos extremos con identificación unívoca."
    },
    {
      q: "Para el cableado troncal de campus, ¿qué tipo de fibra es la más habitual por soportar largas distancias?",
      o: ["Fibra multimodo OM1", "Fibra monomodo OS2", "Par trenzado Cat 6A", "Coaxial RG-6"],
      a: 1,
      e: "Para el troncal de campus el más habitual es la fibra óptica monomodo OS2, porque soporta largas distancias y es inmune a interferencias."
    },
    {
      q: "El mantenimiento que se realiza mediante tareas periódicas para encontrar averías no notificadas se denomina:",
      o: ["Mantenimiento reactivo", "Mantenimiento preventivo", "Certificación", "Documentación"],
      a: 1,
      e: "El mantenimiento preventivo son tareas periódicas para encontrar averías no notificadas; el reactivo actúa cuando se notifica una avería."
    },
    {
      q: "¿Qué consecuencia tiene no certificar una instalación de cableado estructurado?",
      o: [
        "No tiene ninguna consecuencia",
        "Se pierde la garantía con el fabricante y no se puede asegurar un rendimiento mínimo",
        "La instalación deja de funcionar inmediatamente",
        "Es ilegal y conlleva multa"
      ],
      a: 1,
      e: "Aunque no es obligatorio legalmente, no certificar hace perder la garantía del fabricante y no garantiza un rendimiento mínimo ni documentación de respaldo."
    },
    {
      q: "Las radiofrecuencias se sitúan en la porción del espectro entre:",
      o: ["3 Hz y 300 GHz", "300 GHz y 6 THz", "384 y 789 THz", "789 THz y 30 PHz"],
      a: 0,
      e: "Las radiofrecuencias usan la porción menos energética del espectro, entre los 3 Hz y los 300 GHz."
    },
    {
      q: "La radiación infrarroja se asocia generalmente con:",
      o: ["La luz visible", "El calor", "Los rayos X", "La luz ultravioleta"],
      a: 1,
      e: "La radiación infrarroja se asocia con el calor, ya que la producen cuerpos que generan calor."
    },
    {
      q: "¿Qué herramienta se utiliza para los conectores RJ-45 hembra de los paneles de parcheo?",
      o: ["Crimpadora", "Pelacables", "Herramienta de impacto (punch down)", "Tester de red"],
      a: 2,
      e: "La herramienta de impacto (punch down tool) se usa para los conectores RJ-45 hembra; la crimpadora para los machos."
    },
    {
      q: "Las dos subcapas en que algunos estándares dividen el nivel de enlace ya se anticipan en los SCE, pero un cálculo de racks indica reservar 1U por cada:",
      o: ["6 tomas de datos", "24 tomas de datos", "100 tomas de datos", "1 toma de datos"],
      a: 1,
      e: "Para calcular racks se reserva 1U por cada 24 tomas de datos (y por cada 24 para electrónica de red), y 1U por cada 6 tomas eléctricas."
    }
  ]
};
