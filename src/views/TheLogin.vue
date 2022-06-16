<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  private data() {
    return {
      formData: [
        {
          label: "Email",
          value: "",
          type: "email",
          rules: [
            (v: string) => !!v || "Adres e-mail jest wymagany",
            (v: string) =>
              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(v) ||
              "Nieprawidłowy adres e-mail",
          ],
        },
        {
          label: "Haslo",
          value: "",
          type: "password",
          rules: [
            (v: string) =>
              v.length >= 8 || "Hasło musi mieć przynajmniej 8 znaki",
            (v: string) =>
              v.length <= 32 || "Hasło nie może mieć więcej jak 32 znaki",
          ],
        },
      ],
    };
  }
  private submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.$store.dispatch("login", {
        email: this.$data.formData.at(0).value,
        password: this.$data.formData.at(1).value,
      });
    }
  }
}
</script>

<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 xl3>
        <v-card class="elevation-12 roundend-xl">
          <v-form ref="form">
            <v-toolbar color="secondary">
              <v-toolbar-title>Logowanie</v-toolbar-title>
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
              >
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click.prevent="submit"
                class="secondary roundend-xl mr-2 mb-2"
                >Zaloguj się</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
