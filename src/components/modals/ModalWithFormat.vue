<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickModalButton('default')" class="__chekt-button default"> Click me </div>
        <div @click="onClickModalButton('long')" class="__chekt-button default"> Click me long </div>
        <div @click="onClickModalButton('viewmore')" class="__chekt-button default"> Click me view more </div>
      </div>
      <div class="button-rows">
      </div>
    </div>

    <!-- Default -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showModal}"></div>
    <div id="__chekt-modal-format" v-bind:class="{show:showModal}">
      <div class="__chekt-modal-format" v-bind:class="{show:showModal}">
        <div class="__chekt-modal-header-format">
          <div>Title</div>
        </div>
        <div class="__chekt-modal-wrapper-format">
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          
          <div class="input-texts" style="margin-bottom:20px;">
            <div class="input-text column">
              <div class="text">Text</div>
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <div class="input-text column">
              <div class="text">Text</div>
              <input autofocus type="email" placeholder="Enter text">
            </div>
          </div>
          <!-- Select -->
          <div class="text">Select</div>
          <div id="__chekt-select">
            <select class="select">
              <option value="0">Bobby kim</option>
              <option value="1">Kevin Park</option>
              <option value="2">Trevor Seo</option>
              <option value="3">Dosung Lee</option>
              <option value="4">Leo Park</option>
              <option value="5">Rider Kim</option>
            </select>
            <div class="select-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
          </div>
        </div>
        <div class="__chekt-modal-actions">
          <div class="__chekt-button default" @click="closeButton()" >Cancel</div>
          <div class="__chekt-button primary" @click="closeButton()">Action</div>
        </div>
      </div>
    </div>

    <!-- Long -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showLongModal}"></div>
    <div id="__chekt-modal-format" v-bind:class="{show:showLongModal}">
      <div class="__chekt-modal-format" v-bind:class="{show:showLongModal}">
        <div class="__chekt-modal-header-format">
          <div>Title</div>
        </div>
        <div class="__chekt-modal-wrapper-format">
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="input-texts" style="margin-bottom:20px;">
            <div class="input-text column">
              <div class="text">Text</div>
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <div class="input-text column">
              <div class="text">Text</div>
              <input autofocus type="email" placeholder="Enter text">
            </div>
          </div>
          <!-- Select -->
          <div class="text">Select</div>
          <div id="__chekt-select" style="margin-bottom:20px;">
            <select class="select">
              <option value="0">Bobby kim</option>
              <option value="1">Kevin Park</option>
              <option value="2">Trevor Seo</option>
              <option value="3">Dosung Lee</option>
              <option value="4">Leo Park</option>
              <option value="5">Rider Kim</option>
            </select>
            <div class="select-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
          </div>

          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text">
            <input autofocus type="email" placeholder="Enter text">
          </div>

        </div>
        <div class="__chekt-modal-actions">
          <div class="__chekt-button default" @click="closeButton()" >Cancel</div>
          <div class="__chekt-button primary" @click="closeButton()">Action</div>
        </div>
      </div>
    </div>

    <!-- View more -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showViewMoreModal}"></div>
    <div id="__chekt-modal-format" v-bind:class="{show:showViewMoreModal}">
      <div class="__chekt-modal-format" v-bind:class="{show:showViewMoreModal}">
        <div class="__chekt-modal-header-format">
          <div>Title</div>
        </div>
        <div class="__chekt-modal-wrapper-format">
          <!-- Text -->
          <div class="text">Text</div>
          <div class="input-text" style="margin-bottom:20px;">
            <input autofocus type="email" placeholder="Enter text">
          </div>
          <!-- Text -->
          <div class="input-texts" style="margin-bottom:20px;">
            <div class="input-text column">
              <div class="text">Text</div>
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <div class="input-text column">
              <div class="text">Text</div>
              <input autofocus type="email" placeholder="Enter text">
            </div>
          </div>
          <!-- Select -->
          <div class="text">Select</div>
          <div id="__chekt-select" style="margin-bottom:20px;">
            <select class="select">
              <option value="0">Bobby kim</option>
              <option value="1">Kevin Park</option>
              <option value="2">Trevor Seo</option>
              <option value="3">Dosung Lee</option>
              <option value="4">Leo Park</option>
              <option value="5">Rider Kim</option>
            </select>
            <div class="select-icon"><MyIcon v-bind:icon="'folder-open'" v-bind:width="18" /></div>
          </div>
          <!-- View more -->
          <div @click="onClickViewMore()" class="__chekt-modal-more" style="margin-bottom:20px;">
            <div v-bind:class="{rorate:isViewMoreShow}" class="__chekt-modal-more-icon"><MyIcon v-bind:icon="'arrow-right'" v-bind:width="12" /></div>
            <div class="__chekt-modal-more-text">View more</div>
          </div>
          <div class="__chekt-modal-more-contents" v-bind:class="{show:isViewMoreShow}">
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text" style="margin-bottom:20px;">
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text" style="margin-bottom:20px;">
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text" style="margin-bottom:20px;">
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text" style="margin-bottom:20px;">
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text" style="margin-bottom:20px;">
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text" style="margin-bottom:20px;">
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text" style="margin-bottom:20px;">
              <input autofocus type="email" placeholder="Enter text">
            </div>
            <!-- Text -->
            <div class="text">Text</div>
            <div class="input-text">
              <input autofocus type="email" placeholder="Enter text">
            </div>
          </div>

        </div>
        <div class="__chekt-modal-actions">
          <div class="__chekt-button default" @click="closeButton()" >Cancel</div>
          <div class="__chekt-button primary" @click="closeButton()">Action</div>
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
      showModal: false,
      showLongModal: false,
      showViewMoreModal: false,
      isViewMoreShow: false
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
    onClickModalButton: async function (position) {
      // 스크롤 막기
      document.body.style.overflow = 'hidden'; 
      switch (position) {
        case 'default':
          this.showModal = true
          break;
        case 'long':
          this.showLongModal = true
          break;
        case 'viewmore':
          if (this.showToastLeft) return
          this.showViewMoreModal = true
          break;
        default:
          break;
      }
    },
    onClickViewMore: function () {
      if (this.isViewMoreShow) this.isViewMoreShow = false
      else this.isViewMoreShow = true

    },
    closeButton: function () {
      // 스크롤 가능
      document.body.style.overflow = 'auto';
      this.showModal = false
      this.showLongModal = false
      this.showViewMoreModal = false
    },
  }
}
</script>

