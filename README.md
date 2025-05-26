# dados-atletas

Este repositório contém uma classe JavaScript (`Atleta`) projetada para gerenciar e calcular diversas informações importantes de atletas, incluindo dados pessoais, notas de desempenho, categoria, Índice de Massa Corporal (IMC) e a média válida das notas.

## ✨ Funcionalidades da Classe `Atleta`

A classe `Atleta` encapsula todas as informações e lógicas de cálculo para um atleta. Suas principais funcionalidades incluem:

* **`constructor(nome, idade, peso, altura, notas)`**: Inicializa uma nova instância de `Atleta` com o nome, idade, peso, altura e um array de notas.

* **`calculaCategoria()`**:
    * Determina a categoria do atleta com base em sua idade, seguindo as seguintes regras:
        * Idade menor que 9 ou maior que 30: "Sem classificação"
        * Idade entre 9 e 11: "Infantil"
        * Idade 12 ou 13: "Juvenil"
        * Idade 14 ou 15: "Intermediário"
        * Idade entre 16 e 30: "Adulto"
    * **Retorna** a string da categoria.

* **`calculaIMC()`**:
    * Calcula o Índice de Massa Corporal (IMC) do atleta usando a fórmula `peso / (altura ** 2)`.
    * **Retorna** o valor do IMC.

* **`calculaMediaValida()`**:
    * Calcula a média das notas do atleta, desconsiderando a maior e a menor nota do conjunto.
    * Para isso, ele cria uma cópia das notas, as ordena em ordem crescente e, em seguida, utiliza `slice(1,4)` para selecionar as notas intermediárias (removendo a primeira e a última nota do array original de 5 elementos).
    * **Retorna** a média calculada.

* **Métodos `obtem...Atleta()` e `obtem...()`**:
    * `obtemNomeAtleta()`: Retorna o nome do atleta formatado.
    * `obtemIdadeAtleta()`: Retorna a idade do atleta formatada.
    * `obtemPesoAtleta()`: Retorna o peso do atleta formatado.
    * `obtemNotasAtleta()`: Retorna as notas do atleta formatadas.
    * `obtemCategoria()`: Retorna a categoria do atleta, chamando `this.calculaCategoria()`.
    * `obtemIMC()`: Retorna o IMC do atleta, chamando `this.calculaIMC()`.
    * `obtemMediaValida()`: Retorna a média válida do atleta, chamando `this.calculaMediaValida()`.
    * **Todos esses métodos retornam uma string formatada**, que pode ser exibida ou utilizada.

* **`exibirDados()`**:
    * Este método centraliza a chamada de todos os métodos `obtem...` e os imprime no console, fornecendo um resumo completo dos dados do atleta no formato desejado.
