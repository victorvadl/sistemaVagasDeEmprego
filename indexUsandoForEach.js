// Variáveis
const vagas = [];
const candidatos = [];

// Funções

// Exibe o menu e retorna a opção selecionada pelo usuário.
function exibirMenu() {
	let opcao = prompt(
		"Selecione a opção desejada:" +
			"\n1) Listar vagas." +
			"\n2) Criar uma nova vaga." +
			"\n3) Visualizar uma vaga." +
			"\n4) Inscrever um candidato em uma vaga." +
			"\n5) Excluir uma vaga." +
			"\n6) Sair."
	);
	return opcao;
}

// Exibe as vagas e seus respectivos índices.
function listarVagas() {
	let vagasEmTexto = "Lista de vagas cadastradas:\n";
	vagas.forEach(function (elemento, indice) {
		let contagem = 0;
		candidatos.forEach(function (candidato) {
			if (candidato.vaga === elemento.nome) {
				contagem++;
			}
		});
		vagasEmTexto += indice + ". " + elemento.nome + " Total de candidatos: " + contagem + "\n";
	});
	if (vagasEmTexto != "Lista de vagas cadastradas:\n") {
		return vagasEmTexto;
	} else {
		return "Não possui vagas cadastradas";
	}
}

// Cadastra uma nova vaga.
function adicionarVaga() {
	let novaVaga = {};
	novaVaga.nome = prompt("Qual o nome da vaga que deseja cadastrar?");
	novaVaga.descricaoVaga = prompt("Insira a descrição da vaga.");
	novaVaga.dataLimite = prompt("Insira a data limite da vaga");

	if (vagas.some((vaga) => vaga.nome === novaVaga.nome)) {
		alert("Essa vaga já está cadastrada.");
	} else {
		const confirmacao = confirm(
			"Salvar esta vaga? \n" +
				"\nNome da vaga: " +
				novaVaga.nome +
				"\nDescrição: " +
				novaVaga.descricaoVaga +
				"\nData limite: " +
				novaVaga.dataLimite
		);
		confirmacao ? vagas.push(novaVaga) + alert("Vaga cadastrada.") : alert("Cancelando operação.");
	}
}

// Remove uma vaga existente.
function removerVaga() {
	if (vagas.length > 0) {
		let excluirVaga = prompt("Digite o índice da vaga que você deseja remover:\n" + listarVagas());

		const confirmacao = confirm(
			"Você deseja removar a vaga: \n" + excluirVaga + " - " + vagas[excluirVaga].nome
		);
		confirmacao
			? vagas.splice(excluirVaga, 1) + alert("Vaga removida.")
			: alert("Cancelando Operação");
	} else {
		alert("Não possui vaga cadastrada para remover");
	}
}

// Adiciona um novo candidato a uma vaga cadastrada.
function adicionarCandidato() {
	let candidato = {};
	if (vagas.length == 0) {
		alert("Não possui vaga cadastrada. Antes de cadastrar um candidato, cadastre uma vaga.");
	} else {
		candidato.nome = prompt("Qual o nome do candidato?");
		let opcaoVaga = prompt(
			"Insira o número da vaga que você deseja cadastrar o candidato.\n" + listarVagas()
		);

		let indiceVaga;

		for (let i = 0; i < vagas.length; i++) {
			if (opcaoVaga == i) {
				candidato.vaga = vagas[i].nome;
				indiceVaga = i;
			}
		}

		const confirmacao = confirm(
			"Salvar este candidato? \n" +
				"Nome do candidato: " +
				candidato.nome +
				"\nVaga desejada: " +
				opcaoVaga +
				" - " +
				vagas[indiceVaga].nome
		);
		confirmacao
			? vagas.push(candidato) + alert("Candidato cadastrado.")
			: alert("Cancelando operação.");

		exibirCandidatos();
	}
}

// Lista todos os candidatos e seus respectivos índices.
function exibirCandidatos() {
	let listaCandidatos = "Lista de candidatos: \n";
	candidatos.forEach(function (elemento, indice) {
		listaCandidatos +=
			indice + " - Candidato: " + elemento.nome + ". Vaga: " + elemento.vaga + "\n";
	});
	alert(listaCandidatos);
}

// Lista todas as vagas e suas respectivas descrições e data limite.
function visualizarVagas() {
	let informacaoVagas = "As vagas cadastradas: \n";
	vagas.forEach(function (elemento) {
		informacaoVagas +=
			"Nome da vaga: " +
			elemento.nome +
			". Descrição: " +
			elemento.descricaoVaga +
			". Data limite: " +
			elemento.dataLimite +
			"\n";
	});
	alert(informacaoVagas);
}

// Executa o programa.
function executar() {
	do {
		opcao = exibirMenu();
		switch (opcao) {
			case "1":
				alert(listarVagas());
				break;
			case "2":
				adicionarVaga();
				break;
			case "3":
				visualizarVagas();
				break;
			case "4":
				adicionarCandidato();
				break;
			case "5":
				removerVaga();
				break;
			case "6":
				break;
			default:
				alert("Opção inválida.");
				break;
		}
	} while (opcao != 6);
}

// Início do programa.
executar();
