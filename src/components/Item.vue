<template>
	<div>
		<div class="row">
			<div class="col-1" v-if="dados.id" v-text="dados.id" />
			<div class="col" v-if="dados.nome" v-text="dados.nome" />
			<div class="col" v-if="dados.placa" v-text="dados.placa" />
			<div class="col" v-if="dados.telefone" v-text="dados.telefone" />
			<div class="col" v-if="dados.kit" v-text="dados.kit" />
			<div class="col-2" v-if="dados.turno" v-text="dados.turno" />
			<div class="col-2" v-if="dados.escala" v-text="dados.escala" />
			<div class="col-1">
				<i
					class="bi-check2-square"
					style="cursor: pointer"
					@click="setItemEquipeComVerificacao({ tipo, dados })"
				></i>
			</div>
		</div>
		<hr />
	</div>
</template>

<script>
	import { mapMutations } from "vuex";

	export default {
		name: "Item",
		props: {
			dados: Object,
			tipo: String,
		},
		methods: {
			...mapMutations({
				setItemEquipe: "setItemEquipe",
				setItemEquipeComVerificacao: (commit, payload) => {
					/* FAZER A VERIFICAÇÃO */
					let itemReservado = true;

					if (itemReservado) {
						commit("setItemEquipe", payload);
					}
				},
			}),
			// adicionarItemEquipe() {
			// 	this.setItemEquipeComVerificacao({
			// 		tipo: this.tipo,
			// 		dados: this.dados,
			// 	});
			// 	/* CHAMANDO MÉTODO MUTATION */
			// 	// this.$store.commit({
			// 	// 	type: "setItemEquipe",
			// 	// 	abc: "AAAAAA",
			// 	// 	x: 3.5,
			// 	// 	y: 66,
			// 	// 	item,
			// 	// });
			// },
		},
	};
</script>
