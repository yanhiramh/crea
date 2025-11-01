const quizData = {
  quinto: [
    {
      pregunta: "¿Cuál es el perímetro de un rectángulo de 8 cm de largo y 5 cm de ancho?",
      opciones: ["13 cm", "26 cm", "40 cm", "18 cm"],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es el área de un cuadrado con lado de 6 cm?",
      opciones: ["12 cm²", "24 cm²", "36 cm²", "18 cm²"],
      correcta: 2
    },
    {
      pregunta: "Un triángulo tiene base de 10 cm y altura de 4 cm. ¿Cuál es su área?",
      opciones: ["40 cm²", "14 cm²", "20 cm²", "24 cm²"],
      correcta: 2
    },
    {
      pregunta: "¿Cuál es el perímetro de un triángulo equilátero con lados de 7 cm?",
      opciones: ["14 cm", "21 cm", "28 cm", "35 cm"],
      correcta: 1
    },
    {
      pregunta: "Si un rectángulo tiene área de 32 cm² y ancho de 4 cm, ¿cuál es su largo?",
      opciones: ["6 cm", "8 cm", "12 cm", "16 cm"],
      correcta: 1
    }
  ],
  sexto: [
    {
      pregunta: "Si 3 manzanas cuestan $6, ¿cuánto costarán 8 manzanas?",
      opciones: ["$12", "$14", "$16", "$18"],
      correcta: 2
    },
    {
      pregunta: "¿Qué porcentaje es 25 de 100?",
      opciones: ["20%", "25%", "30%", "50%"],
      correcta: 1
    },
    {
      pregunta: "Un libro cuesta $50 y tiene 20% de descuento. ¿Cuál es el precio final?",
      opciones: ["$30", "$35", "$40", "$45"],
      correcta: 2
    },
    {
      pregunta: "Si 4:6 es igual a x:12, ¿cuál es el valor de x?",
      opciones: ["6", "7", "8", "9"],
      correcta: 2
    },
    {
      pregunta: "¿Cuál es el 15% de 80?",
      opciones: ["10", "12", "14", "16"],
      correcta: 1
    }
  ],
  septimo: [
    {
      pregunta: "Resuelve: 3x + 5 = 20",
      opciones: ["x = 3", "x = 5", "x = 7", "x = 10"],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es la pendiente de la función y = 2x + 3?",
      opciones: ["1", "2", "3", "5"],
      correcta: 1
    },
    {
      pregunta: "Resuelve el sistema: x + y = 10 y x - y = 2",
      opciones: ["x=5, y=5", "x=6, y=4", "x=7, y=3", "x=8, y=2"],
      correcta: 1
    },
    {
      pregunta: "Si 2x - 4 = 10, ¿cuál es el valor de x?",
      opciones: ["5", "6", "7", "8"],
      correcta: 2
    },
    {
      pregunta: "¿Cuál es el punto de intersección de y = x + 1 con el eje y?",
      opciones: ["(0, 0)", "(0, 1)", "(1, 0)", "(1, 1)"],
      correcta: 1
    }
  ]
};

class DesafioQuiz {
  constructor(nivel, card) {
    this.nivel = nivel;
    this.card = card;
    this.preguntas = quizData[nivel];
    this.preguntaActual = 0;
    this.respuestas = [];
    this.contenidoOriginal = card.innerHTML;
  }

  iniciar() {
    this.mostrarPregunta();
  }

