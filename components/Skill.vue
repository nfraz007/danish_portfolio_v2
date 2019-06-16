<template>
  	<v-content>
    	<v-layout row wrap>
      		<v-flex sm4 xs12>
          		<Title :section="$store.state.section.SKILL"/>
      		</v-flex>
      		<v-flex sm8 xs12>
				<v-layout row wrap>
					<v-flex md6 sm12 v-for="skill in $store.state.data.skills" :key="skill.skill_id">
						<v-card>
							<v-card-title primary-title>
								<div>
									<div class="body-2 text-capitalize">{{ str_fix(skill.skill_type) }}</div>
									<p>{{ skill.skill }}</p>
								</div>
							</v-card-title>
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
	methods: {
		str_fix(str = ""){
			return str.replace("_", " ")
		}
	}
}
</script>

<style>

</style>
