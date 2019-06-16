import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#173e43',
    accent: '#dab73c',
    secondary: '#3fb0ac',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  iconfont: 'fa4'
})
