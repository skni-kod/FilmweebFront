<template>
  <div class="m-s-f-wrapper">
    <div class="accent sidetool-form">
      <div class="sidetool-form-close">
        <button @click="emitParent(0)">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="sidetool-form-head">
        <v-icon>mdi-playlist-plus</v-icon>
        <span>Edytuj</span>
      </div>
      <div class="sidetool-form-cnt">
        <v-card>
          <v-form class="pa-4 form-cnt" ref="form">
            <v-text-field
                v-for="(input, i) in formData"
                :key="i"
                v-model="input.value"
                :label="input.label"
                :type="input.type"
                color="dark"
                :rules="input.rules"
            ></v-text-field>
            <v-btn type="submit" @click.prevent="submit"> Zapisz</v-btn>
          </v-form>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class SidetoolAddToList extends Vue {

  mounted() {
    let movieData = this.$store.getters.moviePage.movieData;
    this.$data.formData[0].value = movieData.original_title;
    this.$data.formData[1].value = movieData.title;
    this.$data.formData[2].value = movieData.production_year;
    this.$data.formData[3].value = movieData.production_country;
    this.$data.formData[4].value = movieData.airing_date;
    this.$data.formData[5].value = movieData.duration;
    this.$data.formData[6].value = movieData.description;
    this.$data.formData[7].value = movieData.poster;
  }

  private data() {
    return {
      formData: [
        {
          label: "Oryginalny tytuł",
          value: "",
          rules: [
            (v: string) => !!v || "Pole wymagane",
            (v: string) =>
                v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
          ],
        },
        {
          label: "Tytuł",
          value: "",
          rules: [
            (v: string) =>
                v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
          ],
        },
        {
          label: "Rok produkcji",
          value: null,
          type: "number",
          rules: [
            (v: string) =>
                v === "" ||
                v === null ||
                (parseInt(v) > 1900 && parseInt(v) < 2100) ||
                "Nieprawidłowy rok",
          ],
        },
        {
          label: "Kraj produkcji",
          value: "",
          rules: [
            (v: string) =>
                v.length <= 50 || "Tekst nie może przekraczać 50 znaków",
          ],
        },
        {
          label: "Data premiery",
          value: null,
          type: "date",
          rules: [],
        },
        {
          label: "Czas trwania (w minutach)",
          value: null,
          type: "number",
          rules: [
            (v: number) => (v >= 0 && v <= 1000) || "Niepoprawna wartość",
          ],
        },
        {
          label: "Opis filmu",
          value: "",
          rules: [
            /*(v: string) =>
                v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",*/
          ],
        },
        {
          label: "Link do plakatu",
          value: "",
          rules: [
            (v: string) =>
                v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
        },
      ],
    };
  }

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    let formDataValue: object = {
      id: this.$store.getters.actorPage.actorID,
      original_title: this.$data.formData[0].value,
      title: this.$data.formData[1].value,
      production_year: this.$data.formData[2].value,
      production_country: this.$data.formData[3].value,
      airing_date: this.$data.formData[4].value,
      duration: this.$data.formData[5].value,
      description: this.$data.formData[6].value,
      poster: this.$data.formData[7].value,
      user: this.$store.getters.userId,
    };

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    await axios.put(`/api/movies/${this.$store.getters.moviePage.movieID}/`, formDataValue, config)
        .catch((error) => {
          console.log(error);
        });

    this.emitParent(1);
  }

  private emitParent(state: number) {
    this.$emit('visibility', 0, state);
  }
}
</script>

<style lang="scss" scoped>
</style>
