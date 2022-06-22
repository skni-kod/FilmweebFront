<template>
  <div class="movie-tools">
    <v-btn @click="visible = true">
      <v-icon>{{ sidetool.icon }}</v-icon>
      <span class="white--text"> {{ sidetool.text }}</span>
    </v-btn>
    <div class="sidetool-form-blk" v-if="visible">
      <div class="accent sidetool-form">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class SidetoolAddToList extends Vue {
  data() {
    return {
      visible: false,
      sidetool: {
          text: "Dodaj do listy",
          icon: "mdi-playlist-plus",
          admin: false,
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
