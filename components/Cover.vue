<template>
  <v-app>
    <v-content>
      <section>
        <v-parallax :src="require('~/assets/images/cover.jpg')" height="600">
          <v-layout column align-center justify-center class="white--text">
            <h3 class="display-1 mb-2 font-weight-thin">I AM</h3>
            <h1 class="display-1 mb-2 font-weight-bold text-uppercase">Gouher Danish</h1>
            <div class="display-1 mb-3">Data Scientist</div>
            <div class="subheading text-xs-center">I love coding and I know how to use coding to solve a real world problem. I love to learn new technologies and strive constantly to improve myself. I like singing and solving rubik's cube in free time.</div>
            <v-btn class="accent primary--text mt-5" large href="#"><v-icon left>fa fa-download</v-icon> Resume</v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section class="primary">
        <v-container>
          <v-layout row wrap class="accent--text text-xs-center py-5">
            <v-flex xs6 sm3>
              <h1 class="display-1">2</h1>
              <p>Years Exp</p>
            </v-flex>
            <v-flex xs6 sm3>
              <h1 class="display-1">12</h1>
              <p>Project</p>
            </v-flex>
            <v-flex xs6 sm3>
              <h1 class="display-1">20</h1>
              <p>Certifications</p>
            </v-flex>
            <v-flex xs6 sm3>
              <h1 class="display-1">8</h1>
              <p>Achievement</p>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
