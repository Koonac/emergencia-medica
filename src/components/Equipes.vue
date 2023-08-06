<template>
	<div>
		<div class="row">
			<div class="col">
				<h5><i class="bi-clipboard-check me-2"></i>Equipes montadas</h5>
			</div>
		</div>
		<div class="row">
			<div
				class="col-md-4 col-xl-3 py-2"
				v-for="equipe in equipes"
				:key="equipe.id"
			>
				<equipe :dados="equipe" />
			</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	import Equipe from "@/components/Equipe";

	export default {
		name: "Equipes",
		components: {
			Equipe,
		},
		computed: {
			...mapState({
				equipes: (state) => state.equipes,
			}),
		},
		methods: {
			...mapActions({
				fetchEquipes: "fetchEquipes",
			}),
		},
		created() {
			this.fetchEquipes();
		},
	};
</script>
