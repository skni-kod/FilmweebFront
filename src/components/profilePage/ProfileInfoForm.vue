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
        :type="input.type"
        :autocomplete="input.autocomplete"
      ></v-text-field>
      <v-btn type="submit" @click.prevent="submit"> Zapisz</v-btn>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import axios from "axios";

@Component
export default class ProfileInfoForm extends Vue {
  mounted() {
    this.$data.formData[0].value = this.profileData.first_name;
    this.$data.formData[1].value = this.profileData.last_name;
    this.$data.formData[2].value = this.profileData.nick;
    this.$data.formData[3].value = this.userData.birth_date;
    this.$data.formData[4].value = this.userData.email;
    this.$data.formData[5].value = this.profileData.avatar;
  }

  private data() {
    return {
      formData: [
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
          label: "Nazwa użytkowika",
          value: "",
          rules: [
            (v: string) => !!v || "Nazwa użytkowika jest wymagana",
            (v: string) =>
              v.length >= 3 ||
              "Nazwa użytkowika powinna mieć przynajmniej 3 znaki",
            (v: string) =>
              v.length <= 32 ||
              "Nazwa użytkowika nie może mieć więcej niż 32 znaki",
          ],
        },
        {
          label: "Data urodzenia",
          value: null,
          type: "date",
          rules: [(v: string) => !!v || "Data urodzenia jest wymagana"],
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
        {
          label: "Wprowadź hasło",
          value: "",
          type: "password",
          rules: [
            (v: string) =>
              v.length >= 8 || "Hasło musi mieć przynajmniej 8 znaków",
            (v: string) =>
              v.length <= 32 || "Hasło nie może mieć więcej jak 32 znaki",
          ],
          autocomplete: "new-password",
        },
      ],
    };
  }

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      let abort = false;
      let formDataValue: object = {
        email: this.$data.formData.at(4).value,
        birth_date: this.$data.formData.at(3).value,
        password: this.$data.formData.at(6).value,
      };

      let config: object = {
        headers: { Authorization: "Bearer " + this.$store.getters.token },
      };

      await axios
        .put(
          `/api/user_change/${this.$store.getters.userId}/`,
          formDataValue,
          config
        )
        .catch((error) => {
          if (error.response.status == 400) {
            alert("Podane hasło jest nieprawidłowe.");
          }
          abort = true;
        });

      if (abort) return;

      formDataValue = {
        nick: this.$data.formData.at(2).value,
        first_name: this.$data.formData.at(0).value,
        last_name: this.$data.formData.at(1).value,
        avatar: this.$data.formData.at(5).value,
        user: this.$store.getters.userId,
      };

      await axios
        .put(`/api/profiles/${this.profileData.id}/`, formDataValue, config)
        .then((res) => {
          if (res.status == 200)
            alert("Dane osobowe zostany zmienione pomyślnie");
        })
        .catch((error) => {
          console.table(error);
        });

      this.$data.formData[6].value = "";
      this.$store.dispatch("getUserData");
      this.$forceUpdate();
    }
  }

  private get profileData() {
    return this.$store.getters.profileData;
  }

  private get userData() {
    return this.$store.getters.userData;
  }
}
</script>
