<template>
  <div>
    <h3 class="general-section-title">Komentarze użytkowników</h3>
    <div class="comm-blk">
      <div class="comm-list">
        <div class="comm-btns" v-if="userState">
          <v-btn class="review-btn" @click="addCommBtn.visible = !addCommBtn.visible">
            <v-icon>{{ addCommBtn.icon }}</v-icon>
            <span class="white--text">{{ addCommBtn.text }}</span>
          </v-btn>
          <component class="single-form comm-btn-cnt" @visibilityComm="changeVisAdd" v-if="addCommBtn.visible"
                     v-bind:is="addCommBtn.link"></component>
        </div>
      </div>
    </div>
    <div class="comm-blk" v-if="Object.keys(movieComments).length > 0">
      <div class="comm-list">
        <div class="single-comm" v-for="comment in movieComments" :key="comment.id">
          <div class="avatar">
            <img :src="comment.avatar.at(0).avatar" alt/>
          </div>
          <div class="comm-wrapper">
            <div class="comm-header">
              <div class="nick">{{ comment.nick.at(0).nick }}</div>
            </div>
            <div class="comm-content">
              {{ comment.comment }}
            </div>
            <div class="comm-footer">
              <div class="comm-tool" v-for="(btn, i) in commFooterBtns" :key="i">
                <button class="mark_own--text"
                        v-if="(userState && comment.user === userID) || (btn.admin && btn.admin === adminState)"
                        @click="btn.visible = !btn.visible">
                  <span>{{ btn.text }}</span>
                </button>
                <component class="comm-form-blk" v-if="btn.visible" @visibilityComm="changeVisOther"
                           v-bind:is="btn.link" :btnID="i" :commentData="comment"></component>
              </div>
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
import CommentAdd from "@/components/movie/commenttools/CommentAdd.vue";
import CommentEdit from "@/components/movie/commenttools/CommentEdit.vue";
import CommentRemove from "@/components/movie/commenttools/CommentRemove.vue";

@Component({
  components: {
    CommentAdd,
    CommentEdit,
    CommentRemove,
  }
})
export default class MovieComments extends Vue {
  movieComments: object = [];

  data() {
    return {
      addCommBtn:
          {
            text: "Dodaj komentarz",
            icon: "mdi-playlist-plus",
            link: 'CommentAdd',
            visible: false,
          },
      commFooterBtns: [
        {
          text: "Edytuj",
          link: 'CommentEdit',
          visible: false,
          admin: false,
        },
        {
          text: "Usuń",
          link: 'CommentRemove',
          visible: false,
          admin: true,
        },
      ]
    }
  }

  changeVisAdd() {
    this.$data.addCommBtn.visible = false;
    this.getMovieComments(this.$store.getters.moviePage.movieID);
    this.$forceUpdate();
  }

  changeVisOther(btnID: number) {
    this.$data.commFooterBtns.at(btnID).visible = false;
    this.getMovieComments(this.$store.getters.moviePage.movieID);
    this.$forceUpdate();
  }

  created() {
    this.getMovieComments(this.$store.getters.moviePage.movieID);
  }

  async getMovieComments(movieID: string) {
    await axios
        .get(`/api/movies/${movieID}/comments/`)
        .then((response) => {
          this.movieComments = response.data;
          this.$forceUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
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
<style lang="scss">
.comm-form-blk {
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

.comm-form-blk .comm-form {
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

.comm-form .comm-form-close {
  text-align: right;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.comm-form .comm-form-close button {
  padding: 2.5px;
}

.comm-form .comm-form-close i {
  font-size: 2.5rem;
}

.comm-form .comm-form-head {
  width: 100%;
  padding-top: 20px;
}

.comm-form .comm-form-head > * {
  width: 100%;
  display: block;
  margin: 4px 0;
  text-align: center;
}

.comm-form .comm-form-head > i {
  font-size: 5rem;
}

.comm-form-cnt {
  width: 90%;
}

.comm-form-blk button {
  margin: 0 auto;
}

.comm-btns {
  margin: 10px 5px;
}

.comm-btn {
  width: calc(100% / 3);
}

.single-form {
  margin-left: unset;
  margin-right: unset;
}

.comm-btn-cnt {
  width: 100%;
}

.comm-footer {
  display: flex;
}

.comm-footer button {
  margin-right: 5px;
}


</style>