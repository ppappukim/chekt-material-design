<template>
  <div>
    <div class="buttons">
      <div class="button default icon">
        <MyIcon v-bind:icon="'download'" v-bind:width="18" />
        Button
      </div>
      <div class="button default icon">
        Button
        <MyIcon v-bind:icon="'download'" v-bind:width="18" />
      </div>
    </div>
    <div class="buttons" style="margin-top:50px;">
      <div class="button-small default icon">
        <MyIcon v-bind:icon="'download'" v-bind:width="14" />
        Button
      </div>
      <div class="button-large default icon">
        <MyIcon v-bind:icon="'download'" v-bind:width="22" />
        Button
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
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style scoped>

.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 20px;
}
.button.icon, .button-small.icon, .button-large.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
}

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
  color: var(--chekt-text-high);
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

/* default color button */
.button.default {
  background-color: white;
  color: var(--chekt-text-high);
}
/* primary color button */
.button.primary {
  background-color: var(--chekt-primary-color);
}
.button.primary:hover {
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

</style>
