<template>
  <v-card class="wrapper-blk accent">
    <span>SideTool</span>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({})
export default class MovieSidetool extends Vue {
}
</script>

<style lang="scss" scoped>
.wrapper-blk {
  min-height: 350px;
}

.wrapper-blk > * {
  position: absolute;
  inset: 25% 50% 25% 50%;
  text-transform: uppercase;
}
</style>