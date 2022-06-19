<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Search extends Vue {
  private data() {
    return {
      sortResults: [
        "Imię i nazwisko, rosnąco",
        "Imię i nazwisko, malejąco",
        "Data urodzenia, rosnąco",
        "Data urodzenia, malejąco",
      ],
      dateRules: [
        (v: string) =>
          v === "" ||
          v === null ||
          (parseInt(v) > 1900 && parseInt(v) < 2100) ||
          "Nieprawidłowy rok",
      ],
      search: null,
      filtering: false,
      birthDate: null,
      country: null,
      rating: null,
    };
  }
  submit() {
    if (!(this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      return;
    }
  }
}
</script>

<template>
  <v-form ref="form" v-on:submit.prevent="submit()">
    <v-container>
      <v-row class="px-3">
        <v-text-field
          background-color="grey darken-4"
          color="grey lighten-1"
          class="pt-5 mt-5"
          clearable
          label="Szukaj aktorów"
          solo
          v-model="search"
          v-on:keyup.enter="submit()"
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
                Miejsce urodzenia
                <v-text-field
                  color="black"
                  solo
                  flat
                  v-model.lazy="country"
                  label="Wpisz kraj urodzenia"
                  clearable
                  v-on:keyup.enter="submit()"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" lg="4" class="white--text">
                Rok urodzenia
                <v-text-field
                  color="black"
                  solo
                  flat
                  v-model.lazy="birthDate"
                  label="Wpisz rok urodzenia"
                  clearable
                  type="number"
                  :rules="dateRules"
                  v-on:keyup.enter="submit()"
                >
                </v-text-field>
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
            </v-row>
          </v-sheet>
        </v-container>
      </v-row>
    </v-container>
  </v-form>
</template>
