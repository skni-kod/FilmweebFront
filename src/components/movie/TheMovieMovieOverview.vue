<template>
  <div class="wrapper-blk">
    <div class="movie-overview__poster">
      <img src="../../assets/logo.png" alt=""/>
    </div>
    <div class="movie-overview__dets-box">
      <div class="dets-box__plot">{{ movieData.description }}</div>
      <ul class="dets-box__tags-ul">
        <li class="tags-ul__detail-li" v-for="i in 5" :key="i">
          <div class="detail-li__tag">premiera</div>
          <div class="detail-li__value" tabindex="0">{{ movieData.premiere }}</div>
        </li>
      </ul>
    </div>
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
  column-gap: 32px;
}

.movie-overview__poster {
  width: 200px;
}

.movie-overview__poster img {
  width: inherit;
}

.movie-overview__dets-box {
  width: 440px;

  @media (max-width: 960px) {
    width: auto;
  }
}

.dets-box__plot {
  text-align: justify;
}

.dets-box__tags-ul {
  list-style: none;
  margin-top: 32px;
  padding: 0;
}

.tags-ul__detail-li {
  display: flex;
  align-items: center;
  min-height: 40px;
  padding: 0 5px;
  border-top: 1px solid #777;
  column-gap: 16px;
}

.tags-ul__detail-li:last-child {
  border-bottom: 1px solid #777;
}

.detail-li__tag {
  width: 70px;
  font-weight: 500;
  color: #676767;
}

.detail-li__value {
  color: #5599ee;
}

.detail-li__value:hover {
  text-decoration: underline;
}

</style>