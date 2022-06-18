<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  private data() {
    return {
      sortResults: [
        "Nazwa, rosnąco",
        "Nazwa, malejąco",
        "Rok premiery, rosnąco",
        "Rok premiery, malejąco",
      ],
      valueSlider: [0, 180],
      filtering: false,
      genre: null,
      country: null,
      releaseDate: null,
      rating: null,
    };
  }
  asd() {
    console.log(
      this.$data.genre,
      this.$data.country,
      this.$data.releaseDate,
      this.$data.rating,
      this.$data.valueSlider[0],
      this.$data.valueSlider[1]
    );
  }
}
</script>

<template>
  <v-container>
    <v-row class="px-3">
      <v-text-field
        background-color="grey darken-4"
        color="grey lighten-1"
        class="pt-5 mt-5"
        clearable
        label="Szukaj filmów, seriali, postaci"
        solo
      >
      </v-text-field>
    </v-row>
    <v-row class="mt-n7">
      <v-col cols="12" md="6" lg="6">
        <v-btn
          rounded
          block
          dense
          class="px-3"
          color="secondary"
          @click="filtering = !filtering"
        >
          Filtrowanie i sortowanie
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <v-btn
          block
          dense
          rounded
          class="px-3"
          color="secondary"
          @click="asd()"
        >
          Szukaj
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="filtering == 1">
      <v-container>
        <v-sheet class="pa-7 grey darken-3 rounded" dense>
          <v-row :column="$vuetify.breakpoint.mdAndDown">
            <v-col cols="12" lg="4" class="white--text">
              Gatunek
              <v-text-field
                color="black"
                solo
                flat
                v-model.lazy="genre"
                label="Wpisz gatunek produkcji"
                clearable
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="4" class="white--text">
              Kraj
              <v-text-field
                color="black"
                solo
                flat
                v-model.lazy="country"
                label="Wpisz kraj wydania produkcji"
                clearable
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" lg="4" class="white--text">
              Premiera
              <v-text-field
                color="black"
                solo
                flat
                v-model.lazy="releaseDate"
                type="number"
                label="Wpisz rok wydania tytułu"
                clearable
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row :column="$vuetify.breakpoint.mdAndDown" class="mt-n5">
            <v-col class="white--text" cols="12" md="6" lg="4">
              Min. ilość gwiazdek
              <v-rating
                v-model.lazy="rating"
                background-color="white"
                color="blue darken-4"
                x-large
                clearable
                hover
              >
              </v-rating>
            </v-col>
            <v-col class="white--text" cols="12" md="6" lg="4">
              Długość trwania
              <v-range-slider
                class="mt-3"
                v-model.lazy="valueSlider"
                text-color="black"
                min="0"
                max="180"
                color="secondary"
                :thumb-label="true"
                :thumb-size="24"
                thumb-color="secondary"
              ></v-range-slider>
            </v-col>
            <v-col class="white--text" cols="12" md="12" lg="4">
              Sortowanie
              <v-select
                class="mt-2"
                :items="sortResults"
                label="Wybierz sortowanie"
                color="black"
                item-color="black"
                solo
                dense
                flat
              >
              </v-select>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-row>
  </v-container>
</template>
