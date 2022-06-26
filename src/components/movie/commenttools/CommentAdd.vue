<template>
  <div class="movie-tools">
    <div class="comm-form-cnt">
      <v-form class="pa-4 form-cnt" ref="form">
        <v-textarea
            v-model="formData.value"
            :label="formData.label"
            color="dark"
            required
            :rules="formData.rules"
            placeholder="Treść komentarza"
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
export default class CommentAdd extends Vue {

  data() {
    return {
      formData: {
        value: "",
        rules: [(v: string) => !!v || "Treść jest wymagana"],
      },
    };
  }

  async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    let formDataValue: object = {
      comment: this.$data.formData.value,
      movie: this.$store.getters.moviePage.movieID,
      user: this.$store.getters.userId
    };

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    await axios.post(`/api/moviecomments/`, formDataValue, config)
         .then((response) => {
           console.log(response);
         })
         .catch((error) => {
           console.log(error);
         });
    this.emitParent();
  }

  private emitParent() {
    this.$emit('visibilityComm');
  }
}
</script>

<style lang="scss" scoped>
.add-confirm {
  display: block;
  margin: 0 auto;
}
</style>
