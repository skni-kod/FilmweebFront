<template>
  <div class="sidebar-wrapper">
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <v-list-item-avatar>
              <v-img :src="user.avatar"></v-img>
            </v-list-item-avatar>
            {{ user.nickName }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="(page, i) in pages"
        :key="i"
        link
        :to="{ name: page.link.name }"
      >
        <v-list-item-icon>
          <v-icon v-text="page.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="page.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class ProfileSidebar extends Vue {
  data() {
    return {
      pages: [
        {
          name: "Dane użytkownika",
          link: { name: "User" },
          icon: "mdi-account-box",
        },
        {
          name: "Zmiana hasła",
          link: { name: "user-password" },
          icon: "mdi-shield",
        },
        {
          name: "Recenzje użytkownika",
          link: { name: "user-reviews" },
          icon: "mdi-file-document",
        },
        {
          name: "Listy użytkownika",
          link: { name: "user-lists" },
          icon: "mdi-playlist-play",
        },
        {
          name: "Administrator",
          link: { name: "user-admin" },
          icon: "mdi-account-supervisor",
        },
      ],
      user: {
        nickName: "jankowalski123",
        avatar: "https://images.nintendolife.com/670d42b50d6d5/1280x720.jpg",
      },
    };
  }

  get TopbarPos(): number {
    return this.$vuetify.application.top / 2;
  }
}
</script>
