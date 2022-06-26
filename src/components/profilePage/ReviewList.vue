<template>
  <v-container>
    <v-list>
      <v-subheader class="text-h6">Recenzje</v-subheader>
      <reviewListItem
        v-for="(reviewItem, i) in reviews"
        :key="i"
        :review="reviewItem"
        @update="update"
      />
    </v-list>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import ReviewListItem from "@/components/profilePage/ReviewListItem.vue";
import axios from "axios";

@Component({
  components: {
    ReviewListItem,
  },
})
export default class ReviewList extends Vue {
  private reviews: Object = [];

  created() {
    this.getUserReviews(this.$store.getters.userId);
  }

  async getUserReviews(userId: string) {
    await axios
      .get(`/api/users/${userId}/reviews/`)
      .then((response) => {
        this.reviews = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get movieData() {
    return this.$store.getters.moviePage.movieData;
  }

  update() {
    this.getUserReviews(this.$store.getters.userId);
    this.$forceUpdate();
  }
}
</script>
