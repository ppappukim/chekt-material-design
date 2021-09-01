<template>
  <div
  v-bind:style="{
    'font-size': width + 'px'
  }"
  class="my-icon">
    <template v-if="icon === 'person-circle'">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'bell'">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'download'">
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g>
      </svg>
    </template>
    <template v-else-if="icon === 'record'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="8"/>
      </svg>
    </template>
    <template v-else-if="icon === 'disarmed-outline'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm8.5 11c0 4.4-3.9 9.5-8.5 10.5-4.7-1.1-8.5-6.1-8.5-10.5V5.3L12 1.5l8.5 3.8V12zm-5.9-4L12 10.6 9.4 8 8 9.4l2.6 2.6L8 14.6 9.4 16l2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L16 9.4 14.6 8z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'armed-home-outline'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm8.5 11c0 4.4-3.9 9.5-8.5 10.5-4.7-1.1-8.5-6.1-8.5-10.5V5.3L12 1.5l8.5 3.8V12zM12 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm2 10.5v-5h1.5v-4c0-.6-.5-1-1-1h-5c-.6 0-1 .5-1 1v4H10V22l2 1 2-1z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'armed-away-outline'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 1L3 5v6c0 5.6 3.8 10.7 9 12 5.2-1.3 9-6.4 9-12V5l-9-4zm8.5 11c0 4.4-3.9 9.5-8.5 10.5-4.7-1.1-8.5-6.1-8.5-10.5V5.3L12 1.5l8.5 3.8V12zM13 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-2.5 12.2l.9-3.6 2.1 1.8v1.8l1-.4.9-.5v-2.4l-2-1.8.6-2.7c1.3 1.3 3.3 2.2 4.5 2.2v-1.8c-1 0-2.6-.9-3.4-2.2l-1-1.4c-.4-.5-1-.9-1.6-.9-.3 0-.5.1-.8.1l-5.2 1.9v4.1h1.7v-3l2.1-.6L8.7 20l-2.2-.6 2.1 1.9 1.6.9z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'disarmed'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 1.5L4.5 5.95v5.19c0 4.79 3.2 9.27 7.5 10.41 4.3-1.14 7.5-5.62 7.5-10.41V5.95L12 2.5z" fill="rgba(255,255,255,0.9)"/>
        <path d="M8.25 7.5c1.24 0 2.25.87 2.25 1.94V11h2.9-3.76V9.44c0-.66-.62-1.2-1.39-1.2-.77 0-1.4.54-1.4 1.2V11H6V9.44C6 8.37 7.01 7.5 8.25 7.5zm6.25 4c.28 0 .5.2.5.45v3.6c0 .25-.22.45-.5.45h-5c-.28 0-.5-.22-.5-.5v-3.55c0-.25.22-.45.5-.45h5z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'armed-home'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 1.5L4.5 5.95v5.19c0 4.79 3.2 9.27 7.5 10.41 4.3-1.14 7.5-5.62 7.5-10.41V5.95L12 2.5z" fill="rgba(255,255,255,0.9)"/>
        <path d="M12 8.5l3.5 3.2h-.53v3.8h-1.86v-1.8c0-.33-.25-.6-.55-.6h-1.12c-.3 0-.55.27-.55.6v1.8H9.03v-3.8H8.5L12 8.5z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'armed-away'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4zm0 1.5L4.5 5.95v5.19c0 4.79 3.2 9.27 7.5 10.41 4.3-1.14 7.5-5.62 7.5-10.41V5.95L12 2.5z" fill="rgba(255,255,255,0.9)"/>
        <path d="M12 7.5c1.24 0 2.25.87 2.25 1.94V11h-.85V9.44c0-.66-.63-1.2-1.4-1.2-.77 0-1.4.54-1.4 1.2V11h-.85V9.44c0-1.07 1.01-1.94 2.25-1.94zm2.5 4c.28 0 .5.2.5.45v3.6c0 .25-.22.45-.5.45h-5c-.28 0-.5-.22-.5-.5v-3.55c0-.25.22-.45.5-.45h5z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'person'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </template>
    <template v-else-if="icon === 'computer'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'shareScreen'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"/>
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.11-.9-2-2-2H4c-1.11 0-2 .89-2 2v10c0 1.1.89 2 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'stopShareScreen'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"/>
        <path d="M21.22 18.02l2 2H24v-2h-2.78zm.77-2l.01-10c0-1.11-.9-2-2-2H7.22l5.23 5.23c.18-.04.36-.07.55-.1V7.02l4 3.73-1.58 1.47 5.54 5.54c.61-.33 1.03-.99 1.03-1.74zM2.39 1.73L1.11 3l1.54 1.54c-.4.36-.65.89-.65 1.48v10c0 1.1.89 2 2 2H0v2h18.13l2.71 2.71 1.27-1.27L2.39 1.73zM7 15.02c.31-1.48.92-2.95 2.07-4.06l1.59 1.59c-1.54.38-2.7 1.18-3.66 2.47z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'contentCopy'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'remove'">
      <svg fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </svg>
    </template>
    <template v-else-if="icon === 'error'">
      <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    </template>
    <template v-else-if="icon === 'warning'">
      <svg fill="#000000" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
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
    }
  }
}
</script>

<style scoped>
.my-icon {
  /* size */
  width: 1em;
  height: 1em;
  /* position */
  position: relative;
}

.my-icon svg{
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
</style>
