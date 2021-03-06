<template>
  <div>
    <div class="name-detail">
      {{ actorData.first_name }} {{ actorData.last_name }}
    </div>
    <div class="details tags--text">
      <div class="type">
        <div>AKTOR</div>
      </div>
    </div>
    <div class="rates">
      <div>
        <div>Średnia ocena</div>
        <button>
          <v-icon class="mark_avg--text">mdi-star</v-icon>
          <span>
            <span>{{ avgMark }}</span> / 5
          </span>
        </button>
      </div>
      <div>
        <div>Twoja ocena</div>
        <button class="mark_own--text" @click="visible = !visible">
          <v-icon class="mark_own--text">mdi-star-outline</v-icon>
          <span class="rate-setter">OCEŃ</span>
        </button>
      </div>
    </div>
    <div class="rate-setter-blk" v-if="visible && userState">
      <div class="accent rate-form">
        <div class="rate-form-close">
          <button @click="visible = !visible">
            <v-icon class="secondary--text">mdi-close</v-icon>
          </button>
        </div>
        <div class="rate-form-head">
          <v-icon class="mark_avg--text">mdi-star-outline</v-icon>
          <span>{{ actorData.first_name }} {{ actorData.last_name }}</span>
        </div>
        <div class="rate-form-cnt">
          <v-form class="pa-4 form-cnt" ref="form">
            <v-rating
                v-model.lazy="mark"
                background-color="white"
                color="blue darken-4"
                x-large
                clearable
                hover
            >
            </v-rating>
            <v-btn class="rate-setter-confirm" type="submit" @click.prevent="submit" @click="visible = 0"> Przeslij
              ocenę
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import axios from "axios";

@Component({})
export default class ActorCover extends Vue {
  private avgMark: number = 0;

  private data() {
    return {
      visible: false,
      mark: 0,
    };
  }

  created() {
    this.getAvgMark(this.$route.params.id);
  }

  private async getAvgMark(actorID: string) {
    await axios
        .get(`/api/actors/${actorID}/marks/avgmark/`)
        .then((response) => {
          if (Object.keys(response.data).length > 0)
            this.avgMark = response.data.at(0).average_mark.toFixed(1);
        })
        .catch((error) => {
          console.log(error);
        });
  }

  private async submit() {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {

      let formDataValue: object = {
        mark: this.$data.mark,
        person: this.$store.getters.actorPage.actorID,
        user: this.$store.getters.userId
      };

      let config: object = {headers: {Authorization: "Bearer " + this.$store.getters.token}};
      await axios.post(`/api/personmarks/`, formDataValue, config)
          .then((response) => {
            this.getAvgMark(this.$route.params.id);
            this.$forceUpdate();
          })
          .catch((error) => {
            console.log(error);
          });
    }
  }

  private get actorData() {
    return this.$store.getters.actorPage.actorData;
  }

  private get userState() {
    return this.$store.getters.isAuthenticated;
  }
}
</script>

<style lang="scss" scoped>
.name-detail {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1.25px;
  text-transform: uppercase;
}

.details {
  font-size: 14px;
}

.rates {
  display: flex;
  justify-content: right;
  align-items: center;
  letter-spacing: 0.6px;
}

.rates > div {
  margin-left: 12px;
  font-size: 0.875rem;
}

.rates > div > div:first-child {
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 4px;
}

.rates button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 1rem;
}

.rates button > span {
  margin-left: 4px;
}

.rates button .mark-setter {
  font-weight: bold;
  text-transform: uppercase;
}

.rate-setter-blk {
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

.rate-setter-blk .rate-form {
  aspect-ratio: 568 / 320;
  width: 568px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.rate-form .rate-form-close {
  text-align: right;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.rate-form .rate-form-close button {
  padding: 2.5px;
}

.rate-form .rate-form-close i {
  font-size: 2.5rem;
}

.rate-form .rate-form-head {
  width: 100%;
  padding-top: 20px;
}

.rate-form .rate-form-head > * {
  width: 100%;
  display: block;
  margin: 4px 0;
  text-align: center;
}

.rate-form .rate-form-head > i {
  font-size: 5rem;
}

.rate-form .rate-form-cnt {
  padding: 10px 0;
}

.rate-form-cnt .rate-setter-confirm {
  margin: 16px 0;
  padding: 8px 16px;
  min-width: 48px;
  border-radius: 4px;
  width: 100%;
  background-color: #444;
}

.rate-form-cnt .rate-setter-confirm:hover {
  background-color: #252525;
}
</style>
