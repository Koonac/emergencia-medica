<template>
	<div class="pt-3">
		<div class="mb-3" v-if="tipo == `socorristas`">
			<select class="form-select" v-model="turnoSocorrista">
				<option value="">Todos</option>
				<option value="manhã">Manhã</option>
				<option value="tarde">Tarde</option>
				<option value="noite">Noite</option>
			</select>
		</div>
		<div class="row" v-if="itens.length <= 0">
			<div class="col text-center">
				<p>Nenhum registro encontrado.</p>
			</div>
		</div>
		<item
			v-for="(item, index) in itens"
			:key="index"
			:dados="item"
			:tipo="tipo"
		/>
		<div v-if="tipo == `socorristas`">
			Total: {{ qtdeTotalSocorristasPorTurno(turnoSocorrista) }}
		</div>
	</div>
</template>

<script>
	import Item from "@/components/Item.vue";
	import { mapState, mapGetters } from "vuex";

	export default {
		name: "ListaItens",
		data: () => ({
			turnoSocorrista: "",
		}),
		components: {
			Item,
		},
		props: {
			tipo: String,
		},
		computed: {
			...mapState({
				enfermeiros: (state) => state.enfermeiros,
				// socorristas: (state) => state.socorristas,
				medicos: (state) => state.medicos,
				carros: (state) => state.equipamentos.carros,
				telefones: (state) => state.equipamentos.telefones,
				kitsDeReanimacao: (state) => state.equipamentos.kitsDeReanimacao,
			}),
			...mapGetters({
				filtroSocorristasPorTurno: "filtroSocorristasPorTurno",
				qtdeTotalSocorristasPorTurno: "totalSocorristasPorTurno",
			}),
			itens() {
				switch (this.tipo) {
					case "enfermeiros":
						return this.enfermeiros;
					case "socorristas":
						return this.filtroSocorristasPorTurno(this.turnoSocorrista);
					case "medicos":
						return this.medicos;
					case "carros":
						return this.carros;
					case "telefones":
						return this.telefones;
					case "kits-de-reanimacao":
						return this.kitsDeReanimacao;
				}
				return [];
			},
		},
	};
</script>
