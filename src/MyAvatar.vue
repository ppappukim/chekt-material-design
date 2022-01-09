<template>
  <div
  v-bind:style="{
    'font-size': width + 'px'
  }"
  class="my-avatar">
    <template v-if="icon === 'avatar'">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
          <circle cx="9" cy="9" r="9" fill="#C4C4C4"/>
          <circle cx="9" cy="9" r="8.5" stroke="black" stroke-opacity="0.1"/>
        </mask>
        <g mask="url(#mask0)">
          <rect width="18" height="18" rx="9" v-bind:style="{'fill': backgroundColor}"/>
          <circle cx="9" cy="19.5" r="9" v-bind:style="{'fill': color}"/>
          <circle cx="9" cy="6.75" r="3" v-bind:style="{'fill': color}"/>
        </g>
      </svg>
    </template>
    <template v-else-if="icon === 'avatar-name'">
      <div v-bind:style="{
      'background-color': backgroundColor, 
      'width': width + 'px', 
      'height': width + 'px' , 
      'font-size': nameSize + 'px'}" 
      class="avatar-name">
        {{avatarName}}
      </div>
    </template>
    <template v-else>
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  name: 'my-icon',
  props: {
    icon: {
      type: String,
      default: function () {
        return null
      }
    },
    width: {
      type: Number,
      default: function () {
        return 32
      }
    },
    color: {
      type: String,
      default: function () {
        return ''
      }
    },
    backgroundColor: {
      type: String,
      default: function () {
        return ''
      }
    },
    nameSize: {
      type: Number,
      default: function () {
        return 0
      }
    },
    avatarName: {
      type: String,
      default: function () {
        return ''
      }
    },
  }
}
</script>

<style scoped>
.my-avatar {
  /* size */
  width: 1em;
  height: 1em;
  /* position */
  position: relative;
}

.my-avatar svg{
  /* common */
  fill: currentColor;
  /* size */
  width: 0.9em;
  height: 0.9em;
  /* position */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar-name {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  color: var(--chekt-white-text-higher);
}
</style>
