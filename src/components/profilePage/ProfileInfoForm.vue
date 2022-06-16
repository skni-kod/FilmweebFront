<template>
  <v-card>
    <v-form class="pa-4" ref="form">
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
  mounted() {
    this.$data.formData[0].value = this.profileData.first_name;
    this.$data.formData[1].value = this.profileData.last_name;
    this.$data.formData[2].value = this.profileData.nick;
    this.$data.formData[3].value = this.userData.email;
    this.$data.formData[4].value = this.profileData.avatar;
  }

  get profileData() {
    return this.$store.getters.profileData;
  }
  get userData() {
    return this.$store.getters.userData;
  }

  data() {
    return {
      formData: [
        {
          label: "Imię",
          value: "",
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
          value: "",
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
          value: "",
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
          value: "",
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
