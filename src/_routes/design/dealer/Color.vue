<template>
  <div class="chekt-component">
    <div class="chekt-component-header">
      <div class="chekt-title">
        The color System
      </div>
      <div class="chekt-description">
        The CHeKT Design color system can help you create a color theme that reflects your brand or style.
      </div>
    </div>
    <div class="chekt-component-content">
      <div class="chekt-subtitle">
        Color palettes
      </div>
      <div class="chekt-subdescription">
        The CHeKT Design color system helps you apply color to your UI in a meaningful way. In this system, you select a primary and a secondary color to represent your brand. Dark and light variants of each color can then be applied to your UI in different ways.
      </div>
      <div class="color-palettes">
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#1E88E5;">#1E88E5</div>
          <div class="color-palette-text">Primary</div>
        </div>
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#5469D4;">#5469D4</div>
          <div class="color-palette-text">Secondary</div>
        </div>
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#1EA675;">#1EA675</div>
          <div class="color-palette-text">Success</div>
        </div>
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#CD3D64;">#CD3D64</div>
          <div class="color-palette-text">Danger</div>
        </div>
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#F5925E;">#F5925E</div>
          <div class="color-palette-text">Warning</div>
        </div>
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#8792A2;">#8792A2</div>
          <div class="color-palette-text">Background</div>
        </div>
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#E3E8EE;color:#424242;">#E3E8EE</div>
          <div class="color-palette-text">Background<br>Secondary</div>
        </div>
        <div class="color-palette">
          <div class="color-palette-circle" style="background-color:#F7FAFC;color:#424242;">#F7FAFC</div>
          <div class="color-palette-text">Background<br>Tertiary</div>
        </div>
      </div>
      <div class="chekt-subtitle chekt-withline">
        Usage
      </div>
      <div class="chekt-subdescription">
        The CHeKT Design color system helps you apply color to your UI in a meaningful way. In this system, you select a primary and a secondary color to represent your brand. Dark and light variants of each color can then be applied to your UI in different ways.
      </div>
      <div>
        <pre>
          <code>
        <span class="hljs-comment">/* 아래 규칙대로 CSS 변수명을 작성해 이용합니다 */</span>
        <span class="hljs-attribute">--chekt-primary-color:</span> #1E88E5;
        <span class="hljs-attribute">--chekt-secondary-color:</span> #5469D4;
        <span class="hljs-attribute">--chekt-success-color:</span> #1EA675;
        <span class="hljs-attribute">--chekt-danger-color:</span> #CD3D64;
        <span class="hljs-attribute">--chekt-warning-color:</span> #F5925E;
        <span class="hljs-attribute">--chekt-background-color:</span> #8792A2;
        <span class="hljs-attribute">--chekt-background-secondary-color:</span> #E3E8EE;
        <span class="hljs-attribute">--chekt-background-tertiary-color:</span> #F7FAFC;
          </code>
        </pre>
      </div>
    </div>

  </div>
</template>

<script>
export default {
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
  methods: {
  }
}
</script>

<style scoped>
.color-palettes {
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
  align-items: start;
  margin: 48px 0;
}
.color-palette {
  /* margin-left: 18px; */
  margin-right: 36px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.color-palette-circle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  width: 100px;
  height: 100px;
  color: white;
  text-align: center;
  border-radius: 100%;
  margin-bottom: 14px;
}
.color-palette-text {
  font-size: 1em;
  line-height: 1.25;
  color: #616161;
}
</style>
