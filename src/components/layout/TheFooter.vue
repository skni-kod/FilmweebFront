<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  created() {
    this.$data.year = new Date().getFullYear();
  }
  data() {
    return {
      year: null,
    };
  }
}
</script>

<template>
  <v-footer padless class="secondary">
    <v-col class="text-center" cols="12">
      {{ year }} — <strong>Filmweeb</strong>
    </v-col>
  </v-footer>
</template>
