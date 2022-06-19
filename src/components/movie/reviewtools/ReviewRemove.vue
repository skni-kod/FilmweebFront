<template>
  <div class="movie-tools">
    Form remove here
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class ReviewRemove extends Vue {
  data() {
    return {
      sidetool: {
          text: "Usuń recenzje",
          icon: "mdi-playlist-remove",
        }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
