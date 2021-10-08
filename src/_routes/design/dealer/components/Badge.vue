<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default badge</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Small badge</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Badge
        </div>
        <div class="__dealer-description">
          Badges are a commonly used feature on many mobile devices. The badges appear as small dots over the logo of an app on a user's home screen and can be designed in a wide range of eye-catching colors. Fully supported by Apple and Android devices, app icon badges are easily accessible to a wide range of users.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Button  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Default Badge
          </div>
          <div class="__dealer-subdescription">
            Commonly used feature on many devices.
          </div>
          <div class="__dealer-demo">
            <div class="icon">
              <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
              <div class="badge">2</div>
            </div>
            <div class="icon">
              <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
              <div class="badge">23</div>
            </div>
            <div class="icon">
              <MyIcon style="color:#8FC5D0;" v-bind:icon="'person-circle'" v-bind:width="48" />
              <div class="badge">+99</div>
            </div>
          </div>

          <!-- CODE -->

          <!-- <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* HTML 예시 */</span>

            <span class="__html-comment">/* parents */</span>
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">badge-wrapper"</span><span class="__html-tag">&gt;</span>
              <span class="__html-comment">/* children */</span>
              <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">badge"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/div&gt;</span>
            <span class="__html-tag">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>

          <div class="__dealer-subtitle2" style="margin-top:50px;">
            CSS
          </div>
          <div>
            <pre>
              <code>
            <span class="__css-comment">/* CSS 예시 */</span>

            <span class="__css-comment">/* parents */</span>
            <span class="__css-name">.badge-wrapper {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">relative;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* children */</span>
            <span class="__css-name">.badge {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">absolute;</span>
              <span class="__css-attribute">top:</span> <span class="__css-string">-2px;</span>
              <span class="__css-attribute">right:</span> <span class="__css-string">-2px;</span>
              <span class="__css-attribute">display:</span> <span class="__css-string">flex;</span>
              <span class="__css-attribute">justify-content:</span> <span class="__css-string">center;</span>
              <span class="__css-attribute">align-items:</span> <span class="__css-string">center;</span>
              <span class="__css-attribute">padding:</span> <span class="__css-string">2px 6px;</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-badge);</span><span class="__css-comment"> /* #ba2222 */</span>
              <span class="__css-attribute">border-radius:</span> <span class="__css-string">10px;</span>
              <span class="__css-attribute">color:</span> <span class="__css-string">white;</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">13px;</span>
              <span class="__css-attribute">font-weight:</span> <span class="__css-string">500;</span>
            <span class="__css-name">}</span>
              </code>
            </pre>
          </div> -->

          <!-- //CODE -->

        </section>

        <!-- Button With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Small Badge
          </div>
          <div class="__dealer-subdescription">
            When new notification is catched.
          </div>
           <div class="__dealer-demo">
            <div class="icon">
              <MyIcon v-bind:icon="'bell'" v-bind:width="32" />
              <div class="small-badge"></div>
            </div>
            <div class="icon">
              <MyIcon v-bind:icon="'bell'" v-bind:width="24" />
              <div class="smaller-badge"></div>
            </div>
          </div>

          <!-- CODE -->

          <!-- <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* HTML 예시 */</span>

            <span class="__html-comment">/* parents */</span>
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">badge-wrapper"</span><span class="__html-tag">&gt;</span>
              <span class="__html-comment">/* children (small or smaller) */</span>
              <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">small-badge"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/div&gt;</span>
            <span class="__html-tag">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>

          <div class="__dealer-subtitle2" style="margin-top:50px;">
            CSS
          </div>
          <div>
            <pre>
              <code>
            <span class="__css-comment">/* CSS 예시 */</span>

            <span class="__css-comment">/* parents */</span>
            <span class="__css-name">.badge-wrapper {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">relative;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* children  small-badge */</span>
            <span class="__css-name">.small-badge {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">absolute;</span>
              <span class="__css-attribute">top:</span> <span class="__css-string">1px;</span>
              <span class="__css-attribute">right:</span> <span class="__css-string">1px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">8px;</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">8px;</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-badge);</span><span class="__css-comment"> /* #ba2222 */</span>
              <span class="__css-attribute">border-radius:</span> <span class="__css-string">50%;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* children  smaller-badge */</span>
            <span class="__css-name">.smaller-badge {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">absolute;</span>
              <span class="__css-attribute">top:</span> <span class="__css-string">1px;</span>
              <span class="__css-attribute">right:</span> <span class="__css-string">1px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">5px;</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">5px;</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-badge);</span><span class="__css-comment"> /* #ba2222 */</span>
              <span class="__css-attribute">border-radius:</span> <span class="__css-string">50%;</span>
            <span class="__css-name">}</span>
              </code>
            </pre>
          </div> -->

          <!-- CODE -->

        </section>
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
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
  },
  data: function() {
    return {
    }
  },
  watch: {
    scrollPositon: function () {
      this.onScroll()
    },
  },
  created: function () {
    this.$tool.scrollTo(0, 0)
  },
  mounted: function () {
    this.onScroll()
  },
  methods: {
    onClickContent: function (type) {
      switch (type) {
      case '1':
        location.href = "#dealer-content-move1";
        break;
      case '2':
        location.href = "#dealer-content-move2";
        break;
      default:
      }
    },
    onScroll: function () {
      let sections = ''
      let contentMenus = ''
      sections = document.querySelectorAll('section')
      contentMenus = document.querySelectorAll('.__dealer-contents-widget .__dealer-contents-body div')
      this.$tool.scrollContentsWidgetMoving(sections, contentMenus)
    }
  }
}
</script>

<style scoped>
.icon {
  position: relative;
  margin-right: 20px;
}
.badge {
  position: absolute;
  top: -2px;
  right: -2px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 6px;
  background-color: var(--chekt-badge);
  border-radius: 10px;
  color: white;
  font-size: 13px;
  font-weight: 500;
}
.smaller-badge {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 5px;
  height: 5px;
  background-color: var(--chekt-badge);
  border-radius: 50%;
}
.small-badge {
  position: absolute;
  top: 1px;
  right: 1px;
  width: 8px;
  height: 8px;
  background-color: var(--chekt-badge);
  border-radius: 50%;
}

</style>
