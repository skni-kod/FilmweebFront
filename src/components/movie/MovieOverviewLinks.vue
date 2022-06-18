<template>
  <div class="wrapper-blk">
    <div class="tag tags--text">Odnośniki:</div>
    <v-row>
      <v-col v-for="(link, i) in moviesLinks" :key="link.id" cols="auto">
        <a
          v-if="link.link_type.charAt(0) === references[i].letter"
          :href="link.address"
          target="_blank"
        >
          <v-img
            class="mt-3"
            contain
            position="left"
            rounded
            height="35px"
            width="35px"
            :src="references[i].img"
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
        </a>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class MovieOverviewLinks extends Vue {
  private moviesLinks: object = [];
  private references: object = [
    {
      letter: "r",
      img: require("@/assets/references/rotten.png"),
    },
    {
      letter: "f",
      img: require("@/assets/references/filmweb.png"),
    },
    {
      letter: "i",
      img: require("@/assets/references/imdb.png"),
    },
  ];

  created() {
    this.getMovieLinks(this.$store.getters.moviePage.movieID);
  }

  getMovieLinks(movieID: string) {
    axios
      .get(`/api/movies/${movieID}/links/`)
      .then((response) => {
        this.moviesLinks = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped></style>
