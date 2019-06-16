<template>
  <v-app>
    <Cover/>
    <v-container grid-list-md>
      <Skill class="py-5"/>
      <v-divider></v-divider>
      <Experience class="py-5"/>
      <v-divider></v-divider>
      <Education class="py-5"/>
      <v-divider></v-divider>
      <Award class="py-5"/>
      <v-divider></v-divider>
      <Achievement class="py-5"/>
    </v-container>
  </v-app>
</template>

<script>
import Cover from "~/components/Cover"
import Skill from "~/components/Skill"
import Education from "~/components/Education"
import Experience from "~/components/Experience"
import Award from "~/components/Award"
import Achievement from "~/components/Achievement"

export default {
  components: { Cover, Skill, Education, Experience, Award, Achievement },
  head: {
    titleTemplate: "%s | About Me"
  },
  data() {
    return {
      
    }
  },
  computed: {
    get_title() {
      return this.$store.state.meta.author
    }
  },
  mounted() {
    this.ajax()
  },
  methods: {
    ajax() {
      this.$store.commit("ajax_index")
    }
  }
}
</script>