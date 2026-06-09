/* ===== Tests de Redes - lógica de la aplicación ===== */
(function () {
  "use strict";

  const TEMAS = window.TEMAS || {};
  const ORDEN = ["tema01", "tema02", "tema03", "tema04", "tema05"];

  // Estado del test en curso
  let state = {
    temaKey: null,
    preguntas: [],   // preguntas (posiblemente barajadas) con opciones barajadas
    idx: 0,
    aciertos: 0,
    respondidas: [], // { pregunta, elegidaIdx, correctaIdx, opciones }
    instant: true
  };

  // ----- Utilidades -----
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, html) => {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // ----- Persistencia de mejores resultados -----
  function getBest(key) {
    try { return JSON.parse(localStorage.getItem("redes_best_" + key)); }
    catch (e) { return null; }
  }
  function setBest(key, pct) {
    const prev = getBest(key);
    if (prev == null || pct > prev) {
      localStorage.setItem("redes_best_" + key, JSON.stringify(pct));
    }
  }

  // ----- Navegación entre pantallas -----
  function show(screenId) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    $("#" + screenId).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ----- Pantalla inicial -----
  function renderHome() {
    const list = $("#temaList");
    list.innerHTML = "";
    ORDEN.forEach((key) => {
      const tema = TEMAS[key];
      if (!tema) return;
      const n = tema.preguntas.length;
      const best = getBest(key);
      const card = el("button", "tema-card");
      card.innerHTML =
        `<h3>${escapeHTML(tema.titulo)}</h3>` +
        `<span class="count">${n} preguntas</span>` +
        (best != null ? `<span class="best">🏆 Mejor resultado: ${best}%</span>` : `<span class="best">Sin intentos todavía</span>`);
      card.addEventListener("click", () => startQuiz(key));
      list.appendChild(card);
    });
  }

  // ----- Iniciar test -----
  function buildQuestions(temaKey, soloFallos) {
    const tema = TEMAS[temaKey];
    let base = soloFallos && soloFallos.length ? soloFallos : tema.preguntas;

    let preguntas = base.map((p) => p); // copia de referencias
    if ($("#optShuffle").checked) preguntas = shuffle(preguntas);

    const count = parseInt($("#optCount").value, 10);
    if (count > 0 && preguntas.length > count) preguntas = preguntas.slice(0, count);

    const shuffleOpts = $("#optShuffleOpts").checked;
    return preguntas.map((p) => {
      let opciones = p.o.map((texto, i) => ({ texto, esCorrecta: i === p.a }));
      if (shuffleOpts) opciones = shuffle(opciones);
      const correctaIdx = opciones.findIndex((o) => o.esCorrecta);
      return { q: p.q, e: p.e, opciones, correctaIdx };
    });
  }

  function startQuiz(temaKey, soloFallos) {
    state.temaKey = temaKey;
    state.preguntas = buildQuestions(temaKey, soloFallos);
    state.idx = 0;
    state.aciertos = 0;
    state.respondidas = [];
    state.instant = $("#optInstant").checked;

    $("#quizTitle").textContent = TEMAS[temaKey].titulo;
    show("quiz");
    renderQuestion();
  }

  // ----- Mostrar pregunta -----
  function renderQuestion() {
    const total = state.preguntas.length;
    const p = state.preguntas[state.idx];
    const box = $("#questionBox");
    box.innerHTML = "";

    $("#progress").textContent = `Pregunta ${state.idx + 1} de ${total}`;
    $("#progressFill").style.width = ((state.idx) / total * 100) + "%";
    $("#scoreLive").textContent = `Aciertos: ${state.aciertos}`;
    $("#btnNext").disabled = true;
    $("#btnNext").textContent = state.idx === total - 1 ? "Ver resultado" : "Siguiente →";

    box.appendChild(el("p", "q-text", escapeHTML(p.q)));

    const letras = ["A", "B", "C", "D", "E", "F"];
    p.opciones.forEach((op, i) => {
      const btn = el("button", "answer");
      btn.innerHTML = `<span class="letter">${letras[i]}</span>${escapeHTML(op.texto)}`;
      btn.addEventListener("click", () => choose(i, btn, box, p));
      box.appendChild(btn);
    });

    const exp = el("div", "explanation");
    exp.innerHTML = `<b>Explicación:</b> ${escapeHTML(p.e)}`;
    box.appendChild(exp);
  }

  function choose(i, btn, box, p) {
    const buttons = box.querySelectorAll(".answer");
    buttons.forEach((b) => (b.disabled = true));

    const acierto = i === p.correctaIdx;
    if (acierto) state.aciertos++;

    state.respondidas.push({
      q: p.q, e: p.e, opciones: p.opciones,
      elegidaIdx: i, correctaIdx: p.correctaIdx, acierto
    });

    if (state.instant) {
      buttons[p.correctaIdx].classList.add("correct");
      if (!acierto) btn.classList.add("wrong");
      box.querySelector(".explanation").classList.add("show");
    } else {
      btn.classList.add(acierto ? "correct" : "wrong");
    }

    $("#scoreLive").textContent = `Aciertos: ${state.aciertos}`;
    $("#btnNext").disabled = false;
  }

  function nextQuestion() {
    if (state.idx < state.preguntas.length - 1) {
      state.idx++;
      renderQuestion();
    } else {
      renderResult();
    }
  }

  // ----- Resultado -----
  function renderResult() {
    const total = state.preguntas.length;
    const pct = total ? Math.round((state.aciertos / total) * 100) : 0;
    setBest(state.temaKey, pct);

    $("#progressFill").style.width = "100%";
    $("#scorePct").textContent = pct + "%";
    const color = pct >= 75 ? "var(--ok)" : pct >= 50 ? "var(--accent)" : "var(--bad)";
    $("#scoreCircle").style.background =
      `conic-gradient(${color} ${pct}%, var(--card-2) ${pct}%)`;

    let msg;
    if (pct >= 90) msg = "¡Excelente! Dominas el tema. 🎉";
    else if (pct >= 75) msg = "¡Muy bien! Casi lo tienes. 👏";
    else if (pct >= 50) msg = "Bien, pero repasa los fallos. 📚";
    else msg = "Sigue estudiando, ¡tú puedes! 💪";
    $("#scoreText").textContent =
      `Has acertado ${state.aciertos} de ${total} preguntas. ${msg}`;

    const review = $("#reviewList");
    review.innerHTML = "<h3>Revisión de respuestas</h3>";
    const letras = ["A", "B", "C", "D", "E", "F"];
    state.respondidas.forEach((r, n) => {
      const item = el("div", "review-item " + (r.acierto ? "ok" : "bad"));
      let html = `<div class="rq">${n + 1}. ${escapeHTML(r.q)}</div>`;
      if (!r.acierto) {
        html += `<div class="ra user-bad">✗ Tu respuesta: ${letras[r.elegidaIdx]}) ${escapeHTML(r.opciones[r.elegidaIdx].texto)}</div>`;
      }
      html += `<div class="ra right">✓ Correcta: ${letras[r.correctaIdx]}) ${escapeHTML(r.opciones[r.correctaIdx].texto)}</div>`;
      html += `<div class="rexp">${escapeHTML(r.e)}</div>`;
      item.innerHTML = html;
      review.appendChild(item);
    });

    show("result");
  }

  function getFallos() {
    // Reconstruye las preguntas originales falladas para repasarlas
    return state.respondidas
      .filter((r) => !r.acierto)
      .map((r) => {
        const correcta = r.opciones[r.correctaIdx];
        return {
          q: r.q,
          e: r.e,
          o: r.opciones.map((o) => o.texto),
          a: r.correctaIdx
        };
      });
  }

  // ----- Eventos globales -----
  document.addEventListener("DOMContentLoaded", function () {
    renderHome();

    $("#btnNext").addEventListener("click", nextQuestion);
    $("#btnExit").addEventListener("click", () => { renderHome(); show("home"); });
    $("#btnHome").addEventListener("click", () => { renderHome(); show("home"); });
    $("#btnRetry").addEventListener("click", () => startQuiz(state.temaKey));
    $("#btnRetryFails").addEventListener("click", () => {
      const fallos = getFallos();
      if (!fallos.length) {
        alert("¡No tienes fallos que repasar! 🎉");
        return;
      }
      startQuiz(state.temaKey, fallos);
    });
  });
})();
