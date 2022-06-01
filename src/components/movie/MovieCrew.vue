<template>
  <div class="wrapper-blk">
    <h3 class="general-section-title">Obsada filmu</h3>
    <div class="crew-blk">
      <div class="crew-list">
        <div class="crew-item" v-for="(actor, i) in movieCrews" :key="i">
          <div class="avatar">
            <img src="../../assets/unknown_person.png" alt />
          </div>
          <div class="details">
            <div class="name">{{ actor.imie }} {{ actor.nazwisko }}</div>
            <div class="role tags--text">jako {{ actor.nazwa_roli }}</div>
          </div>
        </div>
      </div>
      <div class="crew-more more--text">
        <span>Zobacz całą obsadę</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class MovieCrew extends Vue {
  public movieCrews: object = [
    {
      id_aktora: 1,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 5,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 2,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 4,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 3,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 6,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 8,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 7,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
    {
      id_aktora: 8,
      imie: "Imie",
      nazwisko: "Nazwisko",
      nazwa_stanowiska: "aktor",
      nazwa_roli: "Nazwa Roli",
    },
  ];
}
</script>

<style lang="scss" scoped>
.crew-blk {
  display: block;
}

.crew-blk .crew-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}

.crew-list .crew-item {
  width: 50%;
  display: flex;
  grid-template-columns: 90px 1fr;
  height: 95px;
  padding: 6px;
}

.crew-blk .crew-more {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.crew-item .avatar {
  aspect-ratio: 1 / 1;
  margin-right: 6px;
}

.crew-item .avatar img {
  height: 100%;
}

.crew-item .details {
  display: flex;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.crew-item .details > div {
  width: inherit;
  margin: 3px 0;
}

.crew-item .details .name {
  grid-area: 1 / 2 / 2 / 3;
  font-weight: 600;
}

.crew-item .details .role {
  grid-area: 2 / 2 / 3 / 3;
}
</style>