<style scoped>
/* src/styles/dealer-modal.css */

/******************/
/***** Button *****/
/******************/

.buttons {
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
}
.button-rows {
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
}


/*********************/
/****** Text ********/
/*********************/
.input-texts {
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
}
.input-text {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.input-text.column {
  flex-direction: column;
  align-items: flex-start;
}
.input-text input {
  width: calc(100% - 20px);
  font-size: 14px;
  border: solid 1px var(--chekt-border);
  padding: 5px 10px;
  border-radius: 3px;
  transition:box-shadow .3s;
}
.input-text input::placeholder {
  color: var(--chekt-gray-low);
}
.input-text input:focus {
  outline: none; 
  box-shadow: 0 0 0 3px #AAD2F5;
}
.text {
  font-size: 14px;
  color: var(--chekt-gray-high);
  text-align: start;
  margin-bottom: 10px;
}


/*********************/
/****** Select ********/
/*********************/

#__chekt-select {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: var(--chekt-white-text-higher);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 12%) 0px 1px 1px 0px, 
              rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
              rgb(60 66 87 / 8%) 0px 2px 5px 0px;
}

#__chekt-select > .select {
    position: relative;
    z-index: 1;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    margin: 0;
    text-decoration: none;
    vertical-align: middle;
    word-break: normal;
    background: transparent;
    border: 0;
    outline: 0;
    transition: color .24s;
    padding: 4px 8px;
    -webkit-appearance: none;
    width: 100%;
    appearance: none;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    line-height: 20px;
    cursor: pointer;

    /* Select에서 폰트가 안먹기 때문에 따로 선언 (폰트 굵기설정이 안됨) */
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    font-size:14px;
    color: var(--chekt-blue-gray-highest);
}
.select-icon {
  position: absolute;
  top: 50%;
  right: 8px;
  z-index: 2;
  margin-top: -9px;
  transition: color .24s;
  pointer-events: none;
  color: var(--chekt-blue-gray-highest);
}
</style>
 