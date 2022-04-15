<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import profileSidebar from "@/components/profilePage/profileSidebar.vue";

@Component({
  components: {
    profileSidebar,
  },
})
export default class UserProfile extends Vue {
  private sidebar: boolean = false;

  navOptions: Array<any> = [
    {
      title: "Dane użytkownika",
      icon: "mdi-account-box",
      show: false,
    },
    { title: "Zmiana hasła", icon: "mdi-shield", show: false },
    {
      title: "Recenzje użytkownika",
      icon: "mdi-file-document",
      show: false,
    },
    {
      title: "Listy użytkownika",
      icon: "mdi-playlist-play",
      show: false,
    },
  ];

  changeView(choice: any) {
    this.navOptions.forEach((item) => {
      item.show = false;
    });
    choice.show = true;
    console.log(choice.title);
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <profileSidebar
          :profileNavOptions="navOptions"
          @view-change="changeView"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
