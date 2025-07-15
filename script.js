<div id="contenedor"></div>

  <script>
    const malla = {
      "1° Año": {
        "1° Semestre": [
          {codigo: "BIOL034", nombre: "Biología Celular", creditos: 8, prerequisitos: ""},
          {codigo: "BIOL035", nombre: "Lab. Biocelular", creditos: 5, prerequisitos: ""},
          {codigo: "DEBD221", nombre: "Zoología", creditos: 6, prerequisitos: ""},
          {codigo: "FMMP003", nombre: "Matemática", creditos: 7, prerequisitos: ""},
          {codigo: "MVET611", nombre: "Introducción a la Medicina Veterinaria", creditos: 4, prerequisitos: ""},
          {codigo: "QUI002", nombre: "Química", creditos: 8, prerequisitos: ""},
        ],
        "2° Semestre": [
          {codigo: "BIOL166", nombre: "Bioquímica", creditos: 8, prerequisitos: "Biol. Celular, Lab. Biocel., Química"},
          {codigo: "CEGHC11", nombre: "Habilidades Comunicativas", creditos: 8, prerequisitos: ""},
          {codigo: "ING119", nombre: "Inglés I", creditos: 12, prerequisitos: ""},
          {codigo: "MVET621", nombre: "ADO I", creditos: 18, prerequisitos: "Biol. Celular, Lab. Biocel."},
          {codigo: "MVET622", nombre: "Cuerpo Animal I", creditos: 19, prerequisitos: "Biol. Celular, Lab. Biocel., Zoología"},
        ]
      },
      "2° Año": {
        "3° Semestre": [
          {codigo: "DEBD130", nombre: "Métodos Cuantitativos RR.NN", creditos: 9, prerequisitos: "Matemática"},
          {codigo: "ING129", nombre: "Inglés II", creditos: 12, prerequisitos: "Inglés I"},
          {codigo: "MVET631", nombre: "ADO II", creditos: 15, prerequisitos: "Bioquímica, ADO I"},
          {codigo: "MVET632", nombre: "Cuerpo Animal II", creditos: 14, prerequisitos: "Cuerpo Animal I"},
          {codigo: "MVET633", nombre: "FDO I", creditos: 15, prerequisitos: "Cuerpo Animal I"},
        ],
        "4° Semestre": [
          {codigo: "DEBD140", nombre: "Ecología General", creditos: 8, prerequisitos: "Métodos Cuantitativos"},
          {codigo: "ING239", nombre: "Inglés III", creditos: 12, prerequisitos: "Inglés II"},
          {codigo: "MVET178", nombre: "Genética", creditos: 6, prerequisitos: "Métodos Cuantitativos, Bioquímica"},
          {codigo: "MVET240", nombre: "Anatomía Clínica", creditos: 13, prerequisitos: "Cuerpo Animal II, FDO I"},
        ]
