<template>
  <div style="width:100%;">

    <!-- Text -->
    <div class="text">Text</div>
    <div class="__chekt-input-text" style="margin-bottom:30px;">
      <input autofocus type="email" placeholder="Enter text">
    </div>

    <!-- Number -->
    <div class="text">Number</div>
    <div class="__chekt-input-text number" style="margin-bottom:30px;">
      <input autofocus type="number" placeholder="10000">
    </div>

    <!-- PASSWORD -->
    <div class="text">Password</div>
    <div 
    class="__chekt-input-text" 
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
      <div v-show="showEye" v-on:click="showHideEye()" class="__chekt-input-password-eyes-padding" id="show-hide-eye">

        <!-- EYE ICONS -->
        <div 
        v-if="isEyeOff"
        @mouseover="onHoverTooltip($event)" 
        @mouseout="onCloseTooltip($event)">
          <MyIcon class="__chekt-input-password-eyes" v-bind:icon="'eye-off'" v-bind:width="18"/>
        </div>
        <div 
        v-else
        @mouseover="onHoverTooltip($event)" 
        @mouseout="onCloseTooltip($event)">
          <MyIcon class="__chekt-input-password-eyes" v-bind:icon="'eye'" v-bind:width="18"/>
        </div>

        <!-- TOOLTIP -->
        <span v-if="isEyeOff" ref="chektTooltip" id="__chekt-tooltip">Hide password</span>
        <span v-else ref="chektTooltip" id="__chekt-tooltip">Show password</span>
      </div>
    </div>

    <!-- Disabled -->
    <div class="text">Disabled</div>
    <div class="__chekt-input-text disabled" style="margin-bottom:30px;">
      <input type="email" placeholder="Enter text" disabled>
    </div>

    <!-- Error -->
    <div class="text">Error</div>
    <div class="__chekt-input-text error">
      <input type="email" placeholder="Enter text">
    </div>
    <div class="__chekt-input-text-error-msg">
      <MyIcon v-bind:icon="'error'" v-bind:width="14" style="margin-right:2px;"/>
      This is an error text.
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
      isNumberSmallInputFocused: false,
      price:0,
      priceInput: '',
    }
  },
  watch: {
    password: function () {
      this.passwordSecureCheck()
    },
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
      this.tooltipEl = this.$refs.chektTooltip
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
    },
  }
}
</script>

<style scoped>
/* src/styles/dealer-input.css */
</style>
