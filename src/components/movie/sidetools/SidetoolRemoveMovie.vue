<template>
  <div class="sidetool-form-blk">
    <div class="accent sidetool-form">
      <div class="sidetool-form-close">
        <button @click="emitParent(0)">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="sidetool-form-head">
        <v-icon>mdi-playlist-remove</v-icon>
        <span>Usuń film</span>
      </div>
      <div class="sidetool-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <div>
            <h2>Czy na pewno chcesz usunąć film?</h2>
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
export default class SidetoolRemoveMovie extends Vue {

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {

      let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
      await axios.delete(`/api/movies/${this.$store.getters.moviePage.movieID}/`, config)
          .then((response) => {
            if (response.status === 401) this.$store.dispatch("logout");
          })
          .catch((error) => {
            console.log(error);
          });
      this.emitParent(1);
    }
  }

  private emitParent(state: number) {
    if (state === 1) this.$router.replace({name: 'Home'});
    this.$emit('visibility', 1, state);
  }
}
</script>

<style lang="scss" scoped>
.sidetool-form-cnt {
  width: 90%;
  display: block;
}

.sidetool-form-cnt h2 {
  margin-bottom: 13px;
  text-align: center;
}

.remove-confirm {
  display: block;
  margin: 0 auto;
}
</style>
