<template>
  <v-container>
    <v-app-bar app clipped-left :style="{ top: TopbarPos + 'px' }">
      <v-spacer/>
      <v-toolbar-title class="text-h6">Profil użytkownika</v-toolbar-title>
      <v-spacer/>
    </v-app-bar>
    <v-row>
      <v-col class="profile-sidebar">
        <ProfileSidebar/>
      </v-col>
      <v-col>
        <v-spacer></v-spacer>
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import ProfileSidebar from "../components/profilePage/ProfileSidebar.vue";

@Component({
  components: {
    ProfileSidebar,
  },
})
export default class UserProfile extends Vue {
  get TopbarPos(): number {
    return this.$vuetify.application.top / 2;
  }
}
</script>
<style lang="scss">
.profile-sidebar {
  max-width: 300px;
}
</style>
