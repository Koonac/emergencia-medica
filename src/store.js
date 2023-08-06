import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		titulo: "## Emergências Médicas ##",
		equipe: {
			descricaoEquipe: "",
			enfermeiro: "",
			socorrista: "",
			medico: "",
			carro: "",
			telefone: "",
			kitDeReanimacao: "",
		},
		equipes: [],
		enfermeiros: [],
		socorristas: [],
		medicos: [],
		equipamentos: {
			carros: [],
			telefones: [],
			kitsDeReanimacao: [],
		},
	},
	getters: {
		totalPorTipo(state) {
			//Conceito Closure (nativo js)
			return (p) => {
				switch (p) {
					case "enfermeiros":
						return state.enfermeiros.length;
					case "socorristas":
						return state.socorristas.length;
					case "medicos":
						return state.medicos.length;
					case "carros":
						return state.equipamentos.carros.length;
					case "telefones":
						return state.equipamentos.telefones.length;
					case "kits-de-reanimacao":
						return state.equipamentos.kitsDeReanimacao.length;
				}
				return 0;
			};
		},
		filtroSocorristasPorTurno(state) {
			//conceito closure (nativo js)
			return (p) =>
				!p ? state.socorristas : state.socorristas.filter((s) => s.turno === p);
		},
		totalSocorristasPorTurno: (state, getters) => {
			//conceito closure (nativo js)

			return (p) => getters.filtroSocorristasPorTurno(p).length;
		},
	},
	mutations: {
		setItemEquipe: (state, { tipo, dados }) => {
			tipo == "enfermeiros" ? (state.equipe.enfermeiro = dados.nome) : null;
			tipo == "socorristas" ? (state.equipe.socorrista = dados.nome) : null;
			tipo == "medicos" ? (state.equipe.medico = dados.nome) : null;
			tipo == "carros" ? (state.equipe.carro = dados.placa) : null;
			tipo == "telefones" ? (state.equipe.telefone = dados.telefone) : null;
			tipo == "kits-de-reanimacao"
				? (state.equipe.kitDeReanimacao = dados.kit)
				: null;
		},
		setEnfermeiros: (state, payload) => (state.enfermeiros = payload),
		setSocorristas: (state, payload) => (state.socorristas = payload),
		setMedicos: (state, payload) => (state.medicos = payload),
		setCarros: (state, payload) => (state.equipamentos.carros = payload),
		setTelefones: (state, payload) => (state.equipamentos.telefones = payload),
		setKitsDeReanimacao: (state, payload) =>
			(state.equipamentos.kitsDeReanimacao = payload),
		setEquipes: (state, payload) => (state.equipes = payload),
	},
	actions: {
		// adicionarEquipametos(context, { carros, telefones, kitsDeReanimacao }) {
		// 	/* Processamento assíncrono (Ex:. validação, consulta, permissão) */
		// 	context.commit("setCarros", carros);

		// 	setTimeout(() => {
		// 		context.commit("setTelefones", telefones);
		// 	}, 1000);

		// 	/* Processamento assíncrono (Ex:. validação, consulta, permissão) */
		// 	// context.commit("setTelefones", telefones);

		// 	/* Processamento assíncrono (Ex:. validação, consulta, permissão) */
		// 	context.commit("setKitsDeReanimacao", kitsDeReanimacao);
		// },
		fetchEquipamentos(context, { carros, telefones, kitsDeReanimacao }) {
			fetch("http://localhost:3000/equipamentos")
				.then((response) => response.json())
				.then((dados) => {
					if (carros) context.commit("setCarros", dados.carros);
					if (telefones) context.commit("setTelefones", dados.telefones);
					if (kitsDeReanimacao)
						context.commit("setKitsDeReanimacao", dados.kitsDeReanimacao);
				});
		},
		fetchProfissionais(context) {
			fetch("http://localhost:3000/enfermeiros")
				.then((response) => response.json())
				.then((dados) => context.commit("setEnfermeiros", dados));
			fetch("http://localhost:3000/socorristas")
				.then((response) => response.json())
				.then((dados) => context.commit("setSocorristas", dados));
			fetch("http://localhost:3000/medicos")
				.then((response) => response.json())
				.then((dados) => context.commit("setMedicos", dados));
		},
		fetchEquipes(context) {
			fetch("http://localhost:3000/equipes")
				.then((response) => response.json())
				.then((dados) => context.commit("setEquipes", dados));
		},
		postAndSetEquipe(context, payload) {
			/* COPIANDO DADOS DO CONTEXTO STATE PARA UM OBJETO */
			let data = Object.assign({}, context.state.equipe);

			data["descricaoEquipe"] = payload;

			/* VALIDAÇÕES */
			if (!payload)
				return alert("Por favor, escreva uma descrição para a equipe");
			if (!context.state.equipe.enfermeiro)
				return alert("Enfermeiro não pode ser vazio");
			if (!context.state.equipe.socorrista)
				return alert("Por favor, informe um socorrista para a equipe");
			if (!context.state.equipe.medico)
				return alert("Por favor, informe um médico para a equipe");
			if (!context.state.equipe.carro)
				return alert("Por favor, informe um carro para a equipe");

			fetch("http://localhost:3000/equipes", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			})
				.then((response) => response.json())
				.then((data) => context.state.equipes.push(data));
		},
	},
});
