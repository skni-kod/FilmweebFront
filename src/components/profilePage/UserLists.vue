<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import ChangeListNameForm from "@/components/profilePage/ChangeListNameForm.vue";

@Component({
  components: {
    ChangeListNameForm,
  },
})
export default class UserLists extends Vue {
  @Prop({ required: true }) userLists!: Array<any>;
  public sideIcon: string = "mdi-dots-vertical";
  public newListIcon: string = "mdi-bookmark-plus-outline";
  public showNewListDialog: boolean = false;

  public removeList(id: number): void {
    this.$emit("remove-list", id);
  }

  public removeMovie(listId: number, movieId: number): void {
    this.$emit("remove-movie", listId, movieId);
  }
  public createList(listName: string): void {
    this.$emit("create-list", listName);
  }
  public renameList(id: number, name: string) {
    this.$emit("rename-list", id, name);
  }
}
</script>

<template>
  <v-container>
    <v-list>
      <v-list-title class="text-h6">Listy użytkownika</v-list-title>
      <v-list-group
        v-for="(list, i) in userLists"
        :key="i"
        :value="false"
        no-action
        sub-group
        color="secondary"
      >
        <template v-slot:activator>
          <v-list-item>
            <v-list-item-title
              >{{ list.name }} ({{ list.movies.length }})
            </v-list-item-title>
            <v-menu bottom left>
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon color="secondary" v-text="sideIcon"></v-icon>
                </v-btn>
              </template>

              <v-list>
                <v-list-item link @click="list.showDialog = true">
                  <v-list-item-title>Zmień nazwę</v-list-item-title>
                </v-list-item>
                <v-list-item link @click="removeList(list.id)">
                  <v-list-item-title>Usuń listę</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <ChangeListNameForm
              v-if="list.showDialog"
              :currentName="list.name"
              :listId="list.id"
              @close-dialog="list.showDialog = false"
              @rename-list="renameList"
            />
          </v-list-item>
        </template>
        <v-list-item v-for="(movie, i) in list.movies" :key="i" link>
          <v-list-item-title v-text="movie.title"></v-list-item-title>

          <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon v-text="sideIcon"></v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item link @click="removeMovie(list.id, movie.id)">
                <v-list-item-title>Usuń z listy</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list-group>
      <v-list-item link @click="showNewListDialog = true">
        <v-icon v-text="newListIcon"></v-icon>
        <v-list-item-title>Stwórz nową listę</v-list-item-title>
      </v-list-item>
      <ChangeListNameForm
        v-if="showNewListDialog"
        currentName="Nowa lista"
        @close-dialog="showNewListDialog = false"
        @create-list="createList"
      />
    </v-list>
  </v-container>
</template>
