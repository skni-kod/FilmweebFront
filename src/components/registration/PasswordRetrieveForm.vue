<template>
  <v-card class="elevation-12 roundend-xl">
    <v-form ref="form">
      <v-toolbar color="secondary">
        <v-toolbar-title>Odzyskiwanie hasła</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
          v-for="(input, i) in formData"
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
        <v-btn class="secondary roundend-xl mr-2 mb-2" @click.prevent="submit"
          >Odzyskaj hasło</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class PasswordRetrieveForm extends Vue {
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
      ],
    };
  }

  submit(): void {
    if (!(this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      return;
    }
    console.table(this.$data.formData);
  }
}
</script>
