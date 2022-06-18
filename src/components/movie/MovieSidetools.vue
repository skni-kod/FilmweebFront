<template>
  <div class="wrapper-blk">
    <div class="movie-tools" v-for="(btn, i) in movieTools" :key="i">
      <v-btn v-if="!btn.admin || btn.admin === adminState" @click="btn.click" >
        <v-icon>{{ btn.icon }}</v-icon>
        <span class="white--text"> {{ btn.text }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({})
export default class MovieSidetools extends Vue {

  data() {
    return {
      movieTools: [
        {
          text: "Dodaj do listy",
          click: this.addToList,
          icon: "mdi-playlist-plus",
          admin: false,
        },
        {
          text: "Edytuj film",
          click: this.editMovie,
          icon: "mdi-playlist-edit",
          admin: true,
        },
        {
          text: "Usuń film",
          click: this.removeMovie,
          icon: "mdi-playlist-remove",
          admin: true,
        }
      ]
    }
  }

  private addToList() {

  }

  private editMovie() {

  }

  private removeMovie() {

  }

  get userState() {
    return this.$store.getters.isAuthenticated;
  }

  get adminState() {
    return this.$store.getters.isAdmin;
  }

}
</script>

<style lang="scss" scoped>
.movie-tools {
  display: flex;
  flex-wrap: wrap;
}

.movie-tools > button {
  width: 100%;
  margin: 5px 0;
  padding: 24px 16px !important;
}
</style>