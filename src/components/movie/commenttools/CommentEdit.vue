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
        <span>Edytuj komentarz</span>
      </div>
      <div class="tooldate-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <v-textarea
              v-model="formData.value"
              :label="formData.label"
              color="dark"
              required
              :rules="formData.rules"
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
export default class CommentEdit extends Vue {
  @Prop({required: true}) readonly commentData: any;

  mounted() {
    this.$data.formData.value = this.commentData.comment;
  }

  data() {
    return {
      formData:
        {
          label: "",
          value: "",
          rules: [ (v: string) => !!v || "Treść jest wymagana" ],
        },
    };
  }

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    let formDataValue: object = {
      id: this.commentData.id,
      comment: this.$data.formData.value,
      movie: this.$store.getters.moviePage.movieID,
      user: this.$store.getters.userId,
    };

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    axios.put(`/api/moviecomments/${this.commentData.id}/`, formDataValue, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    this.emitParent();
  }

  private emitParent() {
    this.$emit('visibilityComm', 0);
  }
}
</script>

<style lang="scss" scoped>
</style>
