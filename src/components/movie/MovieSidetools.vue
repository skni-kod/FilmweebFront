<template>
  <div class="wrapper-blk">
    <keep-alive v-for="(sidetool, i) in movieTools">
      <component class="sidetool-form-cnt" v-bind:is="sidetool.sidetool"
                 v-if="sidetool.user === userState && (!sidetool.admin || sidetool.admin === adminState)"></component>
    </keep-alive>
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
      visible: false,
      movieTools: [
        {
          sidetool: 'SidetoolAddToList',
          user: true,
          admin: false,
        },
        {
          sidetool: 'SidetoolEditMovie',
          user: true,
          admin: true,
        },
        {
          sidetool: 'SidetoolRemoveMovie',
          user: true,
          admin: true,
        }
      ]
    }
  }

  get userState() {
    return this.$store.getters.isAuthenticated;
  }

  get adminState() {
    return this.$store.getters.isAdmin;
  }

}
</script>
<style lang="scss">
.sidetool-form-cnt {
  width: 100%;
  margin: 10px;
}

.movie-tools {
  display: flex;
  flex-wrap: wrap;
}

.movie-tools > button {
  width: 100%;
  margin: 5px 0;
  padding: 24px 16px !important;
}

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
</style>