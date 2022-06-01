<template>
  <v-container>
    <v-list>
      <v-list-item-title class="text-h6">Recenzje</v-list-item-title>
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

@Component({
  components: {
    ReviewListItem,
  },
})
export default class ReviewList extends Vue {
  data() {
    return {
      reviews: [
        {
          movieTitle: "aaa  bbbb ccc",
          content: "dfgv dsg sdfg fsdg fsdg sdfg fsdg sdg fsd",
          date: "24-05-2022",
        },
        {
          movieTitle: "ccc dede  sss",
          content: "fvcdgvsd ve vsd vfffffffff fffffffffffffff",
          date: "24-05-2025",
        },
      ],
    };
  }
}
</script>
