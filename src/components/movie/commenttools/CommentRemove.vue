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
        <span>Usuń komentarz</span>
      </div>
      <div class="comm-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <div>
            <h2>Czy na pewno chcesz usunąć komentarz?</h2>
          </div>
          <v-btn type="submit" class="remove-confirm" @click.prevent="submit"> Potwierdź</v-btn>
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
  @Prop() private readonly btnID: any;
  @Prop({required: true}) private readonly commentData: any;

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {

      let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
      await axios.delete(`/api/moviecomments/${this.commentData.id}/`, config)
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
.comm-form-cnt {
  width: 90%;
  display: block;
}

.comm-form-cnt h2 {
  margin-bottom: 13px;
  text-align: center;
}

.remove-confirm {
  display: block;
  margin: 0 auto;
}

</style>
