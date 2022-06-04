<template>
  <v-card>
    <v-form class="pa-4" ref="form">
      <h3>Wprowadź informacje o filmie</h3>
      <v-text-field
        v-for="(input, i) in formData"
        :key="i"
        v-model="input.value"
        :label="input.label"
        :type="input.type"
        color="dark"
        :rules="input.rules"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit"> Dodaj film </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class AddMovieForm extends Vue {
  data() {
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
          value: "",
          rules: [(v: string) => v.length <= 4 || "Niepoprawna wartość"],
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
          value: "",
          type: "date",
          rules: [],
        },
        {
          label: "Czas trwania (w minutach)",
          value: "",
          type: "number",
          rules: [
            (v: string) =>
              v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
        },
        {
          label: "Opis filmu",
          value: "",
          rules: [
            (v: string) =>
              v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
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
        {
          label: "Link do IMDb",
          value: "",
          rules: [
            (v: string) =>
              v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
        },
        {
          label: "Link do Rotten Tomatoes",
          value: "",
          rules: [
            (v: string) =>
              v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
        },
        {
          label: "Link do Filmweba",
          value: "",
          rules: [
            (v: string) =>
              v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
        },
      ],
    };
  }

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      console.log("submit");
    }
  }
}
</script>
