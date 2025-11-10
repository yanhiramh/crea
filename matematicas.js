/* Const Quinto */

const mateQuintoBtn = document.querySelector('#mate-quinto-btn');
const mateQuintoUl = document.querySelector('#mate-quinto-ul');
const mateQuintoBtnArrow = document.querySelector('#mate-quinto-btn-arrow');
const mateQuintoGeoBtn = document.querySelector('#mate-quinto-geo-btn');
const mateQuintoGeoUl = document.querySelector('#mate-quinto-geo-ul');
const mateQuintoGeoBtnArrow = document.querySelector('#mate-quinto-geo-btn-arrow');
const mateQuintoAriBtn = document.querySelector('#mate-quinto-ari-btn');
const mateQuintoAriUl = document.querySelector('#mate-quinto-ari-ul');
const mateQuintoAriBtnArrow = document.querySelector('#mate-quinto-ari-btn-arrow');
const mateQuintoAlgeBtn = document.querySelector('#mate-quinto-alge-btn');
const mateQuintoAlgeUl = document.querySelector('#mate-quinto-alge-ul');
const mateQuintoAlgeBtnArrow = document.querySelector('#mate-quinto-alge-btn-arrow');

/* Const Sexto */

const mateSextoBtn = document.querySelector('#mate-sexto-btn');
const mateSextoUl = document.querySelector('#mate-sexto-ul');
const mateSextoBtnArrow = document.querySelector('#mate-sexto-btn-arrow');
const mateSextoGeoBtn = document.querySelector('#mate-sexto-geo-btn');
const mateSextoGeoUl = document.querySelector('#mate-sexto-geo-ul');
const mateSextoGeoBtnArrow = document.querySelector('#mate-sexto-geo-btn-arrow');
const mateSextoAriBtn = document.querySelector('#mate-sexto-ari-btn');
const mateSextoAriUl = document.querySelector('#mate-sexto-ari-ul');
const mateSextoAriBtnArrow = document.querySelector('#mate-sexto-ari-btn-arrow');
const mateSextoAlgeBtn = document.querySelector('#mate-sexto-alge-btn');
const mateSextoAlgeUl = document.querySelector('#mate-sexto-alge-ul');
const mateSextoAlgeBtnArrow = document.querySelector('#mate-sexto-alge-btn-arrow');

/* Const Septimo */

const mateSeptimoBtn = document.querySelector('#mate-septimo-btn');
const mateSeptimoUl = document.querySelector('#mate-septimo-ul');
const mateSeptimoBtnArrow = document.querySelector('#mate-septimo-btn-arrow');
const mateSeptimoGeoBtn = document.querySelector('#mate-septimo-geo-btn');
const mateSeptimoGeoUl = document.querySelector('#mate-septimo-geo-ul');
const mateSeptimoGeoBtnArrow = document.querySelector('#mate-septimo-geo-btn-arrow');
const mateSeptimoAriBtn = document.querySelector('#mate-septimo-ari-btn');
const mateSeptimoAriUl = document.querySelector('#mate-septimo-ari-ul');
const mateSeptimoAriBtnArrow = document.querySelector('#mate-septimo-ari-btn-arrow');
const mateSeptimoAlgeBtn = document.querySelector('#mate-septimo-alge-btn');
const mateSeptimoAlgeUl = document.querySelector('#mate-septimo-alge-ul');
const mateSeptimoAlgeBtnArrow = document.querySelector('#mate-sexptimo-alge-btn-arrow');
const mateSeptimoTrigoBtn = document.querySelector('#mate-septimo-trigo-btn');
const mateSeptimoTrigoUl = document.querySelector('#mate-septimo-trigo-ul');
const mateSeptimoTrigoBtnArrow = document.querySelector('#mate-sexptimo-trigo-btn-arrow');

/* Functions */


/* MATE QUINTO */

/* Principal*/

