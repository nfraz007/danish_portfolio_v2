<template>
	<v-content>
		<v-layout row wrap>
			<v-flex sm4 xs12>
          		<Title :section="$store.state.section.EXPERIENCE"/>
      		</v-flex>
			<v-flex sm8 xs12>
				<v-layout row wrap>
					<v-flex xs12 v-for="experience in $store.state.data.experiences" :key="experience.experience_id">
						<v-card>
							<v-card-title primary-title>
								<div>
									<h3 class="headline font-weight-bold primary--text">{{ experience.designation }} @ {{ experience.company_name }}</h3>
									<p class="primary--text">From {{ experience.start_at_text }} to {{ experience.end_at_text }} <v-icon>fa fa-circle</v-icon> {{ experience.duration }}</p>
									<div>{{ experience.detail }}</div>
								</div>
							</v-card-title>

							<v-card-actions>
								<v-btn color="primary" flat :href="experience.company_url" target="_blank"><i class="fa fa-eye"></i>&nbsp; Company Website</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-content>
</template>

<script>
import Title from "~/components/Title"

export default {
	components: { Title }
}
</script>

<style>

</style>
