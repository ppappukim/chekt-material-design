<template>
  <div style="width:100%;">
    <div class="tables">
      <div id="table-with-dialog" class="__chekt-table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="__chekt-table-header padding-all--8">
            <tr>
              <td class="table-cell--width--minimized">id</td>
              <td>name</td>
              <td>email</td>
              <td class="table-cell--width--minimized">date</td>
              <td class="table-cell--width--minimized"></td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="__chekt-table-body padding-all--8">
            <tr>
              <td>23442</td>
              <td>bobby kim</td>
              <td>bobbyk@gmail.com</td>
              <td>Aug 4, 2020, 2:58 PM</td>
              <td>
                <div id="__chekt-dialog">
                  <div>Edit</div>
                  <div>Download</div>
                  <div class="delete">Delete</div>
                </div>
                <div @click="onClickMoreButton($event)" class="__chekt-table-icon"><MyIcon v-bind:icon="'more'" v-bind:width="18" /></div>
              </td>
            </tr>
            <tr>
              <td>12244</td>
              <td>kevin park</td>
              <td>kevinp@gmail.com</td>
              <td>Aug 12, 2020, 1:23 PM</td>
              <td>
                <div id="__chekt-dialog">
                  <div>Edit</div>
                  <div>Download</div>
                  <div class="delete">Delete</div>
                </div>
                <div @click="onClickMoreButton($event)" class="__chekt-table-icon"><MyIcon v-bind:icon="'more'" v-bind:width="18" /></div>
              </td>
            </tr>
            <tr>
              <td>15724</td>
              <td>trevor seo</td>
              <td>trevors@gmail.com</td>
              <td>Aug 14, 2020, 9:11 AM</td>
              <td>
                <div id="__chekt-dialog">
                  <div>Edit</div>
                  <div>Download</div>
                  <div class="delete">Delete</div>
                </div>
                <div @click="onClickMoreButton($event)" class="__chekt-table-icon">
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
      this.dialogEl = document.getElementById('__chekt-dialog')
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
      // closest() - 이하 모든 자식노드를 클릭했을때 감지됨!! 
      if (e.target.closest("#__chekt-dialog")) return
      
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
/* src/styles/dealer-datatable.css */
.tables {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
</style>
