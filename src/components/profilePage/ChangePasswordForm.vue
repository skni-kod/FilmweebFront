<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ChangePasswordForm extends Vue {
  password: string = "";
  confirmedPassword: string = "";
  passwordRules: Array<any> = [];
  confirmedPasswordRules: Array<any> = [];

  resetRules() {
    this.passwordRules = [];
    this.confirmedPasswordRules = [];
  }

  submit(): void {
    this.passwordRules = [
      (v: string) => !!v || "Wprowadź hasło",
      (v: string) => v.length >= 4 || "Hasło musi mieć przynajmniej 4 znaki",
      (v: string) =>
        v.length <= 32 || "Podane hasło musi mieć mniej niż 32 znaki",
    ];

    this.confirmedPasswordRules = [
      (v: string) => v === this.password || "Podane hasła różnią się",
    ];

    this.$nextTick(() => {
      if (this.$refs.form.validate()) {
        console.log("password form submit");
      }
    });
  }
}
</script>

<template>
  <v-card>
    <v-form class="form" ref="form" lazy-validation>
      <h3>Zmiana hasła</h3>
      <v-text-field
        @input="resetRules"
        v-model="password"
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
      <v-btn type="submit" @click.prevent="submit"> Zapisz </v-btn>
    </v-form>
  </v-card>
</template>

<style scoped>
.form {
  padding: 15px;
}
</style>
