const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const survey = {
  language: {
    question: '¿Cuál es tu lenguaje de programación favorito? Marca un número [1: JS, 2: Java, 3: Python, 4: C, 5: TS]',
    options: ['JavaScript', 'Java', 'Python', 'C', 'TypeScript'],
    response: ''
  },
  reason: {
    question: '¿Por qué te gusta este lenguaje?',
    response: ''
  },
  features: {
    question: '¿Qué características destacarías de él?',
    response: ''
  },
  projects: {
    question: '¿Qué proyectos has desarrollado con él?',
    response: ''
  },
  experience: {
    question: '¿Cuántos años de experiencia tienes con ese lenguaje? (escribe un número)',
    isNumeric: true,
    response: ''
  }
};

// validar si es un número válido
function isValidNumber(input) {
  const num = parseFloat(input);
  return !isNaN(num) && num >= 0;
}

// Inicio de la encuesta
function startSurvey() {
  console.log('\n¡Bienvenido a la encuesta sobre lenguajes de programación favoritos!\n');
  askLanguage();
}

// Pregunta de lenguaje (especial, con opciones)
function askLanguage() {
  rl.question(survey.language.question + ' ', (input) => {
    const choice = parseInt(input.trim());
    if (choice >= 1 && choice <= survey.language.options.length) {
      survey.language.response = survey.language.options[choice - 1];
      console.log(`Tu lenguaje favorito es: ${survey.language.response}`);
      askQuestions(Object.keys(survey).slice(1), 0); // pasa al resto
    } else {
      console.log('❌ Opción no válida. Por favor, elige un número del 1 al 5.');
      askLanguage();
    }
  });
}

// Preguntas dinámicas
function askQuestions(keys, idx) {
  if (idx >= keys.length) return showSummary();

  const key = keys[idx];
  const item = survey[key];

  rl.question(item.question + ' ', (input) => {
    const trimmed = input.trim();
    if (item.isNumeric && !isValidNumber(trimmed)) {
      console.log('❌ Entrada inválida. Por favor, escribe un número válido.');
      return askQuestions(keys, idx);
    }
    if (!item.isNumeric && trimmed === '') {
      console.log('❌ Respuesta vacía. Intenta de nuevo.');
      return askQuestions(keys, idx);
    }

    item.response = trimmed;
    rl.question('¿Quieres cambiar tu respuesta? (s/n): ', (confirm) => {
      const res = confirm.trim().toLowerCase();
      if (res === 's') return askQuestions(keys, idx);
      if (res !== 'n') {
        console.log('❌ Entrada inválida. Por favor, responde con "s" o "n".');
        return askQuestions(keys, idx);
      }
      askQuestions(keys, idx + 1);
    });
  });
}

// Muestra resumen
function showSummary() {
  console.log('\n📝 Resumen de tus respuestas:\n');
  for (const [key, val] of Object.entries(survey)) {
    console.log(`- ${val.question} → ${val.response}`);
  }
  rl.close();
}

// Ejecutar
startSurvey();
