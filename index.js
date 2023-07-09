// Variáveis
const vagas = [];

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
	const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
		textoFinal += indice + ". ";
		textoFinal += vaga.nome;
		textoFinal +=
			" (" +
			(vaga.candidatos ? vaga.candidatos.length : 0) +
			(vaga.candidatos.length == 1 ? " candidato)\n" : " candidatos)\n");
		return textoFinal;
	}, "");
	if (vagasEmTexto) {
		return vagasEmTexto;
	} else {
		return "Não possui vagas cadastradas";
	}
}

// Cadastra uma nova vaga.
function adicionarVaga() {
	const novaVaga = {};
	novaVaga.nome = prompt("Qual o nome da vaga que deseja cadastrar?");

	// Verifica se já existe a vaga com o mesmo nome.
	if (vagas.some((vaga) => vaga.nome === novaVaga.nome)) {
		alert("Essa vaga já está cadastrada.");
	} else {
		novaVaga.descricaoVaga = prompt("Insira a descrição da vaga.");
		novaVaga.dataLimite = prompt("Insira a data limite da vaga. (dd/mm/aaaa)");
		novaVaga.candidatos = [];
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

// Lista todas as vagas e suas respectivas descrições e data limite.
function visualizarVagas() {
	const indice = prompt(listarVagas() + "Informe o índice da vaga que deseja exibir.");
	const vaga = vagas[indice];

	const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
		return textoFinal + "\n - " + candidato;
	}, "");

	alert(
		"Vaga nº " +
			indice +
			"\nNome da vaga: " +
			vaga.nome +
			"\nDescrição da vaga: " +
			vaga.descricaoVaga +
			"\nData limite da vaga: " +
			vaga.dataLimite +
			"\nQuantidade de candidatos: " +
			vaga.candidatos.length +
			"\nCandidatos inscritos: " +
			candidatosEmTexto
	);
}

// Remove uma vaga existente.
function removerVaga() {
	if (vagas.length > 0) {
		const indiceVaga = prompt("Digite o índice da vaga que você deseja remover:\n" + listarVagas());

		const confirmacao = confirm(
			"Você deseja removar a vaga: \n" +
				"Vaga de número: " +
				indiceVaga +
				"\nNome da vaga: " +
				vagas[indiceVaga].nome +
				"\nDescrição da vaga: " +
				vagas[indiceVaga].descricaoVaga +
				"\nData limite da vaga: " +
				vagas[indiceVaga].dataLimite
		);
		confirmacao
			? vagas.splice(indiceVaga, 1) + alert("Vaga removida.")
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
			? vagas[indiceVaga].candidatos.push(candidato.nome) + alert("Candidato cadastrado.")
			: alert("Cancelando operação.");

		exibirCandidatos();
	}
}

// Lista todos os candidatos e seus respectivos índices.
function exibirCandidatos() {
	const listaCandidatos = vagas.reduce(function (textoFinal, vaga, indice) {
		if (vaga.candidatos.length == 0) {
			textoFinal += "Vaga: " + vaga.nome + ". ";
			textoFinal += "Sem candidatos cadastrados para essa vaga" + "\n";
			return textoFinal;
		} else {
			textoFinal += "Vaga: " + vaga.nome + ". ";
			textoFinal += "Candidatos: " + vaga.candidatos + "\n";
			return textoFinal;
		}
	}, "Lista de candidatos:\n");

	alert(listaCandidatos);
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
