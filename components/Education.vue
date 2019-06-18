<template>
	<v-content>
		<v-layout row wrap>
			<v-flex sm4 xs12>
                <Title :section="$store.state.section.EDUCATION"/>
            </v-flex>
			<v-flex sm8 xs12>
				<v-timeline align-top dense>
                    <v-timeline-item color="secondary" small v-for="education in $store.state.data.educations" :key="education.education_id">
                        <v-layout row wrap pt-2>
                            <v-flex md2 sm12 xs12>
                                <h1 class="primary--text">{{ education.year }}</h1>
                            </v-flex>
                            <v-flex md10 sm12 xs12>
                                <div class="body-2">{{ education.institute_name }}</div>
								<p>{{ education.degree }}, {{ education.field_of_study }}, {{ education.grade }}</p>
                            </v-flex>
                        </v-layout>
                    </v-timeline-item>
                </v-timeline>
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
