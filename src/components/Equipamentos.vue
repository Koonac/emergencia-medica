<template>
	<div>
		<div class="row">
			<div class="col">
				<h5><i class="bi-bag me-2"></i>Equipamentos</h5>
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'equipamentos', params: { tipo: 'carros' } }"
							>Carros ({{ totalPorTipo("carros") }})</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{ name: 'equipamentos', params: { tipo: 'telefones' } }"
							>Telefones ({{ totalPorTipo("telefones") }})</router-link
						>
					</li>
					<li class="nav-item">
						<router-link
							class="nav-link"
							:to="{
								name: 'equipamentos',
								params: { tipo: 'kits-de-reanimacao' },
							}"
							>Kits de Reanimação ({{
								totalPorTipo("kits-de-reanimacao")
							}})</router-link
						>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<span><router-view name="equipamentos" /></span>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: "Equipamentos",
		computed: {
			...mapGetters({
				totalPorTipo: "totalPorTipo",
			}),
		},
	};
</script>
