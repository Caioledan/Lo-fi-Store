
const audioElement = document.getElementById("meuAudio");
const botaoDesmutar = document.getElementById("botaoDesmutar");
const iconeSom = document.getElementById("iconeSom");

audioElement.volume = 0.1;

botaoDesmutar.addEventListener("click", function() {
    if (audioElement.muted) {
        audioElement.muted = false;
        iconeSom.src = "assets/images/com-som.png";
        iconeSom.alt = "Desativar Som";
    } else {
        audioElement.muted = true;
        iconeSom.src = "assets/images/sem-som.png";
        iconeSom.alt = "Ativar Som";
    }
});