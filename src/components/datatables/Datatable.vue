<template>
  <div style="width:100%;">
    <div class="tables" style="margin-bottom: 50px;">
      <div class="table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="table-header padding-all--8">
            <tr>
              <td class="table-cell--width--minimized">id</td>
              <td>name</td>
              <td>email</td>
              <td>date</td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="table-body padding-all--8">
            <tr>
              <td>23442</td>
              <td>bobby kim</td>
              <td>bobbyk@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 4, 2020, 2:58 PM</td>
            </tr>
            <tr>
              <td>12244</td>
              <td>kevin park</td>
              <td>kevinp@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 12, 2020, 1:23 PM</td>
            </tr>
            <tr>
              <td>15724</td>
              <td>trevor seo</td>
              <td>trevors@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 14, 2020, 9:11 AM</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="tables" style="margin-bottom: 50px;">
      <div class="table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="table-header padding-all--12">
            <tr>
              <td class="table-cell--width--minimized">id</td>
              <td>name</td>
              <td>email</td>
              <td>date</td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="table-body padding-all--12">
            <tr>
              <td>23442</td>
              <td>bobby kim</td>
              <td>bobbyk@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 4, 2020, 2:58 PM</td>
            </tr>
            <tr>
              <td>12244</td>
              <td>kevin park</td>
              <td>kevinp@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 12, 2020, 1:23 PM</td>
            </tr>
            <tr>
              <td>15724</td>
              <td>trevor seo</td>
              <td>trevors@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 14, 2020, 9:11 AM</td>
            </tr>
          </tbody>

        </table>
      </div>
    </div>

    <div class="tables">
      <div class="table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="table-header padding-all--16">
            <tr>
              <td class="table-cell--width--minimized">id</td>
              <td>name</td>
              <td>email</td>
              <td>date</td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="table-body padding-all--16">
            <tr>
              <td>23442</td>
              <td>bobby kim</td>
              <td>bobbyk@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 4, 2020, 2:58 PM</td>
            </tr>
            <tr>
              <td>12244</td>
              <td>kevin park</td>
              <td>kevinp@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 12, 2020, 1:23 PM</td>
            </tr>
            <tr>
              <td>15724</td>
              <td>trevor seo</td>
              <td>trevors@gmail.com</td>
              <td class="table-cell--width--minimized">Aug 14, 2020, 9:11 AM</td>
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


</style>
