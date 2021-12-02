<template>
  <div>
    <div class="dialogs">
      <div class="dialog-wrapper">
        <div class="dialog" v-bind:class="{ active:defaultTopBtnIsClicked }">
          <div>Save</div>
          <div>Edit</div>
          <div class="delete">Delete</div>
        </div>
        <div @click="onClickButton('default top')" id="dialogbtn1" class="button default">Click me</div>
      </div>
      <div class="dialog-wrapper">
        <div class="dialog right" v-bind:class="{ active:defaultRightBtnIsClicked }">
          <div>Save</div>
          <div>Edit</div>
          <div class="delete">Delete</div>
        </div>
        <div @click="onClickButton('default right')" id="dialogbtn2" class="button default">Click me</div>
      </div>
      <div class="dialog-wrapper">
        <div class="dialog left" v-bind:class="{ active:defaultLeftBtnIsClicked }">
          <div>Save</div>
          <div>Edit</div>
          <div class="delete">Delete</div>
        </div>
        <div @click="onClickButton('default left')" id="dialogbtn3" class="button default">Click me</div>
      </div>
      <div class="dialog-wrapper">
        <div class="dialog bottom" v-bind:class="{ active:defaultBottomBtnIsClicked }">
          <div>Save</div>
          <div>Edit</div>
          <div class="delete">Delete</div>
        </div>
        <div @click="onClickButton('default bottom')" id="dialogbtn4" class="button default">Click me</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  computed: {
  },
  data: function() {
    return {
      defaultTopBtnIsClicked: false,
      defaultRightBtnIsClicked: false,
      defaultLeftBtnIsClicked: false,
      defaultBottomBtnIsClicked: false,
    }
  },
  watch: {
  },
  created: function () {
    document.body.addEventListener('click', this.closeButton, true); 
  },
  mounted: function () {
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true); 
  },
  methods: {
    onClickButton: function (buttonType) {
      switch (buttonType) {
        case 'default top':
          this.defaultTopBtnIsClicked =! this.defaultTopBtnIsClicked
          this.defaultRightBtnIsClicked = false
          this.defaultLeftBtnIsClicked = false  
          this.defaultBottomBtnIsClicked = false        
          break;
        case 'default right':
          this.defaultRightBtnIsClicked =! this.defaultRightBtnIsClicked
          this.defaultTopBtnIsClicked = false
          this.defaultLeftBtnIsClicked = false  
          this.defaultBottomBtnIsClicked = false        
          break;
        case 'default left':
          this.defaultLeftBtnIsClicked =! this.defaultLeftBtnIsClicked
          this.defaultTopBtnIsClicked = false
          this.defaultRightBtnIsClicked = false  
          this.defaultBottomBtnIsClicked = false          
          break;
        case 'default bottom':
          this.defaultBottomBtnIsClicked =! this.defaultBottomBtnIsClicked
          this.defaultTopBtnIsClicked = false
          this.defaultLeftBtnIsClicked = false  
          this.defaultRightBtnIsClicked = false          
          break;
        default:
          break;
      }
    },
    closeButton: function (e) {
      if (e.target.id === 'dialogbtn1' || 
          e.target.id === 'dialogbtn2' || 
          e.target.id === 'dialogbtn3' || 
          e.target.id === 'dialogbtn4'
          ) return
      else {
        this.defaultTopBtnIsClicked = false
        this.defaultRightBtnIsClicked = false
        this.defaultLeftBtnIsClicked = false
        this.defaultBottomBtnIsClicked = false
      }
    },
  }
}
</script>

<style scoped>

.dialogs {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

/* DIALOG */
.dialog-wrapper {
  position: relative;
}

.dialog {
  position: absolute;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px var(--chekt-border);
  border: 1px solid var(--chekt-border);
  border-radius: 5px;
  min-width: 100%;
  z-index: 1;
  visibility: hidden;
  background-color: white;
  transform:scale(.8);
  opacity: 0;
  inset: auto 0px 37px auto;
  white-space: nowrap;
  padding: 5px 0px;
}

.dialog.right {
  inset: auto -82px 0px auto;
}
.dialog.left {
  inset: auto 81px 0px auto;
}
.dialog.bottom {
  inset: auto 0px -112px auto;
}

.dialog .category {
  font-size: 12px;
  padding: 14px 10px 7px 10px;
  color: var(--chekt-blue-gray-higher);
  pointer-events: none;
}
.dialog .line {
  border-bottom: solid 1px var(--chekt-border);
  height: 1px;
  padding: 0;
}
.dialog .icon {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 5px;
}
.dialog > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
.dialog div.delete {
  color: var(--chekt-danger-shadow-color);
}
.dialog div:hover {
  background-color: var(--chekt-blue-gray-lower);
  color: var(--chekt-text-high);
}
.dialog.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}

/* BUTTON */

.button {
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
/* color button */
.button.default {
  background-color: white;
  color: var(--chekt-text-high);
}

/* button hover */
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}

</style>
