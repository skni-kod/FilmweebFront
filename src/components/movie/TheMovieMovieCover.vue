<template>
  <div>
    Cover section or something like that.
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({})
export default class MovieCover extends Vue {

  private durationFormat(duration: number) {
    let hours = Math.trunc(duration / 60);
    let minutes = (duration - hours * 60);
    return `${hours}h ${minutes}min`;
  };
}
</script>

<style lang="scss" scoped>

</style>