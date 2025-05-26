class Atleta {
    constructor(
        nome,
        idade, 
        peso,
        altura,
        notas
    ){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if(this.idade < 9 || this.idade > 30) {
            return `Sem classificação`
        }
        else if (this.idade >= 9 && this.idade <= 11) {
            return `Infantil`
        }
        else if (this.idade == 12 || this.idade == 13) {
            return `Juvenil`
        }
        else if (this.idade == 14 || this.idade == 15) {
            return `Intermediário`
        }
        else if (this.idade >= 16 && this.idade <= 30) {
            return `Adulto`
        }
    }// para calcular a categoria do atleta;

    calculaIMC() {
        return this.peso / (this.altura ** 2)
    } // para calcular o IMC do atleta;

    calculaMediaValida() {
        let notasDoAtleta = this.notas

        let notasOrdenadas = notasDoAtleta.sort((a, b) => a - b)

        let notas = notasOrdenadas.slice(1,4)

        let soma = 0;
        notas.forEach(nota => {
            soma += nota;
        });

        let media = (soma / notas.length)
        return media
    } // para calcular a média válida do atleta.

    obtemNomeAtleta() {
        return `Nome: ${this.nome}`
    } // que retorna o nome do atleta

    obtemIdadeAtleta() {
        return `Idade: ${this.idade}`
        
    } // que retorna a idade do atleta

    obtemPesoAtleta() {
        return `Peso: ${this.peso}`
    } // que retorna o peso do atleta


    obtemNotasAtleta() {
        return `Notas: ${this.notas}`
    } // que retorna as notas do atleta

    obtemCategoria() {
        return `Categoria: ${this.calculaCategoria()}`
    } // que retorna a categoria do atleta

    obtemIMC() {
        return `IMC: ${this.calculaIMC()}`
    } // que retorna o IMC do atleta

    obtemMediaValida() {
        return `Média válida: ${this.calculaMediaValida()}`
    } // que retorna a média válida do atleta*/

    exibirDados() {
        console.log(this.obtemNomeAtleta());
        console.log(this.obtemIdadeAtleta());
        console.log(this.obtemPesoAtleta());
        console.log(this.obtemNotasAtleta());
        console.log(this.obtemCategoria());
        console.log(this.obtemIMC());
        console.log(this.obtemMediaValida());
        
    }
}

//exemplo prático
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

atleta.exibirDados();