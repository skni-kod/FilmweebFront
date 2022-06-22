<template>
  <div>
    <h3 class="general-section-title">Recenzje użytkowników</h3>
    <div class="review-blk">
      <div class="review-list">
        <div class="review-btns" v-if="userState">
          <v-btn class="review-btn" @click="addReview.visible = !addReview.visible">
            <v-icon>{{ addReview.icon }}</v-icon>
            <span class="white--text">{{ addReview.text }}</span>
          </v-btn>
            <component class="single-form review-btn-cnt" @visibility="hideAddForm" v-if="addReview.visible" v-bind:is="addReview.link"></component>
        </div>
      </div>
    </div>
    <div class="review-blk" v-if="Object.keys(movieReviews).length > 0">
      <div class="review-list">
        <div class="single-review" v-for="review in movieReviews" :key="review.id">
          <div class="review-head">
            <div class="avatar">
              <img :src="review.avatar.at(0).avatar" alt="" />
            </div>
            <div class="details">
              <div class="nick">{{ review.nick.at(0).nick }}</div>
              <div :class="['type', typeFormatClass(review.review_type)]">{{ review.review_type }}</div>
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
            <div class="rev-tooldate">
              <div class="rev-tool" v-for="btn in reviewFooterBtns" :key="btn.id">
                <button class="mark_own--text" v-if="(userState && review.user === userID) || (btn.id === 2 && btn.admin === adminState)" @click="btn.visible = !btn.visible">
                  <span>{{ btn.text }}</span>
                </button>
                  <component class="tooldate-form-blk" v-if="btn.visible" @visibility="changeVisibility" v-bind:is="btn.link" :reviewData="review"></component>
              </div>
              <div class="create-date">
                {{ review.creation_date }}
              </div>
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
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import axios from "axios";
import ReviewAdd from "@/components/movie/reviewtools/ReviewAdd.vue";
import ReviewEdit from "@/components/movie/reviewtools/ReviewEdit.vue";
import ReviewRemove from "@/components/movie/reviewtools/ReviewRemove.vue";

@Component({
  components: {
    ReviewAdd,
    ReviewEdit,
    ReviewRemove,
  }
})

export default class MovieReviews extends Vue {
  movieReviews: object = [];

  data() {
    return {
      reviewTool: null,
      reviewFooterBtns: [
        {
          id: 1,
          text: "Edytuj",
          link: 'ReviewEdit',
          visible: false,
          admin: false,
        },
        {
          id: 2,
          text: "Usuń",
          link: 'ReviewRemove',
          visible: false,
          admin: true,
        },
      ],
      addReview:
        {
          text: "Dodaj recenzję",
          icon: "mdi-playlist-plus",
          link: 'ReviewAdd',
          visible: false,
        }
    }
  }

  hideAddForm() {
    this.$data.addReview.visible = false;
    this.reload();
  }

  changeVisibility(btnID: number){
    this.$data.reviewFooterBtns.at(btnID).visible = false;
    this.reload();
  }

  reload() {
    this.getMovieReviews(this.$store.getters.moviePage.movieID);
    this.$forceUpdate();
  }

  created() {
    this.getMovieReviews(this.$store.getters.moviePage.movieID);
  }

  getMovieReviews(movieID: string) {
    axios
      .get(`/api/movies/${movieID}/reviews/`)
      .then((response) => {
        this.movieReviews = response.data;
        this.$forceUpdate();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private typeFormatClass(type : string){
    if(!!type) {
      if (type == 'pozytywna') return 'pos';
      if (type == 'negatywna') return 'neg';
    }
    return null;
  }

  get userState() {
    return this.$store.getters.isAuthenticated;
  }

  get adminState() {
    return this.$store.getters.isAdmin;
  }

  get userID() {
    return this.$store.getters.userId;
  }
}
</script>

<style lang="scss" scoped>
.review-blk .review-more {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.single-review, .single-form {
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

.details .pos {
  color: green;
}

.details .neg {
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

.review-btn-cnt {
  width: 100%;
}

.review-btns {
  margin: 10px 5px;
}

.review-btn {
  width: calc(100% / 3);
}

.single-form {
  margin-left: unset;
  margin-right: unset;
}

.rev-tooldate {
  display: flex;
  flex-wrap: wrap;
}

.rev-tooldate > * {
  margin-left: 12px;
}

</style>
<style lang="scss">
.tooldate-form-blk {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0008;
  z-index: 998;
  transition: visibility 0s, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.tooldate-form-blk .tooldate-form {
  aspect-ratio: 568 / 320;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.tooldate-form .tooldate-form-close {
  text-align: right;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.tooldate-form .tooldate-form-close button {
  padding: 2.5px;
}

.tooldate-form .tooldate-form-close i {
  font-size: 2.5rem;
}

.tooldate-form .tooldate-form-head {
  width: 100%;
  padding-top: 20px;
}

.tooldate-form .tooldate-form-head > * {
  width: 100%;
  display: block;
  margin: 4px 0;
  text-align: center;
}

.tooldate-form .tooldate-form-head > i {
  font-size: 5rem;
}

.tooldate-form-cnt {
  width: 90%;
}

.tooldate-form-blk button {
  margin: 0 auto;
}
</style>
