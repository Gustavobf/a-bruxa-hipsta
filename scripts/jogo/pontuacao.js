class Pontuacao {
    constructor(){
        this.ponto = 0;
    }

    exibe(){
        textAlign(RIGHT);
        fill("#fff");
        textSize(50);
        text(parseInt(this.ponto), width - 50, 50);
    }

    adicionarPonto(){
        this.ponto += 0.2;
    }

}