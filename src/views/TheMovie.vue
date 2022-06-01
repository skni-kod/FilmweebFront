<template>
  <v-container style="min-height: 1000px">
    <v-row class="header-blk">
      <v-col class="header-blk__wrapper">
        <movie-cover
            class="movie-cover"
            :movieData="movieData"
        />
        <movie-overview
            :movieData="movieData"
            class="movie-overview"/>
      </v-col>
    </v-row>
    <v-row class="main-blk">
      <v-col class="movie-info" cols="8">
        <movie-crew class="movie-crew"/>
        <movie-reviews class="movie-reviews"/>
        <movie-comments class="movie-comments"/>
        <div style="min-height: 500px;"></div>
      </v-col>
      <v-col class="movie-sidebar" cols="4">
        <movie-sidetool class="movie-sidetool"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import MovieCover from "@/components/movie/MovieCover.vue";
import MovieOverview from "@/components/movie/MovieOverview.vue";
import MovieCrew from "@/components/movie/MovieCrew.vue";
import MovieReviews from "@/components/movie/MovieReviews.vue";
import MovieComments from "@/components/movie/MovieComments.vue";
import MovieSidetool from "@/components/movie/MovieSidetool.vue";

@Component({
  components: {
    MovieCover,
    MovieOverview,
    MovieCrew,
    MovieReviews,
    MovieComments,
    MovieSidetool,
  },
})
export default class TheMovie extends Vue {
  public movieData: object = {
    id_filmu: 1 as Number,
    typ: 'film' as String,
    tytul: "Lorem Ipsum: Dolor sit amet" as String,
    oryginalny_tytul: "Lorem Ipsum: Dolor sit amet" as String,
    kraj_produkcji: 'Country' as String,
    rok_produkcji: 2022 as Number,
    premiera: 'XX-XX-XXXX' as String,
    czas_trwania: 1297 as Number,
    opis_filmu: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.' as String,
  };
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 32px;
}
.movie-cover, .movie-overview {
  display: grid;
  margin-bottom: 16px;
}

.main-blk .movie-info > div {
  margin-top: 32px;
  margin-bottom: 16px;
}
</style>
<style lang="scss">
.container {
  @media (min-width: 1264px) {
    max-width: 1264px;
  }
}

.general-section-title {
  width: 100%;
  padding: 16px;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 27px;
  }
}

.general-section-title:before {
  content: "";
  display: inline-block;
  height: 40px;
  width: 4px;
  position: absolute;
  margin-left: -.8rem;
  background: #fff;
  align-self: flex-start;
}

</style>