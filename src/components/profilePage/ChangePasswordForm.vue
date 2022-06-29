<template>
  <v-card>
    <v-form class="pa-4" ref="form" lazy-validation>
      <h3>Zmiana hasła</h3>
      <v-text-field
        v-for="(input, i) in formData"
        :key="i"
        :label="input.label"
        v-model="input.value"
        required
        :rules="input.rules"
        :type="input.type"
      />
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
      formData: [
        {
          label: "Obecne hasło",
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
          label: "Nowe hasło",
          value: "",
          rules: [
            (v: string) => !!v || "Wprowadź hasło",
            (v: string) =>
              v.length >= 8 || "Hasło musi mieć przynajmniej 8 znaków",
            (v: string) =>
              v.length <= 32 || "Podane hasło musi mieć mniej niż 32 znaki",
          ],
          type: "password",
        },
        {
          label: "Powtórz Hasło",
          value: "",
          rules: [
            (v: string) =>
              v === this.$data.formData[1].value || "Podane hasła różnią się",
          ],
          type: "password",
        },
      ],
    };
  }

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.$store.dispatch("password_change", {
        old_password: this.$data.formData[0].value,
        password: this.$data.formData[1].value,
        password2: this.$data.formData[2].value,
      });
    }
  }
}
</script>
