<template>
  <div class="wrapper-blk">
    <div class="poster">
      <!--      <v-img :lazy-src="this.$store.state.moviePage.movieData.poster"-->
      <!--             :src="this.$store.state.moviePage.movieData.poster"/>-->
      <v-img
          lazy-src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"
          src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg"/>
    </div>
    <div class="plot">
      {{ actorData.bio }}
    </div>
    <ul class="tag-ul">
      <li class="detail-li">
        <div class="tag tags--text">Data urodzenia</div>
        <div class="value" tabindex="0">{{ actorData.birth_date }}</div>
      </li>
      <li class="detail-li">
        <div class="tag tags--text">Miejsce urodzenia</div>
        <div class="value" tabindex="0">{{ actorData.birth_place }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({})
export default class ActorOverview extends Vue {

  private dateFormat(dateOld: string) {
    let months = [
      "styczeń", "luty", "marzec", "kwiecień", "maj",
      "czerwiec", "lipiec", "sierpień", "wrzesień",
      "październik", "listopad", "grudzień"
    ];
    let dateSplit = dateOld.split('-');
    return `${dateSplit[2]} ${months[parseInt(dateSplit[1]) - 1]} ${dateSplit[0]}`;
  }

  get actorData() {
    return this.$store.state.actorPage.actorData;
  }
}
</script>

<style lang="scss" scoped>
.wrapper-blk {
  grid-gap: 16px;
}

.actor-overview .poster {
  grid-area: 1 / 1 / 3 / 2;
  width: 100%;
  max-width: 285px;
}

.actor-overview .plot {
  padding: 32px 16px 0 16px;
}

.actor-overview .poster > div {
  padding: 16px;
}

.actor-overview .plot {
  grid-area: 1 / 2 / 2 / 3;
}

.actor-overview .tag-ul {
  grid-area: 2 / 2 / 3 / 3;
  list-style: none;
}

.tag-ul .detail-li {
  display: flex;
  margin: 10px 0;
}

.detail-li .tag {
  min-width: 150px;
  color: lightgrey;
}

.actor-overview .poster > div {
  width: 100%;
}

a {
  display: block;
  width: 35px;
}
</style>
