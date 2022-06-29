<template>
  <div class="sidetool-form-blk">
    <div class="accent sidetool-form">
      <div class="sidetool-form-close">
        <button @click="emitParent(0)">
          <v-icon class="secondary--text">mdi-close</v-icon>
        </button>
      </div>
      <div class="sidetool-form-head">
        <v-icon>mdi-playlist-plus</v-icon>
        <span>Dodaj film do listy</span>
      </div>
      <div class="sidetool-form-cnt">
        <v-form class="pa-4 form-cnt" ref="form">
          <div>
            <h2>Czy na pewno chcesz dodać film do listy film?</h2>
          </div>
          <v-btn type="submit" class="add-confirm" @click.prevent="submit"> Potwierdź</v-btn>
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
export default class SidetoolAddToList extends Vue {
  @Prop({required: true}) private readonly btnID: any;

  created() {
    this.getUserLists(this.$store.getters.userId);
  }

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {

      if (Object.keys(this.$store.getters.movieLists).length == 0) {
        this.getUserLists(this.$store.getters.userId);
      }

      let moviesLists = this.$store.getters.movieLists;
      let moviesListsData = this.$store.getters.movieListsData;

      const movieID = this.$store.getters.moviePage.movieID;
      let canAdd = true;
      moviesListsData.forEach((movie: any) => {
        if (movie.id == movieID) canAdd = false;
      });
      if (!canAdd) return;

      moviesListsData.push(this.$store.getters.moviePage.movieData);
      moviesLists.at(0).movies = moviesListsData;

      let moviesListsID = Array();
      moviesListsData.forEach((movie: any) => {
        moviesListsID.push(movie.id);
      });

      const userListsData = {
        id: moviesLists.at(0).id,
        list_name: moviesLists.at(0).list_name,
        movies: moviesListsID,
        nick: this.$store.getters.profileData.id,
      }

      const config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
      await axios
          .put(`/api/lists/${moviesLists.at(0).id}/`, userListsData, config)
          .then((response) => {
            this.$store.commit('setMovieList', moviesLists);
            this.$store.commit('setMovieListData', moviesLists.movies);
            this.emitParent(0);
          })
          .catch((error) => {
            console.log(error);
            return;
          });
    }
  }

  private async getUserLists(userId: string) {
    await axios
        .get(`/api/users/${userId}/lists/`)
        .then((response) => {
          this.$store.commit('setMovieList', response.data);
          this.$data.movies = response.data.at(0).movies;
          this.$store.commit('setMovieListData', this.$data.movies);
        })
        .catch((error) => {
          console.log(error);
          return;
        });
  }

  private emitParent(state: number) {
    this.$emit('visibility', this.btnID, state);
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

.add-confirm {
  display: block;
  margin: 0 auto;
}
</style>
