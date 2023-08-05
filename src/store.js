import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		titulo: "## Emergências Médicas ##",
		equipe: {
			enfermeiro: "",
			socorrista: "",
			medico: "",
			carro: "",
			telefone: "",
			kitDeReanimacao: "",
		},
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
		setCarros: (state, { carros }) => (state.equipamentos.carros = carros),
		setTelefones: (state, { telefones }) =>
			(state.equipamentos.telefones = telefones),
		setKitsDeReanimacao: (state, { kitsDeReanimacao }) =>
			(state.equipamentos.kitsDeReanimacao = kitsDeReanimacao),
	},
});
