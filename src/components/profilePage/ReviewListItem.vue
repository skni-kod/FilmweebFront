<template>
  <v-list-item>
    <v-card outlined class="review">
      <v-card-title class="text-h6">{{
        review.title.at(0).title
      }}</v-card-title>
      <v-card-subtitle>
        Data dodania: {{ review.creation_date }}
      </v-card-subtitle>
      <v-divider></v-divider>
      <v-card-text>
        <p>{{ review.review }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text> Edytuj </v-btn>
        <v-btn text> Usuń </v-btn>
      </v-card-actions>
    </v-card>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ReviewListItem extends Vue {
  @Prop({ required: true }) readonly review: any;
}
</script>

<style scoped>
.review {
  width: 100%;
}
p {
  text-align: justify;
}
</style>
