<template>
  <div style="width:100%;">
    <div class="tables">
      <div class="table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="table-header padding-all--8">
            <tr>
              <td class="table-cell--width--minimized">
                <label class="checkbox">
                  <input @click="checkboxAllToggle()" type="checkbox" id="header-checkbox">
                  <span class="checkmark"></span>
                </label>
              </td>
              <td class="table-cell--width--minimized">id</td>
              <td>name</td>
              <td>email</td>
              <td class="table-cell--width--minimized">date</td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="table-body padding-all--8">
            <tr>
              <td>
                <label class="checkbox">
                  <input @click="checkboxToggle()" type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>23442</td>
              <td>bobby kim</td>
              <td>bobbyk@gmail.com</td>
              <td>Aug 4, 2020, 2:58 PM</td>
            </tr>
            <tr>
              <td>
                <label class="checkbox">
                  <input @click="checkboxToggle()" type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </td>
              <td>12244</td>
              <td>kevin park</td>
              <td>kevinp@gmail.com</td>
              <td>Aug 12, 2020, 1:23 PM</td>
            </tr>
            <tr>
              <td>
                <label class="checkbox">
                  <input @click="checkboxToggle()" type="checkbox">
                  <span class="checkmark"></span>
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
      var inputElements = document.querySelectorAll('.table-body input')

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


/* CHECKBOX */

.checkbox {
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.checkbox-text {
  margin-left: 7px;
  color: var(--chekt-text-high);
  font-size: 14px;
}
.checkbox-text.small {
  font-size: 12px;
  margin-left: 6px;
}
.checkbox-text.large {
  font-size: 16px;
  margin-left: 8px;
}

/* Hide the browser's default checkbox */
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark.small {
  height: 12px;
  width: 12px;
  border-radius: 2px;
}
.checkmark {
  position: relative;
  top: 0;
  left: 0;
  height: 14px;
  width: 14px;
  border-radius: 3px;
  background-color: white;
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px ;
}
.checkmark.large {
  height: 16px;
  width: 16px;
  border-radius: 4px;
}

/* When the checkbox is checked, add a blue background */
.checkbox input:checked ~ .checkmark {
  background-color: var(--chekt-primary-color);
  box-shadow: rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(30 136 229) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  opacity: 1;
}
/* Click animation */
.checkbox input ~ .checkmark {
  transition: background-color .5s cubic-bezier(0.075, 0.82, 0.165, 1), box-shadow .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
/* Style the checkmark/indicator -- small */
.checkbox .checkmark.small:after {
  left: 3.5px;
  top: 0px;
  width: 2.1px;
  height: 6.8px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Style the checkmark/indicator */
.checkbox .checkmark:after {
  left: 4px;
  top: 0.2px;
  width: 3px;
  height: 8px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Style the checkmark/indicator -- large */
.checkbox .checkmark.large:after {
  left: 5px;
  top: 0.2px;
  width: 3px;
  height: 9px;
  border: solid white;
  border-width: 0 2.9px 2.9px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* Show the checkmark when checked */
.checkbox input:checked ~ .checkmark:after {
  display: block;
}


</style>
