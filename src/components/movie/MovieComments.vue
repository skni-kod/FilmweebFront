<template>
  <div>
    <h3 class="general-section-title">Komentarze użytkowników</h3>
    <div class="comm-blk">
      <div class="comm-list">
        <div class="single-comm" v-for="(comment, i) in movieComments" :key="i">
          <div class="avatar"><img src="../../assets/unknown_person.png" alt/></div>
          <div class="comm-wrapper">
            <div class="comm-header">
              <div class="nick">{{ comment.nick }}</div>
              <div class="created-time tags--text">x lat temu</div>
            </div>
            <div class="comm-content">
              {{ comment.tresc_komentarza }}
            </div>
          </div>
        </div>
        <div class="comment-more more--text">
          <span>Zobacz wszystkie komentarze</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component({})
export default class MovieComments extends Vue {
  public movieComments: object = [
    {
      id_komentarza: 1,
      tresc_komentarza: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.',
      data_utworzenia: 'XX.XX.XXXX',
      nick: 'Nick1',
    },
    {
      id_komentarza: 3,
      tresc_komentarza: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.',
      data_utworzenia: 'XX.XX.XXXX',
      nick: 'Nick3',
    },
    {
      id_komentarza: 2,
      tresc_komentarza: 'Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique. Sed iaculis elit sed leo accumsan consectetur. Quisque sagittis libero id sem lacinia egestas. Phasellus egestas facilisis diam non tristique.',
      data_utworzenia: 'XX.XX.XXXX',
      nick: 'Nick2',
    },
  ];
}
</script>

<style lang="scss" scoped>

.comm-blk .comment-more {
  display: flex;
  justify-content: center;
  padding: 6px 0;
}

.single-comm {
  display: flex;
  justify-content: left;
  margin: 7px 5px;
  padding: 10px;
  box-shadow: 0 8px 14px 0 #00000014, 0 -8px 14px 0 #0000000a;
  border: 1px solid #87877D1F;
  font-size: .95rem;
}

.single-comm .avatar {
  margin-right: 16px;
}

.single-comm .avatar img {
  aspect-ratio: 40 / 40;
  height: 40px;
}

.single-comm .comm-header {
  display: flex;
  margin-bottom: 6px;
}

.single-comm .comm-header > div {
  margin-right: 6px;
}


</style>