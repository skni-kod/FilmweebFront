<template>
  <div class="movie-tools">
    Form add here
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class ReviewAdd extends Vue {
  data() {
    return {
      visible: false,
      sidetool: {
          text: "Dodaj recenzje",
          icon: "mdi-playlist-plus",
        }
    }
  }

  created() {}

  get movieData() {
    return this.$store.getters.moviePage.movieData;
  }

}
</script>

<style lang="scss" scoped>
.form-head {
  background-color: green;
}
.form-cnt {
  background-color: grey;
}
</style>
