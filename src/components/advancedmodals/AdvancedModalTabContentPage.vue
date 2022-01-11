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
.__chekt-advanced-modal-detail-page {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--chekt-white-text-higher);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.__chekt-advanced-modal-detail-page > .header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  border-bottom: solid 1px var(--chekt-border);
}
.__chekt-advanced-modal-detail-page .header-title:hover {
  color: var(--chekt-gray-high);
  cursor: pointer;
}
.__chekt-advanced-modal-detail-page .header-close-icon:hover {
  color: var(--chekt-primary-color);
  cursor: pointer;
}
.__chekt-advanced-modal-detail-page .header-title:hover .header-goback-icon {
  color: var(--chekt-gray-high);
}
.__chekt-advanced-modal-detail-page .header-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--chekt-primary-color);
}
.__chekt-advanced-modal-detail-page .body {
  padding: 30px;
  height: 100%;
  overflow-y: auto;
}
.__chekt-advanced-modal-detail-page .body-title {
  font-size: 16px;
  color: var(--chekt-blue-gray-highest);
  padding-bottom: 10px;
}
.__chekt-advanced-modal-detail-page .body-desc {
  font-size: 14px;
  color: var(--chekt-blue-gray-higher);
}
.__chekt-advanced-modal-detail-page .footer .buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 10px;
}
.__chekt-advanced-modal-detail-page .footer {
  display: flex;
  flex-direction: row;
  justify-content:right;
  align-items: center;
  color: var(--chekt-primary-color);
  padding: 10px 20px;
  border-top: solid 1px var(--chekt-border);
}


</style>