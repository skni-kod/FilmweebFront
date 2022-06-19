<template>
  <div class="movie-tools">
  Form edit here
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class ReviewEdit extends Vue {
  data() {
    return {
      sidetool: {
          text: "Edytuj recenzje",
          icon: "mdi-playlist-edit",
        }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
