<template>
  <v-container>
    <v-list>
      <v-subheader class="text-h6">Panel administratora</v-subheader>
      <v-list-item v-for="(page, i) in pages" :key="i" link :to="page.link">
        <v-list-item-content>
          <v-list-item-title> {{ page.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-spacer></v-spacer>
    <v-divider class="pa-4"></v-divider>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import AddMovieForm from "@/components/profilePage/AddMovieForm.vue";
import AddPersonForm from "@/components/profilePage/AddPersonForm.vue";
import ImportMovieForm from "@/components/profilePage/ImportMovieForm.vue";

@Component({
  components: {
    AddMovieForm,
    AddPersonForm,
    ImportMovieForm,
  },
})
export default class Admin extends Vue {
  data() {
    return {
      pages: [
        {
          name: "Dodaj film",
          link: "/uzytkownik/administrator/dodawanie-filmu",
        },
        {
          name: "Importuj film",
          link: "/uzytkownik/administrator/import-filmu",
        },
        {
          name: "Dodaj osobę",
          link: "/uzytkownik/administrator/dodawanie-osoby",
        },
      ],
    };
  }
}
</script>

<style scoped>
