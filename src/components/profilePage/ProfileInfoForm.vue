<template>
  <v-card>
    <v-form class="form" ref="form">
      <h3>Dane użytkownika</h3>
      <v-text-field
        v-for="(input, i) in formData"
        :key="i"
        v-model="input.value"
        :label="input.label"
        color="dark"
        required
        :rules="input.rules"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit"> Zapisz </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ProfileInfoForm extends Vue {
  data() {
    return {
      formData: [
        {
          label: "Imię",
          value: "Jan",
          minLength: 3,
          maxLength: 32,
          rules: [
            (v: string) => !!v || "Imię jest wymagane",
            (v: string) =>
              v.length >= 3 || "Imię powinno mieć przynajmniej 3 znaki",
            (v: string) =>
              v.length <= 32 || "Imię nie może mieć więcej niż 32 znaki",
          ],
        },
        {
          label: "Nazwisko",
          value: "Kowalski",
          rules: [
            (v: string) => !!v || "Nazwisko jest wymagane",
            (v: string) =>
              v.length >= 3 || "Nazwisko powinno mieć przynajmniej 3 znaki",
            (v: string) =>
              v.length <= 32 || "Nazwisko nie może mieć więcej niż 32 znaki",
          ],
        },
        {
          label: "Nazwa użytkowika",
          value: "jankowalski123",
          rules: [
            (v: string) => !!v || "Nazwa użytkowika jest wymagane",
            (v: string) =>
              v.length >= 3 ||
              "Nazwa użytkowika powinna mieć przynajmniej 3 znaki",
            (v: string) =>
              v.length <= 32 ||
              "Nazwa użytkowika nie może mieć więcej niż 32 znaki",
          ],
        },
        {
          label: "Adres e-mail",
          value: "jankowalski@gmail.com",
          rules: [
            (v: string) => !!v || "Adres e-mail jest wymagany",
            (v: string) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) ||
              "Nieprawidłowy adres e-mail",
          ],
        },
        {
          label: "Link do awatara",
          value: "",
          rules: [],
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
