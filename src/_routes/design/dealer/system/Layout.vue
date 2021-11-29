<template>
  <div class="__dealer-page">
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Layout
        </div>
        <div class="__dealer-description">
          Chekt Design layouts use uniform elements and spacing to encourage consistency across platforms, environments, and screen sizes.
        </div>
        <transition name="modalfade">
          <Layout @updateclose="onParentsClose()" v-if="isShowLayoutDemo"/>
        </transition>
        <div @click="onClickDemo()" class="button default" style="display:initial;">🖥 TRY LAYOUT DEMO</div>
      </div>
      <div class="__dealer-component-content" style="padding-top:50px;">
        <div class="__dealer-subtitle">
          Layout anatomy
        </div>
        <div class="__dealer-subdescription">
          Layout regions are the foundation for interactive experiences. They’re a layout’s building blocks and are composed of elements and components that share a similar function. Layout regions can also group smaller containers such as cards.<br><br>

          A large screen layout has three main regions:<br><br>

          1. App bars <br>
          2. Navigation <br>
          3. Body <br>
        </div>
        <div class="typo-scale">
          <img src="@/assets/layout-1.png" alt="" style="width:100%;">
        </div>

        <!-- App bars -->
        <div class="__dealer-subtitle __dealer-withline-bottom">
          1. App bars
        </div>
        <div class="__dealer-subdescription">
          The app bar is used to display and group components and actions that help users perform primary actions, or take action on elements in the body region.<br><br>

          1. Dealer Logo<br>
          2. Dealer Name<br>
          3. Search<br>
          4. Help<br>
          5. My Accounts<br>
        </div>
        <div class="typo-scale">
          <img src="@/assets/layout-2.png" alt="" style="width:100%;">
        </div>

        <!-- Navigation -->
        <div class="__dealer-subtitle __dealer-withline-bottom">
          2. Navigation
        </div>
        <div class="__dealer-subdescription">
          The navigation region holds navigational components and elements such as the navigation drawer or navigation rail. It helps users navigate between destinations in an app or to access important actions. The navigation region maintains a consistent width of 256dp when expanded; it is 72dp when collapsed.<br><br>

          If the layout’s margin is less than 48dp (screen widths between 600dp and 839dp, for example) the width of the body region can decrease size to accommodate the navigation region.<br><br>

          1. Main Navigaiton<br>
          2. Sub Navigaiton<br>
        </div>
        <div class="typo-scale">
          <img src="@/assets/layout-3.png" alt="" style="width:100%;">
        </div>

        <!-- Body -->
        <div class="__dealer-subtitle __dealer-withline-bottom">
          3. Body
        </div>
        <div class="__dealer-subdescription">
          The body region is used for displaying most of the content in an app. It typically contains components such as lists, cards, buttons, and images.
        </div>
        <div class="typo-scale">
          <img src="@/assets/layout-4.png" alt="" style="width:100%;">
          <div class="__dealer-subdescription">
            The maximum width is 1200px. By default, it should be centered and responsive. Must be at least 600px small and scrollable.
          </div>
        </div>
        <div class="typo-scale">
          <img src="@/assets/layout-5.png" alt="" style="width:100%;">
          <div class="__dealer-subdescription">
            The maximum width is 600px. By default, it should be centered and responsive. Must be at least 300px small and scrollable.
          </div>
        </div>
        <div class="typo-scale">
          <img src="@/assets/layout-6.png" alt="" style="width:100%;">
          <div class="__dealer-subdescription">
            The maximum width is 600px or 800px. By default, it should be centered and responsive. Must be at least 300px or 400px small and scrollable.
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
import Layout from '@/components/layouts/Layout'
export default {
  components: {
    Layout
  },
  computed: {
  },
  data: function() {
    return {
      isShowLayoutDemo: false
    }
  },
  watch: {
  },
  created: function () {
    this.$tool.scrollTo(0, 0)
  },
  methods: {
    onClickDemo: function () {
      this.isShowLayoutDemo = true
      const bodyContainer = document.getElementById('__chekt-body-container')
      bodyContainer.style.height = '50vh'
      bodyContainer.style.overflow = 'hidden'
    },
    onParentsClose: function (value) {
      this.isShowLayoutDemo = value
    }
  }
}
</script>

<style scoped>
.typo-scale {
  padding-top: 24px;
  padding-bottom: 48px;
}
.typo-legibility {
  display: flex;
  justify-content: space-between;
  flex: 1;
  flex-wrap: wrap;
  padding-top: 48px;
  padding-bottom: 48px;
}
.typo-legibility ul {
  padding-left: 20px;
  list-style: disc outside;
  color: #424242;
  line-height: 1.5;
  padding-bottom: 24px;
}
.typo-legibility-col {
  flex-basis: 400px;
  max-width: 400px;
  width: 100%;
  /* flex: 0 1 100%;
  flex-wrap: wrap;
  padding: 0 20px; */
}
.typo-legibility-col-title {
  color: #212121;
  line-height: 1.5;
}
.typo-legibility-img {
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.typo-headline1 {
  font-size: 96px;
  font-weight: 400;
  letter-spacing: -1.5px;
}
.typo-headline2 {
  font-size: 60px;
  font-weight: 400;
  letter-spacing: -0.5px;
}
.typo-headline3 {
  font-size: 48px;
  font-weight: 400;
  letter-spacing: 0px;
}
.typo-headline4 {
  font-size: 34px;
  font-weight: 400;
  letter-spacing: 0.25px;
}
.typo-headline5 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
}
.typo-headline6 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
}
.typo-headline6 {
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
}
.typo-subtitle1 {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.15px;
}
.typo-subtitle2 {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
}
.typo-subtitle3 {
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.1px;
}
.typo-body1 {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
}
.typo-body2 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.25px;
}
.typo-button {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.25px;
}
.typo-caption {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.4px;
}
.typo-overline {
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.15px;
}
.typo-scale-list {
  padding-bottom: 1rem;
}

/* button */
.button {
  padding: 7px 10px;
  color: white;
  border-radius: 5px;
  border: solid 1px var(--chekt-border);
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}
/* default color button */
.button.default {
  background-color: white;
  color: var(--chekt-text-high);
}

/* ANIMATION */
.modalfade-enter-active, .modalfade-leave-active {
  transition: opacity .3s, transform .3s;
  transform: scale(1);
}
.modalfade-enter, .modalfade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: scale(.75);
}
</style>
