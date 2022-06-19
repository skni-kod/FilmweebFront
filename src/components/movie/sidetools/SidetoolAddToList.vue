<template>
  <div class="movie-tools">
    <v-btn @click="visible = true">
      <v-icon>{{ sidetool.icon }}</v-icon>
      <span class="white--text"> {{ sidetool.text }}</span>
    </v-btn>
    <div class="sidetool-form-blk" v-if="visible">
      <div class="accent sidetool-form">
        <div class="sidetool-form-close">
          <button @click="visible = false">
            <v-icon class="secondary--text">mdi-close</v-icon>
          </button>
        </div>
        <div class="sidetool-form-cnt">
          <div class="form-head">
            <v-icon class="mark_avg--text">mdi-star-outline</v-icon>
            <span>{{ movieData.title }}</span>
          </div>
          <div class="form-cnt">
            <button class="sidetool-confirm" @click="visible = false">
              PRZEŚLIJ COKOLWIEK
            </button>
          </div>
        </div>
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
