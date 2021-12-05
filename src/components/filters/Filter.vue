<template>
  <div>
    <div class="filters">

      <!-- Button -->
      <div class="button default icon"> <MyIcon v-bind:icon="'filter'" v-bind:width="18" /> Filter </div>

      <!-- Filter -->
      <div id="__chekt-filter">
        <!-- Header -->
        <div class="filter-header">
          <div class="button-small default">Clear</div>
          <div class="filter-header-text">Filter</div>
          <div class="button-small primary">Done</div>
        </div>
        <!-- Body -->
        <div class="filter-body">

          <!-- Item -->
          <div class="filter-body-item">

            <!-- Item > Title -->
            <div class="filter-body-item-title">
              <!-- Checkbox -->
              <div>
                <label class="checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>
              <!-- Text -->
              <div class="title-text">Date</div>
            </div>

            <!-- Item > Content -->
            <div class="filter-body-item-content">

              <!-- Content main -->
              <div>
                <div id="__chekt-select">
                  <select @change="onChangePeriodType($event)" class="select">
                    <option value="0">is in the last</option>
                    <option value="1">is equal to</option>
                    <option value="2">is between</option>
                    <option value="3">is after</option>
                    <option value="4">is before</option>
                  </select>
                  <div class="select-icon">
                    <MyIcon v-bind:icon="'folder-open'" v-bind:width="18" />
                  </div>
                </div>
              </div>

              <!-- Content sub 0 -->
              <div v-if="selectType === '0'" class="content-sub">
                <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
                <div>
                  <div class="input-text">
                    <input v-model="message" @input="maxLengthCheck(message)" type="number" placeholder="0">
                  </div>
                </div>
                <div style="margin-left:5px;">
                  <div id="__chekt-select">
                    <select class="select">
                      <option value="0">days</option>
                      <option value="1">months</option>
                    </select>
                    <div class="select-icon">
                      <MyIcon v-bind:icon="'folder-open'" v-bind:width="18"/>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content sub 1 -->
              <div v-else-if="selectType === '1'" class="content-sub">
                <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
                <div>
                  <div class="input-text">
                    <input v-model="message" @input="maxLengthCheck(message)" type="number" placeholder="0">
                  </div>
                </div>
              </div>

              <!-- Content sub 2 -->
              <div v-else-if="selectType === '2'" class="content-sub">
                <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
                <div>
                  <div class="input-text">
                    <input v-model="message" @input="maxLengthCheck(message)" type="number" placeholder="0">
                  </div>
                </div>
                <div style="margin-left:5px;">
                  <div id="__chekt-select">
                    <select class="select">
                      <option value="0">days</option>
                      <option value="1">months</option>
                    </select>
                    <div class="select-icon">
                      <MyIcon v-bind:icon="'folder-open'" v-bind:width="18"/>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content sub 3 -->
              <div v-else-if="selectType === '3'" class="content-sub">
                <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
                <div>
                  <div class="input-text">
                    <input v-model="message" @input="maxLengthCheck(message)" type="number" placeholder="0">
                  </div>
                </div>
                <div style="margin-left:5px;">
                  <div id="__chekt-select">
                    <select class="select">
                      <option value="0">days</option>
                      <option value="1">months</option>
                    </select>
                    <div class="select-icon">
                      <MyIcon v-bind:icon="'folder-open'" v-bind:width="18"/>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Content sub 4 -->
              <div v-else-if="selectType === '4'" class="content-sub">
                <div class="content-sub-icon"><MyIcon v-bind:icon="'arrow-down-right'" v-bind:width="24" /></div>
                <div>
                  <div class="input-text">
                    <input v-model="message" @input="maxLengthCheck(message)" type="number" placeholder="0">
                  </div>
                </div>
                <div style="margin-left:5px;">
                  <div id="__chekt-select">
                    <select class="select">
                      <option value="0">days</option>
                      <option value="1">months</option>
                    </select>
                    <div class="select-icon">
                      <MyIcon v-bind:icon="'folder-open'" v-bind:width="18"/>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <!-- Item -->
          <div class="filter-body-item">
            <div class="filter-body-item-title">
              <!-- Checkbox -->
              <div>
                <label class="checkbox">
                  <input type="checkbox">
                  <span class="checkmark"></span>
                </label>
              </div>
              <!-- Text -->
              <div class="item-text">Amount</div>
            </div>
          </div>

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
      message: '',
      selectType: '0',
      isInTheLast: true,
      isEqualTo: false,
      isBetweem: false,
      isAfter: false,
      isBefore: false,
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
    onChangePeriodType: function (e) {
      this.selectType = e.target.value
      console.log(this.selectType);

      // switch (type) {
      //   case '0':
      //     this.isInTheLast = true
      //     this.isEqualTo = false 
      //     this.isBetweem = false 
      //     this.isAfter = false 
      //     this.isBefore = false 
      //     break;
      //   case '1':
      //     this.isEqualTo = true    
      //     break;
      //   case '2':
      //     this.isBetweem = true    
      //     break;
      //   case '3':
      //     this.isAfter = true    
      //     break;
      //   case 4:
      //     this.isBefore = true    
      //     break;
      
      //   default:
      //     break;
      // }


    },
    onClickButton: function () {
    },
    closeButton: function () {

    },
    maxLengthCheck: function (message){
    if (message.length > 3){
        this.message = message.slice(0, 3);
      }    
    },
  }
}
</script>

