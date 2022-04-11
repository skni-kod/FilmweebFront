<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  data() {
    return {
      icons: [
        { name: "mdi-magnify", text: "Szukaj ...", link: { name: "Search" } },
        { name: "mdi-account-outline", text: "Profil", link: { name: "User" } },
        { name: "mdi-login", text: "Zaloguj się", link: { name: "Home" } },
      ],
    };
  }
}
</script>

<template>
  <v-app-bar app dark>
    <v-toolbar-title>
      <router-link :to="{ name: 'Home' }" class="text-decoration-none">
        Serwis
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn v-for="(icon, i) in icons" :key="i" :to="icon.link">
      <v-icon> {{ icon.name }} </v-icon>
      <span> {{ icon.text }} </span>
    </v-btn>
  </v-app-bar>
</template>
