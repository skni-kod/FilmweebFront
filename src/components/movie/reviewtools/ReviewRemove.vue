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
        <span>Usuń recenzję</span>
      </div>
      <div class="rev-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <div>
            <h2>Czy na pewno chcesz usunąć recenzję?</h2>
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
export default class ReviewRemove extends Vue {
  @Prop() private readonly btnID: any;
  @Prop({required: true}) private readonly reviewData: any;

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {

      let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
      await axios.delete(`/api/reviews/${this.reviewData.id}/`, config)
          .then((response) => {
            if (response.status === 401) this.$store.dispatch("logout");
          })
          .catch((error) => {
            console.log(error);
          });
      this.emitParent();
    }
  }

  private emitParent() {
    this.$emit('visibility', this.btnID !== 'undefined' ? 1 : this.btnID);
  }
}
</script>

<style lang="scss" scoped>
.rev-form-cnt h2 {
  margin-bottom: 13px;
  text-align: center;
}

.remove-confirm {
  display: block;
  margin: 0 auto;
}

.remove-confirm:hover {
  background-color: #252525;
}
</style>
