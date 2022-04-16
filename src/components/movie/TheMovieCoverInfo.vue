<template>
  <div>
    <div class="cover-info__title">{{ movieData.title }}</div>
    <div class="cover-info__undertitle-dets">
      <div class="undertitle-dets__type">{{ movieData.type }}</div>
      <div class="undertitle-dets__production-year">{{ movieData.productYear }}</div>
      <div class="undertitle-dets__duration">{{ durationFormat(movieData.duration) }}</div>
    </div>
    <div class="cover-info__grade-box">
      <div class="grade-box__average">
        <img src="../../assets/star.svg" alt="Average">
        <span class="average__real">0.0</span>
        <span class="average__full">/10</span>
      </div>
      <div class="grade-box__all-grades">
        <img src="../../assets/grades.svg" alt="All Grades">
        <span>1000000</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from "vue-property-decorator";

@Component({
  props: {
    movieData: {
      type: Object,
      required: true,
    }
  },
})
export default class CoverInfo extends Vue {

  durationFormat(duration: number) {
    let hours = Math.trunc(duration / 60);
    let minutes = (duration - hours * 60);
    return `${hours}h ${minutes}min`;
  };
}
</script>

<style lang="scss" scoped>
.cover-info__title {
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 1.25px;
  text-transform: uppercase;

  @media (max-width: 1264px) {
    font-size: 39px;
    line-height: calc(1.08 * 39px);
  }

  @media (max-width: 960px) {
    font-size: 30px;
    line-height: calc(1.08 * 30px);
  }

  @media (max-width: 600px) {
    font-size: 4vw;
    line-height: 4.32vw;
  }
}

.cover-info__undertitle-dets {
  font-size: 13px;
  display: flex;
  column-gap: 15px;
  color: #ddd;

  @media (max-width: 960px) {
    font-size: 11px;
  }

  @media (max-width: 1264px) {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    font-size: 1.6vw;
  }
}

.undertitle-dets__type {
  text-transform: uppercase;
}

.cover-info__grade-box {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 30px;
  column-gap: 15px;

  @media (max-width: 1264px) {
    font-size: 27px;
  }

  @media (max-width: 960px) {
    font-size: 24px;
    margin-top: 5px;
  }

  @media (max-width: 600px) {
    font-size: 3.2vw;
    column-gap: 5px;
  }
}

.grade-box__average, .grade-box__all-grades {
  display: flex;
  align-items: center;
}

.cover-info__grade-box img {
  height: 27px;
  margin-right: 5px;

  @media (max-width: 1264px) {
    height: calc(0.85 * 27px);
  }

  @media (max-width: 960px) {
    height: calc(0.75 * 27px);
  }

  @media (max-width: 600px) {
    height: 3.0vw;
  }
}

.average__full {
  margin-top: 2px;
  font-size: 0.8em;
  color: #ddd;
}


</style>