<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  data() {
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
}
</script>

<template>
  <v-container>
    <v-row class="px-3">
      <v-text-field
        color="black"
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
          block
          dense
          class="px-3"
          color="yellow"
          @click="filtering = !filtering"
        >
          Filtrowanie i sortowanie
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <v-btn block dense class="px-3" color="yellow"> Szukaj </v-btn>
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
                v-model="genre"
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
                v-model="country"
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
                v-model="releaseDate"
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
                v-model="rating"
                background-color="white"
                color="white"
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
                v-model="valueSlider"
                text-color="black"
                min="0"
                max="180"
                color="yellow"
                :thumb-label="true"
                :thumb-size="24"
                :thumb-color="'grey darken-1'"
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
