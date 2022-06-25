<template>
  <div class="sidetools-wrapper">
    <div v-for="btn in movieTools" :key="btn.id">
      <v-btn class="sidetools-btns"
              v-if="btn.user === userState && (!btn.admin || btn.admin === adminState)"
              @click="btn.visible = !btn.visible">
        <v-icon>{{ btn.icon }}</v-icon>
        <span>{{ btn.text }}</span>
      </v-btn>
      <keep-alive>
        <component class="sidetool-form" v-if="btn.visible"
                   @visibility="changeVisSidetool"
                   v-bind:is="btn.link
        "></component>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import SidetoolAddToList from "@/components/movie/sidetools/SidetoolAddToList.vue";
import SidetoolEditMovie from "@/components/movie/sidetools/SidetoolEditMovie.vue";
import SidetoolRemoveMovie from "@/components/movie/sidetools/SidetoolRemoveMovie.vue";

@Component({
  components: {
    SidetoolAddToList,
    SidetoolEditMovie,
    SidetoolRemoveMovie,
  }
})
export default class MovieSidetools extends Vue {
  data() {
    return {
      movieTools: [
        /*{
          text: 'Dodaj film do listy',
          link: 'SidetoolAddToList',
          icon: "mdi-playlist-plus",
          user: true,
          admin: false,
          visible: false,
        },*/
        {
          text: 'Edytuj film',
          link: 'SidetoolEditMovie',
          icon: "mdi-playlist-edit",
          user: true,
          admin: true,
          visible: false,
        },
        {
          text: 'Usuń film',
          link: 'SidetoolRemoveMovie',
          icon: "mdi-playlist-remove",
          user: true,
          admin: true,
          visible: false,
        }
      ]
    }
  }

  changeVisSidetool(btnID: number) {
    this.$data.movieTools.at(btnID).visible = false;
  }

  get userState() {
    return this.$store.getters.isAuthenticated;
  }

  get adminState() {
    return this.$store.getters.isAdmin;
  }

}
</script>
<style lang="scss" scoped>
.sidetools-btns {
  width: 100%;
  margin: 6px 0;
  padding: 12px 0 !important;
}
</style>
<style lang="scss">
.sidetool-form-blk {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0008;
  z-index: 998;
  transition: visibility 0s, opacity 0.5s ease-in-out;
  overflow: hidden;
}

.sidetool-form-blk .sidetool-form {
  aspect-ratio: 568 / 320;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.sidetool-form .sidetool-form-close {
  text-align: right;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.sidetool-form .sidetool-form-close button {
  padding: 2.5px;
}

.sidetool-form .sidetool-form-close i {
  font-size: 2.5rem;
}

.sidetool-form .sidetool-form-head {
  width: 100%;
  padding-top: 20px;
}

.sidetool-form .sidetool-form-head > * {
  width: 100%;
  display: block;
  margin: 4px 0;
  text-align: center;
}

.sidetool-form .sidetool-form-head > i {
  font-size: 5rem;
}

.sidetool-form-cnt {
  width: 90%;
}

.sidetool-form-blk button {
  margin: 0 auto;
}

.comm-btns {
  margin: 10px 5px;
}

.comm-btn {
  width: calc(100% / 3);
}

.single-form {
  margin-left: unset;
  margin-right: unset;
}

</style>