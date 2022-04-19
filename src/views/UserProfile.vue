<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import ProfileSidebar from "@/components/profilePage/ProfileSidebar.vue";
import ProfileInfoForm from "@/components/profilePage/ProfileInfoForm.vue";
import ChangePasswordForm from "@/components/profilePage/ChangePasswordForm.vue";
import ReviewList from "@/components/profilePage/ReviewList.vue";
import UserLists from "@/components/profilePage/UserLists.vue";

@Component({
  components: {
    ProfileSidebar,
    ProfileInfoForm,
    ChangePasswordForm,
    ReviewList,
    UserLists,
  },
})
export default class UserProfile extends Vue {
  private sidebar: boolean = false;

  // ----------------------------------------------
  // example data
  public user: object = {
    firstName: "Jan",
    lastName: "Kowalski",
    nickName: "jankowalski123",
    email: "jankowalski@gmail.com",
    avatar:
      "https://i0.wp.com/www.iskmogul.com/wp-content/uploads/2020/05/super-mario-64.jpg?resize=1140%2C694&ssl=1",
  };
  public userReviews: Array<any> = [
    {
      movieTitle: "Tytul1",
      date: "data1",
      type: "pozytywna",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat hendrerit cursus. Morbi id mauris vehicula, commodo risus at, molestie ante. Curabitur gravida tellus at dui ultrices, eu pulvinar eros euismod. Nam laoreet orci sit amet cursus sollicitudin. Vestibulum vitae tellus accumsan, vulputate dolor vel, convallis augue. In mollis massa ac posuere dapibus. Morbi pharetra ante ut augue varius, et convallis risus pharetra. Vivamus ut nisl efficitur, tempus ante nec, luctus mi. Maecenas euismod malesuada arcu, vitae accumsan arcu pretium id. Proin sit amet turpis ex. Maecenas pharetra vehicula arcu quis dapibus.Integer leo purus, tincidunt sed vehicula id, hendrerit vel nisl. Sed laoreet at mauris non ullamcorper. Vestibulum sed scelerisque tellus, quis ultricies leo. Aenean tristique tincidunt lectus, vitae pretium nisi aliquet non. Quisque tempus scelerisque est nec pretium. Pellentesque viverra hendrerit dignissim. Vestibulum elit erat, porttitor eu tincidunt eu, auctor et orci. Integer ac tempor magna. Mauris imperdiet sed libero sit amet hendrerit. Sed dignissim porttitor ultricies. Morbi commodo, est a faucibus malesuada, libero tortor pharetra augue, at tempor odio dui at nunc. Nullam ut lacus volutpat nunc sodales commodo.Donec tincidunt tempus dolor, sed pretium mauris aliquam vitae. Curabitur tristique ex nec quam ullamcorper, sed dictum libero semper. Mauris ac neque finibus, aliquet diam quis, ullamcorper diam. Duis malesuada efficitur ligula at dignissim. Morbi a tortor dignissim, rutrum tortor non, scelerisque ante. Phasellus pulvinar dapibus scelerisque. Vivamus tincidunt sed ligula non volutpat. Proin tristique a mi sit amet ornare. Proin at mi lacus.",
    },
    {
      movieTitle: "Tytul2",
      date: "data2",
      type: "negatywna",
      content: "tresc2",
    },
    {
      movieTitle: "Tytul3",
      date: "data3",
      type: "pozytywna",
      content: "tresc3",
    },
  ];
  public userLists: Array<any> = [
    {
      name: "Ulubione",
      movies: [
        { title: "Star Wars" },
        { title: "Forest Gump" },
        { title: "Die Hard" },
      ],
      showDialog: false,
    },
    {
      name: "Badziej ulubione",
      movies: [
        { title: "Spider-man" },
        { title: "Avengers" },
        { title: "Batman" },
      ],
      showDialog: false,
    },
    {
      name: "Jeszcze bardziej ulubione",
      movies: [{ title: "Muminki" }, { title: "Krecik" }, { title: "Reksio" }],
      showDialog: false,
    },
  ];

  // ----------------------------------------------

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
    <v-col v-else-if="navOptions[2].show">
      <ReviewList :reviews="userReviews"
    /></v-col>
    <v-col v-else-if="navOptions[3].show">
      <UserLists :userLists="userLists"
    /></v-col>
  </v-container>
</template>

<style scoped></style>
