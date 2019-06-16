<template>
	<v-content>
		<v-layout row wrap>
			<v-flex sm4 xs12>
          		<Title :section="$store.state.section.PROJECT"/>
      		</v-flex>
			<v-flex sm8 xs12>
				<v-layout row wrap>
					<v-flex xs12 v-for="project in $store.state.data.projects" :key="project.project_id">
						<v-card>
							<v-card-title primary-title class="pb-0">
								<div>
									<h3 class="headline font-weight-bold primary--text">{{ project.project_name }}</h3>
									<h3 class="subheading secondary--text">{{ (project.project_type == "COMPANY") ? project.company_name : project.project_type }}</h3>
									<p class="primary--text">From {{ project.start_at_text }} to {{ project.end_at_text }} <v-icon>fa fa-circle</v-icon> {{ project.duration }}</p>
									<div v-html="project.project_detail"></div>
									<div v-if="project.technology">
										<v-chip color="secondary white--text" v-for="technology in project.technology_array" :key="technology">{{ technology }}</v-chip>
									</div>
								</div>
							</v-card-title>
							<v-card-actions>
								<v-btn color="primary" flat v-if="project.project_url" :href="project.project_url" target="_blank"><i class="fa fa-code"></i>&nbsp; View Code</v-btn>
								<v-btn color="primary" flat v-if="project.project_demo" :href="project.project_demo" target="_blank"><i class="fa fa-laptop"></i>&nbsp; Live Demo</v-btn>
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
	components: { Title },
}
</script>

<style>

</style>
