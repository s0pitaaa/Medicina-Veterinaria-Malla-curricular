const ramos = [
  // 1° Semestre
  { codigo: "BIOL034", nombre: "Biología Celular", semestre: 1, creditos: 8, prerequisitos: [] },
  { codigo: "BIOL035", nombre: "Laboratorio de Biocelular", semestre: 1, creditos: 5, prerequisitos: [] },
  { codigo: "DEBD221", nombre: "Zoología", semestre: 1, creditos: 6, prerequisitos: [] },
  { codigo: "FMMP003", nombre: "Matemática", semestre: 1, creditos: 7, prerequisitos: [] },
  { codigo: "MVET611", nombre: "Introducción a la Medicina Veterinaria", semestre: 1, creditos: 4, prerequisitos: [] },
  { codigo: "QUI002", nombre: "Química", semestre: 1, creditos: 8, prerequisitos: [] },

  // 2° Semestre
  { codigo: "BIOL166", nombre: "Bioquímica", semestre: 2, creditos: 8, prerequisitos: ["BIOL034", "BIOL035", "QUI002"] },
  { codigo: "CEGHC11", nombre: "Habilidades Comunicativas", semestre: 2, creditos: 8, prerequisitos: [] },
  { codigo: "ING119", nombre: "Inglés I", semestre: 2, creditos: 12, prerequisitos: [] },
  { codigo: "MVET621", nombre: "ADO I", semestre: 2, creditos: 18, prerequisitos: ["BIOL034", "BIOL035"] },
  { codigo: "MVET622", nombre: "Cuerpo Animal I", semestre: 2, creditos: 19, prerequisitos: ["BIOL034", "BIOL035", "DEBD221"] },

  // 3° Semestre
  { codigo: "DEBD130", nombre: "Métodos Cuantitativos RRNN", semestre: 3, creditos: 9, prerequisitos: ["FMMP003"] },
  { codigo: "ING129", nombre: "Inglés II", semestre: 3, creditos: 12, prerequisitos: ["ING119"] },
  { codigo: "MVET631", nombre: "ADO II", semestre: 3, creditos: 15, prerequisitos: ["BIOL166", "MVET621"] },
  { codigo: "MVET632", nombre: "Cuerpo Animal II", semestre: 3, creditos: 14, prerequisitos: ["MVET622"] },
  { codigo: "MVET633", nombre: "FDO I", semestre: 3, creditos: 15, prerequisitos: ["MVET622"] },

  // 4° Semestre
  { codigo: "DEBD140", nombre: "Ecología General", semestre: 4, creditos: 8, prerequisitos: ["DEBD130"] },
  { codigo: "ING239", nombre: "Inglés III", semestre: 4, creditos: 12, prerequisitos: ["ING129"] },
  { codigo: "MVET178", nombre: "Genética", semestre: 4, creditos: 6, prerequisitos: ["DEBD130", "BIOL166"] },
  { codigo: "MVET240", nombre: "Anatomía Clínica", semestre: 4, creditos: 13, prerequisitos: ["MVET632", "MVET633"] },
  { codigo: "MVET641", nombre: "FDO II", semestre: 4, creditos: 24, prerequisitos: ["MVET633", "MVET631"] },

  // 5° Semestre
  { codigo: "DEBD160", nombre: "Biología de la Conservación", semestre: 5, creditos: 8, prerequisitos: ["DEBD140"] },
  { codigo: "ING249", nombre: "Inglés IV", semestre: 5, creditos: 12, prerequisitos: ["ING239"] },
  { codigo: "MVET192", nombre: "Farmacología", semestre: 5, creditos: 12, prerequisitos: ["MVET641"] },
  { codigo: "MVET340", nombre: "EOA", semestre: 5, creditos: 7, prerequisitos: ["MVET631"] },
  { codigo: "MVET651", nombre: "Anatomía Patológica", semestre: 5, creditos: 18, prerequisitos: ["MVET632", "MVET641"] },
  { codigo: "MVET652", nombre: "Nutrición y Alimentación Animal", semestre: 5, creditos: 9, prerequisitos: ["MVET240"] },

  // 6° Semestre
  { codigo: "CEGCT12", nombre: "Razonamiento Científico", semestre: 6, creditos: 6, prerequisitos: ["CEGHC11"] },
  { codigo: "MVET230", nombre: "Patología Clínica", semestre: 6, creditos: 21, prerequisitos: ["MVET178", "MVET641"] },
  { codigo: "MVET310", nombre: "Imagenología", semestre: 6, creditos: 14, prerequisitos: ["MVET651"] },
  { codigo: "MVET440", nombre: "Epidemiología y Salud Pública", semestre: 6, creditos: 13, prerequisitos: ["DEBD130", "MVET641"] },
  { codigo: "MVET661", nombre: "Reproducción", semestre: 6, creditos: 12, prerequisitos: ["MVET633", "MVET632"] },

  // 7° Semestre
  { codigo: "DEBD161", nombre: "Manejo de Fauna Silvestre", semestre: 7, creditos: 6, prerequisitos: ["DEBD160", "MVET633"] },
  { codigo: "IAMB662", nombre: "Legislación y Evaluación de Impacto Ambiental", semestre: 7, creditos: 9, prerequisitos: ["DEBD140", "DEBD160"] },
  { codigo: "MVET671", nombre: "Inocuidad de los Alimentos", semestre: 7, creditos: 10, prerequisitos: ["MVET440"] },
  { codigo: "MVET673", nombre: "Medicina", semestre: 7, creditos: 25, prerequisitos: ["MVET641", "MVET178", "MVET192"] },
  { codigo: "MVET674", nombre: "Sistemas de Producción Animal", semestre: 7, creditos: 16, prerequisitos: ["MVET652", "MVET661", "MVET340"] },

  // 8° Semestre
  { codigo: "DEBD180", nombre: "Formulación y Evaluación de Proyectos en RRNN", semestre: 8, creditos: 8, prerequisitos: ["IAMB662"] },
  { codigo: "MVET280", nombre: "Cirugía", semestre: 8, creditos: 18, prerequisitos: ["MVET673", "MVET310"] },
  { codigo: "MVET370", nombre: "Zoonosis y Enfermedades Emergentes", semestre: 8, creditos: 8, prerequisitos: ["MVET671"] },
  { codigo: "MVET681", nombre: "Patobiología Molecular", semestre: 8, creditos: 15, prerequisitos: ["MVET230"] },
  { codigo: "MVET682", nombre: "Práctica Profesional", semestre: 8, creditos: 16, prerequisitos: ["MVET310", "MVET673"] },

  // 9° Semestre
  { codigo: "CEGPC13", nombre: "Pensamiento Crítico", semestre: 9, creditos: 5, prerequisitos: ["CEGCT12", "CEGHC11"] },
  { codigo: "MVET691", nombre: "Ética y Bienestar Animal", semestre: 9, creditos: 7, prerequisitos: ["MVET674", "DEBD161"] },
  { codigo: "MVET692", nombre: "Innovación y Transferencia Tecnológica", semestre: 9, creditos: 7, prerequisitos: ["DEBD180"] },
  { codigo: "MVET693", nombre: "Clínica", semestre: 9, creditos: 39, prerequisitos: ["MVET280", "MVET230"] },
  { codigo: "MVET694", nombre: "Proyecto de Título", semestre: 9, creditos: 13, prerequisitos: ["MVET370", "MVET280", "MVET681", "DEBD180", "MVET682"] },

  // 10° Semestre
  { codigo: "CEGRS14", nombre: "Responsabilidad Social", semestre: 10, creditos: 6, prerequisitos: ["CEGPC13"] },
  { codigo: "MVET695", nombre: "Electivo Profesional I", semestre: 10, creditos: 15, prerequisitos: ["MVET370", "MVET681", "DEBD180", "MVET682", "MVET693"] },
  { codigo: "MVET696", nombre: "Electivo Profesional II", semestre: 10, creditos: 15, prerequisitos: ["MVET370", "MVET280", "MVET681", "DEBD180", "MVET682"] },
  { codigo: "MVET697", nombre: "Internado", semestre: 10, creditos: 22, prerequisitos: ["MVET693", "MVET691"] }
];

