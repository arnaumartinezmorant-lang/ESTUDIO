// Tema 2 - Arquitecturas de red
window.TEMAS = window.TEMAS || {};
window.TEMAS["tema02"] = {
  titulo: "Tema 2 · Arquitecturas de red",
  preguntas: [
    {
      q: "¿Qué es un estándar en el ámbito de las comunicaciones?",
      o: [
        "Un programa de cifrado de datos",
        "Un conjunto de normas, acuerdos y recomendaciones técnicas que regulan la transmisión de los sistemas de comunicación",
        "Un tipo de cable de red",
        "Una topología de red concreta"
      ],
      a: 1,
      e: "Un estándar es un conjunto de normas, acuerdos y recomendaciones técnicas que regulan la transmisión de los sistemas de comunicación."
    },
    {
      q: "¿Cuál es una ventaja del empleo de estándares?",
      o: [
        "Fomentar los monopolios",
        "Encarecer los productos",
        "Compatibilidad entre productos de diferentes fabricantes y precios más competitivos",
        "Reducir la oferta de productos"
      ],
      a: 2,
      e: "Los estándares aportan compatibilidad entre fabricantes, precios más competitivos y evitan los monopolios."
    },
    {
      q: "Un estándar que surge de la gran aceptación de un producto en el mercado, sin ser oficial, es un estándar:",
      o: ["De iure", "De facto", "Internacional", "Europeo"],
      a: 1,
      e: "Los estándares de facto surgen de la gran aceptación de un producto; los de iure son definidos por organizaciones oficiales."
    },
    {
      q: "¿Qué organismo es la organización más importante de la ONU en materia de tecnologías de la información y coordina el espectro radioeléctrico?",
      o: ["ISO", "IEEE", "ITU", "IETF"],
      a: 2,
      e: "La ITU (International Telecommunication Union) establece estándares mundiales, coordina el espectro radioeléctrico y asigna órbitas de satélites."
    },
    {
      q: "¿Qué organismo, con sede en Ginebra, definió el modelo OSI?",
      o: ["ISO", "ITU", "ANSI", "ETSI"],
      a: 0,
      e: "La ISO (International Organization for Standardization) definió el modelo OSI (Open Systems Interconnection)."
    },
    {
      q: "El comité 802 del IEEE desarrolla estándares de protocolos para...",
      o: [
        "La interfaz física de las conexiones de las redes locales de datos",
        "El cifrado de correo electrónico",
        "La fabricación de tornillos",
        "La asignación de órbitas de satélites"
      ],
      a: 0,
      e: "El comité 802 del IEEE desarrolla estándares de protocolos de comunicaciones para la interfaz física de las redes locales de datos."
    },
    {
      q: "¿Qué institución regula los estándares de Internet mediante documentos llamados RFC?",
      o: ["ITU", "IETF", "ISO", "TIA"],
      a: 1,
      e: "El IETF (Internet Engineering Task Force) regula los estándares de Internet mediante propuestas conocidas como RFC (Request For Comments)."
    },
    {
      q: "¿Qué significan las siglas RFC?",
      o: [
        "Request For Comments",
        "Real Frame Control",
        "Remote File Connection",
        "Routing Function Control"
      ],
      a: 0,
      e: "RFC significa Request For Comments, las propuestas mediante las que el IETF regula los estándares de Internet."
    },
    {
      q: "¿Qué organismo de estandarización es el español?",
      o: ["ANSI", "DIN", "AENOR", "ETSI"],
      a: 2,
      e: "AENOR (Asociación Española de Normalización) publica las normas UNE (Una Norma Española) y adopta las normas europeas."
    },
    {
      q: "Las siglas UNE corresponden a:",
      o: ["Unión Nacional de Empresas", "Una Norma Española", "Unidad Normalizada Europea", "Universal Network Estándar"],
      a: 1,
      e: "UNE es el acrónimo de 'Una Norma Española', publicadas por AENOR."
    },
    {
      q: "¿Qué organismo europeo tuvo como uno de sus éxitos la estandarización del sistema de telefonía móvil GSM?",
      o: ["CEN", "CENELEC", "ETSI", "ISO"],
      a: 2,
      e: "ETSI (European Telecommunications Standards Institute) estandarizó, entre otros, el sistema de telefonía móvil GSM."
    },
    {
      q: "En EE.UU., el organismo que supervisa el desarrollo de estándares nacionales es:",
      o: ["ANSI", "TIA", "DIN", "AENOR"],
      a: 0,
      e: "ANSI (American National Standards Institute) supervisa el desarrollo de estándares en Estados Unidos."
    },
    {
      q: "¿Por qué no es viable realizar todos los aspectos de la comunicación de forma global?",
      o: [
        "Porque implican demasiadas cosas y demasiado diferentes entre sí; es preferible tratarlas por capas",
        "Porque los ordenadores no tienen suficiente memoria",
        "Porque no existen estándares",
        "Porque la comunicación es siempre analógica"
      ],
      a: 0,
      e: "Por su complejidad, es preferible tratar los aspectos uno a uno y de forma aislada mediante protocolos de red por capas."
    },
    {
      q: "En un modelo de capas, cada capa...",
      o: [
        "Funciona de forma totalmente independiente sin comunicarse con otras",
        "Ofrece servicios a su capa sucesora y usa los servicios de su predecesora",
        "Solo se comunica con la capa de aplicación",
        "Comparte sus datos con todas las capas a la vez"
      ],
      a: 1,
      e: "Cada capa ofrece servicios a su sucesora a través de una interfaz y se construye usando los servicios de su predecesora."
    },
    {
      q: "¿Cómo se llama el añadido de cabecera o información de control que cada capa agrega a los datos?",
      o: ["Multiplexación", "Encapsulación", "Modulación", "Conmutación"],
      a: 1,
      e: "Al proceso de añadir la cabecera (información de control) se le conoce como encapsulación."
    },
    {
      q: "¿Qué significan las siglas PDU?",
      o: [
        "Protocol Data Unit (Unidad de Datos de Protocolo)",
        "Public Data Utility",
        "Personal Device Unit",
        "Packet Delivery Update"
      ],
      a: 0,
      e: "La forma que adopta una sección de datos en cualquier capa se llama PDU (Protocol Data Unit, Unidad de Datos de Protocolo)."
    },
    {
      q: "¿Cuántas capas tiene el modelo de referencia OSI?",
      o: ["4 capas", "5 capas", "7 capas", "6 capas"],
      a: 2,
      e: "El modelo OSI estructura la red ideal en 7 capas o niveles."
    },
    {
      q: "¿En qué año fue finalmente estandarizado el modelo OSI por la ISO?",
      o: ["1973", "1983", "1984", "1997"],
      a: 2,
      e: "OSI empezó a desarrollarse a finales de los 70, pero no fue hasta 1984 cuando fue estandarizado por la ISO."
    },
    {
      q: "¿Por qué OSI actualmente solo se estudia como modelo teórico?",
      o: [
        "Porque es demasiado simple",
        "Porque es demasiado purista, duplica algunas funciones y apareció tarde",
        "Porque no tiene capas definidas",
        "Porque fue diseñado por el DoD"
      ],
      a: 1,
      e: "OSI no tuvo éxito por ser demasiado purista (duplica algunas funciones) y por aparecer tarde; solo se estudia como modelo teórico."
    },
    {
      q: "¿Qué capa del modelo OSI se encarga de la transmisión de datos binarios definiendo características mecánicas, eléctricas, funcionales y de procedimiento?",
      o: ["Capa 1 - Física", "Capa 2 - Enlace", "Capa 3 - Red", "Capa 4 - Transporte"],
      a: 0,
      e: "El nivel físico (capa 1) se encarga de la transmisión de datos binarios y define las características mecánicas, eléctricas, funcionales y de procedimiento."
    },
    {
      q: "¿Cómo se denomina el bloque de datos (PDU) de la capa de enlace en OSI?",
      o: ["Paquete", "Segmento", "Trama (frame)", "Datagrama"],
      a: 2,
      e: "La capa de enlace fracciona el mensaje en bloques de datos llamados tramas o frames."
    },
    {
      q: "¿Cuál es la principal función del nivel de red (capa 3) de OSI?",
      o: [
        "El cifrado de los datos",
        "El encaminamiento: elegir la ruta más adecuada para que el paquete llegue a destino",
        "Establecer una sesión entre emisor y receptor",
        "La transmisión de bits"
      ],
      a: 1,
      e: "La principal función del nivel 3 es el encaminamiento: elegir la ruta más adecuada para que el paquete llegue a su destino, identificado por una dirección."
    },
    {
      q: "¿Cómo se denomina el bloque de datos del nivel de red en OSI?",
      o: ["Trama", "Paquete", "Bit", "Segmento"],
      a: 1,
      e: "El bloque de datos del nivel de red se denomina paquete."
    },
    {
      q: "La capa de transporte de OSI establece una conexión que es realmente:",
      o: ["De nodo a nodo intermedio", "De extremo a extremo entre sistemas finales", "Solo física", "De difusión"],
      a: 1,
      e: "En el nivel de transporte la conexión es de extremo a extremo, sin establecer conversación con los niveles de transporte de máquinas intermedias."
    },
    {
      q: "¿Qué capa de OSI permite restaurar una transmisión interrumpida (por ejemplo, reanudar una descarga cortada)?",
      o: ["Capa de sesión (5)", "Capa de transporte (4)", "Capa de presentación (6)", "Capa de aplicación (7)"],
      a: 0,
      e: "El nivel de sesión (capa 5) establece una sesión con posibilidad de restaurarla en caso de error, permitiendo resincronizar una descarga cortada."
    },
    {
      q: "Los servicios de codificación, compresión y cifrado de datos, así como la conversión entre ASCII y EBCDIC, corresponden a la capa OSI de:",
      o: ["Aplicación (7)", "Presentación (6)", "Sesión (5)", "Transporte (4)"],
      a: 1,
      e: "El nivel de presentación (capa 6) define el formato de los datos y ofrece codificación, compresión y cifrado (ej.: conversión ASCII↔EBCDIC)."
    },
    {
      q: "¿Cuál es la capa superior de la jerarquía OSI, con la que se comunican las aplicaciones?",
      o: ["Capa de sesión", "Capa de presentación", "Capa de aplicación (7)", "Capa de transporte"],
      a: 2,
      e: "El nivel de aplicación (capa 7) es la capa superior; ofrece una interfaz común para que se comuniquen las aplicaciones (transferencia de archivos, correo, etc.)."
    },
    {
      q: "¿En qué año y por qué organismo se originó la arquitectura TCP/IP?",
      o: [
        "1984, por la ISO",
        "1973, por el DoD (Departamento de Defensa de EE.UU.)",
        "1997, por el IEEE",
        "1991, por ANSI/TIA/EIA"
      ],
      a: 1,
      e: "TCP/IP data de 1973, cuando el DoD (Departamento de Defensa de EE.UU.) inició un programa para desarrollar una red de comunicación."
    },
    {
      q: "¿Cuál era uno de los objetivos de diseño de la red TCP/IP?",
      o: [
        "Depender de un solo fabricante",
        "Ser tolerante a fallos, soportando ataques sin perder datos",
        "Funcionar únicamente con una tecnología de transmisión",
        "Limitarse a una sola aplicación"
      ],
      a: 1,
      e: "TCP/IP debía interconectar redes diferentes, ser tolerante a fallos (soportar ataques sin perder datos) y permitir distintas aplicaciones."
    },
    {
      q: "De los objetivos militares y de investigación surgieron dos redes distintas, ¿cuáles?",
      o: [
        "ARPANET (investigación) y MILNET (militar)",
        "Internet e Intranet",
        "OSI y TCP/IP",
        "LAN y WAN"
      ],
      a: 0,
      e: "Surgieron ARPANET (dedicada a la investigación) y MILNET (exclusivamente militar)."
    },
    {
      q: "¿Por qué a TCP/IP se le califica muchas veces como 'pila de protocolos'?",
      o: [
        "Porque se diseñaron primero los protocolos y luego se integraron por capas",
        "Porque solo tiene un protocolo",
        "Porque no usa capas",
        "Porque copia exactamente OSI"
      ],
      a: 0,
      e: "TCP/IP se construyó diseñando primero los protocolos y luego integrándolos por capas; por eso se la llama 'pila de protocolos'."
    },
    {
      q: "¿Cuál fue un motivo de la popularidad de TCP/IP frente a OSI?",
      o: [
        "Ser más complejo que OSI",
        "Ser más simple que OSI pero completamente funcional e independiente de fabricantes",
        "Depender de marcas comerciales concretas",
        "Soportar una única tecnología de red"
      ],
      a: 1,
      e: "TCP/IP es más simple que OSI pero funcional, independiente de fabricantes, soporta múltiples tecnologías y en 1983 fue estándar en EE.UU."
    },
    {
      q: "En la arquitectura TCP/IP, ¿qué capa depende de la tecnología utilizada y no se especifica de antemano?",
      o: [
        "Nivel de acceso a la red",
        "Nivel de transporte",
        "Nivel de aplicación",
        "Nivel de internet"
      ],
      a: 0,
      e: "El nivel de acceso a la red depende de la tecnología utilizada (cable, inalámbrico...) y TCP/IP no lo especifica de antemano."
    },
    {
      q: "¿Cuál es el protocolo más importante del nivel de red o internet en TCP/IP?",
      o: ["TCP", "UDP", "IP (Internet Protocol)", "HTTP"],
      a: 2,
      e: "El protocolo más importante del nivel de internet es IP (Internet Protocol o Protocolo de Interred)."
    },
    {
      q: "¿De qué NO se responsabiliza la capa de red (internet) en TCP/IP?",
      o: [
        "De hacer viajar los paquetes hacia su destino",
        "De comprobar errores y ordenar los paquetes en el destino",
        "De permitir que los paquetes atraviesen redes diferentes",
        "De enviar la información en forma de paquetes"
      ],
      a: 1,
      e: "La capa de internet no se responsabiliza de comprobar errores ni de ordenar los paquetes en destino; de eso se encarga la capa de transporte."
    },
    {
      q: "¿Qué dos protocolos destacan en el nivel de transporte de TCP/IP?",
      o: ["IP y ICMP", "TCP y UDP", "HTTP y FTP", "ARP y RARP"],
      a: 1,
      e: "En el nivel de transporte destacan TCP (Transmission Control Protocol) y UDP (User Datagram Protocol)."
    },
    {
      q: "En TCP/IP, ¿dónde se integran las funciones de las capas de sesión y presentación de OSI?",
      o: [
        "En el nivel de acceso a la red",
        "En el nivel de internet",
        "En el nivel de aplicación",
        "No existen en ningún nivel"
      ],
      a: 2,
      e: "En TCP/IP las capas de sesión y presentación están integradas en el nivel de aplicación; se deja a las aplicaciones el control de sesiones y formato."
    },
    {
      q: "¿Cuál de estos protocolos pertenece al nivel de aplicación de TCP/IP?",
      o: ["IP", "HTTP", "ARP", "Ethernet"],
      a: 1,
      e: "El nivel de aplicación incluye protocolos de alto nivel como TELNET, FTP, HTTP, POP3 y SMTP."
    },
    {
      q: "¿Qué hardware de red se define como todo aparato informático que facilita el uso de una red?",
      o: [
        "El software de red",
        "El hardware de red",
        "El protocolo de red",
        "La arquitectura de red"
      ],
      a: 1,
      e: "El hardware de red es todo aparato informático que facilita el uso de una red; el software gestiona eficientemente los recursos físicos."
    },
    {
      q: "Una ventaja del modelo de capas es que las modificaciones en una capa...",
      o: [
        "Obligan a rediseñar todas las demás capas",
        "Son transparentes a las demás mientras se mantengan los servicios de la interfaz",
        "Impiden la comunicación entre equipos",
        "Solo afectan a la capa física"
      ],
      a: 1,
      e: "Las modificaciones en una capa son transparentes a las demás siempre que se mantengan los servicios ofrecidos a través de la interfaz."
    },
    {
      q: "En el ejemplo de la cooperativa agrícola, el empaquetado de la fruta en cestas precintadas se asocia al nivel OSI de:",
      o: ["Aplicación (7)", "Presentación (6)", "Sesión (5)", "Red (3)"],
      a: 1,
      e: "El empaquetado y presentación de la fruta (cestas precintadas) se corresponde con el nivel 6 o de presentación."
    },
    {
      q: "En el mismo ejemplo, la determinación de las rutas (avión/carretera) y la tecnología de transporte corresponde al nivel:",
      o: ["Nivel 2 o de enlace", "Nivel 3 o de red", "Nivel 4 o de transporte", "Nivel 1 o físico"],
      a: 1,
      e: "Determinar las rutas posibles y la tecnología de transporte más adecuada se asocia al nivel 3 o de red."
    },
    {
      q: "ISO está formada por organismos de estandarización de más de 100 países. ¿Cuál de estos NO es uno de ellos?",
      o: ["ANSI (EE.UU.)", "DIN (Alemania)", "AENOR (España)", "IETF (Internet)"],
      a: 3,
      e: "ISO está formada por organismos como ANSI (EE.UU.), DIN (Alemania) o AENOR (España). El IETF regula estándares de Internet mediante RFC."
    },
    {
      q: "El IEEE fue fundado en 1884 y desarrolla estándares para...",
      o: [
        "Las industrias eléctricas y electrónicas",
        "La asignación de direcciones IP",
        "El cifrado bancario",
        "La normalización de tornillos"
      ],
      a: 0,
      e: "El IEEE (fundado en 1884) desarrolla estándares para las industrias eléctricas y electrónicas; en redes destaca el comité 802."
    },
    {
      q: "La TIA es un organismo de EE.UU. relacionado con:",
      o: [
        "La industria de las telecomunicaciones, en colaboración con ANSI",
        "La normalización europea de telefonía",
        "La regulación del espectro radioeléctrico mundial",
        "La definición exclusiva del modelo OSI"
      ],
      a: 0,
      e: "La TIA (Telecommunications Industry Association) está formada por industrias de telecomunicaciones y desarrolla estándares con ANSI y la antigua EIA."
    },
    {
      q: "¿Qué permite cada capa al estandarizarse de forma independiente?",
      o: [
        "Reducir la conectividad entre fabricantes",
        "Favorecer la conectividad entre equipos de diversos fabricantes que compartan el estándar",
        "Impedir las modificaciones",
        "Eliminar la necesidad de interfaces"
      ],
      a: 1,
      e: "Cada capa o nivel puede estandarizarse, favoreciendo la conectividad entre equipos de diversos fabricantes que compartan dicho estándar."
    },
    {
      q: "Durante la comunicación en un modelo por niveles, ¿qué hace cada capa con la PDU que recibe de la capa superior?",
      o: [
        "La descarta",
        "La encapsula según el protocolo que utiliza",
        "La cifra siempre",
        "La envía sin modificar"
      ],
      a: 1,
      e: "Cada capa encapsula las PDU que recibe de la capa superior de acuerdo con el protocolo que utiliza."
    },
    {
      q: "¿Qué afirmación describe mejor la relación TCP/IP vs OSI?",
      o: [
        "TCP/IP tiene más capas que OSI",
        "OSI es un modelo teórico de 7 capas y TCP/IP un modelo funcional con menos capas",
        "Son idénticos en número de capas",
        "OSI tiene éxito comercial y TCP/IP no se usa"
      ],
      a: 1,
      e: "OSI es el modelo teórico de referencia de 7 capas; TCP/IP es más simple, funcional y es el que se usa realmente."
    }
  ]
};
