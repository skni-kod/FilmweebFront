<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import ProfileSidebar from "@/components/profilePage/ProfileSidebar.vue";
import ProfileInfoForm from "@/components/profilePage/ProfileInfoForm.vue";
import ChangePasswordForm from "@/components/profilePage/ChangePasswordForm.vue";

@Component({
  components: {
    ProfileSidebar,
    ProfileInfoForm,
    ChangePasswordForm,
  },
})
export default class UserProfile extends Vue {
  private sidebar: boolean = false;
  public user: object = {
    // example user
    firstName: "Jan",
    lastName: "Kowalski",
    nickName: "jankowalski123",
    email: "jankowalski@gmail.com",
    avatar:
      "https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E=s180-rwa",
  };

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

  changeView(choice: any): void {
    this.navOptions.forEach((item) => {
      item.show = false;
    });
    choice.show = true;
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <ProfileSidebar
          :user="user"
          :profileNavOptions="navOptions"
          @view-change="changeView"
        />
      </v-col>
    </v-row>
    <v-col><v-spacer></v-spacer></v-col>
    <v-col></v-col>
    <v-col v-if="navOptions[0].show"> <ProfileInfoForm :user="user" /></v-col>
    <v-col v-else-if="navOptions[1].show"> <ChangePasswordForm /></v-col>
  </v-container>
</template>

<style scoped></style>
