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
        <span>Usuń komentarz</span>
      </div>
      <div class="tooldate-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <div>
            <h2>Czy na pewno chcesz usunąć komentarz?</h2>
          </div>
          <v-btn type="submit" @click.prevent="submit"> Potwierdź </v-btn>
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
export default class CommentRemove extends Vue {
  @Prop({required: true}) readonly reviewData: any;

  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      //console.log("submit");
    }

    let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    axios.delete(`/api/moviecomments/`, config)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    this.emitParent();
  }

  private emitParent() {
    this.$emit('visibilityComm', 1);
  }
}
</script>

<style lang="scss" scoped>
.tooldate-form-cnt h2 {
  margin-bottom: 13px;
}
</style>
