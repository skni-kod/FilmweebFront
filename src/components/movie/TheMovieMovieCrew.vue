<template>
  <div class="wrapper-blk">
    <h3 class="general-section-title">Obsada filmu</h3>
    <v-sheet class="movie-crew__crew-slider">
      <v-slide-group class="crew-slider__slider-box" show-arrows>
        <v-slide-item class="slider-box__person-box" v-for="n in 12" :key="n" v-slot="{ active, toggle }">
          <v-card class="person_box__person-item" tabindex="0" @click="toggle">
            <v-row class="person-item__single-card" no-gutters>
              <div class="single-card__img" :style="{'background-image': `url(${actorImagePath})`}"></div>
              <div class="single-card__name">Imie Nazwisko</div>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  props: {
    actorImagePath: {
      type: String,
      default: ""
    }
  },
})
export default class MovieCrew extends Vue {
}
</script>

<style lang="scss" scoped>
.movie-crew__crew-slider {
  width: 100%;
}

.person_box__person-item {
  width: 180px;
  margin: 2.5px 17px 5px 17px;
  padding-bottom: 30px;
}

.person-item__single-card {
  width: 100%;
  justify-content: center;
}

.single-card__img {
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 256px;
  transition: 1s background-size;
}

.person_box__person-item:hover .single-card__img {
  background-size: 115%;
}

.single-card__name {
  width: 100%;
}

.single-card__name {
  margin-top: 16px;
  text-align: center;
}
</style>