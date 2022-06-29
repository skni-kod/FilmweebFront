<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import RegistrationForm from "@/components/registration/RegistrationForm.vue";
import PasswordRetrieveForm from "@/components/registration/PasswordRetrieveForm.vue";

@Component({
  components: {
    RegistrationForm,
    PasswordRetrieveForm,
  },
})
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
          label: "Hasło",
          value: "",
          type: "password",
          rules: [
            (v: string) =>
              v.length >= 8 || "Hasło musi mieć przynajmniej 8 znaków",
            (v: string) =>
              v.length <= 200 || "Hasło nie może mieć więcej jak 32 znaki",
          ],
        },
      ],
      showLogin: true,
      showRegistration: false,
      showRetrievePassword: false,
    };
  }
  private sshowLogin() {
    this.$data.showLogin = true;
    this.$data.showRegistration = false;
    this.$data.showRetrievePassword = false;
  }

  private sshowRegistration() {
    this.$data.showLogin = false;
    this.$data.showRegistration = true;
    this.$data.showRetrievePassword = false;
  }

  private showRetrieve() {
    this.$data.showLogin = false;
    this.$data.showRegistration = false;
    this.$data.showRetrievePassword = true;
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
    <v-row class="mt-n7-px-3">
      <v-col cols="12" md="6" lg="6">
        <v-btn
          rounded
          block
          dense
          class="px-3"
          color="secondary"
          @click="sshowLogin()"
        >
          Logowanie
        </v-btn>
      </v-col>
      <v-col cols="12" md="6" lg="6">
        <v-btn
          block
          dense
          rounded
          class="px-3"
          color="secondary"
          @click="sshowRegistration()"
        >
          Rejestracja
        </v-btn>
      </v-col>
    </v-row>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 xl3>
        <v-card class="elevation-12 roundend-xl" v-if="showLogin">
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
              <v-btn
                class="secondary roundend-xl mr-2 mb-2"
                @click="showRetrieve()"
                >Odzyskiwanie hasła
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                @click.prevent="submit"
                class="secondary roundend-xl mr-2 mb-2"
                >Zaloguj
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
        <RegistrationForm v-if="showRegistration"></RegistrationForm>
        <PasswordRetrieveForm
          v-if="showRetrievePassword"
        ></PasswordRetrieveForm>
      </v-flex>
    </v-layout>
  </v-container>
</template>
