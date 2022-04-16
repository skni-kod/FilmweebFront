<template>
  <div :style="setBgImage(coverImagePath)"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  props: {
    coverImagePath: {
      type: String,
      required: true,
    }
  },
})
export default class CoverImage extends Vue {
  setBgImage(coverImagePath: string) {
    return {'background-image': `url(${coverImagePath})`}
  }
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 100%;

  @media (max-width: 960px) {
    background-size: cover;
  }
}

div::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%);
}
</style>