<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import axios from "axios";
import PersonItem from "./PersonItem.vue";

@Component({
  components: {
    PersonItem,
  },
})
export default class Search extends Vue {
  private data() {
    return {
      sortResults: ["Nazwisko, rosnąco", "Nazwisko, malejąco"],
      filtering: false,
      sortSelection: null,
      first_name: null,
      last_name: null,
      actors: [],
      showNoResults: false,
    };
  }

  async submit() {
    if (!(this.$refs.form as Vue & { validate: () => boolean }).validate()) {

      let request = "/api/search/person/?";
      if (this.$data.first_name) {
        request += "&first_name=" + this.$data.first_name;
      }
      if (this.$data.last_name) {
        request += "&last_name=" + this.$data.last_name;
      }
      await axios
          .get(request)
          .then((response) => {
            this.$data.actors = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      this.sortActors();
      if (this.$data.actors.length === 0) {
        this.$data.showNoResults = true;
      } else {
        this.$data.showNoResults = false;
      }
    }
  }

  sortActors() {
    if (this.$data.sortSelection === this.$data.sortResults[0]) {
      this.$data.actors.sort((a: any, b: any) =>
          a.last_name > b.last_name ? 1 : b.last_name > a.last_name ? -1 : 0
      );
    } else if (this.$data.sortSelection === this.$data.sortResults[1]) {
      this.$data.actors.sort((a: any, b: any) =>
          a.last_name > b.last_name ? -1 : b.last_name > a.last_name ? 1 : 0
      );
    }
  }
}
</script>

<template>
  <v-form ref="form" v-on:submit.prevent="submit()">
    <v-container>
      <v-row class="px-3">
        <v-col cols="12" lg="6" class="white--text">
          Imię
          <v-text-field
              color="black"
              solo
              flat
              v-model.lazy="first_name"
              label="Podaj imię aktora"
              clearable
              v-on:keyup.enter="submit()"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" lg="4" class="white--text">
          Nazwisko
          <v-text-field
              color="black"
              solo
              flat
              v-model.lazy="last_name"
              label="Podaj nazwisko aktora"
              clearable
              v-on:keyup.enter="submit()"
          >
          </v-text-field>
        </v-col>
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
            Sortowanie
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
                    @change="sortActors"
                >
                </v-select>
              </v-col>
            </v-row>
          </v-sheet>
        </v-container>
      </v-row>

      <v-row class="ma-2 mx-5">
        <v-col
            v-for="actor in actors"
            :key="actor.id"
            class="flex-column"
            cols="12"
            sm="6"
            md="3"
            lg="3"
        >
          <PersonItem :actor="actor"></PersonItem>
        </v-col>
      </v-row>
      <v-card v-if="showNoResults">
        <div class="text-center text-h6 pa-1">
          Brak aktorów spełniających dane kryteria
        </div>
      </v-card>
    </v-container>
  </v-form>
</template>
