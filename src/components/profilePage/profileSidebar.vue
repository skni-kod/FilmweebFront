<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class profileSidebar extends Vue {
  public sidebar: boolean = true;
  @Prop({ required: true }) profileNavOptions: any;
  changeView(choice: any) {
    //this.sidebar = false;
    this.$emit("view-change", choice);
  }
  get sidebarShown(): boolean {
    return this.sidebar;
  }
  set sidebarShown(newValue) {
    this.sidebar = newValue;
  }
}
</script>

<template>
  <v-container>
    <v-app-bar absolute>
      <v-app-bar-nav-icon @click="sidebar = !sidebar"></v-app-bar-nav-icon>
      <v-spacer />
      <v-toolbar-title class="text-h6">Profil użytkownika</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      absolute
      temporary
      hide-overlay
      left
      v-model="sidebarShown"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <v-list-item-avatar>
                <v-img
                  src="https://play-lh.googleusercontent.com/5LIMaa7WTNy34bzdFhBETa2MRj7mFJZWb8gCn_uyxQkUvFx_uOFCeQjcK16c6WpBA3E=s180-rw"
                ></v-img>
              </v-list-item-avatar>
              nickname
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
