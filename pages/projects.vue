<template>
  <v-app>
    <v-container grid-list-sm>
      <Project class="py-3"/>
    </v-container>
  </v-app>
</template>

<script>
import Project from "~/components/Project"

export default {
  components: { Project },
  head: {
    titleTemplate: "%s | Projects"
  },
  mounted() {
    this.ajax()
  },
  methods: {
    ajax() {
      this.$store.commit("ajax_projects")
    }
  }
}
</script>