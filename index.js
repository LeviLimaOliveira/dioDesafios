class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "ataque furtivo";
        }

        const mensagem = `${this.tipo} atacou usando ${ataque}`;
        return mensagem;
    }
}

// Criando um herói
const heroi = new Hero("Gandalf", 1000, "mago");
const heroi2 = new Hero("meliodas", 50, "guerreiro");
const heroi3 = new Hero("naruto", 80, "ninja");

// Fazendo o herói atacar
const resultadoAtaque = heroi.atacar();
const resultadoAtaque2 = heroi2.atacar();
const resultadoAtaque3 = heroi3.atacar();

// Exibindo o resultado
console.log(resultadoAtaque);
console.log(resultadoAtaque2);
console.log(resultadoAtaque3);