<template>
  <v-app-bar app color="dark" dark>
    <div class="d-flex align-center">
      <h3>Vue Article Blog</h3>
    </div>

    <v-spacer></v-spacer>

    <span class="mr-8"><a href="/">Home</a></span>
    <span class="mr-8"><a href="/list">List</a></span>

    <!-- <v-icon>mdi-open-in-new</v-icon> -->
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar'
}
</script>

<style>
a {
  font-weight: 700;
  text-decoration: none;
  color: white !important;
}

a:hover {
  color: grey !important;
}
</style>