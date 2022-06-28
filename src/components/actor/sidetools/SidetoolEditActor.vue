<template>
  <div class="a-s-f-wrapper">
    <div class="accent sidetool-form">
      <div class="sidetool-form-close">
        <button @click="emitParent(0)">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="sidetool-form-head">
        <v-icon>mdi-playlist-plus</v-icon>
        <span>Edytuj aktora</span>
      </div>
      <div class="sidetool-form-cnt">
        <v-card>
          <v-form class="pa-4" ref="form">
            <v-text-field
                v-for="(input, i) in formData"
                :key="i"
                v-model="input.value"
                :label="input.label"
                :type="input.type"
                color="dark"
                :rules="input.rules"
            ></v-text-field>
            <v-btn type="submit" class="edit-confirm" @click.prevent="submit"> Zapisz</v-btn>
          </v-form>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class SidetoolAddToList extends Vue {

  mounted() {
    let actorData = this.$store.getters.actorPage.actorData;
    this.$data.formData[0].value = actorData.first_name;
    this.$data.formData[1].value = actorData.last_name;
    this.$data.formData[2].value = actorData.bio;
    this.$data.formData[3].value = actorData.birth_date;
    this.$data.formData[4].value = actorData.birth_place;
  }

  private data() {
    return {
      formData: [
        {
          label: "Imię",
          value: "",
          rules: [
            (v: string) => !!v || "Pole wymagane",
            (v: string) =>
                v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
          ],
        },
        {
          label: "Nazwisko",
          value: "",
          rules: [
            (v: string) => !!v || "Pole wymagane",
            (v: string) =>
                v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
          ],
        },
        {
          label: "Życiorys",
          value: "",
          rules: [
            /*(v: string) =>
                v.length <= 1000 || "Tekst nie może przekraczać 1000 znaków",*/
          ],
        },
        {
          label: "Data urodzenia",
          value: null,
          type: "date",
          rules: [],
        },
        {
          label: "Miejsce urodzenia",
          value: "",
          rules: [
            (v: string) =>
                v.length <= 100 || "Tekst nie może przekraczać 100 znaków",
          ],
        },
      ],
    };
  }

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    let formDataValue: object = {
      id: this.$store.getters.actorPage.actorID,
      first_name: this.$data.formData.at(0).value,
      last_name: this.$data.formData.at(1).value,
      user: this.$store.getters.userId,
    };

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    await axios.put(`/api/people/${this.$store.getters.actorPage.actorID}/`, formDataValue, config)
        .catch((error) => {
          console.log(error);
        });

    this.emitParent(1);
  }

  private emitParent(state: number) {
    this.$emit('visibility', 0, state);
  }
}
</script>

<style lang="scss" scoped>
</style>
