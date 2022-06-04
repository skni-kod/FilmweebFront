<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  data() {
    return {
      icons: [
        { name: "mdi-magnify", text: "Wyszukiwanie", link: { name: "Search" } },
        { name: "mdi-account-outline", text: "Profil", link: { name: "User" } },
        { name: "mdi-login", text: "Zaloguj się", link: { name: "Home" } },
      ],
    };
  }
}
</script>

<template>
  <v-app-bar app dark color="grey darken-3">
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }" class="text-decoration-none">
        Filmweeb
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn  class="mx-1"
    rounded

    color="blue darken-3" v-for="(icon, i) in icons" :key="i" :to="icon.link">
      <v-icon> {{ icon.name }} </v-icon>
      <span class="white--text" v-if="$vuetify.breakpoint.xs === false"> {{ icon.text }} </span>
      <span v-else></span>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
  .v-btn:before {
   background-color: transparent;
  }
</style>


