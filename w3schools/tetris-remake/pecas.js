class Peca {
    constructor(largura, altura, cor, posicaoHorizontal, posicaoVertical) {
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
        this.posicaoHorizontal = posicaoHorizontal;
        this.posicaoVertical = posicaoVertical;

        this.velocidadeHorizontal = 0;
        this.velocidadeVertical = 0;
    }

    atualizar() {
        jogo.context.fillStyle = this.cor;
        jogo.context.fillRect(this.posicaoHorizontal, this.posicaoVertical, this.largura, this.altura);
    }

    limpar() {
        jogo.context.clearRect(0, 0, jogo.tagCanvas.width, jogo.tagCanvas.height);
    }

    mover(posicaoHorizontal, posicaoVertical) {
        //jogo.parar();
        this.limpar();
        this.posicaoHorizontal = posicaoHorizontal;
        this.posicaoVertical = posicaoVertical;
        this.atualizar();
    }

    moverParaEsquerda() {
        this.mover(this.posicaoHorizontal-1, this.posicaoVertical);
    }
    
    moverParaDireita() {
        this.mover(this.posicaoHorizontal+1, this.posicaoVertical);
    }

    moverParaCima() {
        this.mover(this.posicaoHorizontal, this.posicaoVertical-1);
    }
    
    moverParaBaixo() {
        this.mover(this.posicaoHorizontal, this.posicaoVertical+1);
    }

    colidiu(outraPeca) {
        var myleft = this.posicaoHorizontal;
        var myright = this.posicaoHorizontal + (this.largura);
        var mytop = this.posicaoVertical;
        var mybottom = this.posicaoVertical + (this.altura);
        var otherleft = outraPeca.posicaoHorizontal;
        var otherright = outraPeca.posicaoHorizontal + (outraPeca.largura);
        var othertop = outraPeca.posicaoVertical;
        var otherbottom = outraPeca.posicaoVertical + (outraPeca.altura);
        
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      }
}