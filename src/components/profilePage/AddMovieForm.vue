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
      <v-btn type="submit" @click.prevent="submit"> Dodaj film</v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component
export default class AddMovieForm extends Vue {
  data() {
    return {
      generated_id: null,
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
            (v: string) =>
                v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
        },
        {
          label: "Link do plakatu",
          value: "",
          rules: [
            (v: string) => !!v || "Pole wymagane",
            (v: string) => v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
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

  async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      await axios
          .post(
              `/api/movies/`,
              {
                original_title: this.$data.formData[0].value,
                production_year: this.$data.formData[2].value,
                production_country: this.$data.formData[3].value,
                airing_date: this.$data.formData[4].value,
                duration: this.$data.formData[5].value,
                description: this.$data.formData[6].value,
                title: this.$data.formData[1].value,
                poster: this.$data.formData[7].value,
              },
              {
                headers: {
                  Authorization: "Bearer " + this.$store.getters.token,
                },
              }
          )
          .then((response) => {
            alert(`Dodano nowy film: ${this.$data.formData[1].value}`);
            this.$data.formData.forEach((obj: any) => {
              obj.value = '';
            });
          })
          .catch((error) => {
            alert('Bład przy dodawaniu filmu. Spróbuj ponownie');
            console.log(error);
          });
    }
  }
}
</script>