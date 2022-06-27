<template>
  <div class="rev-form-blk">
    <div class="accent rev-form">
      <div class="rev-form-close">
        <button @click="emitParent()">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="rev-form-head">
        <v-icon>mdi-playlist-plus</v-icon>
        <span>Edytuj recenzję</span>
      </div>
      <div class="rev-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <v-select
              v-model="reviewData.review_type"
              :items="formDataTypes"
              label="typ"
              dense
              solo
          ></v-select>
          <v-textarea
              v-model="formData.value"
              :label="formData.label"
              color="dark"
              required
              :rules="formData.rules"
          ></v-textarea>
          <v-btn type="submit" class="edit-confirm" @click.prevent="submit"> Zapisz </v-btn>
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
  @Prop() readonly btnID: any;
  @Prop({required: true}) readonly reviewData: any;

  mounted() {
    this.$data.formData.value = this.reviewData.review;
  }

  data() {
    return {
      formDataTypes: ['pozytywna', 'neutralna', 'negatywna'],
      formData: {
          value: "",
          rules: [ (v: string) => !!v || "Treść jest wymagana" ],
        },
    };
  }

  async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    let formDataValue: object = {
      review_type: this.reviewData.review_type,
      id: this.reviewData.id,
      review: this.$data.formData.value,
      movie: this.reviewData.movie_id,
      user: this.$store.getters.userId,
      creation_date: '2022-06-22',
    };

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    await axios.put(`/api/reviews/${this.reviewData.id}/`, formDataValue, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    this.emitParent();
  }

  private emitParent() {
    this.$emit('visibility', this.btnID !== 'undefined' ? 0 : this.btnID);
  }
}
</script>

<style lang="scss" scoped>
.edit-confirm {
  display: block;
  margin: 0 auto;
}
</style>
