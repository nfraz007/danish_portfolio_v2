<template>
  <v-app>
    <v-container grid-list-sm>
      <Certification class="py-3"/>
    </v-container>
  </v-app>
</template>

<script>
import Certification from "~/components/Certification"

export default {
  components: { Certification },
  head: {
    titleTemplate: "%s | Certifications"
  },
  mounted() {
    this.ajax()
  },
  methods: {
    ajax() {
      this.$store.commit("ajax_certifications")
    }
  }
}
</script>