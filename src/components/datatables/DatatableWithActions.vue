<template>
  <div style="width:100%;">
    <div class="tables">
      <div id="table-with-dialog" class="table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="table-header padding-all--8">
            <tr>
              <td class="table-cell--width--minimized">id</td>
              <td>name</td>
              <td>email</td>
              <td class="table-cell--width--minimized">date</td>
              <td class="table-cell--width--minimized"></td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="table-body padding-all--8">
            <tr>
              <td>23442</td>
              <td>bobby kim</td>
              <td>bobbyk@gmail.com</td>
              <td>Aug 4, 2020, 2:58 PM</td>
              <td>
                <div class="__chekt-dialog">
                  <div>Edit</div>
                  <div>Download</div>
                  <div class="delete">Delete</div>
                </div>
                <div @click="onClickMoreButton($event)" class="more"><MyIcon v-bind:icon="'more'" v-bind:width="18" /></div>
              </td>
            </tr>
            <tr>
              <td>12244</td>
              <td>kevin park</td>
              <td>kevinp@gmail.com</td>
              <td>Aug 12, 2020, 1:23 PM</td>
              <td>
                <div class="__chekt-dialog">
                  <div>Edit</div>
                  <div>Download</div>
                  <div class="delete">Delete</div>
                </div>
                <div @click="onClickMoreButton($event)" class="more"><MyIcon v-bind:icon="'more'" v-bind:width="18" /></div>
              </td>
            </tr>
            <tr>
              <td>15724</td>
              <td>trevor seo</td>
              <td>trevors@gmail.com</td>
              <td>Aug 14, 2020, 9:11 AM</td>
              <td>
                <div class="__chekt-dialog">
                  <div>Edit</div>
                  <div>Download</div>
                  <div class="delete">Delete</div>
                </div>
                <div @click="onClickMoreButton($event)" class="more">
                  <MyIcon v-bind:icon="'more'" v-bind:width="18" />
                </div>
              </td>
            </tr>
          </tbody>

        </table>
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
    document.body.addEventListener('click', this.closeButton, true); 
    window.addEventListener("resize", this.onResizeScreen)
    window.addEventListener("scroll", this.onScroll)
  },
  mounted: function () {
    var talbe = document.getElementById('table-with-dialog')
    talbe.addEventListener('scroll', this.onScrollInTable)
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true);
    window.removeEventListener('scroll', this.onScrollInTable)
    window.removeEventListener("resize", this.onResizeScreen)
    window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onClickMoreButton: function (e) {

      e.stopPropagation()
      // this.$tool.getisDialogShow(e)
      
      // GET - dialog element
      this.dialogEl = e.currentTarget.parentNode.getElementsByClassName('__chekt-dialog')[0]
      if (!this.dialogEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth +'px'

      // ACTION - toggle show/hidden
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    closeButton: function (e) {
      if (!this.dialogEl) return
      if (this.dialogEl.classList.contains('active')) e.stopPropagation()
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onScrollInTable: function () {
      if (!this.dialogEl) return
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    onScroll: function () {
      // GET - dialog element
      if (!this.dialogEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth +'px'
    },
    onResizeScreen: function () {
      // GET - dialog element
      if (!this.dialogEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth +'px'

    }
  }
}
</script>

<style scoped>
.tables {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

/* TABLE */
.table {
  width: 100%;
  max-width: 100%;
  max-height: 90%;
  /* border-collapse: collapse; */
  white-space: nowrap;
  overflow: hidden;
  max-height: 100%;
}

/* TABLE SCROLL */
.table:hover {
  overflow-x: auto;
  overflow: overlay;
}
.table::-webkit-scrollbar {
  -webkit-appearance: none;
}
.table::-webkit-scrollbar-track {
  opacity: 0;
}
.table::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, .2);
}
/* ////TABLE SCROLL */

.table > table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}
.table-body {
  font-size: 14px;
  font-weight: 400;
  color: var(--chekt-blue-gray-highest);
}
.table-header {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--chekt-blue-gray-higher);
  background-color: var(--chekt-blue-gray-low);
}
.table-cell--width--minimized {
  width: 1px;
}
.table-body > tr > td {
  box-shadow: inset 0 1px var(--chekt-border);
}
.table-body > tr:last-child  {
  box-shadow: inset 0 -1px var(--chekt-border);
}
.padding-all--8 > tr > td {
  padding: 8px;
}
.padding-all--12 > tr > td {
  padding: 12px;
}
.padding-all--16 > tr > td {
  padding: 16px;
}

.table-body > tr:hover {
  background-color: var(--chekt-blue-gray-lower);
  cursor: pointer;
}
.table-header > tr > td:first-child, .table-body > tr > td:first-child {
  padding-left: 20px;
}
.table-header > tr > td:last-child, .table-body > tr > td:last-child {
  padding-right: 20px;
}


/* MORE */

.more:hover {
  box-shadow:rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  background-color: white;
  transition: box-shadow .3s;
}
.more {
  width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.more:first-child {
  pointer-events: none;
}
.more.active {
  box-shadow:rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  background-color: white;
}
.__chekt-dialog {
  position: fixed;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px var(--chekt-border);
  border: 1px solid var(--chekt-border);
  border-radius: 5px;
  min-width: 100px;
  z-index: 1;
  visibility: hidden;
  background-color: white;
  transform:scale(.8);
  opacity: 0;
  /* inset: auto 18px 98px auto; */
  white-space: nowrap;
  padding: 5px 0px;
}
.__chekt-dialog.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}
.__chekt-dialog > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
.__chekt-dialog div.delete {
  color: var(--chekt-danger-shadow-color);
}
.__chekt-dialog div:hover {
  background-color: var(--chekt-blue-gray-lower);
  color: var(--chekt-text-high);
}
</style>
