<template>
  <div :style="{'background-image': `url(${coverImagePath})`}"></div>
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
}
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 100%;
  background: no-repeat center / 100%;

  @media (max-width: 960px) {
    background-size: cover;
  }
}

div::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #000F 0%, #0000 50%, #000F 100%);
}
</style>