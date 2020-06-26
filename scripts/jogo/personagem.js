class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
        this.imagem = imagem;

        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura - variacaoY;
        this.y = this.yInicial;

        this.velocidadeDoPulo = 0;
        this.gravidade = 3;
        this.alturaDoPulo = -30;

        this.maxPulos = 2;
        this.puloAtual = 0;

        this.invencivel = false;
    }

    pula() {
        const pulou = this.puloAtual < this.maxPulos;

        if (pulou) {
            this.puloAtual++;
            this.velocidadeDoPulo = this.alturaDoPulo
            somDoPulo.play();
        }

        return pulou;
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

        if (this.y > this.yInicial) {
            this.puloAtual = 0;
            this.y = this.yInicial;
            somDoPulo.stop();
        }
    }

    tornarInvencivel(){
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000);
    }

    estaColidindo(inimigo) {
        
        if (this.invencivel) {
            return false;
        }

        const precisao = 0.7;
        const colisao = collideRectRect(
            this.x + ((1 - precisao) / 2) * this.largura,
            this.y + ((1 - precisao) / 2) * this.altura,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x + ((1 - precisao) / 2) * inimigo.largura,
            inimigo.y + ((1 - precisao) / 2) * inimigo.altura,
            inimigo.largura * precisao,
            inimigo.altura * precisao,
        );
        return colisao;
    }


}