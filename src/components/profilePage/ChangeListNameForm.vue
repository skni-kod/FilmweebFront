<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class UserLists extends Vue {
  @Prop({ required: true }) currentName: String;
  @Prop({ required: false, default: null }) listId: any;
  public show: any = true;
  public listName: string = this.currentName;
  inputRules: Array<any> = [(v: string) => !!v || "Nie wprowadzono nazwy"];

  closeDialog() {
    this.show = null;
    this.$emit("close-dialog");
  }

  onSubmit(): void {
    if (this.$refs.form.validate()) {
      this.closeDialog();
      if (this.listId) {
        this.$emit("rename-list", this.listId, this.listName);
      } else {
        this.$emit("create-list", this.listName);
      }
    }
  }
}
</script>

<template>
  <v-dialog v-model="show" class="dialog-box" @input="closeDialog">
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ currentName }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-text-field
            autofocus
            ref="form"
            color="dark"
            label="Nazwa listy"
            required
            v-model="listName"
            :rules="inputRules"
          ></v-text-field>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn type="submit" @click.prevent="onSubmit()" color="secondary" text>
          Zapisz
        </v-btn>
        <v-btn color="secondary" text @click="closeDialog()"> Anuluj </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.dialog-box {
  width: 100%;
}
</style>
