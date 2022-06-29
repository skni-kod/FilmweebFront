<template>
  <v-card>
    <v-subheader class="text-h6">Lista użytkownika</v-subheader>
    <v-row class="ma-2 mx-5">
      <v-col
          v-for="movie in movies"
          :key="movie.id"
          class="flex-column"
          cols="12"
          sm="6"
          md="3"
          lg="3"
      >
        <v-card class="pb-3 border-movie-card">
          <MovieItem :movie="movie"></MovieItem>
          <v-btn class="delete-from-lists" @click="submit(movie)">
            <v-icon class="">mdi-close</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import MovieItem from "@/components/search/MovieItem.vue";
import axios from "axios";
import userModule from "../../store/modules/user";

@Component({
  components: {
    MovieItem,
  },
})
export default class UserLists extends Vue {
  private data() {
    return {
      movies: [],
    };
  }

  created() {
    this.getUserLists(this.$store.getters.userId);
    this.$forceUpdate();
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
        });
  }

  private async submit(movieData: any) {

    let moviesLists = this.$store.getters.movieLists;
    let moviesListsData = this.$store.getters.movieListsData;

    let moviesListsID = Array();
    moviesListsData.forEach((movie: any) => { if(movie.id != movieData.id) moviesListsID.push(movie.id); });

    const userListsData = {
      id: moviesLists.at(0).id,
      list_name: moviesLists.at(0).list_name,
      movies: moviesListsID,
      nick: this.$store.getters.profileData.id,
    }

    const config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
    await axios
        .put(`/api/lists/${moviesLists.at(0).id}/`, userListsData, config)
        .catch((error) => {
          console.log(error);
          return;
        });

    this.getUserLists(this.$store.getters.userId);
    this.$forceUpdate();
  }

}
</script>
<style lang="scss" scoped>
.border-movie-card {
  border: 1px solid #3d3c3c !important;
}

.delete-from-lists {
  display: block;
  margin: 0 auto;
  width: 30% !important;
  background-color: #7e0101 !important;
}
</style>
