<template>
  <div class="movie-tools">
    <v-btn>
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
            Form Here...
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
export default class SidetoolRemoveMovie extends Vue {
  data() {
    return {
      sidetool: {
          text: "Usuń film",
          icon: "mdi-playlist-remove",
          admin: true,
        }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
