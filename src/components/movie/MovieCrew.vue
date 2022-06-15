<template>
  <div class="wrapper-blk" v-if="Object.keys(movieCrew).length > 0">
    <h3 class="general-section-title">Obsada filmu</h3>
    <div class="crew-blk">
      <div class="crew-list">
        <div class="crew-item" v-for="(actor, i) in movieCrew" :key="i">
          <div class="avatar">
            <img :src="actor.poster" alt="" />
          </div>
          <div class="details">
            <div class="name">{{ actor.first_name }} {{ actor.last_name }}</div>
            <div class="role tags--text">jako {{ actor.role.at(0).role }}</div>
          </div>
        </div>
      </div>
      <div class="crew-more more--text">
        <span>Zobacz całą obsadę</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class MovieCrew extends Vue {
  movieCrew : object = [];

  created() {
    this.getMovieCrew(this.$store.state.moviePage.movieID);
  }

  getMovieCrew(movieID: string){
    axios
        .get(`/api/movies/${movieID}/actors/`)
        .then((response) => {
          this.movieCrew = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
  }
}
</script>

<style lang="scss" scoped>
.crew-blk {
  display: block;
}

.crew-blk .crew-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}

.crew-list .crew-item {
  width: 50%;
  display: flex;
  grid-template-columns: 90px 1fr;
  height: 95px;
  padding: 6px;
}

.crew-blk .crew-more {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.crew-item .avatar {
  aspect-ratio: 1 / 1;
  margin-right: 6px;
}

.crew-item .avatar img {
  height: 100%;
}

.crew-item .details {
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.crew-item .details > div {
  width: inherit;
  margin: 3px 0;
}

.crew-item .details .name {
  grid-area: 1 / 2 / 2 / 3;
  font-weight: 600;
}

.crew-item .details .role {
  grid-area: 2 / 2 / 3 / 3;
}
</style>
