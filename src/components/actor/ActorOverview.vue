<template>
  <div class="actor-overview-wrapper">
    <div class="poster">
      <v-img
          :lazy-src="require('./../../assets/unknown_person.png')"
          :src="require('./../../assets/unknown_person.png')"
      />
    </div>
    <div class="bio">{{ actorData.bio }}</div>
    <div class="tags-info">
      <ul class="tags-ul">
        <li class="detail-li">
          <div class="tag tags--text">Data urodzenia:</div>
          <div class="value" tabindex="0">{{ dateFormat(actorData.birth_date) }}</div>
        </li>
        <li class="detail-li">
          <div class="tag tags--text">Miejsce urodzenia:</div>
          <div class="value" tabindex="0">{{ actorData.birth_place }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({})
export default class ActorOverview extends Vue {
  private dateFormat(dateOld: string) {
    let months = [
      "styczeń",
      "luty",
      "marzec",
      "kwiecień",
      "maj",
      "czerwiec",
      "lipiec",
      "sierpień",
      "wrzesień",
      "październik",
      "listopad",
      "grudzień",
    ];
    if (!!dateOld) {
      let dateSplit = dateOld.split("-");
      return `${parseInt(dateSplit[2])} ${months[parseInt(dateSplit[1]) - 1]} ${dateSplit[0]}`;
    } else return "";
  }

  private get actorData() {
    return this.$store.getters.actorPage.actorData;
  }
}
</script>



<style lang="scss" scoped>
.actor-overview-wrapper {
  display: grid;
  grid-template-columns: minmax(0, 285px) 1fr;
  gap: 16px;
  grid-auto-flow: row;
  grid-template-areas:
    "poster bio"
    "poster tags";
}

.poster {
  grid-area: poster;
  width: 100%;
}

.bio {
  grid-area: bio;
  padding: 32px 16px 0 16px;
}

.tags-info {
  grid-area: tags;
}

.tags-ul {
  display: table;
  list-style: none;
}

.tags-ul .detail-li {
  display: table-row;
  flex-wrap: wrap;
  margin: 10px 0;
}

.detail-li > div {
  display: table-cell;
}

.detail-li .tag {
  padding: 4px 0;
  color: lightgrey;
}

.detail-li .value {
  padding-left: 16px;
}

</style>
