<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Dialog With Category</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Dialog With Icon</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Dialog
        </div>
        <div class="__dealer-description">
          An inline dialog is a pop-up container for small amounts of information. It can also contain controls.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Table  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Default
          </div>
          <div class="__dealer-subdescription">
            dialogs are displayed when triggered by a user action, usually by clicking a button.</div>
          <!-- DEMO -->
          <div class="__dealer-demo">
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
        </section>

        <!-- Dialog With Category  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Dialog With Category
          </div>
          <div class="__dealer-subdescription">
            Table may include an checkbox before or after the cell.
          </div>
          <!-- DEMO -->
          <div class="__dealer-demo">
            <div class="dialog-wrapper">
              <div class="dialog" v-bind:class="{ active:CategoryBtnIsClicked }">
                <div class="category">ACTIONS</div>
                <div>Save</div>
                <div>Edit</div>
                <div class="delete">Delete</div>
                <div class="line"></div>
                <div class="category">CONNECTIONS</div>
                <div>View customer</div>
                <div>View site</div>
              </div>
              <div @click="onClickButtonCategory()" id="dialogbtnCate" class="button default">Click me</div>
            </div>
          </div>
        </section>

        <!-- Dialog With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Dialog With Icon
          </div>
          <div class="__dealer-subdescription">
            Table may include an Icon before or after the Text.
          </div>
          <!-- DEMO -->
          <div class="__dealer-demo">
            <div class="dialog-wrapper">
              <div class="dialog" v-bind:class="{ active:IconBtnIsClicked }">
                <div class="icon">
                  <MyIcon v-bind:icon="'edit'" v-bind:width="18" />
                  <div>Edit</div>
                </div>
                <div class="icon">
                  <MyIcon v-bind:icon="'download'" v-bind:width="18" />
                  <div>Download</div>
                </div>
                <div class="icon delete">
                  <MyIcon v-bind:icon="'delete'" v-bind:width="18" />
                  <div>Delete</div>
                </div>
              </div>
              <div @click="onClickButtonIcon()" id="dialogbtnIcon" class="button default">Click me</div>
            </div>
          </div>

        </section>


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
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
  },
  data: function() {
    return {
      defaultTopBtnIsClicked: false,
      defaultRightBtnIsClicked: false,
      defaultLeftBtnIsClicked: false,
      defaultBottomBtnIsClicked: false,
      CategoryBtnIsClicked: false,
      IconBtnIsClicked: false
    }
  },
  watch: {
    scrollPositon: function () {
      this.onScroll()
    },
  },
  created: function () {
    this.$tool.scrollTo(0, 0)
  },
  mounted: function () {
    this.onScroll()
    document.body.addEventListener('click', this.closeButton, true); 
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true); 
  },
  methods: {
    onClickContent: function (type) {
      switch (type) {
      case '1':
        location.href = "#dealer-content-move1";
        break;
      case '2':
        location.href = "#dealer-content-move2";
        break;
      case '3':
        location.href = "#dealer-content-move3";
        break;
      default:
      }
    },
    onScroll: function () {
      var sections = ''
      var contentMenus = ''
      sections = document.querySelectorAll('.__dealer-component-content section')
      contentMenus = document.querySelectorAll('.__dealer-contents-widget .__dealer-contents-body div')
      this.$tool.scrollContentsWidgetMoving(sections, contentMenus)
    },
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
    onClickButtonCategory: function () {
      this.CategoryBtnIsClicked =! this.CategoryBtnIsClicked
    },
    onClickButtonIcon: function () {
      this.IconBtnIsClicked =! this.IconBtnIsClicked
    },
    closeButton: function (e) {
      if (e.target.id === 'dialogbtn1' || 
          e.target.id === 'dialogbtn2' || 
          e.target.id === 'dialogbtn3' || 
          e.target.id === 'dialogbtn4' ||
          e.target.id === 'dialogbtnCate' ||
          e.target.id === 'dialogbtnIcon'
          ) return
      else {
        this.defaultTopBtnIsClicked = false
        this.defaultRightBtnIsClicked = false
        this.defaultLeftBtnIsClicked = false
        this.defaultBottomBtnIsClicked = false
        this.CategoryBtnIsClicked = false
        this.IconBtnIsClicked = false
      }
    },
  }
}
</script>

<style scoped>
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
