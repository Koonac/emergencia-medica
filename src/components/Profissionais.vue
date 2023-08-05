<template>
	<div>
		<div class="row">
			<div class="col">
				<h5><i class="bi-file-person me-2"></i>Profissionais</h5>
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'profissionais', params: { tipo: 'enfermeiros' } }"
							>Enfermeiros ({{ totalPorTipo("enfermeiros") }})</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'profissionais', params: { tipo: 'socorristas' } }"
							>Socorristas ({{ totalPorTipo("socorristas") }})</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'profissionais', params: { tipo: 'medicos' } }"
							>Médicos ({{ totalPorTipo("medicos") }})</router-link
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<span><router-view name="profissionais" /></span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	export default {
		name: "Profissionais",
		computed: {
			...mapGetters({
				totalPorTipo: "totalPorTipo",
			}),
		},
	};
</script>
