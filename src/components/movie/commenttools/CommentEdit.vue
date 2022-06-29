<template>
  <div class="comm-form-blk">
    <div class="accent comm-form">
      <div class="comm-form-close">
        <button @click="emitParent()">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="comm-form-head">
        <v-icon>mdi-playlist-plus</v-icon>
        <span>Edytuj komentarz</span>
      </div>
      <div class="comm-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <v-textarea
              v-model="formData.value"
              :label="formData.label"
              color="dark"
              required
              :rules="formData.rules"
          ></v-textarea>
          <v-btn type="submit" class="edit-confirm" @click.prevent="submit"> Zapisz</v-btn>
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
  @Prop() private readonly btnID: any;
  @Prop({required: true}) private readonly commentData: any;

  mounted() {
    this.$data.formData.value = this.commentData.comment;
  }

  private data() {
    return {
      formData: {
        label: "",
        value: "",
        rules: [(v: string) => !!v || "Treść jest wymagana"],
      },
    };
  }

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {

      let formDataValue: object = {
        id: this.commentData.id,
        comment: this.$data.formData.value,
        movie: this.commentData.movie_id,
        user: this.$store.getters.userId,
      };

      let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
      await axios.put(`/api/moviecomments/${this.commentData.id}/`, formDataValue, config)
          .catch((error) => {
            console.log(error);
          });
      this.emitParent();
    }
  }

  private emitParent() {
    this.$emit('visibilityComm', this.btnID !== 'undefined' ? 0 : this.btnID);
  }
}
</script>

<style lang="scss" scoped>
.edit-confirm {
  display: block;
  margin: 0 auto;
}
</style>
