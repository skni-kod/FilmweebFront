<template>
  <div class="header">
    <v-container>
      <v-row no-gutters>
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
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import CoverImage from "@/components/movie/TheMovieCoverImage.vue";
import CoverInfo from "@/components/movie/TheMovieCoverInfo.vue";

@Component({
  components: {
    CoverImage,
    CoverInfo,
  },
  data() {
    return {
      coverImagePath: '' as String,
      movieData: {
        id: 1 as Number,
        title: "Lorem Ipsum: Dolor sit amet" as String,
        type: 'film' as String,
        productYear: 2022 as Number,
        productCountry: 'Country',
        premiere: 'XX-XX-XXXX' as String,
        duration: 1297 as Number,
        description: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Cras semper augue vel neque sollicitudin, vel venenatis arcu euismod. Nam id sapien velit. Quisque posuere fringilla erat, sed hendrerit mauris. Fusce sed aliquam erat, id pretium turpis' as String,
      } as Object,
    };
  }
})
export default class TheMovie extends Vue {
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background: #000;
}

.container {
  padding: 0 12px;
}

.movie-cover {
  min-height: 450px;
  margin: 0 auto;
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

.movie-cover__cover-image, .movie-cover__cover-info {
  width: 100%;
  position: absolute;
}

.movie-cover__cover-image {
  width: inherit;
  height: 100%;
  top: 0;
}

.movie-cover__cover-info {
  width: 85%;
  margin: 0 auto;
  color: #fff;
  bottom: 15px;
  left: 0;
  right: 0;

  @media (max-width: 600px) {
    bottom: 10px;
  }
}
</style>