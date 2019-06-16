<template>
	<v-content>
		<v-layout row wrap>
			<v-flex xs12>
				<h1 class="accent--text font-weight-bold">{{ section.section_name }}</h1>
				<p class="primary--text">{{ section.section_detail }}</p>
			</v-flex>
		</v-layout>
	</v-content>
</template>

<script>
export default {
	props: {
		section: {
			type: Object,
			default: function(){
				return {section_name: "", section_description: ""}
			}
		}
	}
}
</script>

<style>

</style>
