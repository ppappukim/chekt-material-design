<template>
  <div>
    <div class="buttons"> 
      <div class="button-rows">
        <div @click="onClickModalButton('default')" class="button default"> Click me </div>
        <div @click="onClickModalButton('long')" class="button default"> Click me long </div>
        <div @click="onClickModalButton('viewmore')" class="button default"> Click me view more </div>
      </div>
      <div class="button-rows">
      </div>
    </div>

    <!-- Default -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showModal}"></div>
    <div id="__chekt-modal" v-bind:class="{show:showModal}">
      <div class="modal" v-bind:class="{show:showModal}">
        <div class="modal-header">
          <div>Title</div>
        </div>
        <div class="modal-wrapper">
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
        <div class="modal-actions">
          <div class="button default" @click="closeButton()" >Cancel</div>
          <div class="button primary" @click="closeButton()">Action</div>
        </div>
      </div>
    </div>

    <!-- Long -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showLongModal}"></div>
    <div id="__chekt-modal" v-bind:class="{show:showLongModal}">
      <div class="modal" v-bind:class="{show:showLongModal}">
        <div class="modal-header">
          <div>Title</div>
        </div>
        <div class="modal-wrapper">
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
        <div class="modal-actions">
          <div class="button default" @click="closeButton()" >Cancel</div>
          <div class="button primary" @click="closeButton()">Action</div>
        </div>
      </div>
    </div>

    <!-- View more -->
    <div id="__chekt-modal-backdrop" v-bind:class="{show:showViewMoreModal}"></div>
    <div id="__chekt-modal" v-bind:class="{show:showViewMoreModal}">
      <div class="modal" v-bind:class="{show:showViewMoreModal}">
        <div class="modal-header">
          <div>Title</div>
        </div>
        <div class="modal-wrapper">
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
          <div @click="onClickViewMore()" class="view-more" style="margin-bottom:20px;">
            <div v-bind:class="{rorate:isViewMoreShow}" class="view-more-icon"><MyIcon v-bind:icon="'arrow-right'" v-bind:width="12" /></div>
            <div class="view-more-text">View more</div>
          </div>
          <div class="view-more-contents" v-bind:class="{show:isViewMoreShow}">
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
        <div class="modal-actions">
          <div class="button default" @click="closeButton()" >Cancel</div>
          <div class="button primary" @click="closeButton()">Action</div>
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

#__chekt-modal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  visibility: hidden;
  z-index: 9100;
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0;
}
#__chekt-modal.show  {
  visibility: visible;
}

/*******************/
/***** Default *****/
/*******************/

#__chekt-modal .modal {
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: 0 7px 14px 0 rgb(60 66 87 / 8%), 0 3px 6px 0 rgb(0 0 0 / 12%);
  border-radius: 5px;
  background-color: var(--chekt-blue-gray-lower);
  z-index: 9100;
  position: relative;
  transform: scale(.8);
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  max-height: calc(100vh - 2 * 50px);
  max-width: calc(100% - 40px);
  min-width: 300px;
}
#__chekt-modal .modal-header {
  padding: 16px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: solid 1px var(--chekt-border);
}
#__chekt-modal .modal-wrapper {
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  overflow: hidden;
  overflow: auto;
}
#__chekt-modal .modal.show  {
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1)
}

/*******************/
/***** Large *******/
/*******************/
#__chekt-modal .modal.large {
  width: 500px; 
}

/*******************/
/***** Small *******/
/*******************/
#__chekt-modal .modal.small {
  width: 240px
}




.modal-actions {
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: end;
  grid-gap: 10px;
  align-items: center;
  padding: 10px 20px;
  font-size: 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: solid 1px var(--chekt-border);
}

/********************/
/***** Backdrop *****/
/********************/

#__chekt-modal-backdrop {
  visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: var(--chekt-backdrop-color);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9000;
  opacity: 0;
}
#__chekt-modal-backdrop.show {
  visibility: visible;
  opacity: 1;
  transition: opacity .2s;
}


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
.button {
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}
.button.default {
  background-color: white;
  color: var(--chekt-text-high);
}
/* primary color button */
.button.primary {
  background-color: var(--chekt-primary-color);
}
.button.primary:hover {
  background-color: var(--chekt-primary-shadow-color);
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
  background-color: white;
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

/*************************/
/****** View More ********/
/*************************/
.view-more {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  grid-gap: 5px;
  color: var(--chekt-primary-color);
}
.view-more:hover {
  cursor: pointer;
  color: var(--chekt-text-high);
}
.view-more-text {
  font-size: 14px;
  font-weight: 500;
}
.view-more-icon {
  transform: rotate(0deg);
  transition: transform .5s;
}

.view-more-icon.rorate {
  transform: rotate(90deg);
  transition: transform .5s;
}
.view-more-contents {
  display: none;
}
.view-more-contents.show {
  display: block;
}
</style>
 