<style scoped>

.filters {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

/* FILTER */

#__chekt-filter {
  width: 250px;
  box-shadow: 
  0 0 0 1px rgb(136 152 170 / 10%), 
  0 15px 35px 0 rgb(49 49 93 / 10%), 
  0 5px 15px 0 rgb(0 0 0 / 8%);
  border-radius: 5px;
}
.filter-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--chekt-blue-gray-lower);
  padding: 10px;
}
.filter-header-text {
  font-size: 14px;
  color: var(--chekt-text-high);
}
.filter-body-item {
  border-top: 1px solid var(--chekt-border);
}
.filter-body-item-title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  grid-gap: 10px;
  padding: 10px 10px;
}
.filter-body-item-title > .title-text {
  color: var(--chekt-blue-gray-highest);
}
.filter-body-item-content {
  background-color: var(--chekt-blue-gray-lower);
  border-top: 1px solid var(--chekt-border);
  padding: 10px;
}

.content-sub {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
}
.content-sub-icon {
  color: var(--chekt-primary-color);
}



/* BUTTON */

/* common button */
.button {
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.button-small {
  padding: 5px 8px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 12px;
  cursor: pointer;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
}
.button-large {
  padding: 9px 12px;
  color: var(--chekt-text-high);
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}
.button-small:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}
.button-large:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
}
.button.icon, .button-small.icon, .button-large.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
}

/* default color button */

.button.default, .button-small.default {
  background-color: white;
  color: var(--chekt-text-high);
}
/* primary color button */

.button.primary, .button-small.primary {
  background-color: var(--chekt-primary-color);
}
.button.primary:hover, .button-small.primary:hover {
  background-color: var(--chekt-primary-shadow-color);
}
/* danger color button */
.button.danger {
  background-color: var(--chekt-danger-color);
}
.button.danger:hover {
  background-color: var(--chekt-danger-shadow-color);
}
/* success color button */
.button.success {
  background-color: var(--chekt-success-color);
}
.button.success:hover {
  background-color: var(--chekt-success-shadow-color);
}



/* CHECKBOX */

.checkboxes {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}

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



/* SELECT */

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
    padding: 3px 6px;
    -webkit-appearance: none;
    width: 100%;
    appearance: none;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    line-height: 20px;
    cursor: pointer;
    padding-right: 29px;

    /* Select에서 폰트가 안먹기 때문에 따로 선언 (폰트 굵기설정이 안됨) */
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 500;
    font-size: 13px;
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

/* TEXT */

.input-text {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 70px;
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

</style>
