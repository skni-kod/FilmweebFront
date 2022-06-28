<template>
  <div class="movie-tools">
    <div class="rev-tooldate-form-cnt">
      <v-form class="pa-4 form-cnt" ref="form">
        <v-select
            v-model="formDataTypeValue"
            :items="formDataType"
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
            placeholder="Treść recenzji"
        ></v-textarea>
        <v-btn type="submit" class="add-confirm" @click.prevent="submit"> Dodaj</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component, Prop} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class ReviewAdd extends Vue {

  private data() {
    return {
      formDataType: ['pozytywna', 'neutralna', 'negatywna'],
      formDataTypeValue: 'neutralna',
      formData: {
        value: "",
        rules: [(v: string) => !!v || "Treść jest wymagana"],
      },
    };
  }

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    const today = new Date();
    const creation_date = today.getFullYear() + '-' + ((today.getMonth() + 1) < 10 ? '0' : null) + (today.getMonth() + 1) + '-' + today.getDate();

    let formDataValue: object = {
      review_type: this.$data.formDataTypeValue,
      review: this.$data.formData.value,
      movie: this.$store.getters.moviePage.movieID,
      user: this.$store.getters.userId,
      creation_date: creation_date,
    };

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    await axios.post(`/api/reviews/`, formDataValue, config)
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
.form-cnt {
  width: 100% !important;
}

.add-confirm {
  display: block;
  margin: 0 auto;
}
</style>
