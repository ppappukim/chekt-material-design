<template>
  <div class="__dealer-page">
    <div class="__dealer-component" style="max-width: 1200px;">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Dealer Protal
        </div>
        <div class="__dealer-description">
          CHEKT Components are interactive building blocks for creating a user interface.<br>

          Browse all components or select a specific platform.
        </div>
      </div>
      <div class="__dealer-component-content">

         <!-- System -->
        <div class="__dealer-subtitle">
          System
        </div>
        <div class="__dealer-subdescription" style="margin-bottom:30px;">
          Layout regions are the foundation for interactive experiences. They’re a layout’s building blocks and are composed of elements and components that share a similar function. Layout regions can also group smaller containers such as cards.<br>
        </div>
        <div class="systems">
          <div @click="onClickMenu('layout')" class="system">
            <div class="systembox">
              <img src="@/assets/system-1.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Layout</div>
                <div class="system-desc">Chekt Design layouts use uniform elements and spacing to encourage consistency across platforms, environments, and screen sizes.</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('color')" class="system">
            <div class="systembox">
              <img src="@/assets/system-2.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Color</div>
                <div class="system-desc">The CHeKT Design color system can help you create a color theme that reflects your brand or style.</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('typograph')" class="system">
            <div class="systembox">
              <img src="@/assets/system-3.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Typograph</div>
                <div class="system-desc">Use typography to present your design and content as clearly and efficiently as possible.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Components -->
        <div class="__dealer-subtitle" style="margin-top:100px;">
          Components
        </div>
        <div class="__dealer-subdescription" style="margin-bottom:30px;">
          CHEKT Components are interactive building blocks for creating a user interface.<br>
          Browse all components or select a specific platform.<br>
        </div>
        <div class="systems">
          <div @click="onClickMenu('avatar')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-avatar.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Avatar</div>
                <div class="system-desc">An avatar is a visual representation of a user or entity.</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('badge')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-badge.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Badge</div>
                <div class="system-desc">The CHeKT Design color system can help you create a color theme that reflects your brand or style.</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('buttons')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-button.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Buttons</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('checkboxes')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-checkbox.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Checkboxes</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('datatable')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-datatable.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Date Table</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('datepicker')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-datepicker.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Date Picker</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('dialog')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-dialog.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Dialog</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('label')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-label.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Label</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('loading')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-loading.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Loading</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('modal')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-modal.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Modal</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('radio')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-radio.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Radio</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('range')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-range.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Range</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('select')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-select.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Select</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('speechbubble')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-speechbubble.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Speech Bubble</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('tab')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-tab.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Tabs</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('textinput')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-inputtext.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Text Input</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('toast')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-toast.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Toast</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('toggle')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-toggle.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Toggle</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>
          <div @click="onClickMenu('tooltip')" class="system">
            <div class="systembox">
              <img src="@/assets/comp-tooltip.png" alt="" style="width:100%;">
              <div class="system-text">
                <div class="system-title">Tooltips</div>
                <div class="system-desc">Buttons allow users to take actions, and make choices, with a single tap</div>
              </div>
            </div>
          </div>          

        </div>


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
    this.$tool.scrollTo(0, 0)
  },
  methods: {
    onClickMenu: function (menu) {
      this.$router.push({path: `/design/dealer/${menu}`})
    }
  }
}
</script>

<style scoped>
.systems {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
}
.system {
  flex-basis: 33.333%;
  max-width: 33.333%;
  outline: 2px solid rgba(255, 255, 255, 0);
  margin-bottom: 42px;
}
.systembox {
  padding: 20px;
}
.system:hover {
  outline: 2px solid var(--chekt-blue-gray-mideum);
  cursor: pointer;
  transition: outline .3s;
}
.system-text {
  margin-top: 24px;
  /* margin-bottom: 24px; */
}
.system-title {
  font-size: 20px;
  color: var(--chekt-text-high);
  margin-bottom: 8px;
}
.system-desc {
  font-size: 15px;
  color: var(--chekt-text-medium);
  line-height: 20px;
}


@media screen and (min-width: 521px) and (max-width: 920px) {
  .system {
    flex-basis: 50%;
    max-width: 50%;
  }
}
@media screen and (max-width: 521px) {
  .system {
    flex-basis: 100%;
    max-width: 100%;
  }
}
</style>
