<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile v-for="menu in $store.state.menu" :key="menu.menu_id" :to="menu.menu_url" router exact>
          <v-list-tile-action>
            <v-icon>{{ menu.menu_icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="menu.menu_name" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary">
      <v-toolbar-side-icon class="white--text hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><a href="/" class="white--text">{{ $store.state.profile.full_name }}</a></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="white--text" v-for="menu in $store.state.menu" :key="menu.menu_id" :to="menu.menu_url" flat>{{ menu.menu_name }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer height="auto">
      <v-layout row wrap white--text>
        <v-flex xs12 primary>
          <v-container>
            <v-layout row wrap>
              <v-flex md6 sm12>
                <v-layout wrap justify-start>
                  <v-btn class="mx-0" color="white" v-for="menu in $store.state.menu" :key="menu.menu_id" :to="menu.menu_url" flat>
                    {{ menu.menu_name }}
                  </v-btn>
                </v-layout>
              </v-flex>
              <v-flex md6 sm12>
                <v-layout wrap justify-end>
                  <v-btn class="mx-3 white--text" color="white--text" v-for="social in $store.state.social" :key="social.social_id" :href="social.social_url" target="_blank" icon ma-0>
                    <v-icon size="24px">{{ social.social_icon }}</v-icon>
                  </v-btn>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 secondary>
          <v-container>
            <v-layout row>
              <v-flex xs12>
                Created &amp; Maintained By <a href="http://nfraz.co.nf" class="white--text" target="_blank">Nazish Fraz</a>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-footer>
    <v-btn bottom right class="v-btn--floating v-btn--fixed accent" @click="$vuetify.goTo(0)"><v-icon>keyboard_arrow_up</v-icon></v-btn>
    <v-dialog v-model="$store.state.loader" persistent width="300">
      <v-card color="accent">
        <v-card-text>
          <p class="white--text">Please wait. Loading ...</p>
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>
