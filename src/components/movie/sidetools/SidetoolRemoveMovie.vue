<template>
  <div class="sidetool-form-blk">
    <div class="accent sidetool-form">
      <div class="sidetool-form-close">
        <button @click="emitParent(0)">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="sidetool-form-head">
        <v-icon>mdi-playlist-remove</v-icon>
        <span>Usuń film</span>
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

  async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    this.emitParent(1);
  }

  private emitParent(state: boolean) {
    this.$emit('visibility', 1, state);
  }
}
</script>

<style lang="scss" scoped>
</style>
