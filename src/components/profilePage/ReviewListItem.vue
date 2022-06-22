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
      <div class="profile-review-btns">
        <v-card-actions class="" v-for="btn in reviewProfileBtns" :key="btn.id">
          <v-btn class="mark_own--text" @click="btn.visible = !btn.visible">
            <span>{{ btn.text }}</span>
          </v-btn>
          <component class="tooldate-form-blk" v-if="btn.visible" @visibility="changeVisibility" v-bind:is="btn.link" :reviewData="review"></component>
        </v-card-actions>
      </div>
    </v-card>
  </v-list-item>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ReviewEdit from "@/components/movie/reviewtools/ReviewEdit.vue";
import ReviewRemove from "@/components/movie/reviewtools/ReviewRemove.vue";

@Component({
  components: {
    ReviewEdit,
    ReviewRemove,
  }
})
export default class ReviewListItem extends Vue {
  @Prop({ required: true }) readonly review: any;


  data() {
    return {
      reviewProfileBtns: [
        {
          id: 1,
          text: "Edytuj",
          link: 'ReviewEdit',
          visible: false,
        },
        {
          id: 2,
          text: "Usuń",
          link: 'ReviewRemove',
          visible: false,
        },
      ],
    }
  }

  changeVisibility(btnID: number){
    this.$data.reviewProfileBtns.at(btnID).visible = false;
  }
}
</script>

<style scoped>
.review {
  width: 100%;
}
p {
  text-align: justify;
}
.profile-review-btns {
  display: flex;
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
