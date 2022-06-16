<template>
  <div class="wrapper-blk">
    <h3 class="general-section-title">Znany z</h3>
    <div class="crew-blk" v-if="Object.keys(actorMovies).length > 0">
      <div class="crew-list">
        <div class="crew-item" v-for="(movie, i) in actorMovies" :key="i">
          <div class="poster">
            <img :src="movie.poster" alt=""/>
          </div>
          <div class="details">
            <div class="detail-name">
              <router-link class="movie-link" :to="{ name: 'MoviePerID', params: { id: movie.id }}">
                {{ movie.title }}
              </router-link>
            </div>
            <div class="prod-year tags--text">
              <router-link class="movie-link tags--text" :to="{ name: 'MoviePerID', params: { id: movie.id }}">
                {{ movie.production_year }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="lack-info more--text">Brak informacji</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class ActorMovies extends Vue {
  private actorMovies: object = [];

  created() {
    this.getActorMovies(this.$store.state.actorPage.actorID);
  }

  getActorMovies(actorID: string) {
    axios
        .get(`/api/actors/${actorID}/movies/`)
        .then((response) => {
          this.actorMovies = response.data;
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
  width: 100%;
  display: flex;
  grid-template-columns: 90px 1fr;
  height: 120px;
  padding: 6px;
}

.crew-blk .crew-more, .lack-info {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.crew-item .poster {
  aspect-ratio: 1 / 1;
  margin-right: 6px;
}

.crew-item .poster img {
  height: 100%;
  display: block;
  margin: 0 auto;
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

.crew-item .details .detail-name {
  grid-area: 1 / 2 / 2 / 3;
  font-weight: 600;
}

.crew-item .details .prod-year {
  grid-area: 2 / 2 / 3 / 3;
}

.crew-item .details .movie-link {
  text-decoration: none;
}
</style>
