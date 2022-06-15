<template>
  <div class="wrapper-blk">
    <div class="poster">
<!--      <v-img :lazy-src="this.$store.state.moviePage.movieData.poster"-->
<!--             :src="this.$store.state.moviePage.movieData.poster"/>-->
      <v-img lazy-src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"
             src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"/>
    </div>
    <div class="plot">
      {{ this.$store.state.moviePage.movieData.description }}
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
        <div class="value" tabindex="0">{{ this.$store.state.moviePage.movieData.production_country }}</div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Rok produkcji</div>
        <div class="value" tabindex="0">{{ this.$store.state.moviePage.movieData.production_year }}</div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Czas trwania:</div>
        <div class="value" tabindex="0">
          {{ durationFormat(this.$store.state.moviePage.movieData.duration) }}
        </div>
      </li>
      <li class="buttons">
        <div class="tag tags--text">Odnośniki:</div>
        <v-row>
          <v-col v-for="(r, i) in downloadRefs" :key="r.id" cols="auto">
            <a
                v-if="r.type.charAt(0) == references[i].letter"
                :href="r.link"
                target="_blank"
            >
              <v-img
                  class="mt-3"
                  contain
                  position="left"
                  rounded
                  height="35px"
                  width="35px"
                  :src="references[i].img"
              >
                <template v-slot:placeholder>
                  <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                  >
                    <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </a>
          </v-col>
        </v-row>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component({})
export default class MovieOverview extends Vue {

  private durationFormat(duration: number) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration - hours * 60;
    return `${hours}h ${minutes}min`;
  }

  data() {
    return {
      downloadRefs: [
        {
          id: "1",
          type: "filmweb",
          link: "https://www.filmweb.pl/film/Fantastyczne+zwierz%C4%99ta%3A+Tajemnice+Dumbledore%27a-2022-731997",
        },
        {
          id: "2",
          type: "rotten",
          link: "https://www.rottentomatoes.com/m/top_gun_maverick",
        },
        {
          id: "3",
          type: "imdb",
          link: "https://www.imdb.com/title/tt1877830/",
        },
      ],
      references: [
        {
          letter: "f",
          img: require("@/assets/references/filmweb.png"),
        },
        {
          letter: "r",
          img: require("@/assets/references/rotten.png"),
        },
        {
          letter: "i",
          img: require("@/assets/references/imdb.png"),
        },
      ],
    };
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
