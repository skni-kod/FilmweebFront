<template>
  <div class="wrapper-blk">
    <div class="poster">
      <v-img
          lazy-src="../../assets/logo.svg"
          src="../../assets/logo.svg"
      />
    </div>
    <div class="plot">
      Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas
      facilisis diam non tristique.
    </div>
    <ul class="tag-ul">
      <li class="detail-li">
        <div class="tag tags--text">Gatunek:</div>
        <div class="value" tabindex="0">
          <span> --- </span>
        </div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Kraj produkcji:</div>
        <div class="value" tabindex="0">{{ movieData.kraj_produkcji }}</div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Rok produkcji</div>
        <div class="value" tabindex="0">{{ movieData.rok_produkcji }}</div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Czas trwania:</div>
        <div class="value" tabindex="0">{{ durationFormat(movieData.czas_trwania) }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component({})
export default class MovieOverview extends Vue {
  @Prop({required: true}) movieData: any;

  private durationFormat(duration: number) {
    let hours = Math.trunc(duration / 60);
    let minutes = (duration - hours * 60);
    return `${hours}h ${minutes}min`;
  };
}
</script>

<style lang="scss" scoped>
.wrapper-blk > div {
  padding: 16px;
}

.movie-overview .poster {
  grid-area: 1 / 1 / 3 / 2;
}

.movie-overview .poster > div {
  padding: 16px;
}

.movie-overview .plot {
  grid-area: 1 / 2 / 2 / 3;
}

.movie-overview .tag-ul {
  grid-area: 2 / 2 / 3 / 3;
  list-style: none;
  margin-top: 16px;
}

.tag-ul .detail-li {
  display: flex;
  margin: 10px 0;
}

.detail-li .tag {
  min-width: 130px;
  color: lightgrey;
}

.movie-overview .poster > div {
  width: 100%;
}
</style>