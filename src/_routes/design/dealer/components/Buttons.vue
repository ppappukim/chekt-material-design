<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default button</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Button with icon</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Buttons
        </div>
        <div class="__dealer-description">
          A button triggers an event or action. They let users know what will happen next.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Button  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Default Button
          </div>
          <div class="__dealer-subdescription">
            The default form of a button, used for most cases. They are not impactful enough to represent the primary action in a container.
          </div>
          <div class="demo">
            <div class="button default">Button</div>
            <div class="button primary">Button</div>
            <div class="button danger">Button</div>
            <div class="button success">Button</div>
          </div>

          <!-- HTML -->
          <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* buttons */</span>
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button default"</span><span class="__html-tag">&gt;</span>Button<span class="__html-tag">&lt;/div&gt;</span>       
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button primary"</span><span class="__html-tag">&gt;</span>Button<span class="__html-tag">&lt;/div&gt;</span>
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button danger"</span><span class="__html-tag">&gt;</span>Button<span class="__html-tag">&lt;/div&gt;</span>
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button success"</span><span class="__html-tag">&gt;</span>Button<span class="__html-tag">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>

          <!-- CSS -->
          <div class="__dealer-subtitle2" style="margin-top:50px;">
            CSS
          </div>
          <div>
            <pre>
              <code>
            <span class="__css-comment">/* common */</span>
            <span class="__css-name">.button {</span>
              <span class="__css-attribute">padding:</span> <span class="__css-string">7px 10px;</span>
              <span class="__css-attribute">color:</span> <span class="__css-string">white;</span>
              <span class="__css-attribute">border-radius:</span> <span class="__css-string">5px;</span>
              <span class="__css-attribute">border:</span> <span class="__css-string">solid 1px var(--chekt-border);</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">14px;</span>
              <span class="__css-attribute">cursor:</span> <span class="__css-string">pointer;</span>
              <span class="__css-attribute">box-shadow:</span> <span class="__css-string">0px 0px 3px rgb(0 0 0 / 10%);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.button:hover {</span>
              <span class="__css-attribute">transition:</span> <span class="__css-string">background-color .3s, box-shadow .3s;</span>
              <span class="__css-attribute">shadow:</span> <span class="__css-string">0px 0px 6px rgba(0, 0, 0, 0.2);</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* default button */</span>
            <span class="__css-name">.button.default {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">white;</span>
              <span class="__css-attribute">color:</span> <span class="__css-string">var(--chekt-text-high);</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* primary button */</span>
            <span class="__css-name">.button.primary {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-primary-color);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.button.primary:hover {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-primary-shadow-color);</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* danger button */</span>
            <span class="__css-name">.button.danger {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-danger-color);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.button.danger:hover {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-danger-shadow-color);</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* success button */</span>
            <span class="__css-name">.button.success {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-success-color);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.button.success:hover {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-success-shadow-color);</span>
            <span class="__css-name">}</span>
              </code>
            </pre>
          </div>
        </section>

        <!-- Button With Icon  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Button With Icon
          </div>
          <div class="__dealer-subdescription">
            Buttons may include an icon before or after the text.
          </div>
          <div class="demo">
            <div class="button default icon">
              <MyIcon v-bind:icon="'download'" v-bind:width="18" />
              Button
            </div>
            <div class="button default icon">
              Button
              <MyIcon v-bind:icon="'download'" v-bind:width="18" />
            </div>
          </div>

          <!-- HTML -->
          <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* buttons with icon */</span>

            <span class="__html-comment">/* icon left */</span>
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button default icon"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;MyIcon </span><span class="__html-string">class="</span><span class="__html-class">myicon"</span><span class="__html-tag">&gt;</span>
              Button
            <span class="__html-tag">&lt;/div&gt;</span>    

            <span class="__html-comment">/* icon right */</span>   
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button default icon"</span><span class="__html-tag">&gt;</span>
              Button
              <span class="__html-tag">&lt;MyIcon </span><span class="__html-string">class="</span><span class="__html-class">myicon"</span><span class="__html-tag">&gt;</span>
            <span class="__html-tag">&lt;/div&gt;</span>
              </code>
            </pre>
          </div>

          <!-- CSS -->
          <div class="__dealer-subtitle2" style="margin-top:50px;">
            CSS
          </div>
          <div>
            <pre>
              <code>
            <span class="__css-comment">/* button class는 위 default button을 확인하세요. */</span>

            <span class="__css-comment">/* icon */</span>
            <span class="__css-name">.button.icon  {</span>
              <span class="__css-attribute">display:</span> <span class="__css-string">flex;</span>
              <span class="__css-attribute">flex-direction:</span> <span class="__css-string">row;</span>
              <span class="__css-attribute">justify-content:</span> <span class="__css-string">center;</span>       
              <span class="__css-attribute">align-items:</span> <span class="__css-string">center;</span>
              <span class="__css-attribute">grid-gap:</span> <span class="__css-string">5px;</span>
            <span class="__css-name">}</span>
              </code>
            </pre>
          </div>
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
      sections: null,
    }
  },
  watch: {
    scrollPositon: function () {
      this.onScroll()
    },
  },
  created: function () {
  },
  mounted: function () {
    this.sections = document.querySelectorAll('section')
    this.contentMenus = document.querySelectorAll('.__dealer-contents-widget .__dealer-contents-body div')
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
      this.$tool.scrollContentsWidgetMoving(this.sections, this.contentMenus)
      // let current = ''
      // for (let i = 0; i < this.sections.length; i++) {
      //   const section = this.sections[i];
      //   const sectionTop = section.offsetTop
        
      //   if (pageYOffset < sectionTop && i === 0) {
      //     current = section.getAttribute('id')
      //   }  
      //   else if (pageYOffset >= sectionTop) {
      //     current = section.getAttribute('id')
      //   }  
      // }
      // this.contentMenus.forEach(menu => {
      //   menu.classList.remove('active')
      //   if (menu.classList.contains(current)) {
      //     menu.classList.add('active')
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  flex-direction: row;
  align-items: start;
  flex-wrap: wrap;
  grid-gap: 20px;
  margin: 48px 0;
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
.button:hover {
  transition: background-color .3s, box-shadow .3s;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
}

.button.icon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
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
