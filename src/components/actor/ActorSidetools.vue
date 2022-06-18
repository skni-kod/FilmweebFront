<template>
  <div class="wrapper-blk">
    <div class="actor-tools" v-for="(btn, i) in actorTools" :key="i">
      <v-btn v-if="!btn.admin || btn.admin === adminState" @click="btn.click" >
        <v-icon>{{ btn.icon }}</v-icon>
        <span class="white--text"> {{ btn.text }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({})
export default class ActorSidetools extends Vue {

  data() {
    return {
      actorTools: [
        {
          text: "Edytuj aktora",
          click: this.editActor,
          icon: "mdi-playlist-edit",
          admin: true,
        },
        {
          text: "Usuń aktora",
          click: this.removeActor,
          icon: "mdi-playlist-remove",
          admin: true,
        }
      ]
    }
  }

  private editActor() {

  }

  private removeActor() {

  }

  get userState() {
    return this.$store.getters.isAuthenticated;
  }

  get adminState() {
    return this.$store.getters.isAdmin;
  }

}
</script>

<style lang="scss" scoped>
.actor-tools {
  display: flex;
  flex-wrap: wrap;
}

.actor-tools > button {
  width: 100%;
  margin: 5px 0;
  padding: 24px 16px !important;
}
</style>