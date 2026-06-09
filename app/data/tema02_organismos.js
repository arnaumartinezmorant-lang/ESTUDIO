// Tema 2 (extra) - Organismos de estandarización y normalización
// Test específico para dominar cada término: siglas, ámbito, sede, año y logros.
window.TEMAS = window.TEMAS || {};
window.TEMAS["tema02_organismos"] = {
  titulo: "Tema 2 · ESPECIAL Organismos de estandarización",
  preguntas: [
    // ---------- Conceptos generales ----------
    {
      q: "¿Qué es un estándar en comunicaciones?",
      o: [
        "Un conjunto de normas, acuerdos y recomendaciones técnicas que regulan la transmisión de los sistemas de comunicación",
        "Un programa para cifrar datos",
        "Un cable normalizado",
        "Una topología de red"
      ],
      a: 0,
      e: "Un estándar es un conjunto de normas, acuerdos y recomendaciones técnicas que regulan la transmisión de los sistemas de comunicación."
    },
    {
      q: "¿Cuáles son las tres ventajas del empleo de estándares según el tema?",
      o: [
        "Compatibilidad entre fabricantes, precios más competitivos y se evitan los monopolios",
        "Mayor velocidad, menor coste y más colisiones",
        "Cifrado, compresión y modulación",
        "Más cableado, más routers y más switches"
      ],
      a: 0,
      e: "Las ventajas son: compatibilidad entre productos de distintos fabricantes, precios más competitivos y que se evitan los monopolios."
    },
    {
      q: "¿Por qué los estándares favorecen precios más competitivos?",
      o: [
        "Porque obligan a subir los precios",
        "Porque al haber compatibilidad entre fabricantes, la oferta de productos será mayor",
        "Porque eliminan la competencia",
        "Porque encarecen la fabricación"
      ],
      a: 1,
      e: "Al existir compatibilidad entre productos de diferentes fabricantes, la oferta de productos es mayor y los precios más competitivos."
    },
    {
      q: "Un estándar de FACTO se caracteriza porque...",
      o: [
        "Lo define siempre un organismo oficial",
        "Surge de la gran aceptación que ha tenido un producto en el mercado; no es oficial",
        "Es obligatorio por ley en todos los países",
        "Solo lo usa un fabricante"
      ],
      a: 1,
      e: "Los estándares de facto surgen de la gran aceptación de un producto en la industria; no son oficiales, aunque a veces acaban siendo estandarizados por un organismo."
    },
    {
      q: "Un estándar DE IURE es aquel que...",
      o: [
        "Surge del uso masivo de un producto",
        "Está definido por organizaciones o grupos oficiales",
        "Solo existe en Estados Unidos",
        "No tiene valor real"
      ],
      a: 1,
      e: "Los estándares de iure son los definidos por organizaciones o grupos oficiales."
    },
    {
      q: "¿Qué puede ocurrir con un estándar de facto con el tiempo?",
      o: [
        "Que desaparezca obligatoriamente",
        "Que en muchas ocasiones acabe siendo estandarizado por un organismo internacional",
        "Que se convierta en ilegal",
        "Que pierda toda compatibilidad"
      ],
      a: 1,
      e: "Aunque no son oficiales, los estándares de facto en muchas ocasiones acaban siendo estandarizados por un organismo internacional."
    },

    // ---------- ITU ----------
    {
      q: "¿Qué significan las siglas ITU?",
      o: [
        "International Telecommunication Union",
        "Internet Technical Unit",
        "International Technology Union",
        "Industrial Telecom Union"
      ],
      a: 0,
      e: "ITU = International Telecommunication Union (Unión Internacional de Telecomunicaciones)."
    },
    {
      q: "¿De qué organización internacional es la ITU el organismo más importante en materia de tecnologías de la información?",
      o: ["La OTAN", "Las Naciones Unidas (ONU)", "La Unión Europea", "El IEEE"],
      a: 1,
      e: "La ITU es la organización más importante de las Naciones Unidas en materia de tecnologías de la información."
    },
    {
      q: "¿Cuál de estas NO es una función de la ITU?",
      o: [
        "Coordinar el uso del espectro radioeléctrico",
        "Asignar órbitas de satélites",
        "Publicar las normas UNE españolas",
        "Hacer frente a problemas de seguridad en el ciberespacio"
      ],
      a: 2,
      e: "Las normas UNE las publica AENOR. La ITU establece estándares mundiales, coordina el espectro radioeléctrico, asigna órbitas de satélites y atiende la ciberseguridad."
    },
    {
      q: "La ITU establece estándares mundiales para...",
      o: [
        "La interconexión de sistemas de comunicaciones",
        "La fabricación de tornillos",
        "Las normas europeas únicamente",
        "El cifrado de correo electrónico"
      ],
      a: 0,
      e: "La ITU establece estándares mundiales para la interconexión de sistemas de comunicaciones."
    },
    {
      q: "¿Quién coordina el uso del espectro radioeléctrico y asigna las órbitas de satélites?",
      o: ["IETF", "ITU", "AENOR", "TIA"],
      a: 1,
      e: "La ITU coordina el uso del espectro radioeléctrico y asigna las órbitas de los satélites."
    },

    // ---------- ISO ----------
    {
      q: "¿Qué significan las siglas ISO?",
      o: [
        "International Organization for Standardization",
        "Internet Standard Organization",
        "Industrial Systems Office",
        "International Service Operator"
      ],
      a: 0,
      e: "ISO = International Organization for Standardization (Organización Internacional de Normalización)."
    },
    {
      q: "¿Dónde tiene su sede la ISO?",
      o: ["Nueva York (EEUU)", "Ginebra (Suiza)", "Bruselas (Bélgica)", "Madrid (España)"],
      a: 1,
      e: "La ISO es una agencia internacional sin ánimo de lucro con sede en Ginebra (Suiza)."
    },
    {
      q: "¿Cuál es el objetivo de la ISO?",
      o: [
        "El desarrollo de normalizaciones que abarcan un amplio abanico de materias",
        "Asignar direcciones IP",
        "Regular únicamente Internet",
        "Coordinar el espectro radioeléctrico"
      ],
      a: 0,
      e: "El objetivo de la ISO es el desarrollo de normalizaciones que abarcan un amplio abanico de materias."
    },
    {
      q: "Según el tema, los estándares de la ISO van 'desde el paso de los tornillos hasta...'",
      o: [
        "las arquitecturas de comunicaciones para la interconexión de sistemas abiertos (OSI)",
        "los protocolos RFC de Internet",
        "el sistema de telefonía GSM",
        "las normas UNE"
      ],
      a: 0,
      e: "La ISO ha definido multitud de estándares, desde el paso de los tornillos hasta arquitecturas de comunicaciones para la interconexión de sistemas abiertos (OSI - Open Systems Interconnection)."
    },
    {
      q: "¿Qué famoso modelo de comunicaciones definió la ISO?",
      o: ["TCP/IP", "OSI (Open Systems Interconnection)", "GSM", "Ethernet"],
      a: 1,
      e: "La ISO definió el modelo OSI (Open Systems Interconnection) para la interconexión de sistemas abiertos."
    },
    {
      q: "¿Por cuántos países está formada aproximadamente la ISO?",
      o: ["Más de 100 países", "Exactamente 27 países", "Menos de 50 países", "Solo 10 países"],
      a: 0,
      e: "La ISO está formada por organismos de estandarización de más de 100 países."
    },
    {
      q: "¿Cuáles de estos organismos forman parte de la ISO?",
      o: [
        "ANSI (EEUU), DIN (Alemania) y AENOR (España)",
        "IETF, ITU y ETSI",
        "TIA, EIA y RFC",
        "GSM, OSI y UNE"
      ],
      a: 0,
      e: "La ISO está formada por organismos de estandarización de más de 100 países: ANSI en EEUU, DIN en Alemania, AENOR en España, etc."
    },
    {
      q: "Dentro de la ISO, las 'organizaciones observadoras' se caracterizan por...",
      o: [
        "tener doble voto",
        "no poseer capacidad de voto",
        "presidir todos los comités",
        "ser las únicas que crean estándares"
      ],
      a: 1,
      e: "Las organizaciones observadoras de la ISO no poseen capacidad de voto."
    },
    {
      q: "El organismo de estandarización de Alemania que forma parte de la ISO es:",
      o: ["DIN", "ANSI", "AENOR", "ETSI"],
      a: 0,
      e: "DIN es el organismo de estandarización de Alemania; ANSI el de EEUU y AENOR el de España."
    },

    // ---------- IEEE ----------
    {
      q: "¿Qué significan las siglas IEEE?",
      o: [
        "Institute of Electrical and Electronic Engineers",
        "International Electronic Engineering Entity",
        "Internet Engineering and Electronics Enterprise",
        "Institute of Electronic and Energy Engineers"
      ],
      a: 0,
      e: "IEEE = Institute of Electrical and Electronic Engineers (se lee 'IE cubo')."
    },
    {
      q: "¿En qué año fue fundado el IEEE?",
      o: ["1973", "1884", "1984", "1991"],
      a: 1,
      e: "El IEEE fue fundado en 1884 y desde entonces desarrolla estándares para las industrias eléctricas y electrónicas."
    },
    {
      q: "¿Para qué industrias desarrolla estándares el IEEE?",
      o: [
        "Para las industrias eléctricas y electrónicas",
        "Solo para Internet",
        "Para la industria del automóvil",
        "Para la industria textil"
      ],
      a: 0,
      e: "Desde 1884, el IEEE desarrolla estándares para las industrias eléctricas y electrónicas."
    },
    {
      q: "El IEEE se define a sí mismo como...",
      o: [
        "la mayor asociación profesional para el avance de la innovación y la excelencia tecnológica",
        "una agencia de las Naciones Unidas",
        "el organismo español de normalización",
        "un proveedor de Internet"
      ],
      a: 0,
      e: "El IEEE es la mayor asociación profesional para el avance de la innovación y la excelencia tecnológica en beneficio de la humanidad."
    },
    {
      q: "En redes de datos, ¿qué comité del IEEE es el más relevante?",
      o: ["El comité 802", "El comité 568", "El comité 11801", "El comité 900"],
      a: 0,
      e: "El comité 802 del IEEE desarrolla estándares de protocolos de comunicaciones para la interfaz física de las redes locales de datos."
    },
    {
      q: "¿De qué se ocupan los estándares del comité 802 del IEEE?",
      o: [
        "De la interfaz física de las conexiones de las redes locales de datos",
        "De asignar órbitas de satélites",
        "De publicar las normas UNE",
        "De la telefonía móvil GSM"
      ],
      a: 0,
      e: "El comité 802 desarrolla estándares de protocolos de comunicaciones para la interfaz física de las conexiones de las redes locales de datos."
    },

    // ---------- IETF ----------
    {
      q: "¿Qué significan las siglas IETF?",
      o: [
        "Internet Engineering Task Force",
        "International Electronic Technical Forum",
        "Internet Electrical Test Foundation",
        "Industrial Engineering Task Force"
      ],
      a: 0,
      e: "IETF = Internet Engineering Task Force."
    },
    {
      q: "¿Cuál es el objetivo del IETF?",
      o: [
        "Velar para que la arquitectura de Internet y sus protocolos funcionen correctamente",
        "Asignar órbitas de satélites",
        "Publicar normas europeas",
        "Fabricar tornillos normalizados"
      ],
      a: 0,
      e: "El IETF vela para que la arquitectura de Internet y los protocolos que la conforman funcionen correctamente."
    },
    {
      q: "¿En qué áreas actúa principalmente el IETF?",
      o: [
        "Transporte, encaminamiento y seguridad",
        "Telefonía móvil y satélites",
        "Tornillos y materiales",
        "Cifrado de hardware únicamente"
      ],
      a: 0,
      e: "El IETF actúa en diversas áreas como el transporte, el encaminamiento y la seguridad."
    },
    {
      q: "¿Mediante qué documentos regula el IETF los estándares de Internet?",
      o: ["RFC (Request For Comments)", "UNE", "ISO 9001", "Normas 802"],
      a: 0,
      e: "El IETF regula los estándares de Internet mediante propuestas conocidas como RFC (Request For Comments)."
    },
    {
      q: "¿Qué significan las siglas RFC?",
      o: [
        "Request For Comments",
        "Remote Frame Control",
        "Routing Function Center",
        "Real Format Code"
      ],
      a: 0,
      e: "RFC = Request For Comments, las propuestas mediante las que el IETF regula los estándares de Internet."
    },
    {
      q: "¿Quiénes componen el IETF?",
      o: [
        "Técnicos y profesionales del área de redes",
        "Únicamente gobiernos",
        "Solo fabricantes de cable",
        "Astronautas y satélites"
      ],
      a: 0,
      e: "El IETF se compone de técnicos y profesionales del área de redes que, mediante las RFC, regulan los estándares de Internet."
    },
    {
      q: "El IETF es una institución...",
      o: [
        "sin ánimo de lucro",
        "con ánimo de lucro y privada",
        "estatal española",
        "dependiente de la OTAN"
      ],
      a: 0,
      e: "El IETF es una institución sin ánimo de lucro centrada en el correcto funcionamiento de la arquitectura y los protocolos de Internet."
    },

    // ---------- ANSI ----------
    {
      q: "¿Qué significan las siglas ANSI?",
      o: [
        "American National Standards Institute",
        "Association of Network Standard Industries",
        "American Network Security Institute",
        "Advanced National Standard Interface"
      ],
      a: 0,
      e: "ANSI = American National Standards Institute."
    },
    {
      q: "¿De qué país es el organismo regulador ANSI?",
      o: ["Estados Unidos", "España", "Alemania", "Reino Unido"],
      a: 0,
      e: "ANSI es la organización encargada de supervisar el desarrollo de estándares que se aplican en los Estados Unidos de América."
    },
    {
      q: "¿Cuál es la función de ANSI?",
      o: [
        "Supervisar el desarrollo de estándares aplicados en EEUU",
        "Asignar direcciones IP en todo el mundo",
        "Coordinar las órbitas de satélites",
        "Publicar las normas UNE"
      ],
      a: 0,
      e: "ANSI es una organización sin ánimo de lucro encargada de supervisar el desarrollo de estándares que se aplican en EEUU."
    },

    // ---------- TIA ----------
    {
      q: "¿Qué significan las siglas TIA?",
      o: [
        "Telecommunications Industry Association",
        "Technical Internet Association",
        "Telecom Infrastructure Agency",
        "Transmission Industry Alliance"
      ],
      a: 0,
      e: "TIA = Telecommunications Industry Association."
    },
    {
      q: "¿Por quién está formada la TIA?",
      o: [
        "Por representantes de las industrias más importantes del sector de las telecomunicaciones",
        "Por gobiernos europeos",
        "Por universidades españolas",
        "Por fabricantes de tornillos"
      ],
      a: 0,
      e: "La TIA está formada por representantes de las industrias más importantes del sector de las telecomunicaciones."
    },
    {
      q: "La TIA ha desarrollado estándares relacionados con las redes en colaboración con...",
      o: [
        "ANSI y la antigua EIA",
        "ISO y la ITU",
        "AENOR y ETSI",
        "IETF y el IEEE"
      ],
      a: 0,
      e: "La TIA ha desarrollado numerosos estándares internacionales sobre redes en colaboración con ANSI y la antigua EIA."
    },
    {
      q: "¿En qué país tiene su origen la TIA, al igual que ANSI?",
      o: ["Estados Unidos", "España", "Suiza", "Alemania"],
      a: 0,
      e: "La TIA y ANSI son organismos reguladores de Estados Unidos."
    },

    // ---------- ETSI ----------
    {
      q: "¿Qué significan las siglas ETSI?",
      o: [
        "European Telecommunications Standards Institute",
        "European Technology Service Institute",
        "Electronic Telecom Standard Interface",
        "European Test and Standard Institute"
      ],
      a: 0,
      e: "ETSI = European Telecommunications Standards Institute (Instituto Europeo de Normas de Telecomunicaciones)."
    },
    {
      q: "¿De qué ámbito geográfico es el organismo ETSI?",
      o: ["Europeo", "Estadounidense", "Español", "Mundial de la ONU"],
      a: 0,
      e: "ETSI es un organismo regulador europeo."
    },
    {
      q: "¿Cuál ha sido uno de los grandes éxitos de estandarización de ETSI?",
      o: [
        "El sistema de telefonía móvil GSM",
        "El modelo OSI",
        "Las RFC de Internet",
        "Las normas UNE"
      ],
      a: 0,
      e: "Uno de los éxitos de estandarización del ETSI ha sido el sistema de telefonía móvil GSM."
    },
    {
      q: "ETSI produce estándares aplicables...",
      o: [
        "globalmente, para las tecnologías de la información y comunicación",
        "solo en España",
        "solo para satélites",
        "exclusivamente para cableado"
      ],
      a: 0,
      e: "ETSI es una organización independiente sin ánimo de lucro que produce estándares aplicables globalmente para las TIC."
    },
    {
      q: "El sistema de telefonía móvil GSM fue estandarizado por:",
      o: ["ETSI", "ITU", "AENOR", "ANSI"],
      a: 0,
      e: "El sistema GSM fue uno de los éxitos de estandarización del ETSI (organismo europeo)."
    },

    // ---------- AENOR / UNE ----------
    {
      q: "¿Qué significan las siglas AENOR?",
      o: [
        "Asociación Española de Normalización",
        "Agencia Europea de Normas y Organismos Reguladores",
        "Asociación Electrónica Nacional de Operadores de Red",
        "Administración Estatal de Normas"
      ],
      a: 0,
      e: "AENOR = Asociación Española de Normalización."
    },
    {
      q: "¿De qué país es el organismo regulador AENOR?",
      o: ["España", "Estados Unidos", "Alemania", "Francia"],
      a: 0,
      e: "AENOR es el organismo regulador español de normalización."
    },
    {
      q: "¿A través de qué se encarga AENOR de publicar las normas?",
      o: [
        "De sus Comités Técnicos de Normalización",
        "Del comité 802",
        "De las RFC",
        "De la ITU"
      ],
      a: 0,
      e: "AENOR, a través de sus Comités Técnicos de Normalización, publica las normas UNE y adopta las normas europeas."
    },
    {
      q: "¿Qué normas publica AENOR?",
      o: ["Las normas UNE", "Las RFC", "Las normas ISO 802", "Las normas GSM"],
      a: 0,
      e: "AENOR publica las normas UNE y adopta las normas europeas."
    },
    {
      q: "¿Qué significa el acrónimo UNE?",
      o: [
        "Una Norma Española",
        "Unión Nacional Europea",
        "Unidad Normalizada Estándar",
        "Universal Network Estándar"
      ],
      a: 0,
      e: "UNE es el acrónimo de 'Una Norma Española', publicadas por AENOR."
    },
    {
      q: "Además de publicar las normas UNE, ¿qué otra función tiene AENOR?",
      o: [
        "La adopción de las normas europeas",
        "Asignar órbitas de satélites",
        "Regular el espectro radioeléctrico mundial",
        "Definir el modelo OSI"
      ],
      a: 0,
      e: "AENOR se encarga de la publicación de las normas UNE y de la adopción de las normas europeas."
    },

    // ---------- Preguntas de relación / repaso global ----------
    {
      q: "Relaciona: ¿qué organismo es de ámbito ESPAÑOL?",
      o: ["AENOR", "ETSI", "ANSI", "ITU"],
      a: 0,
      e: "AENOR es español, ETSI europeo, ANSI/TIA estadounidenses e ITU/ISO internacionales."
    },
    {
      q: "Relaciona: ¿qué organismo es de ámbito EUROPEO?",
      o: ["ETSI", "AENOR", "TIA", "ISO"],
      a: 0,
      e: "ETSI es el organismo europeo de normas de telecomunicaciones."
    },
    {
      q: "¿Qué dos organismos reguladores son de Estados Unidos?",
      o: ["ANSI y TIA", "AENOR y DIN", "ITU e ISO", "ETSI e IETF"],
      a: 0,
      e: "ANSI y TIA son los organismos reguladores estadounidenses mencionados en el tema."
    },
    {
      q: "¿Qué organismo está vinculado directamente a las Naciones Unidas?",
      o: ["ITU", "AENOR", "TIA", "ETSI"],
      a: 0,
      e: "La ITU es la organización más importante de las Naciones Unidas en materia de tecnologías de la información."
    },
    {
      q: "¿Qué organismo regula los estándares específicamente de Internet?",
      o: ["IETF", "ISO", "AENOR", "ITU"],
      a: 0,
      e: "El IETF regula los estándares de Internet mediante las RFC."
    },
    {
      q: "Asocia el logro con su organismo: el modelo OSI →",
      o: ["ISO", "ETSI", "IEEE", "ITU"],
      a: 0,
      e: "El modelo OSI (Open Systems Interconnection) fue definido por la ISO."
    },
    {
      q: "Asocia el logro con su organismo: el sistema de telefonía móvil GSM →",
      o: ["ETSI", "ISO", "ANSI", "IETF"],
      a: 0,
      e: "El sistema GSM fue uno de los éxitos de estandarización del ETSI."
    },
    {
      q: "Asocia el logro con su organismo: las normas UNE →",
      o: ["AENOR", "ANSI", "ITU", "IEEE"],
      a: 0,
      e: "Las normas UNE (Una Norma Española) son publicadas por AENOR."
    },
    {
      q: "Asocia el logro con su organismo: el comité 802 de redes locales →",
      o: ["IEEE", "ISO", "ETSI", "TIA"],
      a: 0,
      e: "El comité 802, sobre la interfaz física de las redes locales de datos, es del IEEE."
    },
    {
      q: "Asocia el logro con su organismo: las RFC (Request For Comments) →",
      o: ["IETF", "ITU", "AENOR", "ANSI"],
      a: 0,
      e: "Las RFC son las propuestas mediante las que el IETF regula los estándares de Internet."
    },
    {
      q: "Asocia con su organismo: coordina el espectro radioeléctrico y asigna órbitas de satélites →",
      o: ["ITU", "IEEE", "ETSI", "AENOR"],
      a: 0,
      e: "La ITU coordina el uso del espectro radioeléctrico y asigna las órbitas de los satélites."
    },
    {
      q: "¿Qué organismo fue fundado en 1884?",
      o: ["IEEE", "IETF", "AENOR", "ETSI"],
      a: 0,
      e: "El IEEE fue fundado en 1884."
    },
    {
      q: "¿Qué organismo internacional tiene su sede en Ginebra (Suiza)?",
      o: ["ISO", "ANSI", "TIA", "AENOR"],
      a: 0,
      e: "La ISO tiene su sede en Ginebra (Suiza)."
    },
    {
      q: "De los siguientes, ¿cuál NO es un organismo internacional, sino nacional o regional?",
      o: ["AENOR", "ISO", "ITU", "IEEE"],
      a: 0,
      e: "AENOR es el organismo nacional español. ISO e ITU son internacionales y el IEEE es una asociación profesional global."
    },
    {
      q: "¿Qué tienen en común ISO, ITU, IETF, IEEE, ANSI, TIA y ETSI según el tema?",
      o: [
        "Son organismos sin ánimo de lucro relacionados con la normalización/estandarización",
        "Son proveedores comerciales de Internet",
        "Son fabricantes de hardware",
        "Son protocolos de red"
      ],
      a: 0,
      e: "Todos son organismos (varios explícitamente 'sin ánimo de lucro') dedicados a la normalización y estandarización en sus respectivos ámbitos."
    }
  ]
};
