<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MovieSearch from "../components/search/MovieSearch.vue";
import ActorSearch from "../components/search/ActorSearch.vue";

@Component({
  components: {
    MovieSearch,
    ActorSearch,
  },
})
export default class Search extends Vue {}
</script>

<template>
  <v-container>
    <v-row class="mt-n7-px-3">
      <v-col cols="12" md="6" lg="6">
        <v-btn
          rounded
          block
          dense
          class="px-3"
          color="secondary"
          link
          :to="{ name: 'search-movies' }"
        >
          Wyszukiwanie filmów
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <v-btn
          block
          dense
          rounded
          class="px-3"
          color="secondary"
          link
          :to="{ name: 'search-actors' }"
        >
          Wyszukiwanie aktorów
        </v-btn>
      </v-col>
    </v-row>
    <router-view></router-view>
  </v-container>
</template>
