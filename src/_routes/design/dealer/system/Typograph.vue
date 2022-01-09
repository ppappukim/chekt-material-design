<template>
  <div class="__dealer-page">
    <div class="__dealer-component">
      <div class="__dealer-component-header">
        <div class="__dealer-title">
          The type system
        </div>
        <div class="__dealer-description">
          Use typography to present your design and content as clearly and efficiently as possible.
        </div>
      </div>
      <div class="__dealer-component-content">
        <div class="__dealer-subtitle">
          Type scale
        </div>
        <div class="__dealer-subdescription">
          The CHeKT Design type scale includes a range of contrasting styles that support the needs of your product and its content.<br><br>

          The type scale is a combination of thirteen styles that are supported by the type system. It contains reusable categories of text, each with an intended application and meaning.
        </div>
        <div class="typo-scale">
          <div class="typo-headline1 typo-scale-list">Headline 1</div>
          <div class="typo-headline2 typo-scale-list">Headline 2</div>
          <div class="typo-headline3 typo-scale-list">Headline 3</div>
          <div class="typo-headline4 typo-scale-list">Headline 4</div>
          <div class="typo-headline5 typo-scale-list">Headline 5</div>
          <div class="typo-headline6 typo-scale-list">Headline 6</div>
          <div class="typo-subtitle1 typo-scale-list">Subtitle 1</div>
          <div class="typo-subtitle2 typo-scale-list">Subtitle 2</div>
          <div class="typo-subtitle2 typo-scale-list">SUBTITLE 3</div>
          <div class="typo-body1 typo-scale-list">Body 1</div>
          <div class="typo-body2 typo-scale-list">Body 2</div>
          <div class="typo-button typo-scale-list">Button</div>
          <div class="typo-caption typo-scale-list">Caption</div>
          <div class="typo-overline typo-scale-list">OVERLINE</div>
        </div>
        <div class="__dealer-subtitle __dealer-withline-bottom">
          Dark text on light backgrounds
        </div>
        <div class="__dealer-subdescription">
          Color plays an important role in text legibility.
        </div>
        <div class="typo-legibility">
          <div class="typo-legibility-col">
            <div class="typo-legibility-col-title">Dark text on light backgrounds (shown here as #000000 on #FFFFFF) applies the following opacity levels:</div>
            <div>
              <ul>
                <li>High-emphasis text has an opacity of 87%</li>
                <li>Medium-emphasis text and hint text have opacities of 60%</li>
                <li>Disabled text has an opacity of 38%</li>
              </ul>
            </div>
            
          </div>
          <div class="typo-legibility-img typo-legibility-col">
            <img src="@/assets/text_legability.png" alt="My Image" style="max-width: 100%;">
          </div>
        </div>

        <div class="__dealer-subtitle __dealer-withline-bottom">
          Usage
        </div>
        <div class="__dealer-subdescription">
          This example type scale uses the Roboto typeface for all headlines, subtitles, body, and captions, creating a cohesive typography experience. Hierarchy is communicated through differences in font weight (Light, Medium, Regular), size, letter spacing, and case.<br><br>
          Transparency uses a little more memory when rendering a web page, so it is better to write it in color code.
        </div>
        <div>
          <pre>
            <code>
          <span class="__css-comment">/* 아래 규칙대로 CSS 변수명을 작성해 이용합니다 */</span>

          <span class="__css-comment">/* Text Color - Color Code */</span>
          <span class="__css-attribute">--chekt-text-high:</span> #212121;
          <span class="__css-attribute">--chekt-text-medium:</span> #666666;
          <span class="__css-attribute">--chekt-text-low:</span> #9E9E9E;

          <span class="__css-comment">/* Text Color - Opacity */</span>
          <span class="__css-attribute">--chekt-text-high-rgb:</span> rgba(0,0,0,0.87);
          <span class="__css-attribute">--chekt-text-medium-rgb:</span> rgba(0,0,0,0.6);
          <span class="__css-attribute">--chekt-text-low-rgb:</span> rgba(0,0,0,0.38);


          <span class="__css-comment">/* Text Scale */</span>
          
          <span class="__css-comment">/* Headline 1 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">96px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">300;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">-1.5px;</span>

          <span class="__css-comment">/* Headline 2 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">60px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">300;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">-0.5px;</span>

          <span class="__css-comment">/* Headline 3 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">48px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0px;</span>
          
          <span class="__css-comment">/* Headline 4 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">34px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0.25px;</span>

          <span class="__css-comment">/* Headline 5 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">24px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0px;</span>

          <span class="__css-comment">/* Headline 6 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">20px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">500;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0.15px;</span>

          <span class="__css-comment">/* Subtitle 1 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">16px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0.15px;</span>

          <span class="__css-comment">/* Subtitle 2 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">14px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">500;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0.1px;</span>

          <span class="__css-comment">/* SUBTITLE 3 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">13px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0.1px;</span>

          <span class="__css-comment">/* Body 1 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">16px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0.5px;</span>

          <span class="__css-comment">/* Body 2 */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">60px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">-0.5px;</span>

          <span class="__css-comment">/* Button */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">14px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">500;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">1.25px;</span>

          <span class="__css-comment">/* Caption */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">12px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">0.4px;</span>

          <span class="__css-comment">/* OVERLINE */</span>
          <span class="__css-attribute">font-size:</span> <span class="__css-string">10px;</span>
          <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
          <span class="__css-attribute">letter-spacing:</span> <span class="__css-string">1.5px;</span>
            </code>
          </pre>
        </div>
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
    this.$tool.scrollTo(0, 0)
  },
  methods: {
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
</style>
