/* ===== Tests de Redes - lógica de la aplicación ===== */
(function () {
  "use strict";

  const TEMAS = window.TEMAS || {};
  const ORDEN = ["tema01", "tema02", "tema02_organismos", "tema03", "tema04", "tema05", "tema06"];

  // Tests combinados (mezclan los bancos de varios temas)
  const COMBOS = [
    { key: "combo_45", titulo: "🔀 Combinado · Temas 4 + 5", temas: ["tema04", "tema05"] },
    { key: "combo_no3", titulo: "🔀 Combinado · Todos MENOS Tema 3", temas: ["tema01", "tema02", "tema02_organismos", "tema04", "tema05", "tema06"] }
  ];
  function getCombo(key) { return COMBOS.find((c) => c.key === key) || null; }

  // Devuelve { titulo, preguntas } tanto para temas normales como combinados
  function getTema(key) {
    const combo = getCombo(key);
    if (combo) {
      let preguntas = [];
      combo.temas.forEach((tk) => {
        if (TEMAS[tk]) preguntas = preguntas.concat(TEMAS[tk].preguntas);
      });
      return { titulo: combo.titulo, preguntas: preguntas };
    }
    return TEMAS[key];
  }

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
      const hasRepaso = !!(window.REPASO && window.REPASO[key]);
      const hasResumen = !!(window.RESUMEN && window.RESUMEN[key]);
      const card = el("div", "tema-card");
      let html =
        `<h3>${escapeHTML(tema.titulo)}</h3>` +
        `<span class="count">${n} preguntas</span>` +
        (best != null ? `<span class="best">🏆 Mejor resultado: ${best}%</span>` : `<span class="best">Sin intentos todavía</span>`) +
        `<div class="mode-row">`;
      if (hasResumen) {
        html += `<button class="mode-btn resumen" data-mode="resumen">📖 Resumen</button>`;
      }
      html += `<button class="mode-btn primary" data-mode="test">📝 Test</button>`;
      if (hasRepaso) {
        html += `<button class="mode-btn" data-mode="flash">🃏 Flashcards</button>`;
        html += `<button class="mode-btn" data-mode="match">🔗 Relacionar</button>`;
        html += `<button class="mode-btn" data-mode="vf">✔️ V / F</button>`;
        html += `<button class="mode-btn" data-mode="huecos">🧩 Completar</button>`;
      }
      html += `</div>`;
      card.innerHTML = html;
      card.querySelectorAll(".mode-btn").forEach((b) => {
        b.addEventListener("click", () => {
          const m = b.getAttribute("data-mode");
          if (m === "test") startQuiz(key);
          else if (m === "flash") startFlashcards(key);
          else if (m === "match") startMatching(key);
          else if (m === "vf") startVF(key);
          else if (m === "huecos") startHuecos(key);
          else if (m === "resumen") startResumen(key);
        });
      });
      list.appendChild(card);
    });

    // Tarjetas de tests combinados
    COMBOS.forEach((combo) => {
      const pool = getTema(combo.key).preguntas;
      const best = getBest(combo.key);
      const card = el("div", "tema-card combo-card");
      card.innerHTML =
        `<h3>${escapeHTML(combo.titulo)}</h3>` +
        `<span class="count">${pool.length} preguntas</span>` +
        (best != null ? `<span class="best">🏆 Mejor resultado: ${best}%</span>` : `<span class="best">Sin intentos todavía</span>`) +
        `<div class="mode-row"><button class="mode-btn primary" data-mode="test">📝 Hacer test</button></div>`;
      card.querySelector(".mode-btn").addEventListener("click", () => startQuiz(combo.key));
      list.appendChild(card);
    });
  }

  // ----- Iniciar test -----
  function buildQuestions(temaKey, soloFallos) {
    const tema = getTema(temaKey);
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

    $("#quizTitle").textContent = getTema(temaKey).titulo;
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

  // ===================================================
  //  MODOS DE REPASO
  // ===================================================
  let flash = { items: [], idx: 0, flipped: false, key: null };
  let match = { left: [], right: [], selectedL: null, pairs: 0, done: 0, key: null };
  let vf = { items: [], idx: 0, aciertos: 0, key: null };

  // ----- FLASHCARDS -----
  function startFlashcards(key) {
    const r = window.REPASO[key];
    flash = { items: shuffle(r.flashcards), idx: 0, flipped: false, key };
    $("#flashTitle").textContent = TEMAS[key].titulo;
    show("flashcards");
    renderFlash();
  }
  function renderFlash() {
    const it = flash.items[flash.idx];
    $("#flashProgress").textContent = `Tarjeta ${flash.idx + 1} de ${flash.items.length}`;
    const card = $("#flashCard");
    card.classList.toggle("flipped", flash.flipped);
    $("#flashFront").textContent = it.t;
    $("#flashBack").textContent = it.d;
    $("#flashHint").textContent = flash.flipped ? "(definición — pulsa para ver el término)" : "(término — pulsa para ver la definición)";
  }
  function flipFlash() { flash.flipped = !flash.flipped; renderFlash(); }
  function nextFlash() {
    if (flash.idx < flash.items.length - 1) { flash.idx++; flash.flipped = false; renderFlash(); }
    else { renderHome(); show("home"); }
  }
  function prevFlash() {
    if (flash.idx > 0) { flash.idx--; flash.flipped = false; renderFlash(); }
  }

  // ----- RELACIONAR (matching) -----
  function startMatching(key) {
    const r = window.REPASO[key];
    // Tomar hasta 8 parejas para que sea manejable
    let pairs = shuffle(r.relacionar).slice(0, 8);
    match = {
      left: pairs.map((p, i) => ({ id: i, text: p.a, matched: false })),
      right: shuffle(pairs.map((p, i) => ({ id: i, text: p.b, matched: false }))),
      selectedL: null, pairs: pairs.length, done: 0, key
    };
    $("#matchTitle").textContent = TEMAS[key].titulo;
    show("matching");
    renderMatch();
  }
  function renderMatch() {
    const colL = $("#matchLeft"); const colR = $("#matchRight");
    colL.innerHTML = ""; colR.innerHTML = "";
    $("#matchProgress").textContent = `Parejas: ${match.done} / ${match.pairs}`;
    match.left.forEach((item) => {
      const b = el("button", "match-item" + (item.matched ? " matched" : "") + (match.selectedL === item.id ? " selected" : ""));
      b.textContent = item.text;
      b.disabled = item.matched;
      b.addEventListener("click", () => { match.selectedL = item.id; renderMatch(); });
      colL.appendChild(b);
    });
    match.right.forEach((item) => {
      const b = el("button", "match-item" + (item.matched ? " matched" : ""));
      b.textContent = item.text;
      b.disabled = item.matched;
      b.addEventListener("click", () => tryMatch(item));
      colR.appendChild(b);
    });
    if (match.done === match.pairs) {
      const msg = el("div", "match-done", "✅ ¡Has relacionado todas las parejas!");
      colR.parentElement.appendChild(msg);
    }
  }
  function tryMatch(rightItem) {
    if (match.selectedL == null) { flashMsg("Selecciona primero un elemento de la izquierda."); return; }
    if (rightItem.id === match.selectedL) {
      match.left.find((l) => l.id === match.selectedL).matched = true;
      rightItem.matched = true;
      match.done++; match.selectedL = null;
      renderMatch();
    } else {
      flashMsg("❌ No coinciden, prueba otra vez.");
      match.selectedL = null;
      renderMatch();
    }
  }
  function flashMsg(text) {
    const m = $("#matchMsg");
    m.textContent = text;
    m.classList.add("show");
    setTimeout(() => m.classList.remove("show"), 1200);
  }

  // ----- VERDADERO / FALSO -----
  function startVF(key) {
    const r = window.REPASO[key];
    vf = { items: shuffle(r.vf), idx: 0, aciertos: 0, key };
    $("#vfTitle").textContent = TEMAS[key].titulo;
    show("vf");
    renderVF();
  }
  function renderVF() {
    const it = vf.items[vf.idx];
    $("#vfProgress").textContent = `Afirmación ${vf.idx + 1} de ${vf.items.length}`;
    $("#vfScore").textContent = `Aciertos: ${vf.aciertos}`;
    $("#vfStatement").textContent = it.s;
    $("#vfExp").classList.remove("show");
    $("#vfExp").textContent = "";
    $("#btnVerdadero").disabled = false;
    $("#btnFalso").disabled = false;
    $("#btnVfNext").disabled = true;
  }
  function answerVF(resp) {
    const it = vf.items[vf.idx];
    const ok = resp === it.v;
    if (ok) vf.aciertos++;
    $("#btnVerdadero").disabled = true;
    $("#btnFalso").disabled = true;
    const exp = $("#vfExp");
    exp.innerHTML = (ok ? "✅ Correcto. " : "❌ Incorrecto. ") +
      `<b>${it.v ? "VERDADERO" : "FALSO"}</b>. ${escapeHTML(it.e)}`;
    exp.classList.add("show");
    $("#vfScore").textContent = `Aciertos: ${vf.aciertos}`;
    $("#btnVfNext").disabled = false;
    $("#btnVfNext").textContent = vf.idx === vf.items.length - 1 ? "Finalizar" : "Siguiente →";
  }
  function nextVF() {
    if (vf.idx < vf.items.length - 1) { vf.idx++; renderVF(); }
    else {
      alert(`Verdadero/Falso completado: ${vf.aciertos} de ${vf.items.length} aciertos.`);
      renderHome(); show("home");
    }
  }

  // ----- RESUMEN -----
  function startResumen(key) {
    $("#resumenTitle").textContent = TEMAS[key].titulo;
    $("#resumenBody").innerHTML = window.RESUMEN[key];
    show("resumen");
  }

  // ----- COMPLETAR (cloze, definición → término) -----
  let cloze = { items: [], idx: 0, aciertos: 0, key: null };
  function startHuecos(key) {
    const cards = window.REPASO[key].flashcards;
    const terms = cards.map((c) => c.t);
    // Construir items: definición + 4 opciones de término
    let items = shuffle(cards).map((c) => {
      const distract = shuffle(terms.filter((t) => t !== c.t)).slice(0, 3);
      const opts = shuffle([c.t].concat(distract));
      return { def: c.d, answer: c.t, options: opts };
    });
    cloze = { items: items, idx: 0, aciertos: 0, key: key };
    $("#huecosTitle").textContent = TEMAS[key].titulo;
    show("huecos");
    renderHuecos();
  }
  function renderHuecos() {
    const it = cloze.items[cloze.idx];
    $("#huecosProgress").textContent = `Definición ${cloze.idx + 1} de ${cloze.items.length}`;
    $("#huecosScore").textContent = `Aciertos: ${cloze.aciertos}`;
    const box = $("#huecosBox");
    box.innerHTML = "";
    box.appendChild(el("p", "cloze-text",
      `¿A qué término corresponde?<br><span class="cloze-gap">_______</span> : ${escapeHTML(it.def)}`));
    const opts = el("div", "cloze-options");
    it.options.forEach((opt) => {
      const b = el("button", "cloze-opt");
      b.textContent = opt;
      b.addEventListener("click", () => answerHuecos(opt, b, opts, it));
      opts.appendChild(b);
    });
    box.appendChild(opts);
    $("#btnHuecosNext").disabled = true;
    $("#btnHuecosNext").textContent = cloze.idx === cloze.items.length - 1 ? "Finalizar" : "Siguiente →";
  }
  function answerHuecos(opt, btn, container, it) {
    const buttons = container.querySelectorAll(".cloze-opt");
    buttons.forEach((b) => {
      b.disabled = true;
      if (b.textContent === it.answer) b.classList.add("correct");
    });
    if (opt === it.answer) cloze.aciertos++;
    else btn.classList.add("wrong");
    $("#huecosScore").textContent = `Aciertos: ${cloze.aciertos}`;
    $("#btnHuecosNext").disabled = false;
  }
  function nextHuecos() {
    if (cloze.idx < cloze.items.length - 1) { cloze.idx++; renderHuecos(); }
    else {
      alert(`Completar terminado: ${cloze.aciertos} de ${cloze.items.length} aciertos.`);
      renderHome(); show("home");
    }
  }

  // ===================================================

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

    // Flashcards
    $("#flashCard").addEventListener("click", flipFlash);
    $("#btnFlashNext").addEventListener("click", nextFlash);
    $("#btnFlashPrev").addEventListener("click", prevFlash);
    $("#btnFlashExit").addEventListener("click", () => { renderHome(); show("home"); });
    // Matching
    $("#btnMatchExit").addEventListener("click", () => { renderHome(); show("home"); });
    // V/F
    $("#btnVerdadero").addEventListener("click", () => answerVF(true));
    $("#btnFalso").addEventListener("click", () => answerVF(false));
    $("#btnVfNext").addEventListener("click", nextVF);
    $("#btnVfExit").addEventListener("click", () => { renderHome(); show("home"); });
    // Resumen
    $("#btnResumenExit").addEventListener("click", () => { renderHome(); show("home"); });
    // Completar (cloze)
    $("#btnHuecosNext").addEventListener("click", nextHuecos);
    $("#btnHuecosExit").addEventListener("click", () => { renderHome(); show("home"); });
  });
})();
