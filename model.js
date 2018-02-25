// Modelo de datos.
//
// En esta variable se mantienen todos los quizzes existentes.
// Es un array de objetos, dondde cada objeto tiene los atributos question
// y answer para guardar el texto de la pregunta y de la repsuesta.
let quizzes = [
    {
        question: "Capital de Italia",
        answer: "Roma"
    },
    {
        question: "Captial de Francia",
        answer: "París"
    },
    {
        question: "Capital de España",
        answer:   "Madrid"
    },
    {
        question: "capital de Portugal",
        answer: "Lisboa"
    }];

//
/**
 * Devuelve el número total de preguntas existentes.
 *
 *  @returns {number} número total de preguntas existentes.
 */
 exports.add= (question, answer) => {

    quizzes.push({
        question: (question || "").trim(),
        answer: (answer || "").trim()
    });
};

/**
 * Actualiza el quiz situado en la posicion index
 *
 * @param id        Clave que idnetifica el quiz a actualizar.
 * @param question  String con la pregunta.
 * @param answer    String con la respuesta.
 */
exports.update = (id, question, answer) => {

    const quiz = quizzes[id];
    if (typeof quiz === "undefined"){
        throw new Error(`El valor del parámetro id no es válido`);
    }
    quizzes.splice(id, 1, {
        question: (question || "").trim(),
        answer: (answer || "").trim()
    });
};

/**
 * Devuelve todos los quizzes existentes.
 *
 * Devuelve un clon dle valor guardado en la variable quizzes, es decir devuelve un
 * objeto nuevo con todas las preguntas existentes.
 * Para clonar quizzes se usa stringify + parse.
 *
 * @returns {any}
 */
exports.getAll = () => JSON.parse(JSON.stringify(quizzes));

/**
 * Devuelve un clon del quiz almacenado en la posición dad.
 *
 * Para clonar el quiz se usa stringify + parse
 *
 * @param id Clave que identifica el quiz a devolver.
 *
 * @returns {question, answer} Devuelve el objeto quiz de la posición dada.
 */
exports.getByIndex = id => {

    const  quiz = quizzes[id];
    if (typeof quiz === "undefined"){
        throw new Error(`El valor del parámetro id no es válido.`)
    }
    return JSON.parse(JSON.stringify(quiz));
};


//
/**
 * Elimina el quiz situado en la posición dada.
 *
 * @param id Clave que identifica el quiz a borrar.
 */
exports.geleteByIndex = id =>{
    const quiz = quizzes[id];
    if(typeof quiz === "undefined"){
        throw new Error('El valor del parámetro id no es válido');
    }
    quizzes.splice(id, 1);
};