<template>
  <v-card>
    <v-form class="form" ref="form">
      <h3>Wprowadź informacje o osobie</h3>
      <v-text-field
        v-for="(input, i) in formData"
        :key="i"
        v-model="input.value"
        :label="input.label"
        :type="input.type"
        color="dark"
        :rules="input.rules"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit"> Dodaj osobę </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class AddPersonForm extends Vue {
  data() {
    return {
      formData: [
        {
          label: "Imię",
          value: "",
          rules: [
            (v: string) => !!v || "Pole wymagane",
            (v: string) =>
              v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
          ],
        },
        {
          label: "Nazwisko",
          value: "",
          rules: [
            (v: string) => !!v || "Pole wymagane",
            (v: string) =>
              v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
          ],
        },
        {
          label: "Życiorys",
          value: "",
          rules: [
            (v: string) =>
              v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
        },
        {
          label: "Data urodzenia",
          value: "",
          type: "date",
          rules: [],
        },
        {
          label: "Miejsce urodzenia",
          value: "",
          rules: [
            (v: string) =>
              v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
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

<style scoped>
.form {
  padding: 15px;
}
</style>
