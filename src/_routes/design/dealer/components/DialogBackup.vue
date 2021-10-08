<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default button</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Button with icon</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Button in loading</div>
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
            Default Dialog
          </div>
          <div class="__dealer-subdescription">
            dialogs are displayed when triggered by a user action, usually by clicking a button.</div>
          <!-- DEMO -->
          <div class="__dealer-demo">
            <Dialog/>
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
              <div id="__chekt-dialog-category">
                <div class="category">ACTIONS</div>
                <div>Save</div>
                <div>Edit</div>
                <div class="delete">Delete</div>
                <div class="line"></div>
                <div class="category">CONNECTIONS</div>
                <div>View customer</div>
                <div>View site</div>
              </div>
              <div @click="onClickButtonCategory($event)" id="dialogbtnCate" class="button default">Click me</div>
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
              <div id="__chekt-dialog-icon">
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
              <div @click="onClickButtonIcon($event)" id="dialogbtnIcon" class="button default">Click me</div>
            </div>
          </div>

        </section>


      </div>

    </div>
  </div>
</template>

<script>
import MyIcon from '@/MyIcon'
import Dialog from '@/components/dialogs/Dialog'
export default {
  components: {
    MyIcon,
    Dialog
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
  },
  data: function() {
    return {
      dialogEl: '',
      targetEl: '',
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
    onClickButton: function (e, direction) {

      // GET - dialog element
      this.dialogEl = document.getElementById('__chekt-dialog')
      if (!this.dialogEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      switch (direction) {
        case 'up':
          this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
          this.dialogEl.style.left = this.targetRect.x  +'px'
          break;
        case 'bottom':
          this.dialogEl.style.top = this.targetRect.y + this.targetEl.offsetHeight + 5 +'px'
          this.dialogEl.style.left = this.targetRect.x  +'px'
          break;
        case 'left':
          this.dialogEl.style.top = this.targetRect.y +'px'
          this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth - 5 +'px'
          break;
        case 'right':
          this.dialogEl.style.top = this.targetRect.y + 'px'
          this.dialogEl.style.left = this.targetRect.x + this.targetEl.offsetWidth + 5 +'px'
          break;
        default:
          break;
      }

      // ACTION - toggle show/hidden
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onClickButtonCategory: function (e) {

      // GET - dialog element
      this.dialogEl = document.getElementById('__chekt-dialog-category')
      if (!this.dialogEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x  +'px'

      // ACTION - toggle show/hidden
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onClickButtonIcon: function () {
      this.IconBtnIsClicked =! this.IconBtnIsClicked
    },
    closeButton: function (e) {
      if (!this.dialogEl) return
      // closest() - #__chekt-datepicker 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-datepicker")) return
      if (this.dialogEl.classList.contains('active')) e.stopPropagation()
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
  }
}
</script>

<style scoped>
/* DIALOG */

.dialog-wrapper {
  position: relative;
}

#__chekt-dialog, #__chekt-dialog-category, #__chekt-dialog-icon{
  position: fixed;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px var(--chekt-border);
  border: 1px solid var(--chekt-border);
  border-radius: 5px;
  z-index: 1;
  visibility: hidden;
  background-color: white;
  transform:scale(.8);
  opacity: 0;
  white-space: nowrap;
}
#__chekt-dialog.active, #__chekt-dialog-category.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}

#__chekt-dialog-category .category {
  font-size: 12px;
  padding: 14px 10px 7px 10px;
  color: var(--chekt-blue-gray-higher);
  pointer-events: none;
}
#__chekt-dialog-category .line {
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
#__chekt-dialog > div, #__chekt-dialog-category > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
#__chekt-dialog div.delete, #__chekt-dialog-category > div.delete {
  color: var(--chekt-danger-shadow-color);
}
#__chekt-dialog div:hover, #__chekt-dialog-category div:hover {
  background-color: var(--chekt-blue-gray-lower);
  color: var(--chekt-text-high);
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

/* ANIMATIONS */

@keyframes pop {
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width:  %;
  }
}
</style>
