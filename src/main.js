import Vue from 'vue'
import App from './App.vue'
import GetTextPlugin from 'vue-gettext'
import translations from './translations.json'

Vue.config.productionTip = false

Vue.use(GetTextPlugin, {
  availableLanguages: {
    en_US: 'English',
    pt_BR: 'Português',
  },
  defaultLanguage: 'en_US',
  translations: translations,
  silent: true,
})
 
new Vue({
  render: h => h(App)
}).$mount('#app')
