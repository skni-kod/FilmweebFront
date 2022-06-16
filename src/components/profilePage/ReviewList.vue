<template>
  <v-container>
    <v-list>
      <v-subheader class="text-h6">Recenzje</v-subheader>
      <reviewListItem
        v-for="(reviewItem, i) in reviews"
        :key="i"
        :review="reviewItem"
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
  created() {
    this.getUserReviews(this.$store.getters.userId);
  }

  getUserReviews(userId: string) {
    axios
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

  private reviews: Object = [];
  data() {
    return {
      // reviews: [
      //   {
      //     movieTitle: "aaa  bbbb ccc",
      //     content: "dfgv dsg sdfg fsdg fsdg sdfg fsdg sdg fsd",
      //     date: "24-05-2022",
      //   },
      //   {
      //     movieTitle: "ccc dede  sss",
      //     content: "fvcdgvsd ve vsd vfffffffff fffffffffffffff",
      //     date: "24-05-2025",
      //   },
      // ],
    };
  }
}
</script>
