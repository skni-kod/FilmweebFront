<template>
  <div>
    <div class="header-blk">
      <v-container>
        <v-row cols="12" no-gutters>
          <v-col class="movie-cover" cols="12">
            <cover-image
                class="movie-cover__cover-image"
                :coverImagePath="coverImagePath"
            />
            <cover-info
                class="movie-cover__cover-info"
                :movieData="movieData"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="main-blk">
      <v-container>
        <v-row cols="12" no-gutters>
          <v-col class="movie-content" cols="8">
            <movie-overview
                class="movie-content__movie-overview"
                :movieData="movieData"
            />
          </v-col>
          <v-col class="movie-sidebar" cols="4">
            <movie-sidetool class="movie-sidebar__movie-sidetool"/>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="movie-content">
            <movie-crew class="movie-content__movie-crew"/>
          </v-col>
        </v-row>
        <v-row cols="12" no-gutters style="min-height: 200px;"></v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import CoverImage from "@/components/movie/TheMovieCoverImage.vue";
import CoverInfo from "@/components/movie/TheMovieCoverInfo.vue";
import MovieOverview from "@/components/movie/TheMovieMovieOverview.vue";
import MovieCrew from "@/components/movie/TheMovieMovieCrew.vue";
import MovieSidetool from "@/components/movie/TheMovieMovieSidetool.vue";

@Component({
  components: {
    CoverImage,
    CoverInfo,
    MovieOverview,
    MovieCrew,
    MovieSidetool,
  },
  data() {
    return {
      coverImagePath: "" as String,
      movieData: {
        id: 1 as Number,
        title: "Lorem Ipsum: Dolor sit amet" as String,
        type: 'film' as String,
        productYear: 2022 as Number,
        productCountry: 'Country',
        premiere: 'XX-XX-XXXX' as String,
        duration: 1297 as Number,
        description: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.' as String,
      } as Object,
    };
  }
})
export default class TheMovie extends Vue {
}
</script>

<style lang="scss" scoped>
.header-blk {
  width: 100%;
  background: #000;
}

.header-blk .container {
  padding: 0;
}

.movie-cover {
  min-height: 450px;
  position: relative;
  background-color: gray;

  @media (max-width: 1264px) {
    min-height: 360px;
  }

  @media (max-width: 960px) {
    min-height: 320px;
  }

  @media (max-width: 600px) {
    min-height: 50vw;
  }
}

.movie-cover__cover-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.movie-cover__cover-info {
  width: 85%;
  margin: 0 auto;
  bottom: 15px;
  position: absolute;
  left: 0;
  right: 0;

  @media (max-width: 600px) {
    bottom: 10px;
  }
}

.main-blk .container {
  padding: 0 6px 12px 6px;
}

.main-blk .row {
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    justify-content: center;
  }
}

.movie-content {
  padding: 0 16px;

  @media (max-width: 600px) {
    flex: 0 0 85% !important;
    max-width: 85% !important;
  }
}

.movie-content > div {
  padding: 32px 16px;
}

.movie-sidebar__movie-sidetool {
  margin: 32px 16px 16px 16px;
  padding: 16px;
}

.movie-sidebar {
  @media (max-width: 960px) {
    display: none;
  }
}
</style>
<style lang="scss">
.container {
  @media (min-width: 1904px) {
    max-width: 1185px;
  }
}

.general-section-title {
  padding: 24px;
  font-size: 32px;
  font-weight: 600;

  @media (max-width: 600px){
    font-size: 27px;
  }
}

.general-section-title > span {
  display: inline-block;
  width: 4px;
  height: 32px;
  margin: 0 8px -5px 0;
  background: #0d0d0d; //#f7f7f7;
}
</style>