var obstaculo = null;
var peca = null;
var jogo = null;

window.onload = function() {
    peca = new Peca(30, 30, "red", 10, 120);
    obstaculo = new Peca(10, 200, "green", 250, 120);
    jogo = new Jogo();
    jogo.ligar();
};

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 37) {
        peca.moverParaEsquerda();
    }

    if (e.keyCode == 38) {
        peca.moverParaCima();
    }

    if (e.keyCode == 39) {
        peca.moverParaDireita();
    }

    if (e.keyCode == 40) {
        peca.moverParaBaixo();
    }
});
window.addEventListener('keyup', function (e) {
    //myGameArea.key = false;
});


class Jogo {
    constructor() {
        this.tagCanvas = document.getElementById("canvasJogo");
        this.context = this.tagCanvas.getContext("2d");
    }

    ligar() {
        this.interval = setInterval(loop, 20);
    }

    parar() {
        clearInterval(this.interval);
    }
}

function loop() {
    if (peca.colidiu(obstaculo)) {
        console.log("ok");
        jogo.parar();
    }
    else {
        
        obstaculo.moverParaEsquerda();
        peca.atualizar();
        obstaculo.atualizar();
        //peca.mover();
    }
}