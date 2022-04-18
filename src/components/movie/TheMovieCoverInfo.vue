<template>
  <div>
    <div class="cover-info__title">{{ movieData.title }}</div>
    <div class="cover-info__undertitle-dets">
      <div class="undertitle-dets__type">{{ movieData.type }}</div>
      <div class="undertitle-dets__production-year">{{ movieData.productYear }}</div>
      <div class="undertitle-dets__duration">{{ durationFormat(movieData.duration) }}</div>
    </div>
    <div class="cover-info__rate-box">
      <div class="rate-box__average">
        <img src="../../assets/star.svg" alt="Average">
        <span class="average__real">0.0</span>
        <span class="average__full">/10</span>
      </div>
      <div class="rate-box__all-rates">
        <img src="../../assets/grades.svg" alt="All rates">
        <div class="rate-box__all-rates-wrapper">
          <span class="all-rates__head">OCEN:</span>
          <span class="all-rates__count">2137</span>
        </div>
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

.cover-info__undertitle-dets > * {
  margin-right: 15px;
}

.undertitle-dets__type {
  text-transform: uppercase;
}

.cover-info__rate-box {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 30px;
  color: #ddd;

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

.cover-info__rate-box > * {
  margin-right: 15px;
}

.cover-info__rate-box img {
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

.rate-box__average, .rate-box__all-rates {
  display: flex;
  align-items: center;
}

.rate-box__all-rates-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 12px;
}

.average__real {
  color: #fff;
}

.average__full {
  font-size: 0.8em;
}

</style>