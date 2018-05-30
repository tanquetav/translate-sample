<template>
  <div id="app">
    <div>
      <select name="language" v-model="$language.current">
        <option v-for="(language, key) in $language.available" :key="key" :value="key">{{ language }}</option>
      </select>
    </div>
    <div>
      <span v-translate>This is my first message</span> 
    </div>  
    <div>
      {{customText}}
    </div>  
    <img src="./assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    customText ()  {
      return this.$gettext("One more text");
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
