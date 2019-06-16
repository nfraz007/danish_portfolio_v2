<template>
	<v-content>
		<v-layout row wrap>
            <v-flex sm4 xs12>
                <Title :section="$store.state.section.ACHIEVEMENT"/>
            </v-flex>
			<v-flex sm8 xs12 >
                <v-timeline align-top dense>
                    <v-timeline-item color="secondary" small v-for="achievement in $store.state.data.achievements" :key="achievement.achievement_id">
                        <v-layout row wrap pt-2>
                            <v-flex md2 sm12>
                                <h1 class="primary--text">{{ achievement.achievement_year }}</h1>
                            </v-flex>
                            <v-flex md10 sm12>
                                <!-- <div class="body-2">{{ achievement.achievement_title }}</div> -->
                                <div>{{ achievement.achievement_title }}</div>
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
	components: { Title },
}
</script>

<style>

</style>
