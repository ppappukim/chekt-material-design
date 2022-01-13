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
/* src/styles/dealer-advancedmodal.css */
</style>
