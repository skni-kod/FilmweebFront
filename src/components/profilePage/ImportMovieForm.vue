<template>
  <v-card>
    <v-form class="form" ref="form">
      <h3>Importuj informacje o filmie z zewnętrznego serwisu</h3>
      <v-text-field
        v-for="(input, i) in formData"
        :key="i"
        v-model="input.value"
        :label="input.label"
        color="dark"
        :rules="input.rules"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit"> Importuj film </v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ImportMovieForm extends Vue {
  data() {
    return {
      formData: [
        {
          label: "Link do zewnętrznego serwisu",
          value: "",
          rules: [
            (v: string) => !!v || "Pole wymagane",
            (v: string) =>
              v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",
          ],
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
