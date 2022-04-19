<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class ProfileSidebar extends Vue {
  public sidebar: boolean = true;
  @Prop({ required: true }) profileNavOptions: any;
  @Prop({ required: true }) readonly user: any;
  changeView(choice: any) {
    this.sidebar = false;
    this.$emit("view-change", choice);
  }
  get sidebarShown(): boolean {
    return this.sidebar;
  }
  set sidebarShown(newValue) {
    this.sidebar = newValue;
  }
  calcTopbarPos(): number {
    return this.$vuetify.application.top / 2;
  }
}
</script>

<template>
  <v-container>
    <v-app-bar app clipped-left :style="{ top: calcTopbarPos() + 'px' }">
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="text-h6">Profil użytkownika</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      app
      temporary
      hide-overlay
      left
      v-model="sidebarShown"
      :style="{ top: $vuetify.application.top + 'px', zIndex: 4 }"
      clipped
    >
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
          v-for="item in profileNavOptions"
          :key="item.title"
          link
          @click="changeView(item)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>
