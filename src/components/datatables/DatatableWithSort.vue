<template>
  <div style="width:100%;">
    <div class="tables" style="margin-bottom: 50px;">
      <div class="__chekt-table">
        <table>
          <!-- TABLE HEAD -->
          <thead class="__chekt-table-header padding-all--8">
            <tr>
              <td
              v-for="key in columns"
              :key="key"
              @click="sortBy(key)"
              class="header-text"
              :class="[{ active: sortKey == key }, 
              { 'table-cell--width--minimized': key == 'id' || key == 'age' || key == 'date'  }]">
                <div>
                {{ key }}
                <div>
                  <MyIcon v-bind:icon="'expend-up'" v-bind:width="7" :class="sortOrders[key] < 0 ? 'dsc' : ''"/>
                  <MyIcon v-bind:icon="'expend-down'" v-bind:width="7" :class="sortOrders[key] > 0 ? 'asc' : ''"/>
                </div>
                </div>
              </td>
            </tr>
          </thead>
          <!-- TABLE BODY -->
          <tbody class="__chekt-table-body padding-all--8">
            <tr 
            v-for="entry in filteredMembers"
            :key="entry.name">
              <td 
              v-for="key in columns"
              :key="key">
                {{entry[key]}}
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
      sortKey: '',
      searchQuery: '',
      columns: ['id', 'name', 'email', 'age', 'date'],
      members: [
        { id: 23442, name: 'bobby kim', email: 'bobbyk@gmail.com', age: 24, date: 1640170977000 },
        { id: 12244, name: 'kevin park', email: 'kevinp@gmail.com', age: 32, date: 1640170995000 },
        { id: 15724, name: 'trevor seo', email: 'trevors@gmail.com', age: 22, date: 1640171001000 },
        { id: 12452, name: 'josh so', email: 'joshs@gmail.com', age: 29, date: 1640171006000 }
      ],
      filteredMembers: [],
      sortOrders: {}
    }
  },
  watch: {
  },
  created: function () {
    this.getFilteredHeroes()
    this.getSortOrders()
  },
  mounted: function () {
  },
  methods: {
    getFilteredHeroes: function () {
      var sortKey = this.sortKey
      var order = this.sortOrders[sortKey] || 1
      var members = this.members
      if (sortKey) {
        members = members.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      // Timestamp > date
      for (let i = 0; i < members.length; i++) {
        const hero = members[i];

        // GET
        var date = new Date(hero.date);
        var getDate = date.getDate()
        var getMonth = date.getMonth() + 1
        var getFullYear = date.getFullYear()
        var getHours = date.getHours()
        var getMinutes = date.getMinutes() < 10 ?  '0' + date.getMinutes():date.getMinutes()
        var getSeconds = date.getSeconds() < 10 ?  '0' + date.getSeconds():date.getSeconds()
        var modifiedTime = getMonth + "/" + getDate + " " + getFullYear + " " + getHours + ":" + getMinutes + ":" + getSeconds
        hero.date = modifiedTime
      }

      return this.filteredMembers = members
    },
    getSortOrders: function () {
      var sortOrders = {}
      this.columns.forEach(function (key) {
        sortOrders[key] = 1
      })
      return this.sortOrders = sortOrders
    },
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
      this.getFilteredHeroes()
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

.header-text:hover {
  color: var(--chekt-gray-high);
  cursor: pointer;
}
.header-text > div  {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 5px;
}

.header-text > div > div > .my-icon  {
  color: var(--chekt-blue-gray-mideumer);
}

.header-text.active {
  color: var(--chekt-primary-color);
}
.header-text.active .my-icon {
  opacity: 0;
}
.header-text.active .my-icon.asc {
  color: var(--chekt-primary-color);
  opacity: 1;
}
.header-text.active .my-icon.dsc {
  color: var(--chekt-primary-color);
  opacity: 1;
}



th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

</style>
