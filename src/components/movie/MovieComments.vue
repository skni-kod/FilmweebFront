<template>
  <div>
    <h3 class="general-section-title">Komentarze użytkowników</h3>
    <div class="comm-blk" v-if="Object.keys(movieComments).length > 0">
      <div class="comm-list">
        <div class="single-comm" v-for="(comment, i) in movieComments" :key="i">
          <div class="avatar">
            <img :src="comment.avatar.at(0).avatar" alt />
          </div>
          <div class="comm-wrapper">
            <div class="comm-header">
              <div class="nick">{{ comment.nick.at(0).nick }}</div>
              <!--              <div class="created-time tags&#45;&#45;text">x lat temu</div>-->
            </div>
            <div class="comm-content">
              {{ comment.comment }}
            </div>
          </div>
        </div>
        <div class="comment-more more--text">
          <span>Zobacz wszystkie komentarze</span>
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
import { Component } from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class MovieComments extends Vue {
  movieComments: object = [];

  created() {
    this.getMovieComments(this.$store.getters.moviePage.movieID);
  }

  getMovieComments(movieID: string) {
    axios
      .get(`/api/movies/${movieID}/comments/`)
      .then((response) => {
        this.movieComments = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.comm-blk .comment-more {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.single-comm {
  display: flex;
  justify-content: left;
  margin: 7px 5px;
  padding: 10px;
  box-shadow: 0 8px 14px 0 #00000014, 0 -8px 14px 0 #0000000a;
  border: 1px solid #87877d1f;
  font-size: 0.95rem;
}

.single-comm .avatar {
  margin-right: 16px;
}

.single-comm .avatar img {
  aspect-ratio: 40 / 40;
  height: 40px;
}

.single-comm .comm-header {
  display: flex;
  margin-bottom: 6px;
}

.single-comm .comm-header > div {
  margin-right: 6px;
}
</style>
