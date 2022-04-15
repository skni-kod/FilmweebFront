<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ReviewListItem from "@/components/profilePage/ReviewListItem.vue";

@Component({
  components: {
    ReviewListItem,
  },
})
export default class ReviewList extends Vue {
  @Prop({ required: true }) readonly reviews: Array<any>;
}
</script>

<template>
  <v-container>
    <v-list>
      <reviewListItem
        v-for="(reviewItem, i) in reviews"
        :key="i"
        :review="reviewItem"
      />
    </v-list>
  </v-container>
</template>
