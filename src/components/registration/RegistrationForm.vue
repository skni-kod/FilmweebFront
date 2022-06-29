<template>
  <v-card class="elevation-12 roundend-xl">
    <v-form ref="form">
      <v-toolbar color="secondary">
        <v-toolbar-title>Rejestracja</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          v-for="(input, i) in formData"
          :type="input.type"
          :key="i"
          :label="input.label"
          v-model="input.value"
          required
          :rules="input.rules"
          :autocomplete="input.autocomplete"
        >
        </v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="secondary roundend-xl mr-2 mb-2" @click.prevent="submit"
          >Zarejestruj się
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class RegistrationForm extends Vue {
  data() {
    return {
      formData: [
        {
          label: "Adres e-mail",
          value: "",
          rules: [
            (v: string) => !!v || "Adres e-mail jest wymagany",
            (v: string) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) ||
              "Nieprawidłowy adres e-mail",
          ],
        },
        {
          label: "Nazwa użytkowika",
          value: "",
          rules: [
            (v: string) => !!v || "Nazwa użytkowika jest wymagana",
            (v: string) =>
              v.length >= 3 ||
              "Nazwa użytkownika powinna mieć przynajmniej 3 znaki",
            (v: string) =>
              v.length <= 32 ||
              "Nazwa użytkowika nie może mieć więcej niż 32 znaki",
          ],
        },
        {
          label: "Imię",
          value: "",
          minLength: 3,
          maxLength: 32,
          rules: [],
        },
        {
          label: "Nazwisko",
          value: "",
          rules: [],
        },
        {
          label: "Hasło",
          value: "",
          rules: [
            (v: string) => !!v || "Wprowadź hasło",
            (v: string) =>
              v.length >= 8 || "Hasło musi mieć przynajmniej 8 znaków",
            (v: string) =>
              v.length <= 32 || "Podane hasło musi mieć mniej niż 32 znaki",
          ],
          type: "password",
          autocomplete: "new-password",
        },
        {
          label: "Powtórz hasło",
          value: "",
          rules: [
            (v: string) =>
              v === this.$data.formData[4].value || "Podane hasła różnią się",
          ],
          type: "password",
        },
        {
          label: "Data urodzenia",
          value: null,
          type: "date",
          rules: [(v: string) => !!v || "Data urodzenia jest wymagana"],
        },
        {
          label: "Link do avatara",
          value: "",
          rules: [],
        },
      ],
    };
  }

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.$store.dispatch("registration", {
        email: this.$data.formData.at(0).value,
        nick: this.$data.formData.at(1).value,
        first_name: this.$data.formData.at(2).value,
        last_name: this.$data.formData.at(3).value,
        password1: this.$data.formData.at(4).value,
        password2: this.$data.formData.at(5).value,
        birth_date: this.$data.formData.at(6).value,
        avatar: this.$data.formData.at(7).value,
      });
    }
  }
}
</script>
