<template>
  <div class="tooldate-form-blk">
    <div class="accent tooldate-form">
      <div class="tooldate-form-close">
        <button @click="emitParent()">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="tooldate-form-head">
        <v-icon>mdi-playlist-plus</v-icon>
        <span>Edytuj recenzję</span>
      </div>
      <div class="tooldate-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <v-select
              v-model="reviewData.review_type"
              :items="formDataTypes"
              label="typ"
              dense
              solo
          ></v-select>
          <v-textarea
              v-for="(input, i) in formData"
              :key="i"
              v-model="input.value"
              :label="input.label"
              color="dark"
              required
              :rules="input.rules"
          ></v-textarea>
          <v-btn type="submit" @click.prevent="submit"> Zapisz </v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class ReviewEdit extends Vue {
  @Prop({required: true}) readonly reviewData: any;

  mounted() {
    this.$data.formData[0].value = this.reviewData.review;
  }

  data() {
    return {
      formDataTypes: ['pozytywna', 'neutralna', 'negatywna'],
      formData: [
        {
          value: "",
          rules: [ (v: string) => !!v || "Treść jest wymagana" ],
        },
      ],
    };
  }

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    let formDataValue: object = {
      review_type: this.reviewData.review_type,
      id: this.reviewData.id,
      review: this.$data.formData[0].value,
      movie: this.$store.getters.moviePage.movieID,
      user: this.$store.getters.userId,
      creation_date: '2022-06-22',
    };

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    axios.put(`/api/reviews/${this.reviewData.id}/`, formDataValue, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    this.emitParent();
  }

  private emitParent() {
    this.$emit('visibility', 0);
  }
}
</script>

<style lang="scss" scoped>
</style>
