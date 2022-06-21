<template>
  <v-container>
    <router-link :to="{ name: 'MoviePerID', params: { id: movie.id } }">
      <v-img
        rounded
        :src="movie.poster"
        aspect-ratio="0.72"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </router-link>

    <v-card
      class="mx-auto"
      height="140"
      max-width="800"
      rounded
      color="grey darken-4"
    >
      <v-card-text>
        <v-tooltip bottom open-delay="200">
          <template v-slot:activator="{ on, attrs }">
            <div id="original_title" class="pb-1" v-bind="attrs" v-on="on">
              {{ movie.original_title }}
            </div>
          </template>
          <span>{{ movie.original_title }}</span>
        </v-tooltip>

        <v-tooltip bottom open-delay="200">
          <template v-slot:activator="{ on, attrs }">
            <h1 id="title" class="py-1" v-bind="attrs" v-on="on">
              {{ movie.title }}
            </h1>
          </template>
          <span>{{ movie.title }}</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import axios from "axios";

@Component
export default class MovieItem extends Vue {
  @Prop({ required: true }) readonly movie: any;
}
</script>

<style scoped>
#original_title {
  font-size: 0.9em;
  white-space: nowrap;
  word-break: normal;
  overflow: clip;
  text-overflow: ellipsis;
  height: 35px;
}
#title {
  white-space: nowrap;
  word-break: normal;
  overflow: clip;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 1.7em;
  height: 45px;
}

#releaseDate {
  text-align: left;
  font-size: 1.2em;
}
</style>
