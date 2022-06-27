<template>
  <div class="actor-sidetools-wrapper">
    <div v-for="btn in actorTools" :key="btn.id">
      <v-btn class="sidetools-btns"
             v-if="btn.user === userState && (!btn.admin || btn.admin === adminState)"
             @click="btn.visible = !btn.visible">
        <v-icon>{{ btn.icon }}</v-icon>
        <span>{{ btn.text }}</span>
      </v-btn>
      <keep-alive>
        <component class="actor-sidetool-form" v-if="btn.visible"
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
import SidetoolEditActor from "@/components/actor/sidetools/SidetoolEditActor.vue";
import SidetoolRemoveActor from "@/components/actor/sidetools/SidetoolRemoveActor.vue";

@Component({
  components: {
    SidetoolEditActor,
    SidetoolRemoveActor,
  }
})
export default class ActorSidetools extends Vue {
  data() {
    return {
      actorTools: [
        {
          text: 'Edytuj aktora',
          link: 'SidetoolEditActor',
          icon: "mdi-playlist-edit",
          user: true,
          admin: true,
          visible: false,
        },
        {
          text: 'Usuń aktora',
          link: 'SidetoolRemoveActor',
          icon: "mdi-playlist-remove",
          user: true,
          admin: true,
          visible: false,
        }
      ]
    }
  }

  changeVisSidetool(btnID: number, state: number) {
    this.$data.actorTools.at(btnID).visible = false;
    if(state === 1) window.location.reload();
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
.actor-sidetool-form {
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

.actor-sidetool-form .sidetool-form {
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

.actor-sidetool-form .sidetool-form {
  padding-bottom: 16px;
}

.actor-sidetool-form  .sidetool-form-close {
  text-align: right;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.actor-sidetool-form  .sidetool-form-close button {
  padding: 2.5px;
}

.actor-sidetool-form .sidetool-form-close i {
  font-size: 2.5rem;
}

.actor-sidetool-form  .sidetool-form-head {
  width: 100%;
  padding-top: 20px;
}

.actor-sidetool-form  .sidetool-form-head > * {
  width: 100%;
  display: block;
  margin: 4px 0;
  text-align: center;
}

.actor-sidetool-form  .sidetool-form-head > i {
  font-size: 5rem;
}

.actor-sidetool-form .sidetool-form-cnt {
  width: 90%;
}

.actor-sidetool-form button {
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

.actor-sidetools-wrapper .sidetools-btns {
  width: 100%;
  margin: 5px 0;
  height: 40px !important;
  padding: 0 16px !important;
}

</style>