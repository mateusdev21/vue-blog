<template>
  <v-app>
    <v-main class="main">
      <AppBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";

export default {
  name: "App",

  components: {
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.main {
  background-color: #e0e0e0;
}
</style>
