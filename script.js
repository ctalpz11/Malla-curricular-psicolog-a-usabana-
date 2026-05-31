// =========================
// DATOS
// =========================

const malla = {
  1: [
    { id: "idioma_basico", nombre: "Competencias idiomáticas básicas", creditos: 2, prerequisitos: [] },
    { id: "intro_invest", nombre: "Introducción a la investigación", creditos: 3, prerequisitos: [] },
    { id: "percepcion", nombre: "Percepción y atención", creditos: 3, prerequisitos: [] },
    { id: "memoria", nombre: "Memoria y aprendizaje", creditos: 3, prerequisitos: [] },
    { id: "historia_psico", nombre: "Historia y fundamentos de la psicología", creditos: 3, prerequisitos: [] },
    { id: "electiva1", nombre: "Electivas I", creditos: 1, prerequisitos: [] },
    { id: "ingles2", nombre: "Inglés II", creditos: 3, prerequisitos: [] }
  ],

  2: [
    { id: "transformacion_digital", nombre: "Transformación Digital y Ciudadanía", creditos: 3, prerequisitos: ["idioma_basico"] },
    { id: "pensamiento", nombre: "Pensamiento y lenguaje", creditos: 3, prerequisitos: [] },
    { id: "invest_cuant", nombre: "Investigación cuantitativa", creditos: 2, prerequisitos: ["intro_invest"] },
    { id: "funciones_ejecutivas", nombre: "Funciones ejecutivas y cognición social", creditos: 3, prerequisitos: ["percepcion"] },
    { id: "modelos_aprendizaje", nombre: "Modelos de aprendizaje", creditos: 2, prerequisitos: [] },
    { id: "core1", nombre: "Core I", creditos: 2, prerequisitos: [] },
    { id: "ingles3", nombre: "Inglés III", creditos: 3, prerequisitos: ["ingles2"] }
  ],

  3: [
    { id: "problemas_sociales", nombre: "Problemas sociales contemporáneos", creditos: 2, prerequisitos: [] },
    { id: "desarrollo", nombre: "Psicología del desarrollo", creditos: 3, prerequisitos: [] },
    { id: "micro1", nombre: "Micropráctica I", creditos: 3, prerequisitos: [] },
    { id: "metodos_cuant", nombre: "Métodos y análisis cuantitativos", creditos: 2, prerequisitos: ["invest_cuant"] },
    { id: "electiva2", nombre: "Electivas II", creditos: 3, prerequisitos: [] },
    { id: "core2", nombre: "Core II", creditos: 2, prerequisitos: ["core1"] },
    { id: "ingles4", nombre: "Inglés IV", creditos: 3, prerequisitos: ["ingles3"] }
  ],

  4: [
    { id: "etica", nombre: "Ética profesional", creditos: 2, prerequisitos: [] },
    { id: "invest_cual", nombre: "Investigación cualitativa", creditos: 2, prerequisitos: ["metodos_cuant"] },
    { id: "psicopatologia", nombre: "Psicopatología", creditos: 3, prerequisitos: ["funciones_ejecutivas"] },
    { id: "psicometria", nombre: "Medición y evaluación del comportamiento", creditos: 3, prerequisitos: [] },
    { id: "electiva3", nombre: "Electivas III", creditos: 3, prerequisitos: [] },
    { id: "core3", nombre: "Core III", creditos: 2, prerequisitos: ["core2"] },
    { id: "ingles5", nombre: "Inglés V", creditos: 3, prerequisitos: ["ingles4"] }
  ],

  5: [
    { id: "social", nombre: "Psicología social", creditos: 3, prerequisitos: [] },
    { id: "metodos_cual", nombre: "Métodos y análisis cualitativos", creditos: 2, prerequisitos: ["invest_cual"] },
    { id: "clinica", nombre: "Psicología clínica", creditos: 2, prerequisitos: [] },
    { id: "micro2", nombre: "Micropráctica II", creditos: 3, prerequisitos: ["micro1"] },
    { id: "electiva4", nombre: "Electivas IV", creditos: 3, prerequisitos: [] },
    { id: "core4", nombre: "Core IV", creditos: 2, prerequisitos: ["core3"] },
    { id: "ingles6", nombre: "Inglés VI", creditos: 3, prerequisitos: ["ingles5"] }
  ],

  6: [
    { id: "organizacional", nombre: "Psicología organizacional", creditos: 3, prerequisitos: [] },
    { id: "educativa", nombre: "Psicología educativa", creditos: 3, prerequisitos: [] },
    { id: "electiva5", nombre: "Electivas V", creditos: 3, prerequisitos: [] },
    { id: "micro3", nombre: "Micropráctica III", creditos: 3, prerequisitos: ["micro2"] },
    { id: "core5", nombre: "Core V", creditos: 3, prerequisitos: ["core4"] },
    { id: "ingles7", nombre: "Inglés VII", creditos: 3, prerequisitos: ["ingles6"] }
  ],

  7: [
    { id: "competencias_prof", nombre: "Competencias profesionales", creditos: 1, prerequisitos: [] },
    { id: "politica", nombre: "Psicología, política y ciudadanía", creditos: 2, prerequisitos: [] },
    { id: "campo1", nombre: "Campo profesional I", creditos: 3, prerequisitos: ["social","organizacional","educativa"] },
    { id: "campo2", nombre: "Campo profesional II", creditos: 3, prerequisitos: ["social","organizacional","educativa"] },
    { id: "practica_formativa", nombre: "Práctica formativa en clínica y salud", creditos: 4, prerequisitos: ["clinica"] },
    { id: "electiva6", nombre: "Electivas VI", creditos: 3, prerequisitos: [] },
    { id: "proyecto1", nombre: "Proyecto en psicología I", creditos: 2, prerequisitos: [] }
  ],

  8: [
    { id: "practica_final", nombre: "Prácticas en psicología", creditos: 16, prerequisitos: ["proyecto1","practica_formativa"] }
  ]
};

