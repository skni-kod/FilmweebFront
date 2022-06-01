<template>
  <v-container>
    <v-app-bar app clipped-left :style="{ top: TopbarPos + 'px' }">
      <v-app-bar-nav-icon
        @click="sidebarShown = !sidebarShown"
      ></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="text-h6">Profil użytkownika</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-row>
      <v-col>
        <ProfileSidebar />
      </v-col>
    </v-row>
    <v-col><v-spacer></v-spacer></v-col>
    <v-col></v-col>
    <router-view></router-view>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
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

  get sidebarShown(): boolean {
    return this.$store.state.userProfile.sidebarShown;
  }

  set sidebarShown(newVal: boolean) {
    this.$store.commit("setProfileSidebarShown", newVal);
  }
}
</script>
