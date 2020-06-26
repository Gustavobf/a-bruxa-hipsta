class Vida {
    constructor(VidaTotal, VidaInicial) {
        this.VidaTotal = VidaTotal;
        this.VidaInicial = VidaInicial;
        this.vidas = this.VidaInicial;

        this.largura = 25;
        this.altura = 25;
        this.xInicial = 20;
        this.y = 20;
    }

    draw() {
        for (let i = 0; i < this.vidas; i++) {
            const margem = i * 10;
            const posicao = this.xInicial * (1 + i);

            image(imagemVida, posicao + margem, this.y, this.largura, this.altura);
        }
    }

    ganhaVida(){
        if(this.vidas <= this.VidaTotal){
            this.vidas++;
        }
    }

    perdeVida(){
        this.vidas--;
    }
}