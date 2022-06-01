<template>
  <div>
    <div class="title">{{ movieData.tytul }}</div>
    <div class="details tags--text">
      <div class="title-orig tags--text">{{ movieData.oryginalny_tytul }}</div>
      <div class="type">
        <div>{{ movieData.typ }}</div>
      </div>
    </div>
    <div class="rates" style="color: gold;">
      Grades/Rates section<br/>or something like that.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({})
export default class MovieCover extends Vue {
  @Prop({ required: true }) movieData: any;
  private srednia: Number = 1.1;
  private wszystkich_ocen: Number = 2137;
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}

.details {
  font-size: 14px;
}

.rates {
  display: flex;
  justify-content: right;
  align-items: center;
}

.rates > div {
  margin-left: 4px;
}

.details .type > div:first-child {
  text-transform: uppercase;
}

.rates > *{
  margin-left: 16px;
}

.rates img {
  height: 40px;
}

.rates-box .average, .rates-box .all-rates {
  display: flex;
  align-items: center;
}

.rates-box .average > *, .rates-box .all-rates > * {
  margin-right: 4px;
}
</style>