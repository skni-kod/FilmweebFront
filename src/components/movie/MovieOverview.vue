<template>
  <div class="wrapper-blk">
    <div class="poster">
      <v-img :lazy-src="movieData.poster" :src="movieData.poster"/>
    </div>
    <div class="plot">
      {{ movieData.description }}
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
        <div class="value" tabindex="0">{{ movieData.production_country }}</div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Rok produkcji</div>
        <div class="value" tabindex="0">{{ movieData.production_year }}</div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Czas trwania:</div>
        <div class="value" tabindex="0">
          {{ durationFormat(movieData.duration) }}
        </div>
      </li>
      <li class="buttons">
        <movie-overview-links></movie-overview-links>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import MovieOverviewLinks from "@/components/movie/MovieOverviewLinks.vue";

@Component({
  components: {
    MovieOverviewLinks
  },
})
export default class MovieOverview extends Vue {

  private durationFormat(duration: number) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration - hours * 60;
    return `${hours}h ${minutes}min`;
  }

  get movieData() {
    return this.$store.state.moviePage.movieData;
  }

}
</script>

<style lang="scss" scoped>
.wrapper-blk {
  grid-gap: 16px;
}

.movie-overview .poster {
  grid-area: 1 / 1 / 3 / 2;
  width: 100%;
  max-width: 285px;
}

.movie-overview .plot {
  padding: 32px 16px 0 16px;
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

a {
  display: block;
  width: 35px;
}
</style>
