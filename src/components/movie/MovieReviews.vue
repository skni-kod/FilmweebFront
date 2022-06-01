<template>
  <div>
    <h3 class="general-section-title">Recenzje użytkowników</h3>
    <div class="review-blk">
      <div class="review-list">
        <div class="single-review" v-for="(review, i) in movieReviews" :key="i">
          <div class="review-head">
            <div class="avatar"><img src="../../assets/unknown_person.png" alt/></div>
            <div class="details">
              <div class="nick">{{ review.nick }}</div>
              <div class="type">{{ review.typ_receznji }}</div>
            </div>
          </div>
          <div class="review-content">{{ review.tresc_recenzji }}</div>
          <div class="review-footer tags--text">
            <div class="rev-comment extlink--text">
              <router-link :to="'/film'">Skomentuj</router-link>
              <router-link :to="'/film'">XX
                <v-icon>mdi-message-text</v-icon>
              </router-link>
            </div>
            <div class="create-time">
              XX.XX.XXXX
            </div>
          </div>
        </div>
      </div>
      <div class="review-more more--text">
        <span>Zobacz wszystkie recenzje</span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({})
export default class MovieReviews extends Vue {
  public movieReviews: object = [
    {
      id_recenzji: 1,
      tresc_recenzji: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.',
      typ_receznji: 'pozytywna',
      nazwa_roli: 'XX.XX.XXXX',
      nick: 'Nick1',
    },
    {
      id_recenzji: 3,
      tresc_recenzji: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.',
      typ_receznji: 'negatywna',
      nazwa_roli: 'XX.XX.XXXX',
      nick: 'Nick3',
    },
    {
      id_recenzji: 2,
      tresc_recenzji: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.',
      typ_receznji: 'pozytywna',
      nazwa_roli: 'XX.XX.XXXX',
      nick: 'Nick2',
    },
  ];
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
  border: 1px solid #87877D1F;
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