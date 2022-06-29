<template>
  <v-card>
    <v-form class="pa-4" ref="form" lazy-validation>
      <h3>Zmiana hasła</h3>
      <v-text-field
        @input="resetRules"
        v-model="currentPassword"
        label="Obecne hasło"
        color="dark"
        required
        type="password"
        :rules="passwordRules"
      ></v-text-field>
      <v-text-field
        @input="resetRules"
        v-model="newPassword"
        label="Nowe hasło"
        color="dark"
        required
        type="password"
        :rules="passwordRules"
      ></v-text-field>
      <v-text-field
        @input="resetRules"
        v-model="confirmedPassword"
        label="Powtórz hasło"
        color="dark"
        required
        type="password"
        :rules="confirmedPasswordRules"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit"> Zapisz</v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ChangePasswordForm extends Vue {
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmedPassword: "",
      passwordRules: [],
      confirmedPasswordRules: [],
    };
  }

  resetRules(): void {
    this.$data.passwordRules = [];
    this.$data.confirmedPasswordRules = [];
  }

  submit(): void {
    this.$data.passwordRules = [
      (v: string) => !!v || "Wprowadź hasło",
      (v: string) => v.length >= 8 || "Hasło musi mieć przynajmniej 8 znaków",
      (v: string) =>
        v.length <= 32 || "Podane hasło musi mieć mniej niż 32 znaki",
    ];
    this.$data.confirmedPasswordRules = [
      (v: string) => v === this.$data.newPassword || "Podane hasła różnią się",
    ];

    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.$store.dispatch("password_change", {
        old_password: this.$data.currentPassword,
        password: this.$data.newPassword,
        password2: this.$data.confirmedPassword,
      });
    }
  }
}
</script>
