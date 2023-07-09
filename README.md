# Desafio Sistema de Vagas de Emprego

Desafio proposto pela OneBitCode de desenvolver um sistema onde é possível gerenciar as vagas e adicionar candidatos às vagas.

## Requisitos

- Possuir um menu onde é possível escolher entre as diferentes funcionalidades do sistema.

  - Listar vagas disponíveis.
  - Criar uma nova vaga.
  - Visualizar uma vaga.
  - Inscrever um candidato em uma vaga.
  - Excluir uma vaga.
  - Sair

- Atendendo aos seguintes critérios:
  - A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
  - A opção de criar uma nova vaga deve pedir um nome para a avaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
  - A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
  - A oplção de inscreve um candidato em uma vaga, deve pedir o nome do candidato e o índice da vaga e então ter uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
  - A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir para o usuário confirmar a exclusão da vaga antes de realmente excluí-la.

## Melhorias

Além de atender todos os requisitos, adicionei algumas melhorias no tratamento dos dados. Sendo elas:

- Verificação para que não seja possível ocorrer duplicidade nos dados, como por exemplo no nome da vaga. Caso já exista uma vaga cadastrada com esse nome, não será possível cadastar novamente.
- Verificação para caso não tenha nenhuma vaga cadastrada ainda, não será possível cadastar um candidato.
- Verificação de caso tenha uma vaga sem candidatos cadastrados, ocorrerá um tratamento para exibir uma mensagem específica, ao invés de listar candidatos cadastrados que nesse caso seria vazio.
- Adicionado uma função extra de exibir candidatos para ao ser cadastrado um novo candidato ele exibir a lista de candidatos cadastrados em suas respectivas vagas.
- Adicionado a exibição de todas as vagas cadastradas e seus respectivos índices ao selecionar "Visualizar uma Vaga" para que fique claro qual índice da vaga que deseja selecionar.
- Adicionado um tratamento no erro para caso ao visualizar uma vaga seja inserido um índice inválido, de uma vaga que não exista, ele vai retornar um alerta informando que foi inserido um índice inválido.

## Aprendizados

Com o excelente número de exercícios propostos e desafios realizados nesse módulo da OneBitCode. Nesse desafio final pude por em prática diversos conceitos de <strong>lógica de programação, tipos de dados, variáveis e operadores, estruturas de controle, estruturas de dados, funções</strong>.

Nesse desafio revisei os conceitos básicos do javascript assim como os mais complexos como por exemplo <strong>High-Order Function, Programação Orientada a Objetos, Arrays, Arrow Functions, Manipulação dos dados, tratamento para melhorar as apresentações, utilizando operadores ternários para efetuar as verificações, entre outros.</strong>

Para praticar e fixar o conhecimento ainda mais, resolvi utilizando 2 abordagens diferentes, um utilizando o método .forEach dos arrays, e outra utilizando .reduce.
Sendo separado por arquivo, sendo o index.js a solução utilizando o método .reduce e o arquivo indexUsandoForEach.js sendo a solução utilizando o método .forEach.
