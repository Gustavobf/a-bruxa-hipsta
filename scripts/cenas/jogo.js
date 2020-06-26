class Jogo {
    constructor() {
        this.indice = 0;

        this.mapa = fita.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 150, 60, largura, altura, larguraSprite, alturaSprite);
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);

        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 55, 52, 52, 104, 104, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 30, 200, 200, 400, 400, 15);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 200, 100, 75, 200, 150, 10);

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);

        somDoJogo.setVolume(0.3);
        somDoJogo.loop();

    }

    keyPressed(key) {
        if (key === "ArrowUp") {
            personagem.pula();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        vida.draw();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            if (vida.vidas === 0) {
                image(imagemGameOver, width / 2 - 200, height / 3);
                somDoJogo.stop();
                noLoop();
            }
        }
    }
}