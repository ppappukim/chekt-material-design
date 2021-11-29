<template>
    <div class="footer">
      <div class="wrapper">
        <div class="define-chekt">
          <img src="@/assets/logo-gray.png" style="width:55px; height:53px; margin-top:5px; color:var(--blue-gray-high);">
          <div class="contents">
            <div class="define-chekt-desc">
              CHeKT products and solutions allow your alarm or security company to deliver video into the alarm monitoring center, giving dispatch agents instant access to video evidence of precisely what causes the alarm to occur.
            </div>
            <ul class="sns">
              <li class="sns-text"><a href="https://twitter.com/chektsolutions" target="_blank"><span style="text-decoration:underline;">Twitter</span></a></li>
              <li class="sns-text"><a href="https://www.youtube.com/channel/UCsksSaqpOkVhoS-34uyxWyg" target="_blank"><span style="text-decoration:underline;">Youtube</span></a></li>
              <li class="sns-text"><a href="https://www.facebook.com/chektsolutions" target="_blank"><span style="text-decoration:underline;">Facebook</span></a></li>
              <li class="sns-text"><a href="https://www.instagram.com/chektsolutions/" target="_blank"><span style="text-decoration:underline;">Instargram</span></a></li>
              <li class="sns-text-last"><a href="https://www.linkedin.com/company/chekt/mycompany/" target="_blank"><span style="text-decoration:underline;">LinkedIn</span></a></li>
            </ul>
          </div>
        </div>
        <div class="border"></div>
        <div class="other-infos">
          <div class="other-policy">
            <div><a href="http://chekt.com/images/terms/Chekt---Subscriber-Terms-and-Conditions-Nov-2017.pdf" target="_blank">Terms of Service</a></div>
            <div><a href="https://www.youtube.com/channel/UCsksSaqpOkVhoS-34uyxWyg" target="_blank">Privacy Policy</a></div>
          </div>
          <div>Copyright © 2015 - 2022 CHeKT</div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.footer {
  /* margin-top: 50px; */
  background-color: #FAFAFA;
  padding-right: 40px;
  padding-left: 40px;
  margin-left: 280px;
}
.wrapper {
  max-width: 1140px;
  margin: auto;
  padding-top: 50px;
  padding-bottom: 100px;
}
.contents {
  padding-left: 30px;
  display: flex;
  flex-direction: column;
}
.define-chekt {
  display: flex;
  flex-direction: row;
}
.define-chekt-desc {
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--chekt-blue-gray-high);
  line-height: 22px;
  width: 90%;
}
.sns {
  display: block;  /* Remove bullet points; allow greater control of positioning */
  width: 100%;     /* Get the row full width */
  color: var(--chekt-blue-gray-higher);
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 24px;
}
.sns li {
  display: inline-block; /* Get all images to show in a row */
  text-align: center;    /* Centre align the images */
}
.sns > div {
  margin-right: 10px;
}
.sns-text > a {
  text-decoration: underline;
}

.sns-text > a:visited, a:link, a:active, .sns-text-last > a:visited, a:link, a:active {
  text-decoration: none;
  color: var(--chekt-blue-gray-higher);
  cursor: pointer;
}
.sns-text > a::after {
  margin: 0 8px;
  text-decoration: none;
  content: "/";
}

.sns-text > a:hover {
  color: var(--chekt-gray-high);
}
.border {
  border-bottom: solid 1px var(--chekt-border);
  margin-top: 50px;
}
.other-infos {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 12px;
  color: var(--chekt-blue-gray-high);
  line-height: 22px;
}
.other-policy {
  display: flex;
  flex-direction: row;
}
.other-policy > div {
  display: inline;
  margin-right: 10px;
  text-decoration: underline;
}
.other-policy > div > a:visited, a:link, a:active {
  color: var(--chekt-blue-gray-high);
}
.other-policy > div > a:hover {
  color: var(--chekt-gray-high);
  cursor: pointer;
}

@media screen and (max-width: 750px) { 
  .define-chekt {
    flex-direction: column;
  }
  .contents {
    padding-left: 0px;
    padding-top: 20px;
  }
  .other-infos {
    flex-direction: column;
  }
  .other-policy {
    padding-bottom: 30px;
  }

}
@media screen and (max-width: 1341px) {
  .footer {
    margin-left: auto;

  }
}
</style>
