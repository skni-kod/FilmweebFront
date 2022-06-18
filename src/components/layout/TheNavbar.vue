<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  data() {
    return {
      main_state_btn: [
        {icon: "mdi-magnify", text: "Szukaj", link: {name: "Search"}},
        {icon: "mdi-account-outline", text: "Profil", link: {name: "User"}},
      ],
      login_state_btn: [
        {icon: "mdi-login", text: "Zaloguj się", link: {name: "Login"}},
        {icon: "mdi-logout", text: "Wyloguj się", link: {name: "Logout"}},
      ],
    };
  }

  get authState() {
    return this.$store.getters.isAuthenticated;
  }
}
</script>

<template>
  <v-app-bar app dark color="grey darken-3">
    <router-link class="website-head-logo" :to="{ name: 'Home' }">
      <v-img
          contain
          position="left"
          rounded
          max-height="35px"
          max-width="45px"
          :src="require('@/assets/logo_serwisu.png')"
      />
      <v-toolbar-title
          class="text-no-wrap"
          v-if="!$vuetify.breakpoint.xs"
      >Filmweeb
      </v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>
    <v-btn
        class="mx-1"
        rounded
        color="secondary"
        v-for="(btn, i) in main_state_btn"
        :key="i"
        :to="btn.link"
    >
      <v-icon> {{ btn.icon }}</v-icon>
      <span class="white--text" v-if="!$vuetify.breakpoint.xs">{{ btn.text }}</span>
      <span v-else></span>
    </v-btn>
    <v-btn
        class="mx-1"
        rounded
        color="secondary"
        :to="login_state_btn.at(authState).link"
    >
      <v-icon> {{ login_state_btn.at(authState).icon }}</v-icon>
      <span class="white--text" v-if="!$vuetify.breakpoint.xs">{{ login_state_btn.at(authState).text }}</span>
      <span v-else></span>
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
.v-btn:before {
  background-color: transparent;
}

.website-head-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}
</style>
