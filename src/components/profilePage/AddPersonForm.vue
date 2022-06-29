<template>
  <v-card>
    <v-form class="pa-4" ref="form">
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
      <v-btn type="submit" @click.prevent="submit"> Dodaj osobę</v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import {Component} from "vue-property-decorator";

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
          value: null,
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

  async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      await axios
          .post(
              `/api/people/`,
              {
                first_name: this.$data.formData[0].value,
                last_name: this.$data.formData[1].value,
                bio: this.$data.formData[2].value,
                birth_date: this.$data.formData[3].value,
                birth_place: this.$data.formData[4].value,
              },
              {
                headers: {
                  Authorization: "Bearer " + this.$store.getters.token,
                },
              }
          )
          .then((response) => {
            alert(`Dodano nową osobę: ${this.$data.formData[0].value} ${this.$data.formData[1].value}`);
            this.$data.formData.forEach((obj: any) => {
              obj.value = null;
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
