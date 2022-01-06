<template>
  <div style="width:100%;">
    <div class="tables">
      <div class="__chekt-table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="__chekt-table-header padding-all--8">
            <tr>
              <td class="table-cell--width--minimized">
                <label class="__chekt-checkbox">
                  <input @click="checkboxAllToggle()" type="checkbox" id="header-checkbox">
                  <span class="__chekt-checkmark"></span>
                </label>
              </td>
              <td class="table-cell--width--minimized">id</td>
              <td>name</td>
              <td>email</td>
              <td class="table-cell--width--minimized">date</td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="__chekt-table-body padding-all--8">
            <tr>
              <td>
                <label class="__chekt-checkbox">
                  <input @click="checkboxToggle()" type="checkbox">
                  <span class="__chekt-checkmark"></span>
                </label>
              </td>
              <td>23442</td>
              <td>bobby kim</td>
              <td>bobbyk@gmail.com</td>
              <td>Aug 4, 2020, 2:58 PM</td>
            </tr>
            <tr>
              <td>
                <label class="__chekt-checkbox">
                  <input @click="checkboxToggle()" type="checkbox">
                  <span class="__chekt-checkmark"></span>
                </label>
              </td>
              <td>12244</td>
              <td>kevin park</td>
              <td>kevinp@gmail.com</td>
              <td>Aug 12, 2020, 1:23 PM</td>
            </tr>
            <tr>
              <td>
                <label class="__chekt-checkbox">
                  <input @click="checkboxToggle()" type="checkbox">
                  <span class="__chekt-checkmark"></span>
                </label>
              </td>
              <td>15724</td>
              <td>trevor seo</td>
              <td>trevors@gmail.com</td>
              <td>Aug 14, 2020, 9:11 AM</td>
            </tr>
          </tbody>

        </table>
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
    }
  },
  watch: {
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    checkboxAllToggle: function() {
      // INIT - all check box in to array
      var inputElements = document.querySelectorAll('.__chekt-table-body input')

      // ACTION - all check box check
      if (document.getElementById("header-checkbox").checked) {
        for(var i=0; inputElements[i]; ++i){
          inputElements[i].checked = true
        }
      }
      else {
        for(var j=0; inputElements[j]; ++j){
          inputElements[j].checked = false
        }
      }
    },
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