  mostrarPregunta() {
    const pregunta = this.preguntas[this.preguntaActual];
    const numeroPregunta = this.preguntaActual + 1;
    const totalPreguntas = this.preguntas.length;

    this.card.innerHTML = `
      <div class="quiz-container">
        <div class="quiz-header">
          <h3>Pregunta ${numeroPregunta} de ${totalPreguntas}</h3>
          <div class="quiz-progress">
            <div class="quiz-progress-bar" style="width: ${(numeroPregunta / totalPreguntas) * 100}%"></div>
          </div>
        </div>
        <div class="quiz-content">
          <p class="quiz-pregunta">${pregunta.pregunta}</p>
          <div class="quiz-opciones">
            ${pregunta.opciones.map((opcion, index) => `
              <button class="quiz-opcion" data-index="${index}">
                <span class="opcion-letra">${String.fromCharCode(65 + index)}</span>
                <span class="opcion-texto">${opcion}</span>
              </button>
            `).join('')}
          </div>
        </div>
        <button class="quiz-cancelar">Cancelar Desafío</button>
      </div>
    `;

    const opciones = this.card.querySelectorAll('.quiz-opcion');
    opciones.forEach(opcion => {
      opcion.addEventListener('click', (e) => this.seleccionarRespuesta(e));
    });

    const btnCancelar = this.card.querySelector('.quiz-cancelar');
    btnCancelar.addEventListener('click', () => this.cancelar());
  }

  seleccionarRespuesta(e) {
    const botonSeleccionado = e.currentTarget;
    const indexSeleccionado = parseInt(botonSeleccionado.dataset.index);
    const pregunta = this.preguntas[this.preguntaActual];

    const opciones = this.card.querySelectorAll('.quiz-opcion');
    opciones.forEach(opcion => opcion.disabled = true);

    if (indexSeleccionado === pregunta.correcta) {
      botonSeleccionado.classList.add('correcta');
      this.respuestas.push(true);
    } else {
      botonSeleccionado.classList.add('incorrecta');
      opciones[pregunta.correcta].classList.add('correcta-mostrar');
      this.respuestas.push(false);
    }

    setTimeout(() => {
      this.preguntaActual++;
      if (this.preguntaActual < this.preguntas.length) {
        this.mostrarPregunta();
      } else {
        this.mostrarResultados();
      }
    }, 1500);
  }

  mostrarResultados() {
    const correctas = this.respuestas.filter(r => r === true).length;
    const total = this.respuestas.length;
    const porcentaje = Math.round((correctas / total) * 100);
    
    let mensaje = "";
    let emoji = "";
    if (porcentaje >= 80) {
      mensaje = "¡Excelente trabajo!";
      emoji = "🏆";
    } else if (porcentaje >= 60) {
      mensaje = "¡Buen trabajo!";
      emoji = "👍";
    } else {
      mensaje = "Sigue practicando";
      emoji = "💪";
    }

    this.card.innerHTML = `
      <div class="quiz-resultados">
        <div class="resultado-emoji">${emoji}</div>
        <h3>${mensaje}</h3>
        <div class="resultado-score">
          <div class="score-numero">${correctas}/${total}</div>
          <div class="score-porcentaje">${porcentaje}%</div>
        </div>
        <div class="resultado-detalles">
          <div class="detalle-item">
            <span class="detalle-label">Respuestas correctas:</span>
            <span class="detalle-valor correctas">${correctas}</span>
          </div>
          <div class="detalle-item">
            <span class="detalle-label">Respuestas incorrectas:</span>
            <span class="detalle-valor incorrectas">${total - correctas}</span>
          </div>
        </div>
        <div class="resultado-botones">
          <button class="resultado-btn reintentar">Intentar de Nuevo</button>
          <button class="resultado-btn volver">Volver a Desafíos</button>
        </div>
      </div>
    `;

    const btnReintentar = this.card.querySelector('.reintentar');
    const btnVolver = this.card.querySelector('.volver');

    btnReintentar.addEventListener('click', () => {
      this.preguntaActual = 0;
      this.respuestas = [];
      this.iniciar();
    });

    btnVolver.addEventListener('click', () => this.cancelar());
  }

  cancelar() {
    this.card.innerHTML = this.contenidoOriginal;
    inicializarDesafios();
  }
}

function inicializarDesafios() {
  const desafioCards = document.querySelectorAll('.desafio-card');
  
  desafioCards.forEach((card, index) => {
    const btn = card.querySelector('.desafio-btn');
    if (btn) {
      const niveles = ['quinto', 'sexto', 'septimo'];
      const nivel = niveles[index];
      
      btn.addEventListener('click', () => {
        const quiz = new DesafioQuiz(nivel, card);
        quiz.iniciar();
      });
    }
  });
}

document.addEventListener('DOMContentLoaded', inicializarDesafios);
