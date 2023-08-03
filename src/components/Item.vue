<template>
	<div>
		<div class="row">
			<div class="col-1" v-if="dados.id" v-text="dados.id" />
			<div class="col" v-if="dados.nome" v-text="dados.nome" />
			<div class="col-2" v-if="dados.turno" v-text="dados.turno" />
			<div class="col-2" v-if="dados.escala" v-text="dados.escala" />
			<div class="col-1">
				<i class="bi-check2-square" style="cursor: pointer"></i>
			</div>
		</div>
		<hr />
	</div>
</template>

<script>
	export default {
		name: "Item",
		props: {
			dados: Object,
		},
	};
</script>
