<template>
  <div id="app">
    <!-- The NavBar is shown on every page -->
    <NavBar />
    <!-- The router-view renders the component based on the current route -->
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>

<style>
/* Global styles can be added here if needed */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0;
}
</style>

