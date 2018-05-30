<template>
  <div id="app">
    <div>
      <select name="language" v-model="$language.current">
        <option v-for="(language, key) in $language.available" :key="key" :value="key">{{ language }}</option>
      </select>
    </div>
    <img src="./assets/logo.png">
  </div>
</template>

<script>

export default {
  name: 'app',
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