if(mateQuintoBtn) {
  mateQuintoBtn.addEventListener('click', () => {
    mateQuintoUl.style.display = (mateQuintoUl.style.display === 'block') ? 'none' : 'block';
    mateQuintoBtnArrow.style.transition = 'transform 0.3s ease';
    mateQuintoBtnArrow.style.transform = (mateQuintoBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Geometría*/

if(mateQuintoGeoBtn) {
  mateQuintoGeoBtn.addEventListener('click', () => {
    mateQuintoGeoUl.style.display = (mateQuintoGeoUl.style.display === 'block') ? 'none' : 'block';
    mateQuintoGeoBtnArrow.style.transition = 'transform 0.3s ease';
    mateQuintoGeoBtnArrow.style.transform = (mateQuintoGeoBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Aritmética */

if(mateQuintoAriBtn) {
  mateQuintoAriBtn.addEventListener('click', () => {
    mateQuintoAriUl.style.display = (mateQuintoAriUl.style.display === 'block') ? 'none' : 'block';
    mateQuintoAriBtnArrow.style.transition = 'transform 0.3s ease';
    mateQuintoAriBtnArrow.style.transform = (mateQuintoAriBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Álgebra Básica */

if(mateQuintoAlgeBtn) {
  mateQuintoAlgeBtn.addEventListener('click', () => {
    mateQuintoAlgeUl.style.display = (mateQuintoAlgeUl.style.display === 'block') ? 'none' : 'block';
    mateQuintoAlgeBtnArrow.style.transition = 'transform 0.3s ease';
    mateQuintoAlgeBtnArrow.style.transform = (mateQuintoAlgeBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* MATE SEXTO */

/* Principal*/

if(mateSextoBtn) {
  mateSextoBtn.addEventListener('click', () => {
    mateSextoUl.style.display = (mateSextoUl.style.display === 'block') ? 'none' : 'block';
    mateSextoBtnArrow.style.transition = 'transform 0.3s ease';
    mateSextoBtnArrow.style.transform = (mateSextoBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Geometría*/

if(mateSextoGeoBtn) {
  mateSextoGeoBtn.addEventListener('click', () => {
    mateSextoGeoUl.style.display = (mateSextoGeoUl.style.display === 'block') ? 'none' : 'block';
    mateSextoGeoBtnArrow.style.transition = 'transform 0.3s ease';
    mateSextoGeoBtnArrow.style.transform = (mateSextoGeoBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Aritmética */

if(mateSextoAriBtn) {
  mateSextoAriBtn.addEventListener('click', () => {
    mateSextoAriUl.style.display = (mateSextoAriUl.style.display === 'block') ? 'none' : 'block';
    mateSextoAriBtnArrow.style.transition = 'transform 0.3s ease';
    mateSextoAriBtnArrow.style.transform = (mateSextoAriBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Álgebra Básica */

if(mateSextoAlgeBtn) {
  mateSextoAlgeBtn.addEventListener('click', () => {
    mateSextoAlgeUl.style.display = (mateSextoAlgeUl.style.display === 'block') ? 'none' : 'block';
    mateSextoAlgeBtnArrow.style.transition = 'transform 0.3s ease';
    mateSextoAlgeBtnArrow.style.transform = (mateSextoAlgeBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}


/* MATE SEPTIMO */

/* Principal*/

if(mateSeptimoBtn) {
  mateSeptimoBtn.addEventListener('click', () => {
    mateSeptimoUl.style.display = (mateSeptimoUl.style.display === 'block') ? 'none' : 'block';
    mateSeptimoBtnArrow.style.transition = 'transform 0.3s ease';
    mateSeptimoBtnArrow.style.transform = (mateSeptimoBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Geometría*/

if(mateSeptimoGeoBtn) {
  mateSeptimoGeoBtn.addEventListener('click', () => {
    mateSeptimoGeoUl.style.display = (mateSeptimoGeoUl.style.display === 'block') ? 'none' : 'block';
    mateSeptimoGeoBtnArrow.style.transition = 'transform 0.3s ease';
    mateSeptimoGeoBtnArrow.style.transform = (mateSeptimoGeoBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Aritmética */

if(mateSeptimoAriBtn) {
  mateSeptimoAriBtn.addEventListener('click', () => {
    mateSeptimoAriUl.style.display = (mateSeptimoAriUl.style.display === 'block') ? 'none' : 'block';
    mateSeptimoAriBtnArrow.style.transition = 'transform 0.3s ease';
    mateSeptimoAriBtnArrow.style.transform = (mateSeptimoAriBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Álgebra Avanzada */

if(mateSeptimoAlgeBtn) {
  mateSeptimoAlgeBtn.addEventListener('click', () => {
    mateSeptimoAlgeUl.style.display = (mateSeptimoAlgeUl.style.display === 'block') ? 'none' : 'block';
    mateSeptimoAlgeBtnArrow.style.transition = 'transform 0.3s ease';
    mateSeptimoAlgeBtnArrow.style.transform = (mateSeptimoAlgeBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* Trigonometría Básica */

if(mateSeptimoTrigoBtn) {
  mateSeptimoTrigoBtn.addEventListener('click', () => {
    mateSeptimoTrigoUl.style.display = (mateSeptimoTrigoUl.style.display === 'block') ? 'none' : 'block';
    mateSeptimoTrigoBtnArrow.style.transition = 'transform 0.3s ease';
    mateSeptimoTrigoBtnArrow.style.transform = (mateSeptimoTrigoBtnArrow.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
  })
}

/* CURSOS */

document.addEventListener("DOMContentLoaded", () => {
  // === CUESTIONARIO ===
  const preguntas = document.querySelectorAll(".pregunta");

  preguntas.forEach((pregunta) => {
    const correcta = pregunta.dataset.correcta;
    const feedback = pregunta.querySelector(".feedback");
    const opciones = pregunta.querySelectorAll(".opcion");

    opciones.forEach((opcion) => {
      opcion.addEventListener("click", () => {
        // Deshabilita todos los botones después de elegir
        opciones.forEach((o) => (o.disabled = true));

        // Comprobamos si es correcta
        if (opcion.dataset.value === correcta) {
          opcion.style.backgroundColor = "#C8E6C9";
          feedback.textContent = "✅ ¡Correcto!";
          feedback.style.color = "green";
        } else {
          opcion.style.backgroundColor = "#FFCDD2";
          feedback.textContent = "❌ Incorrecto.";
          feedback.style.color = "red";
        }
      });
    });
  });
});
