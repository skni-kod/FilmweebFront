<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  data() {
    return {

    };
  }
}
</script>


<template>
  <v-footer padless color="grey darken-3">
    <v-col
      
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>Filmweeb</strong>
    </v-col>
  </v-footer>
</template>




