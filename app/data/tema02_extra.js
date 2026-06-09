// Tema 2 - Preguntas adicionales (ampliación de cobertura)
window.TEMAS["tema02"].preguntas.push(
  {
    q: "¿Cuál de los siguientes aspectos NO es de los que debe controlar la comunicación entre ordenadores según el tema?",
    o: [
      "Aspectos eléctricos de los medios de transmisión",
      "Detección de errores en la comunicación",
      "El color de la carcasa de los equipos",
      "Compartir un único medio de transmisión"
    ],
    a: 2,
    e: "El intercambio de información debe controlar: aspectos eléctricos, detección de errores, compartir el medio, distinguir ordenadores, tipo de información y datos confidenciales."
  },
  {
    q: "El manejo de información confidencial dentro de la complejidad de la comunicación se relaciona con:",
    o: ["El cifrado/seguridad de los datos", "El color del cable", "La longitud del paquete", "El número de capas"],
    a: 0,
    e: "Entre los aspectos a controlar está el manejo de información confidencial, que se aborda con mecanismos de seguridad y cifrado."
  },
  {
    q: "¿Qué es un protocolo de red?",
    o: [
      "Un tipo de cable",
      "Un conjunto de reglas que permiten la comunicación entre dispositivos",
      "Una dirección física",
      "Un organismo de estandarización"
    ],
    a: 1,
    e: "Un protocolo de red es un conjunto de reglas y convenciones que regulan cómo se comunican los dispositivos."
  },
  {
    q: "En un modelo por capas, la 'interfaz' entre dos capas define:",
    o: [
      "El cifrado de los datos",
      "Los servicios que una capa ofrece a la capa adyacente",
      "La velocidad del medio físico",
      "La dirección IP"
    ],
    a: 1,
    e: "La interfaz define los servicios que cada capa ofrece a su capa adyacente (la sucesora), ocultando los detalles internos."
  },
  {
    q: "Una ventaja de dividir la comunicación en capas es que:",
    o: [
      "Se aumenta el número de colisiones",
      "Se pueden tratar los problemas de forma aislada y modificar una capa sin afectar al resto",
      "Se elimina la necesidad de protocolos",
      "Se reduce la compatibilidad entre fabricantes"
    ],
    a: 1,
    e: "Dividir en capas permite abordar los problemas de forma aislada; modificar una capa es transparente al resto si se mantiene la interfaz."
  },
  {
    q: "El proceso inverso a la encapsulación, que realiza el receptor al retirar las cabeceras capa a capa, se denomina:",
    o: ["Modulación", "Desencapsulación", "Conmutación", "Multiplexación"],
    a: 1,
    e: "La desencapsulación es el proceso inverso: en el receptor, cada capa retira la cabecera que añadió su capa homóloga en el emisor."
  },
  {
    q: "¿En qué orden se nombran las capas del modelo OSI de la 1 a la 7?",
    o: [
      "Física, Enlace, Red, Transporte, Sesión, Presentación, Aplicación",
      "Aplicación, Presentación, Sesión, Transporte, Red, Enlace, Física",
      "Red, Física, Enlace, Sesión, Transporte, Aplicación, Presentación",
      "Física, Red, Enlace, Transporte, Aplicación, Sesión, Presentación"
    ],
    a: 0,
    e: "De la 1 a la 7: Física, Enlace de datos, Red, Transporte, Sesión, Presentación y Aplicación."
  },
  {
    q: "La PDU de la capa física en OSI son:",
    o: ["Tramas", "Paquetes", "Bits", "Segmentos"],
    a: 2,
    e: "La capa física trabaja con bits, que es su unidad de transmisión."
  },
  {
    q: "¿Qué capa de OSI se encarga del control de flujo y de errores en el enlace local entre dos nodos?",
    o: ["Capa física (1)", "Capa de enlace (2)", "Capa de red (3)", "Capa de sesión (5)"],
    a: 1,
    e: "La capa de enlace (2) fracciona el mensaje en tramas y gestiona el control de errores y de flujo en el enlace local."
  },
  {
    q: "La unidad de datos del nivel de transporte en OSI se denomina:",
    o: ["Trama", "Paquete", "Segmento", "Bit"],
    a: 2,
    e: "En el nivel de transporte la PDU se denomina segmento (o datagrama en el caso de UDP)."
  },
  {
    q: "El direccionamiento lógico (direcciones de red) es responsabilidad de la capa OSI de:",
    o: ["Enlace", "Red", "Transporte", "Presentación"],
    a: 1,
    e: "El nivel de red (3) usa direcciones lógicas para identificar a los equipos y encaminar los paquetes."
  },
  {
    q: "¿Qué capa de OSI gestiona el diálogo y la sincronización entre las aplicaciones de dos equipos?",
    o: ["Sesión (5)", "Transporte (4)", "Red (3)", "Física (1)"],
    a: 0,
    e: "El nivel de sesión (5) establece, gestiona y sincroniza el diálogo entre aplicaciones, permitiendo restaurar transmisiones interrumpidas."
  },
  {
    q: "La conversión entre formatos de datos como ASCII y EBCDIC se realiza en la capa de:",
    o: ["Aplicación", "Presentación", "Sesión", "Transporte"],
    a: 1,
    e: "El nivel de presentación (6) se ocupa del formato de los datos: codificación, compresión, cifrado y conversiones como ASCII↔EBCDIC."
  },
  {
    q: "¿Cuál de estos protocolos NO pertenece al nivel de aplicación de TCP/IP?",
    o: ["SMTP", "FTP", "IP", "HTTP"],
    a: 2,
    e: "IP pertenece al nivel de internet (red). SMTP, FTP, HTTP, POP3 y TELNET son del nivel de aplicación."
  },
  {
    q: "¿Cuántas capas tiene habitualmente el modelo TCP/IP?",
    o: ["7 capas", "4 capas", "5 capas", "3 capas"],
    a: 1,
    e: "TCP/IP suele describirse con 4 capas: acceso a la red, internet, transporte y aplicación (frente a las 7 de OSI)."
  },
  {
    q: "En TCP/IP, las funciones de las capas física y de enlace de OSI quedan englobadas en:",
    o: [
      "El nivel de aplicación",
      "El nivel de acceso a la red",
      "El nivel de internet",
      "El nivel de transporte"
    ],
    a: 1,
    e: "El nivel de acceso a la red de TCP/IP engloba las funciones de las capas física y de enlace de OSI, y depende de la tecnología usada."
  },
  {
    q: "ARPANET fue la red orientada a la... y MILNET la dedicada a...",
    o: [
      "investigación / uso exclusivamente militar",
      "uso militar / la investigación",
      "telefonía / la televisión",
      "banca / el comercio"
    ],
    a: 0,
    e: "ARPANET se dedicó a la investigación y MILNET fue de uso exclusivamente militar."
  },
  {
    q: "Que TCP/IP sea 'independiente de fabricantes' significa que:",
    o: [
      "Solo funciona con equipos de una marca",
      "Cualquier fabricante puede implementarlo, favoreciendo la interoperabilidad",
      "Está prohibido su uso comercial",
      "Necesita licencia para cada equipo"
    ],
    a: 1,
    e: "Al ser independiente de fabricantes, cualquiera puede implementar TCP/IP, lo que favoreció su adopción masiva e interoperabilidad."
  },
  {
    q: "¿Qué protocolo del nivel de transporte de TCP/IP es orientado a conexión y fiable?",
    o: ["UDP", "TCP", "IP", "ICMP"],
    a: 1,
    e: "TCP es orientado a conexión y fiable (controla errores y ordena los paquetes); UDP es no orientado a conexión y más rápido."
  },
  {
    q: "El software de red, frente al hardware de red, se encarga de:",
    o: [
      "Ser el soporte físico de la conexión",
      "Gestionar eficientemente los recursos físicos de la red",
      "Transmitir los bits por el cable",
      "Conectar físicamente los equipos"
    ],
    a: 1,
    e: "El hardware de red es el aparato físico que facilita el uso de la red; el software gestiona eficientemente esos recursos físicos."
  },
  {
    q: "En la analogía de la cooperativa agrícola, la recogida de la fruta por los agricultores (origen de la mercancía) se asociaría al nivel más cercano a:",
    o: ["La aplicación (origen de los datos)", "La capa física", "El ruido", "El terminador"],
    a: 0,
    e: "El origen de la mercancía (datos) se asocia a las capas superiores (aplicación), que es donde se genera la información a transmitir."
  },
  {
    q: "¿Por qué se afirma que TCP/IP apareció antes de ser un 'modelo' formal?",
    o: [
      "Porque primero se diseñaron los protocolos y luego se integraron en capas",
      "Porque copió primero a OSI",
      "Porque no tiene protocolos",
      "Porque fue definido por la ISO"
    ],
    a: 0,
    e: "En TCP/IP primero se desarrollaron los protocolos funcionando y después se organizaron en capas; por eso se la llama 'pila de protocolos'."
  },
  {
    q: "Una desventaja del modelo OSI que explica su escaso éxito comercial es:",
    o: [
      "Ser demasiado simple",
      "Ser demasiado purista y duplicar algunas funciones, además de llegar tarde",
      "No tener capas",
      "No estar respaldado por ningún organismo"
    ],
    a: 1,
    e: "OSI resultó demasiado purista (duplicaba funciones) y apareció tarde frente a TCP/IP, por lo que quedó como modelo teórico."
  },
  {
    q: "La encapsulación implica que la PDU de una capa se convierte, en la capa inferior, en:",
    o: [
      "La cabecera de un nuevo paquete que envuelve esa PDU como datos (carga útil)",
      "Un bit suelto",
      "Una dirección MAC",
      "Un protocolo nuevo"
    ],
    a: 0,
    e: "Cada capa toma la PDU de la superior como datos (carga útil) y le añade su propia cabecera, formando una nueva PDU."
  },
  {
    q: "¿Cuál es el objetivo de que cada capa se comunique con su capa 'homóloga' (par) en el otro equipo?",
    o: [
      "Que cada capa interprete la información de control que su par añadió",
      "Aumentar el número de cables",
      "Eliminar la necesidad de direcciones",
      "Reducir la seguridad"
    ],
    a: 0,
    e: "Cada capa se comunica lógicamente con su homóloga del otro extremo: interpreta la información de control (cabecera) que esa capa par añadió."
  }
);
