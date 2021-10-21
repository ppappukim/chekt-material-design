<template>
  <div class="textinput">

    <!-- Text -->
    <div class="text">Text</div>
    <div class="input-text" style="margin-bottom:30px;">
      <input autofocus type="email" placeholder="Enter text">
    </div>

    <!-- PASSWORD -->
    <div class="password">Password</div>
    <div 
    class="input-password" 
    v-bind:class="{focused:isInputFocused}" 
    style="margin-bottom:20px;" >
      <input 
      @focus="passowrdFocused()"
      @blur="passowrdBlured()"
      v-model="password" 
      id="resetpassword-password"
      type="password"
      placeholder="Enter password"
      autocomplete="new-password">
      <div v-show="showEye" v-on:click="showHideEye()" class="eyes" id="show-hide-eye">

        <!-- EYE ICONS -->
        <div 
        v-if="isEyeOff"
        @mouseover="onHoverTooltip($event)" 
        @mouseout="onCloseTooltip($event)">
          <MyIcon class="password-eyes" v-bind:icon="'eye-off'" v-bind:width="18"/>
        </div>
        <div 
        v-else
        @mouseover="onHoverTooltip($event)" 
        @mouseout="onCloseTooltip($event)">
          <MyIcon class="password-eyes" v-bind:icon="'eye'" v-bind:width="18"/>
        </div>

        <!-- TOOLTIP -->
        <span v-if="isEyeOff" id="__chekt-tooltip">Hide password</span>
        <span v-else id="__chekt-tooltip">Show password</span>
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
      password: '',
      showEye: false,
      isEyeOff: false,
      tooltipEl: '',
      targetEl: '',
      isInputFocused: false,
    }
  },
  watch: {
    password: function () {
      this.passwordSecureCheck()
    }
  },
  created: function () {
  },
  mounted: function () {
  },
  methods: {
    showHideEye: function () {
      // 클릭하면 비밀번호 보여주기
      if (this.isEyeOff === false) this.isEyeOff = true
      else this.isEyeOff = false
      var password = document.getElementById("resetpassword-password")
      if (password.type === 'password') password.type = 'text'
      else password.type = 'password'
    },
    passwordSecureCheck: function () {
      // 1글자 이상입력시 눈아이콘 보여주기
      if (this.password.length > 0) this.showEye = true
      else this.showEye = false
    },
    onHoverTooltip: function (e) {
      e.stopPropagation()

      // GET - dialog element
      this.tooltipEl = document.getElementById('__chekt-tooltip')
      if (!this.tooltipEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.tooltipEl.style.top = this.targetRect.y + ( (this.targetEl.offsetHeight - this.tooltipEl.offsetHeight) / 2 ) +'px'
      this.tooltipEl.style.left = this.targetRect.x + this.targetEl.offsetWidth + 5 +'px'

      // ACTION - show tooltip
      this.tooltipEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    onCloseTooltip: async function () {
      // ACTION - hidden tooltip
      this.tooltipEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    passowrdFocused: function () {
      this.isInputFocused = true
    },
    passowrdBlured: function () {
      this.isInputFocused = false
    }
  }
}
</script>

<style scoped>

/*********************/
/****** Text ********/
/*********************/

.input-text {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
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


/*********************/
/****** Password ******/
/*********************/
.input-password  {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  transition:box-shadow .3s;
}
.input-password.focused {
  box-shadow: 0 0 0 3px #AAD2F5;
}
.input-password.disabled {
  background-color: #FAFAFA;
  pointer-events: none;
}
.inputerror {
  border: solid 1px var(--danger) !important;
}
.confirminputerror {
  border: solid 1px var(--danger) !important;
}
.input-password input {
  width: 100%;
  font-size: 14px;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
}
.input-password input.disabled {
  background-color: #FAFAFA;
  /* rgba(239, 239, 239, 0.3), rgba(59, 59, 59, 0.3)); */
}
.input-password input::placeholder {
  color: var(--chekt-gray-low);
}
.input-password  input:focus {
  outline: none; 
  /* box-shadow: 0 0 0 3px #AAD2F5; */
}

.password {
  margin-top:30px;
  font-size: 14px;
  color: var(--chekt-gray-high);
  text-align: start;
  margin-bottom: 10px;
}
.password-eyes {
  cursor: pointer;
  text-align: center;
  color: var(--chekt-blue-gray-high);
}


/*********************/
/****** Tooltip ******/
/*********************/

.eyes {
  padding-right: 10px;
}

#__chekt-tooltip {
  position: fixed;
  padding: 3px 10px;
  background-color: var(--chekt-blue-gray-highest);
  color: white;
  font-size: 14px;
  border-radius: 3px;
  opacity: 0;
  transition: opacity .5s cubic-bezier(0.075, 0.82, 0.165, 1);
}

#__chekt-tooltip.active {
  opacity: 1;
  transition: opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.eyes:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

</style>