const malla = document.getElementById("malla");
const aprobados = new Set();

function crearRamo(ramo) {
  const div = document.createElement("div");
  div.className = "ramo";
  div.textContent = `${ramo.codigo}\n${ramo.nombre}`;

  const bloqueado = ramo.prerequisitos.length > 0;
  if (bloqueado) div.classList.add("bloqueado");

  div.addEventListener("click", () => {
    if (div.classList.contains("bloqueado")) return;

    if (!div.classList.contains("aprobado")) {
      div.classList.add("aprobado");
      aprobados.add(ramo.codigo);
    } else {
      div.classList.remove("aprobado");
      aprobados.delete(ramo.codigo);
    }
    actualizarEstado();
  });

  div.dataset.codigo = ramo.codigo;
  div.dataset.prerequisitos = JSON.stringify(ramo.prerequisitos);
  return div;
}

function actualizarEstado() {
  document.querySelectorAll(".ramo").forEach(div => {
    const prerequisitos = JSON.parse(div.dataset.prerequisitos);
    const codigo = div.dataset.codigo;
    const cumplidos = prerequisitos.every(pr => aprobados.has(pr));

    if (!aprobados.has(codigo)) {
      if (prerequisitos.length > 0) {
        if (cumplidos) {
          div.classList.remove("bloqueado");
        } else {
          div.classList.add("bloqueado");
        }
      }
    }
  });
}

for (let semestre = 1; semestre <= 10; semestre++) {
  const sem = ramos.filter(r => r.semestre === semestre);
  sem.forEach(r => malla.appendChild(crearRamo(r)));
}
