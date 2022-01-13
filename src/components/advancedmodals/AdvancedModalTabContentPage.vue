<template>
  <div class="__chekt-advanced-modal-detail-page">

    <!-- HEADER -->
    <div class="header">
      <div @click="goBack($event)" class="header-title">
        <div><MyIcon class="header-goback-icon" v-bind:icon="'arrow-left'" v-bind:width="18" /></div>
        <div>Title</div>
      </div>
      <div @click="closeButton($event)" class="__chekt-advanced-modal-header-action">
        <MyIcon class="header-close-icon" v-bind:icon="'close'" v-bind:width="24" />
      </div>
    </div>

    <!-- BODY -->
    <div class="body">
      <div class="body-title">Page Title</div>
      <div class="body-desc">Page Description</div>

      <!-- Check for height scroll -->
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
      <div class="body-desc">.</div>
    </div>

    <!-- FOOTER -->
    <div class="footer">
      <div class="buttons">
        <div class="__chekt-button default">Button</div>
        <div class="__chekt-button primary">Button</div>
      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon,
  },
  methods: {
    goBack: function (e) {
      e.stopPropagation()
      this.$store.commit('ADVANCED_MODAL_DETAIL_PAGE_SHOW_HIDE', false)
    },
    closeButton: function (e) {
      e.stopPropagation()
      document.body.style.overflow = 'auto';
      this.$store.commit('SHOW_ADVANCED_MODAL', false)
    }

  }

}
</script>

<style>
/* src/styles/dealer-advancedmodal.css */
</style>