const totalCreditos = 142;

let aprobadas = new Set(
  JSON.parse(localStorage.getItem("aprobadas")) || []
);

let creditos = Number(
  localStorage.getItem("creditos")
) || 0;

// =========================
// GUARDAR
// =========================

function guardarDatos() {

  localStorage.setItem(
    "aprobadas",
    JSON.stringify([...aprobadas])
  );

  localStorage.setItem(
    "creditos",
    creditos
  );

}
// =========================
// PROGRESO
// =========================

function actualizarProgreso() {

  const porcentaje =
    ((creditos / totalCreditos) * 100).toFixed(1);

  const restantes =
    totalCreditos - creditos;

  document.getElementById("creditos").textContent =
    creditos;

  document.getElementById("porcentaje").textContent =
    porcentaje;

  document.getElementById("restantes").textContent =
    restantes;

  const statsCreditos =
    document.getElementById("stats-creditos");

  const statsPorcentaje =
    document.getElementById("stats-porcentaje");

  const statsRestantes =
    document.getElementById("stats-restantes");

  if (statsCreditos) {
    statsCreditos.textContent = creditos;
  }

  if (statsPorcentaje) {
    statsPorcentaje.textContent =
      porcentaje + "%";
  }

  if (statsRestantes) {
    statsRestantes.textContent =
      restantes;
  }
if (creditos >= totalCreditos) {

  const modal =
    document.getElementById("graduacion-modal");

  if (modal) {
    modal.classList.add("mostrar");
  }

}
  guardarDatos();

}

// =========================
// BOTONES
// =========================

function crearBoton(materia) {

  const boton =
    document.createElement("button");

  boton.id = materia.id;

  boton.textContent =
    `${materia.nombre} (${materia.creditos}cr)`;

  boton.classList.add("materia");

  if (aprobadas.has(materia.id)) {
    boton.classList.add("aprobada");
  }

  boton.addEventListener("click", () => {

    // DESMARCAR

    if (aprobadas.has(materia.id)) {

      aprobadas.delete(materia.id);

      creditos -= materia.creditos;

      if (creditos < 0) {
        creditos = 0;
      }

      renderizarMalla();
      actualizarProgreso();

      return;
    }

    // MARCAR

    if (
      boton.classList.contains(
        "desbloqueada"
      )
    ) {

      aprobadas.add(materia.id);

      creditos += materia.creditos;

      renderizarMalla();
      actualizarProgreso();

    }

  });

  return boton;

}

// =========================
// DESBLOQUEAR
// =========================

function desbloquearMaterias() {

  for (const semestre in malla) {

    for (const materia of malla[semestre]) {

      const boton =
        document.getElementById(
          materia.id
        );

      if (!boton) continue;

      boton.classList.remove(
        "desbloqueada"
      );

      if (
        aprobadas.has(materia.id)
      ) {
        continue;
      }

      const disponible =
        materia.prerequisitos.every(
          req =>
            aprobadas.has(req)
        );

      if (
        disponible ||
        materia.prerequisitos.length === 0
      ) {

        boton.classList.add(
          "desbloqueada"
        );

      }

    }

  }

}

// =========================
// RENDER
// =========================

function renderizarMalla() {

  const contenedor =
    document.getElementById(
      "malla"
    );

  contenedor.innerHTML = "";

  for (const semestre in malla) {

    const columna =
      document.createElement("div");

    columna.classList.add(
      "semestre"
    );

    const titulo =
      document.createElement("h2");

    titulo.textContent =
      `Semestre ${semestre}`;

    columna.appendChild(
      titulo
    );

    for (const materia of malla[semestre]) {

      const boton =
        crearBoton(materia);

      columna.appendChild(
        boton
      );

    }

    contenedor.appendChild(
      columna
    );

  }

  desbloquearMaterias();

}

// =========================
// PESTAÑAS
// =========================

document
  .querySelectorAll(".tab-btn")
  .forEach(btn => {

    btn.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".tab-btn"
          )
          .forEach(b =>
            b.classList.remove(
              "active"
            )
          );

        document
          .querySelectorAll(
            ".tab-content"
          )
          .forEach(tab =>
            tab.classList.remove(
              "active"
            )
          );

        btn.classList.add(
          "active"
        );

        document
          .getElementById(
            btn.dataset.tab
          )
          .classList.add(
            "active"
          );

      }
    );

  });

// =========================
// INICIO
// =========================

renderizarMalla();

actualizarProgreso();
// =========================
// CERRAR GRADUACIÓN
// =========================

const botonCerrar =
  document.getElementById(
    "cerrar-graduacion"
  );

if (botonCerrar) {

  botonCerrar.addEventListener(
    "click",
    () => {

      document
        .getElementById(
          "graduacion-modal"
        )
        .classList.remove(
          "mostrar"
        );

    }
  );

}
