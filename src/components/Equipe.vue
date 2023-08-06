<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ dados.descricaoEquipe }}</h5>
			<ul class="list-group list-group-flush">
				<li class="list-group-item" v-if="dados.enfermeiro">
					Enfermeiro: {{ dados.enfermeiro }}
				</li>
				<li class="list-group-item" v-if="dados.socorrista">
					Socorrista: {{ dados.socorrista }}
				</li>
				<li class="list-group-item" v-if="dados.medico">
					Médico: {{ dados.medico }}
				</li>
				<li class="list-group-item" v-if="dados.carro">
					Carro: {{ dados.carro }}
				</li>
				<li class="list-group-item" v-if="dados.telefone">
					Telefone: {{ dados.telefone }}
				</li>
				<li class="list-group-item" v-if="dados.kitDeReanimacao">
					Kit: {{ dados.kitDeReanimacao }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Equipe",
		props: {
			dados: Object,
		},
	};
</script>
