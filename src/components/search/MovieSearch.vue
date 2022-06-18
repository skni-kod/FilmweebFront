<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import MovieItem from "@/components/search/MovieItem.vue";
import axios from "axios";

@Component({
  components: {
    MovieItem,
  },
})
export default class MovieSearch extends Vue {
  private data() {
    return {
      sortResults: [
        "Nazwa, rosnąco",
        "Nazwa, malejąco",
        "Czas trwania, rosnąco",
        "Czas trwania, malejąco",
        "Rok produkcji, rosnąco",
        "Rok produkcji, malejąco",
      ],
      dateRules: [
        (v: string) =>
          /^([1][9]\d\d|20[0-9][0-9])$/.test(v) || "Nieprawidłowy rok",
      ],
      search: null,
      valueSlider: 240,
      filtering: false,
      genre: null,
      country: null,
      releaseDate: null,
      rating: null,
      sortSelection: null,
      movies: [],
    };
  }
  async submit() {
    if (!(this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      return;
    }

    let request = "/api/search/movie/?";
    if (this.$data.search) {
      request += "&title=" + this.$data.search;
    }
    if (this.$data.country) {
      request += "&country=" + this.$data.country;
    }
    if (this.$data.valueSlider < 240 && this.$data.valueSlider > 0) {
      request += "&duration=" + this.$data.valueSlider.toString();
    }
    await axios
      .get(request)
      .then((response) => {
        this.$data.movies = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    this.sortMovies();
  }

  sortMovies() {
    if (this.$data.sortSelection === this.$data.sortResults[0]) {
      this.$data.movies.sort((a: any, b: any) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    } else if (this.$data.sortSelection === this.$data.sortResults[1]) {
      this.$data.movies.sort((a: any, b: any) =>
        a.title > b.title ? -1 : b.title > a.title ? 1 : 0
      );
    } else if (this.$data.sortSelection === this.$data.sortResults[2]) {
      this.$data.movies.sort((a: any, b: any) =>
        a.duration > b.duration ? 1 : b.duration > a.duration ? -1 : 0
      );
    } else if (this.$data.sortSelection === this.$data.sortResults[3]) {
      this.$data.movies.sort((a: any, b: any) =>
        a.duration > b.duration ? -1 : b.duration > a.duration ? 1 : 0
      );
    } else if (this.$data.sortSelection === this.$data.sortResults[4]) {
      this.$data.movies.sort((a: any, b: any) =>
        a.production_year > b.production_year
          ? 1
          : b.production_year > a.production_year
          ? -1
          : 0
      );
    } else if (this.$data.sortSelection === this.$data.sortResults[5]) {
      this.$data.movies.sort((a: any, b: any) =>
        a.production_year > b.production_year
          ? -1
          : b.production_year > a.production_year
          ? 1
          : 0
      );
    }
  }
}
</script>

<template>
  <v-form ref="form">
    <v-container>
      <v-row class="px-3">
        <v-text-field
          background-color="grey darken-4"
          color="grey lighten-1"
          class="pt-5 mt-5"
          clearable
          label="Szukaj filmów, seriali"
          solo
          v-model="search"
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
            @click="submit()"
          >
            Szukaj
          </v-btn>
        </v-col>
      </v-row>
      <v-row v-if="filtering">
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
                  :rules="dateRules"
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
                Minimalna długość trwania
                <v-slider
                  class="mt-3"
                  v-model.lazy="valueSlider"
                  text-color="black"
                  min="0"
                  max="240"
                  color="secondary"
                  :thumb-label="true"
                  :thumb-size="24"
                  thumb-color="secondary"
                ></v-slider>
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
                  v-model="sortSelection"
                  @change="sortMovies"
                >
                </v-select>
              </v-col>
            </v-row>
          </v-sheet>
        </v-container>
      </v-row>

      <v-row class="ma-2 mx-5">
        <v-col
          v-for="movie in movies"
          :key="movie.id"
          class="flex-column"
          cols="12"
          sm="6"
          md="3"
          lg="3"
        >
          <MovieItem :movie="movie"></MovieItem>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
