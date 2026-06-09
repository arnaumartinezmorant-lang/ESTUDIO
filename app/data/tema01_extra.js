// Tema 1 - Preguntas adicionales (ampliación de cobertura)
window.TEMAS["tema01"].preguntas.push(
  {
    q: "En el ejercicio del sistema de comunicación con código Morse, ¿cuánto dura una raya?",
    o: ["1 punto", "3 puntos", "5 puntos", "7 puntos"],
    a: 1,
    e: "En el ejercicio, la duración de una raya es de 3 puntos."
  },
  {
    q: "En ese mismo ejercicio, el espacio entre palabras equivale a una pausa de:",
    o: ["1 punto", "3 puntos", "5 puntos", "7 puntos"],
    a: 3,
    e: "El espacio entre palabras se representa con una pausa equivalente a 7 puntos; el espacio entre letras, 3 puntos."
  },
  {
    q: "En el ejercicio de comunicación, ¿qué función cumple el alumno que actúa como 'reloj'?",
    o: [
      "Escribir el mensaje en inglés",
      "Dar golpes con la misma frecuencia, representando cada golpe la duración de un punto",
      "Obstaculizar la fuente lumínica",
      "Decodificar el mensaje"
    ],
    a: 1,
    e: "El alumno-reloj da golpes con la misma frecuencia; cada golpe representa la duración de un punto (sincronización)."
  },
  {
    q: "En el ejercicio, el alumno que actúa como 'ruido' tiene la función de:",
    o: [
      "Transmitir la señal lumínica",
      "Obstaculizar (una sola vez) la fuente lumínica durante 1 segundo",
      "Codificar a Morse",
      "Hacer de canal de recepción"
    ],
    a: 1,
    e: "El alumno-ruido obstaculiza una sola vez la fuente lumínica durante 1 segundo, simulando una perturbación."
  },
  {
    q: "¿Qué perturbación de la señal se debe a campos electromagnéticos externos (motores, otros cables, etc.)?",
    o: ["Atenuación", "Interferencias externas", "Retardo de propagación", "Codificación"],
    a: 1,
    e: "Las interferencias externas son perturbaciones provocadas por campos electromagnéticos ajenos a la propia señal."
  },
  {
    q: "¿Qué relación mide la calidad de una señal frente al ruido de fondo?",
    o: ["La relación señal/ruido (SNR)", "El ancho de banda", "La latencia", "La impedancia"],
    a: 0,
    e: "La relación señal/ruido (SNR) compara el nivel de la señal con el del ruido; cuanto mayor es, mejor es la calidad."
  },
  {
    q: "Las redes LAN se caracterizan por tener una tasa de errores:",
    o: ["Muy alta", "Baja", "Imposible de medir", "Siempre nula"],
    a: 1,
    e: "Las LAN ofrecen alta velocidad (de 100 Mbps a varios Gbps), baja latencia y baja tasa de errores, al ser de propiedad privada y corto alcance."
  },
  {
    q: "¿Qué tecnologías son propias del ámbito de las redes WAN para cubrir grandes distancias?",
    o: [
      "Bluetooth e infrarrojos",
      "Fibra óptica, enlaces satelitales y cables submarinos",
      "Solo cable de par trenzado",
      "Únicamente Wi-Fi doméstico"
    ],
    a: 1,
    e: "Las WAN usan infraestructuras de gran alcance como fibra óptica, enlaces satelitales y cables submarinos, gestionadas por proveedores (ISP)."
  },
  {
    q: "En el sistema posicional, el valor de un dígito depende de:",
    o: [
      "Únicamente del símbolo",
      "Del símbolo y de la posición que ocupa",
      "Solo de la base",
      "Del número de dígitos totales"
    ],
    a: 1,
    e: "En los sistemas posicionales el valor depende tanto del símbolo como de la posición que ocupa dentro del número."
  },
  {
    q: "¿Cuál es el valor decimal del número binario (110101)₂?",
    o: ["49", "53", "51", "45"],
    a: 1,
    e: "(110101)₂ = 32+16+0+4+0+1 = 53."
  },
  {
    q: "¿Cuál es la representación binaria del número decimal 95?",
    o: ["1011111", "1010101", "1111011", "1001111"],
    a: 0,
    e: "95 en binario es 1011111 (64+16+8+4+2+1 = 95)."
  },
  {
    q: "¿A qué valor decimal equivale el hexadecimal (1B58)₁₆?",
    o: ["6488", "7000", "6999", "7256"],
    a: 1,
    e: "(1B58)₁₆ = 1×4096 + 11×256 + 5×16 + 8 = 4096+2816+80+8 = 7000."
  },
  {
    q: "Al convertir el binario 1110 1010 a hexadecimal (agrupando de 4 en 4), se obtiene:",
    o: ["EA", "AE", "E1", "1A"],
    a: 0,
    e: "1110 = E y 1010 = A, por lo que 11101010 = EA en hexadecimal."
  },
  {
    q: "¿Por qué el sistema decimal resulta natural para los seres humanos?",
    o: [
      "Porque solo usa dos símbolos",
      "Porque coincide con los diez dedos de las manos",
      "Porque se adapta a los transistores",
      "Porque usa letras"
    ],
    a: 1,
    e: "El sistema decimal (base 10) es natural para los humanos porque tenemos diez dedos en las manos."
  },
  {
    q: "Una característica de las redes analógicas frente a las digitales es que son:",
    o: [
      "Más resistentes al ruido",
      "Más susceptibles al ruido y a la degradación con la distancia",
      "Más fáciles de cifrar",
      "Más rápidas siempre"
    ],
    a: 1,
    e: "Las redes analógicas son más susceptibles al ruido y se degradan con la distancia; las digitales son más resistentes y permiten compresión y cifrado."
  },
  {
    q: "¿Qué dispositivo se sitúa en el centro de una topología física en estrella?",
    o: [
      "Un terminador",
      "Un nodo central (hub o switch)",
      "Un repetidor en cada extremo",
      "Una resistencia"
    ],
    a: 1,
    e: "En la topología en estrella todos los nodos se conectan a un nodo central (hub o switch) que gestiona la comunicación."
  },
  {
    q: "En una topología en anillo, ¿en cuántos sentidos viaja normalmente la información?",
    o: [
      "En ambos sentidos a la vez",
      "En un único sentido",
      "Solo hacia el nodo central",
      "De forma aleatoria"
    ],
    a: 1,
    e: "En el anillo la información viaja en un único sentido pasando por cada nodo, lo que evita colisiones mediante el uso del testigo."
  },
  {
    q: "¿Qué topología combina características de otras y conecta nodos en estructura jerárquica de niveles?",
    o: ["Bus", "Anillo", "Árbol (jerárquica)", "Malla"],
    a: 2,
    e: "La topología en árbol o jerárquica organiza los nodos por niveles y puede verse como una combinación de varias estrellas."
  },
  {
    q: "Una topología física en bus se corresponde con una topología lógica de:",
    o: ["Anillo", "Estrella", "Bus", "Malla"],
    a: 2,
    e: "En el bus, la disposición física y el comportamiento lógico coinciden: todos comparten el mismo medio (bus)."
  },
  {
    q: "¿Cuál es una ventaja principal de la topología mallada?",
    o: [
      "Su bajo coste",
      "Su gran redundancia y tolerancia a fallos por las múltiples rutas",
      "La simplicidad del cableado",
      "Depender de un único nodo central"
    ],
    a: 1,
    e: "La malla ofrece gran redundancia y tolerancia a fallos gracias a las múltiples rutas entre nodos, aunque su coste de cableado es alto."
  },
  {
    q: "En un sistema de comunicación, el 'decodificador' se encarga de:",
    o: [
      "Generar el mensaje original",
      "Interpretar el código y recuperar el mensaje",
      "Transformar la información para el canal",
      "Añadir ruido a la señal"
    ],
    a: 1,
    e: "El decodificador interpreta el código y recupera el mensaje; es la operación inversa a la del codificador."
  },
  {
    q: "El conjunto de signos y reglas que se usa para representar la información se denomina:",
    o: ["Canal", "Código", "Ruido", "Señal recibida"],
    a: 1,
    e: "El código es el sistema de signos y reglas. El lenguaje son las convenciones que comparten emisor y receptor."
  },
  {
    q: "¿Qué criterio de clasificación distingue entre redes simplex, half-duplex y full-duplex?",
    o: [
      "El ámbito geográfico",
      "El modo de transmisión (sentido del flujo de datos)",
      "El método de transmisión",
      "La naturaleza de la señal"
    ],
    a: 1,
    e: "Simplex, half-duplex y full-duplex son clasificaciones según el modo de transmisión, es decir, el sentido en que fluyen los datos."
  },
  {
    q: "La televisión y la radio tradicionales son ejemplos típicos de transmisión:",
    o: ["Full-duplex", "Half-duplex", "Simplex", "Punto a punto"],
    a: 2,
    e: "La televisión y la radio tradicionales son simplex: la información fluye en un único sentido (emisor → receptor)."
  },
  {
    q: "En una red de difusión (broadcast), cuando un nodo transmite:",
    o: [
      "Solo lo recibe el nodo de destino directo",
      "Todos los demás nodos del canal compartido lo reciben",
      "No lo recibe nadie",
      "Se necesita un testigo para transmitir"
    ],
    a: 1,
    e: "En las redes de difusión hay un único canal compartido: cuando un nodo transmite, todos los demás reciben la señal."
  }
);
