<template>
  <div class="__dealer-page">
    <!-- contents -->
    <div class="__dealer-contents-widget">
      <div class="__dealer-contents-title">CONTENTS</div>
      <div class="__dealer-contents-body">
        <div class="dealer-content-move1" @click="onClickContent('1')">Default button</div>
        <div class="dealer-content-move2" @click="onClickContent('2')">Button with icon</div>
        <div class="dealer-content-move3" @click="onClickContent('3')">Button in loading</div>
      </div>
    </div>

    <!-- component -->
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          Checkboxes
        </div>
        <div class="__dealer-description">
          Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on or off.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Button  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Default Checkboxes
          </div>
          <div class="__dealer-subdescription">
            Checkboxes should be used instead of switches if multiple options can be selected from a list.
          </div>
          <div class="demo">
            <label class="checkbox">
              <input type="checkbox">
              <span class="checkmark small"></span>
            </label>                       
            <label class="checkbox">
              <input type="checkbox">
              <span class="checkmark"></span>
            </label>
            <label class="checkbox">
              <input type="checkbox">
              <span class="checkmark large"></span>
            </label>
          </div>
          <div class="demo">                  
            <label class="checkbox">
              <input type="checkbox">
              <span class="checkmark"></span>
              <span class="checkbox-text">checkbox with text</span>
            </label>
          </div>
          <!-- HTML -->
          <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* checkboxes */</span>

            <span class="__html-comment">/* small */</span>
            <span class="__html-tag">&lt;label </span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/input&gt;</span>
              <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark small"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
            <span class="__html-tag">&lt;/label&gt;</span>

            <span class="__html-comment">/* default */</span>
            <span class="__html-tag">&lt;label </span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/input&gt;</span>
              <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
            <span class="__html-tag">&lt;/label&gt;</span>
            
            <span class="__html-comment">/* large */</span>
            <span class="__html-tag">&lt;label </span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/input&gt;</span>
              <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark large"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
            <span class="__html-tag">&lt;/label&gt;</span>

            <span class="__html-comment">/* with text */</span>
            <span class="__html-tag">&lt;label </span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/input&gt;</span>
              <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
              <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkbox-text"</span><span class="__html-tag">&gt;</span>checkbox with text<span class="__html-tag">&lt;/span&gt;</span>
            <span class="__html-tag">&lt;/label&gt;</span>
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
            <span class="__css-comment">/* checkboxes */</span>

            <span class="__css-name">.checkbox {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">relative;</span>
              <span class="__css-attribute">cursor:</span> <span class="__css-string">pointer;</span>
              <span class="__css-attribute">-webkit-user-select:</span> <span class="__css-string">none;</span>
              <span class="__css-attribute">-moz-user-select:</span> <span class="__css-string">none;</span>
              <span class="__css-attribute">-ms-user-select:</span> <span class="__css-string">none;</span>
              <span class="__css-attribute">display:</span> <span class="__css-string">flex;</span>
              <span class="__css-attribute">flex-direction:</span> <span class="__css-string">row;</span>
              <span class="__css-attribute">justify-content:</span> <span class="__css-string">center;</span>
              <span class="__css-attribute">align-items:</span> <span class="__css-string">center;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* Hide the browser's default checkbox */</span>
            <span class="__css-name">.checkbox input {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">absolute;</span>
              <span class="__css-attribute">cursor:</span> <span class="__css-string">pointer;</span>
              <span class="__css-attribute">opacity:</span> <span class="__css-string">0;</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">0;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">0;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* Create a custom checkbox */</span>
            <span class="__css-name">.checkmark {</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">relative;</span>
              <span class="__css-attribute">top:</span> <span class="__css-string">0;</span>
              <span class="__css-attribute">left:</span> <span class="__css-string">0;</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">14px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">14px;</span>
              <span class="__css-attribute">border-radius:</span> <span class="__css-string">3px;</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">white;</span>
              <span class="__css-attribute">box-shadow:</span> <span class="__css-string">rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
                          rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
                          rgb(0 0 0 / 12%) 0px 1px 1px 0px, 
                          rgb(60 66 87 / 16%) 0px 0px 0px 1px, 
                          rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
                          rgb(0 0 0 / 0%) 0px 0px 0px 0px, 
                          rgb(60 66 87 / 8%) 0px 2px 5px 0px;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* When the checkbox is checked, add a blue background */</span>
            <span class="__css-name">.checkbox input:checked ~ .checkmark {</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-primary-color);</span>
              <span class="__css-attribute">box-shadow:</span> <span class="__css-string">rgb(0 0 0 / 0%) 0px 0px 0px 0px,
                          rgb(0 0 0 / 0%) 0px 0px 0px 0px,
                          rgb(0 0 0 / 12%) 0px 1px 1px 0px,
                          rgb(30 136 229) 0px 0px 0px 1px,
                          rgb(0 0 0 / 0%) 0px 0px 0px 0px,
                          rgb(0 0 0 / 0%) 0px 0px 0px 0px,
                          rgb(60 66 87 / 8%) 0px 2px 5px 0px;</span>
              <span class="__css-attribute">opacity:</span> <span class="__css-string">1;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* Click animation */</span>
            <span class="__css-name">.checkbox input ~ .checkmark {</span>
              <span class="__css-attribute">transition:</span> <span class="__css-string">transition: background-color .5s cubic-bezier(0.075, 0.82, 0.165, 1), 
                          box-shadow .5s cubic-bezier(0.075, 0.82, 0.165, 1);</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* Create the checkmark/indicator (hidden when not checked) */</span>
            <span class="__css-name">.checkmark:after {</span>
              <span class="__css-attribute">content:</span> <span class="__css-string">"";</span>
              <span class="__css-attribute">position:</span> <span class="__css-string">absolute;</span>
              <span class="__css-attribute">display:</span> <span class="__css-string">none;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* Style the checkmark/indicator */</span>
            <span class="__css-name">.checkbox .checkmark:after {</span>
              <span class="__css-attribute">left:</span> <span class="__css-string">4px;</span>
              <span class="__css-attribute">top:</span> <span class="__css-string">0.2px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">3px;</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">8px;</span>
              <span class="__css-attribute">border:</span> <span class="__css-string">solid white;</span>
              <span class="__css-attribute">border-width:</span> <span class="__css-string">0 2.9px 2.9px 0;</span>
              <span class="__css-attribute">transform:</span> <span class="__css-string">rotate(45deg);</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* Show the checkmark when checked */</span>
            <span class="__css-name">.checkbox input:checked ~ .checkmark:after {</span>
              <span class="__css-attribute">display:</span> <span class="__css-string">block;</span>
            <span class="__css-name">}</span>


            <span class="__css-comment">/********* size **********/</span>

            <span class="__css-comment">/* small */</span>
            <span class="__css-name">.checkmark.small {</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">12px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">12px;</span>
              <span class="__css-attribute">border-radius:</span> <span class="__css-string">2px;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.checkbox .checkmark.small:after {</span>
              <span class="__css-attribute">left:</span> <span class="__css-string">3.5px;</span>
              <span class="__css-attribute">top:</span> <span class="__css-string">0px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">2.1px;</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">6.8px;</span>
              <span class="__css-attribute">border:</span> <span class="__css-string">solid white;</span>
              <span class="__css-attribute">border-width:</span> <span class="__css-string">0 2.9px 2.9px 0;</span>
              <span class="__css-attribute">transform:</span> <span class="__css-string">rotate(45deg);</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* large */</span>
            <span class="__css-name">.checkmark.large {</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">16px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">16px;</span>
              <span class="__css-attribute">border-radius:</span> <span class="__css-string">4px;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.checkbox .checkmark.large:after {</span>
              <span class="__css-attribute">left:</span> <span class="__css-string">5px;</span>
              <span class="__css-attribute">top:</span> <span class="__css-string">0.2px;</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">3px;</span>
              <span class="__css-attribute">height:</span> <span class="__css-string">9px;</span>
              <span class="__css-attribute">border:</span> <span class="__css-string">solid white;</span>
              <span class="__css-attribute">border-width:</span> <span class="__css-string">0 2.9px 2.9px 0;</span>
              <span class="__css-attribute">transform:</span> <span class="__css-string">rotate(45deg);</span>
            <span class="__css-name">}</span>


            <span class="__css-comment">/********* with text **********/</span>

            <span class="__css-name">.checkbox-text {</span>
              <span class="__css-attribute">margin-left:</span> <span class="__css-string">5px;</span>
              <span class="__css-attribute">color:</span> <span class="__css-string">var(--chekt-text-high)px;</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">14px;</span>
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

          <div class="demo">
            <div class="button-small default icon">
              <MyIcon v-bind:icon="'download'" v-bind:width="14" />
              Button
            </div>
            <div class="button-large default icon">
              <MyIcon v-bind:icon="'download'" v-bind:width="22" />
              Button
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

            <span class="__html-comment">/* icon small */</span>   
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button-small default icon"</span><span class="__html-tag">&gt;</span>
              Button
              <span class="__html-tag">&lt;MyIcon </span><span class="__html-string">class="</span><span class="__html-class">myicon"</span><span class="__html-tag">&gt;</span>
            <span class="__html-tag">&lt;/div&gt;</span>

            <span class="__html-comment">/* icon large */</span>   
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button-large default icon"</span><span class="__html-tag">&gt;</span>
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

            <span class="__css-comment">/* icon size */</span>
            <span class="__css-name">.button.icon  {</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">18px;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.button-small.icon  {</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">14px;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.button-large.icon  {</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">22px;</span>
            <span class="__css-name">}</span>
              </code>
            </pre>
          </div>
        </section>
        <!-- Button In Lodaing  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Button In Lodaing
          </div>
          <div class="__dealer-subdescription">
            Set isLoading to indicate the button is loading. The button text is hidden and a spinner is shown in its place, while maintaining the width that it would have if the text were visible.
          </div>
          <div class="demo">
            <div class="button default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-text-high);" />
              Loading
            </div>
            <div class="button default icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:var(--chekt-text-high); width:64px;" />
            </div>
            <div class="button primary icon loading">
              <MyIcon v-bind:icon="'loader'" v-bind:width="18" style="stroke:white; width:64px;" />
            </div>
          </div>

          <!-- HTML -->
          <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* button in lodaing */</span>

            <span class="__html-comment">/* loading with text */</span>
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button default icon"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;MyIcon </span><span class="__html-string">icon="</span><span class="__html-class">loader"</span><span class="__html-tag">&gt;</span>
              Loading
            <span class="__html-tag">&lt;/div&gt;</span>    

            <span class="__html-comment">/* loading */</span>   
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button default icon"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;MyIcon </span><span class="__html-string">icon="</span><span class="__html-class">loader"</span><span class="__html-tag">&gt;</span>
            <span class="__html-tag">&lt;/div&gt;</span>

            <span class="__html-comment">/* loading primary */</span>   
            <span class="__html-tag">&lt;div </span><span class="__html-string">class="</span><span class="__html-class">button primary icon"</span><span class="__html-tag">&gt;</span>
              <span class="__html-tag">&lt;MyIcon </span><span class="__html-string">icon="</span><span class="__html-class">loader"</span><span class="__html-tag">&gt;</span>
            <span class="__html-tag">&lt;/div&gt;</span>              </code>
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
      case '3':
        location.href = "#dealer-content-move3";
        break;
      default:
      }
    },
    onScroll: function () {
      var sections = ''
      var contentMenus = ''
      sections = document.querySelectorAll('.__dealer-component-content section')
      contentMenus = document.querySelectorAll('.__dealer-contents-widget .__dealer-contents-body div')
      this.$tool.scrollContentsWidgetMoving(sections, contentMenus)
    },
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

/* CHECKBOX */

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
.checkbox-text {
  margin-left: 5px;
  color: var(--chekt-text-high);
  font-size: 14px;
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

</style>
