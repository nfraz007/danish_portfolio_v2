<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list>
        <v-list-tile v-for="page in pages" :key="page.title" :to="page.to" router exact>
          <v-list-tile-action>
            <v-icon>{{ page.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="page.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="white">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Gouher Danish</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="page in pages" :key="page.title" :to="page.to" flat>{{ page.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer height="auto">
      <v-layout justify-center row wrap>
        <v-flex primary lighten-0 text-xs-center xs12>
          <v-btn v-for="social in socials" :key="social" class="mx-3 white--text" color="white--text" icon>
            <v-icon size="24px">{{ social }}</v-icon>
          </v-btn>
        </v-flex>
        <v-flex primary lighten-0 text-xs-center xs12>
          <v-btn v-for="page in pages" :key="page.title" :to="page.to" color="white" flat>
            {{ page.title }}
          </v-btn>
        </v-flex>
        <v-flex primary lighten-1 py-3 text-xs-center white--text xs12>
          Created &amp; Maintained By <a href="http://nfraz.co.nf" class="white--text" target="_blank">Nazish Fraz</a>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      pages: [
        {
          icon: 'home',
          title: 'About Me',
          to: '/'
        },
        {
          icon: 'work',
          title: 'Work Experience',
          to: '/work-experience'
        },
        {
          icon: 'code',
          title: 'Projects',
          to: '/projects'
        }
      ],
      socials: [
        'fa fa-facebook',
        'fa fa-twitter',
        'fa fa-google-plus',
        'fa fa-linkedin',
        'fa fa-instagram'
      ]
    }
  },
  // transitions: "default"
}
</script>
