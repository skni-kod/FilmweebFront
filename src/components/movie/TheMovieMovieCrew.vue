<template>
  <div class="wrapper-blk">
    <h3 class="general-section-title">Obsada filmu</h3>
    <v-sheet class="movie-crew__crew-slider accent">
      <v-slide-group class="crew-slider__slider-box" show-arrows>
        <v-slide-item class="slider-box__person-box" v-for="n in 18" :key="n" v-slot="{ toggle }">
          <v-card class="person_box__person-item accent" tabindex="0" @click="toggle">
            <v-row class="person-item__single-card" no-gutters>
              <div class="single-card__img"></div>
              <div class="single-card__name">Imie Nazwisko</div>
              <div class="single-card__role ">Rola</div>
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

@Component({})
export default class MovieCrew extends Vue {
}
</script>

<style lang="scss" scoped>
.movie-crew__crew-slider {
  width: 100%;
}

.slider-box__person-box {
  background-color: gray !important;
}

.person_box__person-item {
  width: 150px;
  margin: 2.5px 8px 5px 8px;
  padding-bottom: 16px;
}

.person-item__single-card {
  width: 100%;
  justify-content: center;
}

.single-card__img {
  background: no-repeat center / 100%;
  width: 100%;
  height: 170px;
  transition: 1s background-size;
}

.person_box__person-item:hover .single-card__img {
  background-size: 115%;
}

.single-card__name {
  width: 100%;
  margin-top: 16px;
  text-align: center;
}
</style>