<template>
  <div>
    <h3 class="general-section-title">Recenzje użytkowników</h3>
    <div class="review-blk" v-if="Object.keys(movieReviews).length > 0">
      <div class="review-list">
        <div class="single-review" v-for="(review, i) in movieReviews" :key="i">
          <div class="review-head">
            <div class="avatar">
              <img :src="review.avatar.at(0).avatar" alt="" />
            </div>
            <div class="details">
              <div class="nick">{{ review.nick.at(0).nick }}</div>
              <div class="type">{{ review.review_type }}</div>
            </div>
          </div>
          <div class="review-content">{{ review.review }}</div>
          <div class="review-footer tags--text">
            <div class="rev-comment extlink--text">
              <router-link :to="'/film'">Skomentuj</router-link>
              <router-link :to="'/film'"
                >XX
                <v-icon>mdi-message-text</v-icon>
              </router-link>
            </div>
            <div class="create-time">
              {{ review.creation_date }}
            </div>
          </div>
        </div>
      </div>
      <div class="review-more more--text">
        <span>Zobacz wszystkie recenzje</span>
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
export default class MovieReviews extends Vue {
  movieReviews: object = [];

  created() {
    this.getMovieReviews(this.$store.getters.moviePage.movieID);
  }

  getMovieReviews(movieID: string) {
    axios
      .get(`/api/movies/${movieID}/reviews/`)
      .then((response) => {
        this.movieReviews = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.review-blk .review-more {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.single-review {
  margin: 10px 5px;
  padding: 10px;
  box-shadow: 0 8px 14px 0 #00000014, 0 -8px 14px 0 #0000000a;
  border: 1px solid #87877d1f;
}

.single-review .review-content {
  padding: 8px;
}

.single-review .review-footer {
  display: flex;
  justify-content: space-between;
  align-self: center;
}

.single-review .review-head {
  display: flex;
  align-items: center;
  padding: 5px 0 15px 0;
}

.review-head .avatar {
  aspect-ratio: 1 / 1;
  height: 48px;
}

.review-head .avatar > img {
  height: 100%;
}

.review-head .details {
  padding-left: 5px;
}

.details .type .positive {
  color: green;
}

.details .type .negative {
  color: red;
}

.review-footer .rev-comment a {
  padding-right: 12px;
  text-decoration: none;
  color: inherit;
}

.review-footer .rev-comment a > * {
  color: inherit;
}
</style>
