<template>
  <div class="wrapper-blk">
    <div class="poster">
      <v-img lazy-src="../../assets/logo.svg" src="../../assets/logo.svg" />
    </div>
    <div class="plot">
      Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id
      sem lacinia egestas. Phasellus egestas facilisis diam non tristique.
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
        <div class="value" tabindex="0">
          {{ durationFormat(movieData.czas_trwania) }}
        </div>
      </li>
      <li class="buttons">
        <div class="tag tags--text">Odnośniki:</div>
        <v-row>
          <v-col v-for="(reference, i) in references" :key="i" cols="auto">
            <a :href="`${reference.link}`" target="_blank">
              <v-img
                v-if="reference.type.charAt(0) === 'f'"
                class="mt-3"
                contain
                position="left"
                rounded
                height="35px"
                width="35px"
                :src="`https://i.imgur.com/xWvDSIF.png`"
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

              <v-img
                v-if="reference.type.charAt(0) === 'r'"
                class="mt-3"
                contain
                position="left"
                rounded
                height="35px"
                width="35px"
                :src="`https://i.imgur.com/N4S2F5y.png`"
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

              <v-img
                v-if="reference.type.charAt(0) === 'i'"
                class="mt-3"
                contain
                position="left"
                rounded
                height="35px"
                width="35px"
                :src="`https://i.imgur.com/CiCn2Vl.png`"
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
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class MovieOverview extends Vue {
  @Prop({ required: true }) movieData: any;

  private durationFormat(duration: number) {
    let hours = Math.trunc(duration / 60);
    let minutes = duration - hours * 60;
    return `${hours}h ${minutes}min`;
  }

  data() {
    return {
      references: [
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
    };
  }
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

a {
  display: block;
  width: 35px;
}
</style>
