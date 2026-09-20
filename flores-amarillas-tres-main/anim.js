// =====================================================
// SINCRONIZAR LAS LETRAS CON LA CANCIÓN
// =====================================================

var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// =====================================================
// LETRAS Y TIEMPOS
// =====================================================
// CAMBIO: NO SE MODIFICARON LOS TEXTOS NI LOS TIEMPOS.
// Se mantienen exactamente como los proporcionaste.
// =====================================================

var lyricsData = [

    { text: "At the time", time: 15 },

    { text: "The whisper of birds", time: 18 },

    { text: "Lonely before the sun cried", time: 27 },

    { text: "Fell from the sky", time: 32 },

    { text: "Like water drops", time: 33 },

    { text: "Where I'm now? I don't know why", time: 41 },

    { text: "Nice butterflies in my hands", time: 47 },

    { text: "Too much light for twilight", time: 54 },

    { text: "In the mood for the flowers love", time: 59 },

    { text: "That vision", time: 67 },

    { text: "Really strong, blew my mind", time: 72 },

    { text: "Silence Let me see what it was", time: 78 },

    { text: "I only want to live in clouds", time: 83 },

    { text: "Where I'm now? I don't know why", time: 91 },

    { text: "Nice butterflies in my hands", time: 97 },

    { text: "Too much light for twilight", time: 104 },

    { text: "In the mood for the flowers love", time: 108 },

    { text: "At the time", time: 144 },

    { text: "The whisper of birds", time: 148 },

    { text: "Lonely before the sun cried", time: 153 },

    { text: "Fell from the sky", time: 158 },

    { text: "Like water drops", time: 164 },

    { text: "Where I'm now? I don't know why", time: 169 },

    { text: "Nice butterflies in my hands", time: 176 },

    { text: "Too much light for twilight", time: 183 },

    { text: "In the mood for the flowers", time: 188 },

    { text: "Love.", time: 140 },

];


// =====================================================
// CAMBIO 2: ANIMACIÓN DE LAS LETRAS
// =====================================================
// Antes se utilizaba:
//
// var time = Math.floor(audio.currentTime);
//
// y:
//
// setInterval(updateLyrics, 1000);
//
// Eso hacía que las letras se actualizaran solamente
// una vez por segundo.
//
// Ahora utilizamos audio.currentTime directamente
// y requestAnimationFrame para conseguir una transición
// mucho más fluida y sincronizada con la canción.
// =====================================================

var currentLine = null;


// =====================================================
// FUNCIÓN PARA ACTUALIZAR LAS LETRAS
// =====================================================

function updateLyrics() {

    // Obtenemos el tiempo exacto de reproducción.
    // Ya NO utilizamos Math.floor().
    var time = audio.currentTime;


    // Buscamos la línea correspondiente al momento actual.
    var newLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );


    // =================================================
    // Si encontramos una línea diferente
    // =================================================

    if (newLine !== currentLine) {

        currentLine = newLine;


        // ---------------------------------------------
        // Si existe una línea para mostrar
        // ---------------------------------------------

        if (currentLine) {

            lyrics.innerHTML = currentLine.text;

            // Comenzamos invisible.
            lyrics.style.opacity = 0;
        }

        // ---------------------------------------------
        // Si no existe ninguna línea
        // ---------------------------------------------

        else {

            lyrics.style.opacity = 0;

            lyrics.innerHTML = "";
        }
    }


    // =================================================
    // CAMBIO 3: APARICIÓN SUAVE
    // =================================================
    // En lugar de utilizar un tiempo entero, calculamos
    // exactamente cuánto tiempo lleva activa la línea.
    // =================================================

    if (currentLine) {

        var elapsed = time - currentLine.time;

        // Duración de la aparición de la letra.
        var fadeInDuration = 0.5;

        // Calculamos la opacidad.
        var opacity = Math.min(
            1,
            elapsed / fadeInDuration
        );

        lyrics.style.opacity = opacity;
    }


    // =================================================
    // CAMBIO 4: ACTUALIZACIÓN CONTINUA
    // =================================================
    // requestAnimationFrame permite actualizar la letra
    // de forma mucho más fluida que setInterval().
    // =================================================

    requestAnimationFrame(updateLyrics);
}


// =====================================================
// INICIAR LA ACTUALIZACIÓN DE LAS LETRAS
// =====================================================

if (audio && lyrics) {
    requestAnimationFrame(updateLyrics);
}


// =====================================================
// FUNCIÓN DEL TÍTULO
// =====================================================

// Función para ocultar el título después de 216 segundos.

function ocultarTitulo() {

    var titulo = document.querySelector(".titulo");


    // =================================================
    // CAMBIO 5: COMPROBACIÓN DE SEGURIDAD
    // =================================================
    // Evita errores si por alguna razón el elemento
    // ".titulo" no existe en la página.
    // =================================================

    if (!titulo) {
        return;
    }


    // Aplicamos la animación de desaparición.

    titulo.style.animation =
        "fadeOut 3s ease-in-out forwards";


    // Esperamos 3 segundos y luego ocultamos
    // completamente el elemento.

    setTimeout(function () {

        titulo.style.display = "none";

    }, 3000);
}


// =====================================================
// TEMPORIZADOR DEL TÍTULO
// =====================================================
// 216000 milisegundos = 216 segundos = 3 minutos 36 s.
// =====================================================

setTimeout(ocultarTitulo, 216000);