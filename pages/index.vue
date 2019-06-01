<template>
  <v-app>
    <Cover/>
    <Skill/>
  </v-app>
</template>

<script>
import Cover from "~/components/Cover"
import Skill from "~/components/Skill"

export default {
  components: { Cover, Skill }
}
</script>