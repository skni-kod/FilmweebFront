<template>
  <div class="sidetool-form-blk">
    <div class="accent sidetool-form">
      <div class="sidetool-form-close">
        <button @click="emitParent">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="sidetool-form-head">
        <v-icon>mdi-playlist-plus</v-icon>
        <span>Dodaj film do listy</span>
      </div>
      <div class="sidetool-form-cnt">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class SidetoolAddToList extends Vue {

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    this.emitParent();
  }

  private emitParent() {
    this.$emit('visibility', 0);
  }
}
</script>

<style lang="scss" scoped>
</style>
