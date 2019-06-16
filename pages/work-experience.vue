<template>
  <v-app>
    <v-container grid-list-sm>
      <Experience class="py-3"/>
    </v-container>
  </v-app>
</template>

<script>
import Experience from "~/components/Experience"

export default {
  components: { Experience },
  head: {
    titleTemplate: "%s | Work Experience"
  },
  mounted() {
    this.ajax()
  },
  methods: {
    ajax() {
      this.$store.commit("ajax_work_experience")
    }
  }
}
</script>