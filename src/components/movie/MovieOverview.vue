<template>
  <div class="movie-overview-wrapper">
    <div class="poster">
      <v-img class="poster-img" :lazy-src="movieData.poster" :src="movieData.poster"/>
    </div>
    <div class="plot">{{ movieData.description }}</div>
    <div class="tags-info">
      <ul class="tags-ul">
        <li class="detail-li">
          <div class="tag tags--text">Gatunek:</div>
          <div class="value" tabindex="0">
            <span v-for="(genre, i) in movieGenres" :key="i">{{ genre.name + setComma(i) }}   </span>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import MovieOverviewLinks from "@/components/movie/MovieOverviewLinks.vue";
import axios from "axios";

@Component({
  components: {
    MovieOverviewLinks,
  },
})
export default class MovieOverview extends Vue {
  private movieGenres: object = [];

  private durationFormat(duration: number) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration - hours * 60;
    return `${hours}h ${minutes}min`;
  }

  created() {
    this.getMovieGenres(this.$store.getters.moviePage.movieID);
  }

  async getMovieGenres(movieID: string) {
    await axios
        .get(`/api/movies/${movieID}/genre/`)
        .then((response) => {
          this.movieGenres = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
  }

  get movieData() {
    return this.$store.getters.moviePage.movieData;
  }

  setComma(id: number) {
    return (id + 1 < Object.keys(this.movieGenres).length) ? " / " : "";
  }
}
</script>

<style lang="scss" scoped>
.movie-overview-wrapper {
  display: grid;
  grid-template-columns: minmax(0, 285px) 1fr;
  gap: 16px;
  grid-auto-flow: row;
  grid-template-areas:
    "poster plot"
    "poster tags";
}

.poster {
  grid-area: poster;
  width: 100%;
}

.plot {
  grid-area: plot;
  padding: 32px 16px 0 16px;
}

.tags-info {
  grid-area: tags;
}

.tags-ul {
  display: table;
  list-style: none;
}

.tags-ul .detail-li {
  display: table-row;
  flex-wrap: wrap;
  margin: 10px 0;
}

.detail-li > div {
  display: table-cell;
}

.detail-li .tag, .buttons {
  padding: 4px 0;
  color: lightgrey;
}
</style>
