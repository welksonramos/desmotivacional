"use strict";

var phrases = [
    "As pessoas só te incentivam para rir do seu fracasso.",
    "Seus sonhos nunca se realizarão.",
    "Ele só te comeu por falta de opção.",
    "Ela não é dificil, você que é feio.",
    "Ela saiu com você para comer de graça.",
    "As vezes a vida te levanta </br>só pra você cair de novo.",
    "Você é um erro.",
    "Para de bater punheta pra desenho.",
    "Para de tentar criar polêmica pra chamar atenção.</br> Todo mundo te acha um bosta.",
    "Pra ser inútil </br>você tem que melhorar muito.",
    "Você é um desperdício de </br>esperma.",
    "Qualquer companhia </br>é melhor que a sua.",
    "Sua sombra só te segue</br>porque é obrigada.",
    "Azar no amor</br>Azar no dinheiro</br> e sorte no azar.",
    "Seu pai só teria um dia feliz</br> se não tivesse você como filho.",
    "Você vai morrer infeliz</br> e sozinho.",
    "Ela pediu um tempo</br> porque queria dar para outro.",
    "A tendência é piorar.",
    "Seu dia vai ser uma bosta.",
    "Tem peito grande mas é gorda.",
    "Sua mãe deveria ter engolido.",
    "Você só faz peso na terra.",
    "As pessoas só te respondem</br> para você parar de encher o saco.",
    "Ela só te usou para fazer ciúme no ex.",
    "Ta todo mundo transando</br> menos você.",
    "Nasceu para ser feito de otário.",
    "Agradeça seu pai por ele te amar</br> mesmo você sendo um merda.",
    "Comer que nem um filho da puta</br> não vai esconder o fracasso da sua vida.",
    "Seja feliz. A base de remédios."
];

var setOverlay = function() {
    var overlay = $("#overlay");
    var img = $("#canvas");
    overlay.width(img.css("width"));
    overlay.height(img.css("height"));
    overlay.css("top", img.offset().top + "px");
    overlay.css("left", img.offset().left + "px");

    setText();
}

var setCanvasStyle = function() {
    var imgUrl = "https://unsplash.it/" + window.innerWidth + "/" + window.innerHeight + "?random";
    document.getElementById("canvas").src = imgUrl;
}

var setText = function() {
    var element = document.getElementById("text");
    var phrase = phrases[Math.floor(Math.random()*phrases.length)];
    element.innerHTML = phrase;
    element.addEventListener("OnVoiceReady", speak(phrase), false);
}

var speak = function(text) {
    setTimeout(function() {
        responsiveVoice.speak(text.replace(/<\/br>/g, ""), "Brazilian Portuguese Female");
    }, 1000);
}
