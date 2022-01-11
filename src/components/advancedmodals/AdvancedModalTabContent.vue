<template>
  <div>
    <div class="__chekt-advanced-modal-tab-section">
      <!-- CATEGORY -->
      <div class="cate">CATEGORY</div>
      <div class="body">
        <div @click="goToDetailPage()" class="line have-page">
          <div class="line-left">Title Title Title Title Title</div>
          <div class="line-right">
            <div>Description Description Description Description Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
        <div class="line">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
        <div @click="goToDetailPage()" class="line have-page">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
        <div @click="goToDetailPage()" class="line have-page">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
      </div>

      <!-- CATEGORY 2 -->
      <div class="cate" style="padding-top:20px;">CATEGORY 2</div>
      <div class="body">
        <div class="line">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
        <div @click="goToDetailPage()" class="line have-page">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
        <div @click="goToDetailPage()" class="line have-page">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
        <div class="line">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>
        <div @click="goToDetailPage()" class="line have-page">
          <div class="line-left">Title</div>
          <div class="line-right">
            <div>Description</div>
            <div class="go-page-icon"><MyIcon style="color:var(--chekt-blue-gray-mideumer);" v-bind:icon="'arrow-right'" v-bind:width="16" /></div>
          </div>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
export default {
  components: {
    MyIcon
  },
  computed: {
  },
  data: function() {
    return {
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
  },
  beforeDestroy: function () {
  },
  methods: {
    goToDetailPage: function () {
      this.$store.commit('ADVANCED_MODAL_DETAIL_PAGE_SHOW_HIDE', true)
    }
  }
}
</script>

<style scoped>
/* src/styles/dealer-advanced-modal.css */

.__chekt-advanced-modal-tab-section {
  width: 100%;
}
.__chekt-advanced-modal-tab-section > .cate {
  font-size: 13px;
  color: var(--chekt-blue-gray-high);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 500;
}
.__chekt-advanced-modal-tab-section > div > .line {
  font-size: 14px;
  color: var(--chekt-blue-gray-highest);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
}
.__chekt-advanced-modal-tab-section > div > .line {
  font-size: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  grid-gap: 20px;
  word-break: break-word;
}
.__chekt-advanced-modal-tab-section > div > .line.have-page:hover {
  background-color: var(--chekt-blue-gray-low);
  border-radius: 10px;
  cursor: pointer;
}
.__chekt-advanced-modal-tab-section > div > .line > .line-left {
  color: var(--chekt-blue-gray-highest);
}
.__chekt-advanced-modal-tab-section > div > .line > .line-right {
  color: var(--chekt-blue-gray-higher);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  text-align: end;
}
.__chekt-advanced-modal-tab-section .go-page-icon {
  opacity: 0;
}
.__chekt-advanced-modal-tab-section .have-page .go-page-icon {
  opacity: 1;
}
</style>
