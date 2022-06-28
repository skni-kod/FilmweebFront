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
        <MovieItem :movie="movie"></MovieItem>
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
  }

  async getUserLists(userId: string) {
    await axios
        .get(`/api/users/${userId}/lists/`)
        .then((response) => {
          this.$store.state.profilePage.movieLists = response.data;
          this.$data.movies = response.data[0].movies;
        })
        .catch((error) => {
          console.log(error);
        });
  }
}
</script>
