<template>
  <v-container style="min-height: 1000px">
    <v-row class="header-blk">
      <v-col class="header-blk__wrapper">
        <actor-cover class="actor-cover"/>
        <actor-overview class="actor-overview"/>
      </v-col>
    </v-row>
    <v-row class="main-blk">
      <v-col class="actor-info" cols="8">
        <actor-movies class="actor-movies"/>
        <div style="min-height: 500px"></div>
      </v-col>
      <v-col class="actor-sidebar" cols="4">
        <actor-sidetools class="actor-sidetool"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import ActorCover from "@/components/actor/ActorCover.vue";
import ActorOverview from "@/components/actor/ActorOverview.vue";
import ActorSidetools from "@/components/actor/ActorSidetools.vue";
import ActorMovies from "@/components/actor/ActorMovies.vue";
import axios from "axios";

@Component({
  components: {
    ActorCover,
    ActorOverview,
    ActorSidetools,
    ActorMovies,
  },
})
export default class TheActor extends Vue {

  created() {
    if (this.$router.currentRoute.path === "/aktor") {
      this.$router.replace({
        name: "ActorPerID",
        params: {id: this.$store.getters.moviePage.actorID},
      });
    }
    this.$store.commit("setActorID", this.$route.params.id);
    this.getMovieInfo(this.$route.params.id);
  }

  private async getMovieInfo(actorID: string) {
    await axios
        .get(`/api/people/${actorID}/`)
        .then((response) => {
          this.$store.commit("setActorData", response.data);
        })
        .catch((error) => {
          if (typeof error.response.data.detail !== 'undefined' && error.response.data.detail === "Nie znaleziono.") this.$router.replace({name: 'Home'});
          console.log(error);
        });
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 32px;
}

.actor-cover,
.actor-overview {
  display: grid;
  margin-bottom: 16px;
}

.main-blk .actor-info > div {
  margin-top: 32px;
  margin-bottom: 16px;
}
</style>
<style lang="scss">
.container {
  @media (min-width: 1264px) {
    max-width: 1264px;
  }
}

.general-section-title {
  width: 100%;
  padding: 16px;
  font-size: 28px;
  font-weight: 600;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 27px;
  }
}

.general-section-title:before {
  content: "";
  display: inline-block;
  height: 40px;
  width: 4px;
  position: absolute;
  margin-left: -0.8rem;
  background: #fff;
  align-self: flex-start;
}

.lack-info {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}
</style>
