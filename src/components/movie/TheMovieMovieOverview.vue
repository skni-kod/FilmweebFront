<template>
  <div class="wrapper-blk">
    <div class="movie-overview__poster">
      <img src="../../assets/logo.png" alt=""/>
    </div>
    <div class="movie-overview__plot dets-box__plot">{{ movieData.description }}</div>
    <ul class="movie-overview__tag-ul dets-box__tag-ul">
      <li class="tag-ul__detail-li" v-for="i in 5" :key="i">
        <div class="detail-li__tag">premiera</div>
        <div class="detail-li__value" tabindex="0">{{ movieData.premiere }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({
  props: {
    movieData: {
      type: Object,
      required: true,
    }
  },
})
export default class MovieOverview extends Vue {
}
</script>

<style lang="scss" scoped>
.wrapper-blk {
  display: grid;
  grid-template-columns: 200px auto;
  grid-column-gap: 32px;

  @media (max-width: 960px) {
    grid-template-columns: 150px auto;
  }

  @media (max-width: 600px) {
    grid-column-gap: 16px;
    grid-template-rows: auto auto;
    grid-template-columns: 100px auto;
  }
}

.movie-overview__poster, .movie-overview__poster img {
  width: 100%;
}

.movie-overview__dets-box {
  width: 440px;

  @media (max-width: 960px) {
    width: auto;
  }
}

.movie-overview__poster {
  grid-area: 1 / 1 / 3 / 2;
  @media (max-width: 960px) {
    grid-area: 1 / 1 / 2 / 2;
  }
}

.movie-overview__plot {
  grid-area: 1 / 2 / 2 / 3;
  text-align: justify;
}

.movie-overview__tag-ul {
  grid-area: 2 / 2 / 3 / 3;
  list-style: none;
  margin-top: 32px;
  padding: 0;

  @media (max-width: 960px) {
    grid-area: 2 / 1 / 3 / 3;
  }
}

.tag-ul__detail-li {
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 5px;
  border-top: 1px solid #777;
}

.tag-ul__detail-li:last-child {
  border-bottom: 1px solid #777;
}

.detail-li__tag {
  width: 85px;
  font-weight: 500;
  color: #8c8c8c;
  letter-spacing: 0.1px;
}

.detail-li__value {
  color: #5599ee;
}

.detail-li__value:hover {
  text-decoration: underline;
}

</style>