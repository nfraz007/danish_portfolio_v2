<template>
  <v-content>
    <v-container py-5>
      <v-layout row wrap>
        <v-flex md6 sm12>
          <h1 class="display-1 accent--text">I am <span class="secondary--text font-weight-bold">{{ $store.state.profile.full_name }}</span></h1>
          <h1 class="display-1 primary--text">{{ $store.state.profile.designation }}</h1>
          <p class="py-3">{{ $store.state.profile.profile_detail }}</p>
          <v-layout row wrap py-2>
            <v-flex xs2>
              <div class="body-2">Phone</div>
              <div class="body-2">Email</div>
              <div class="body-2">Address</div>
            </v-flex>
            <v-flex xs10>
              <div class="body-1">{{ $store.state.profile.phone_text }}</div>
              <div class="body-1">{{ $store.state.profile.email }}</div>
              <div class="body-1">{{ $store.state.profile.address }}</div>
            </v-flex>
          </v-layout>
          <v-layout row wrap py-2>
            <v-btn class="mx-0 mr-1" color="primary" v-for="social in $store.state.social" :key="social.social_id" :href="social.social_url" target="_blank" outline><v-icon>{{ social.social_icon }}</v-icon>&nbsp; {{ social.social_name }}</v-btn>
          </v-layout>
          <v-btn color="primary" class="mx-0" :href="$store.state.profile.resume_url" target="_blank"><i class="fa fa-eye"></i>&nbsp; View Resume</v-btn>
          <v-btn color="primary" class="mx-0" :href="$store.state.profile.cv_url" target="_blank"><i class="fa fa-eye"></i>&nbsp; View CV</v-btn>
        </v-flex>
        <v-flex md1></v-flex>
        <v-flex md5 hidden-sm-and-down>
          <v-img :src="$store.state.profile.profile_url" aspect-ratio="1.3"></v-img>
        </v-flex>
      </v-layout>
    </v-container>
    <section class="secondary">
      <v-container>
        <v-layout row wrap class="white--text py-5">
          <v-flex xs6 sm4 md2>
            <h1 class="display-2">{{ ($store.state.data.count) ? $store.state.data.count.experience : 0 }}</h1>
            <p class="subheading">Years Exp</p>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h1 class="display-2">{{ ($store.state.data.count) ? $store.state.data.count.project_company : 0 }}</h1>
            <p class="subheading">Company Project</p>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h1 class="display-2">{{ ($store.state.data.count) ? $store.state.data.count.project_personal : 0 }}</h1>
            <p class="subheading">Personal Project</p>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h1 class="display-2">{{ ($store.state.data.count) ? $store.state.data.count.certificate : 0 }}</h1>
            <p class="subheading">Certifications</p>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h1 class="display-2">{{ ($store.state.data.count) ? $store.state.data.count.award : 0 }}</h1>
            <p class="subheading">Award</p>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <h1 class="display-2">{{ ($store.state.data.count) ? $store.state.data.count.achievement : 0 }}</h1>
            <p class="subheading">Achievement</p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
