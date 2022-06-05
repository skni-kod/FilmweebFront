<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  data() {
    return {
      movies: [
        {
          movie_id: 1,
          title: "Batman",
          original_title: "The Batman",
          release_date: "2022",
          poster: "https://fwcdn.pl/fpo/63/18/626318/7998475.3.jpg",
        },
        {
          movie_id: 2,
          title: "Top Gun: Maverick",
          original_title: "Top Gun: Maverick",
          release_date: "2022",
          poster: "https://fwcdn.pl/fpo/21/01/602101/8014563.3.jpg",
        },
        {
          movie_id: 3,
          title: "Zielona mila",
          original_title: "The Green Mile",
          release_date: "1999",
          poster: "https://m.media-amazon.com/images/I/71Q6YhYVSKL.jpg",
        },
        {
          movie_id: 4,
          title: "Nietykalni",
          original_title: "Intouchables",
          release_date: "2011",
          poster: "https://fwcdn.pl/fpo/33/90/583390/7441162.3.jpg",
        },
      ],
    };
  }
}
</script>

<template>
  <v-row class="ma-2 mx-5">
    <v-col
      v-for="movie in movies"
      :key="movie.id"
      class="flex-column"
      cols="12"
      sm="6"
      md="3"
      lg="3"
    >
      <router-link :to="{ name: 'Movie' }">
        <v-img
          rounded
          :src="movie.poster"
          :lazy-src="movie.poster"
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

          <p id="releaseDate" class="pt-1">{{ movie.release_date }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

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
