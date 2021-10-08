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
          Data Table
        </div>
        <div class="__dealer-description">
          Data tables display sets of data across rows and columns.
        </div>
      </div>
      <div class="__dealer-component-content">

        <!-- Default Table  -->
        <!-- ***************  -->
        <section id="dealer-content-move1">
          <div class="__dealer-subtitle __dealer-withline-top">
            Default Table
          </div>
          <div class="__dealer-subdescription">
            The data table’s features are ideal for organizing and displaying data in a UI. The column headers can sort data in ascending or descending order, rows can be expanded to progressively disclose information, and single or batch actions can be taken on rows.<br><br>
            The data table toolbar gives a location for primary buttons, search, filtering, table display settings, and other utilities.
          </div>
          <!-- DEMO TABLE DEFAULT -->
          <div class="__dealer-demo">
            <div class="table">
              <table>
                <!-- TABLE HEAD -->
                <thead class="table-header padding-all--8">
                  <tr>
                    <td class="table-cell--width--minimized">id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>date</td>
                  </tr>
                </thead>
                <!-- TABLE BODY -->
                <tbody class="table-body padding-all--8">
                  <tr>
                    <td>23442</td>
                    <td>bobby kim</td>
                    <td>bobbyk@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 4, 2020, 2:58 PM</td>
                  </tr>
                  <tr>
                    <td>12244</td>
                    <td>kevin park</td>
                    <td>kevinp@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 12, 2020, 1:23 PM</td>
                  </tr>
                  <tr>
                    <td>15724</td>
                    <td>trevor seo</td>
                    <td>trevors@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 14, 2020, 9:11 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- DEMO TABLE LARGE -->
          <div class="__dealer-demo">
            <div class="table">
              <table>
                <!-- TABLE HEAD -->
                <thead class="table-header padding-all--12">
                  <tr>
                    <td class="table-cell--width--minimized">id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>date</td>
                  </tr>
                </thead>
                <!-- TABLE BODY -->
                <tbody class="table-body padding-all--12">
                  <tr>
                    <td>23442</td>
                    <td>bobby kim</td>
                    <td>bobbyk@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 4, 2020, 2:58 PM</td>
                  </tr>
                  <tr>
                    <td>12244</td>
                    <td>kevin park</td>
                    <td>kevinp@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 12, 2020, 1:23 PM</td>
                  </tr>
                  <tr>
                    <td>15724</td>
                    <td>trevor seo</td>
                    <td>trevors@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 14, 2020, 9:11 AM</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>

          <!-- DEMO TABLE VENTI -->
          <div class="__dealer-demo">
            <div class="table">
              <table>
                <!-- TABLE HEAD -->
                <thead class="table-header padding-all--16">
                  <tr>
                    <td class="table-cell--width--minimized">id</td>
                    <td>name</td>
                    <td>email</td>
                    <td>date</td>
                  </tr>
                </thead>
                <!-- TABLE BODY -->
                <tbody class="table-body padding-all--16">
                  <tr>
                    <td>23442</td>
                    <td>bobby kim</td>
                    <td>bobbyk@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 4, 2020, 2:58 PM</td>
                  </tr>
                  <tr>
                    <td>12244</td>
                    <td>kevin park</td>
                    <td>kevinp@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 12, 2020, 1:23 PM</td>
                  </tr>
                  <tr>
                    <td>15724</td>
                    <td>trevor seo</td>
                    <td>trevors@gmail.com</td>
                    <td class="table-cell--width--minimized">Aug 14, 2020, 9:11 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- CODE -->

          <!-- <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* table 크기는 padding-all--?으로 조절 할 수 있습니다. */</span>

            <span class="__html-comment">/* table */</span>
            <span class="__html-tag">&lt;table </span><span class="__html-string">class="</span><span class="__html-class">table"</span><span class="__html-tag">&gt;</span>      
              <span class="__html-tag">&lt;thead </span><span class="__html-string">class="</span><span class="__html-class">table-header padding-all--8"</span><span class="__html-tag">&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>id<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>name<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>email<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>date<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>
              <span class="__html-tag">&lt;/thead&gt;</span>
              <span class="__html-tag">&lt;tbody </span><span class="__html-string">class="</span><span class="__html-class">table-body padding-all--8"</span><span class="__html-tag">&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>23442<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>bobby kim<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>bobbyk@gmail.com<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>Aug 4, 2020, 2:58 PM<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>12244<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>kevin park<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>kevinp@gmail.com<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>Aug 12, 2020, 1:23 PM<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>15724<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>trevor seo<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>trevors@gmail.com<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>Aug 14, 2020, 9:11 AM<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>                                
              <span class="__html-tag">&lt;/tbody&gt;</span>
            <span class="__html-tag">&lt;/table&gt;</span>      
              </code>
            </pre>
          </div>

          <div class="__dealer-subtitle2" style="margin-top:50px;">
            CSS
          </div>
          <div>
            <pre>
              <code>
            <span class="__css-comment">/* common */</span>
            <span class="__css-name">.table {</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">100%;</span>
              <span class="__css-attribute">max-width:</span> <span class="__css-string">100%;</span>
              <span class="__css-attribute">border-collapse:</span> <span class="__css-string">collapse;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-header {</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">12px;</span>
              <span class="__css-attribute">text-transform:</span> <span class="__css-string">uppercase;</span>
              <span class="__css-attribute">font-weight:</span> <span class="__css-string">500;</span>
              <span class="__css-attribute">color:</span> <span class="__css-string">var(--chekt-blue-gray-higher);</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-blue-gray-low);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-body {</span>
              <span class="__css-attribute">font-size:</span> <span class="__css-string">14px;</span>
              <span class="__css-attribute">font-weight:</span> <span class="__css-string">400;</span>
              <span class="__css-attribute">color:</span> <span class="__css-string">var(--chekt-blue-gray-highest);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-cell--width--minimized {</span>
              <span class="__css-attribute">width:</span> <span class="__css-string">1px;</span>
              <span class="__css-attribute">white-space:</span> <span class="__css-string">nowrap;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-header > tr > td:first-child, .table-body > tr > td:first-child {</span>
              <span class="__css-attribute">padding-left:</span> <span class="__css-string">20px;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-header > tr > td:last-child, .table-body > tr > td:last-child {</span>
              <span class="__css-attribute">padding-right:</span> <span class="__css-string">20px;</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-body > tr > td{</span>
              <span class="__css-attribute">box-shadow:</span> <span class="__css-string">inset 0 1px var(--chekt-border);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-body > tr > td:last-child{</span>
              <span class="__css-attribute">box-shadow:</span> <span class="__css-string">inset 0 -1px var(--chekt-border);</span>
            <span class="__css-name">}</span>
            <span class="__css-name">.table-body > tr:hover{</span>
              <span class="__css-attribute">background-color:</span> <span class="__css-string">var(--chekt-blue-gray-lower);</span>
              <span class="__css-attribute">cursor:</span> <span class="__css-string">pointer;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* default table */</span>
            <span class="__css-name">.padding-all--8 > tr > td {</span>
              <span class="__css-attribute">padding:</span> <span class="__css-string">8px;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* large table */</span>
            <span class="__css-name">.padding-all--12 > tr > td {</span>
              <span class="__css-attribute">padding:</span> <span class="__css-string">12px;</span>
            <span class="__css-name">}</span>

            <span class="__css-comment">/* venti table */</span>
            <span class="__css-name">.padding-all--16 > tr > td {</span>
              <span class="__css-attribute">padding:</span> <span class="__css-string">16px;</span>
            <span class="__css-name">}</span>

              </code>
            </pre>
          </div> -->
          
          <!-- //CODE -->

        </section>

        <!-- Table With Checkbox  -->
        <!-- ***************  -->
        <section id="dealer-content-move2">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Table With Checkbox
          </div>
          <div class="__dealer-subdescription">
            Table may include an checkbox before or after the cell.
          </div>
          <!-- DEMO TABLE DEFAULT -->
          <div class="__dealer-demo">
            <div class="table">
              <table>
                <!-- TABLE HEAD -->
                <thead class="table-header padding-all--8">
                  <tr>
                    <td class="table-cell--width--minimized">
                      <label class="checkbox">
                        <input @click="checkboxAllToggle()" type="checkbox" id="header-checkbox">
                        <span class="checkmark"></span>
                      </label>
                    </td>
                    <td class="table-cell--width--minimized">id</td>
                    <td>name</td>
                    <td>email</td>
                    <td class="table-cell--width--minimized">date</td>
                  </tr>
                </thead>
                <!-- TABLE BODY -->
                <tbody class="table-body padding-all--8">
                  <tr>
                    <td>
                      <label class="checkbox">
                        <input @click="checkboxToggle()" type="checkbox">
                        <span class="checkmark"></span>
                      </label>
                    </td>
                    <td>23442</td>
                    <td>bobby kim</td>
                    <td>bobbyk@gmail.com</td>
                    <td>Aug 4, 2020, 2:58 PM</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkbox">
                        <input @click="checkboxToggle()" type="checkbox">
                        <span class="checkmark"></span>
                      </label>
                    </td>
                    <td>12244</td>
                    <td>kevin park</td>
                    <td>kevinp@gmail.com</td>
                    <td>Aug 12, 2020, 1:23 PM</td>
                  </tr>
                  <tr>
                    <td>
                      <label class="checkbox">
                        <input @click="checkboxToggle()" type="checkbox">
                        <span class="checkmark"></span>
                      </label>
                    </td>
                    <td>15724</td>
                    <td>trevor seo</td>
                    <td>trevors@gmail.com</td>
                    <td>Aug 14, 2020, 9:11 AM</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>

          <!-- CODE -->

          <!-- <div class="__dealer-subtitle2">
            HTML
          </div>
          <div>
            <pre>
              <code>
            <span class="__html-comment">/* table */</span>
            <span class="__html-tag">&lt;table </span><span class="__html-string">class="</span><span class="__html-class">table"</span><span class="__html-tag">&gt;</span>      
              <span class="__html-tag">&lt;thead </span><span class="__html-string">class="</span><span class="__html-class">table-header padding-all--8"</span><span class="__html-tag">&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>
                    <span class="__html-tag">&lt;label </span><span class="__js-handler">onClick="</span><span class="__js-string">checkboxAllToggle()"</span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
                    <span class="__html-tag">&lt;/label&gt;</span>
                  <span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>id<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>name<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>email<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>date<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>
              <span class="__html-tag">&lt;/thead&gt;</span>
              <span class="__html-tag">&lt;tbody </span><span class="__html-string">class="</span><span class="__html-class">table-body padding-all--8"</span><span class="__html-tag">&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>
                    <span class="__html-tag">&lt;label </span><span class="__js-handler">onClick="</span><span class="__js-string">checkboxToggle()"</span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
                    <span class="__html-tag">&lt;/label&gt;</span>
                  <span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>23442<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>bobby kim<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>bobbyk@gmail.com<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>Aug 4, 2020, 2:58 PM<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>
                    <span class="__html-tag">&lt;label </span><span class="__js-handler">onClick="</span><span class="__js-string">checkboxToggle()"</span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
                    <span class="__html-tag">&lt;/label&gt;</span>
                  <span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>12244<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>kevin park<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>kevinp@gmail.com<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>Aug 12, 2020, 1:23 PM<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>
                <span class="__html-tag">&lt;tr&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>
                    <span class="__html-tag">&lt;label </span><span class="__js-handler">onClick="</span><span class="__js-string">checkboxToggle()"</span><span class="__html-string">class="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;input </span><span class="__html-string">type="</span><span class="__html-class">checkbox"</span><span class="__html-tag">&gt;</span>
                      <span class="__html-tag">&lt;span </span><span class="__html-string">class="</span><span class="__html-class">checkmark"</span><span class="__html-tag">&gt;</span><span class="__html-tag">&lt;/span&gt;</span>
                    <span class="__html-tag">&lt;/label&gt;</span>
                  <span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>15724<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>trevor seo<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td&gt;</span>trevors@gmail.com<span class="__html-tag">&lt;/td&gt;</span>
                  <span class="__html-tag">&lt;td </span><span class="__html-string">class="</span><span class="__html-class">table-cell--width--minimized"</span><span class="__html-tag">&gt;</span>Aug 14, 2020, 9:11 AM<span class="__html-tag">&lt;/td&gt;</span>
                <span class="__html-tag">&lt;/tr&gt;</span>                                
              <span class="__html-tag">&lt;/tbody&gt;</span>
            <span class="__html-tag">&lt;/table&gt;</span>      
              </code>
            </pre>
          </div>

          <div class="__dealer-subtitle2" style="margin-top:50px;">
            CSS
          </div>
          <div>
            <pre>
              <code>
            <span class="__css-comment">/* css는 checkboxes menu에서 확인하세요 */</span>
              </code>
            </pre>
          </div> -->

          <!-- //CODE -->

        </section>

        <!-- Resizable Table  -->
        <!-- ***************  -->
        <section id="dealer-content-move3">
          <div class="__dealer-subtitle __dealer-withline-top __dealer-gap-top">
            Table With Action Button
          </div>
          <div class="__dealer-subdescription">
            Data tables are an enhanced version of an HTML table and are used to display tabular data.
          </div>
          <div class="__dealer-demo">
            <div id="table-with-dialog" class="table">
              <table>
                <!-- TABLE HEAD -->
                <thead class="table-header padding-all--8">
                  <tr>
                    <td class="table-cell--width--minimized">id</td>
                    <td>name</td>
                    <td>email</td>
                    <td class="table-cell--width--minimized">date</td>
                    <td class="table-cell--width--minimized"></td>
                  </tr>
                </thead>
                <!-- TABLE BODY -->
                <tbody class="table-body padding-all--8">
                  <tr>
                    <td>23442</td>
                    <td>bobby kim</td>
                    <td>bobbyk@gmail.com</td>
                    <td>Aug 4, 2020, 2:58 PM</td>
                    <td>
                      <div class="__chekt-dialog">
                        <div>Edit</div>
                        <div>Download</div>
                        <div class="delete">Delete</div>
                      </div>
                      <div @click="onClickMoreButton($event)" class="more"><MyIcon v-bind:icon="'more'" v-bind:width="18" /></div>
                    </td>
                  </tr>
                  <tr>
                    <td>12244</td>
                    <td>kevin park</td>
                    <td>kevinp@gmail.com</td>
                    <td>Aug 12, 2020, 1:23 PM</td>
                    <td>
                      <div class="__chekt-dialog">
                        <div>Edit</div>
                        <div>Download</div>
                        <div class="delete">Delete</div>
                      </div>
                      <div @click="onClickMoreButton($event)" class="more"><MyIcon v-bind:icon="'more'" v-bind:width="18" /></div>
                    </td>
                  </tr>
                  <tr>
                    <td>15724</td>
                    <td>trevor seo</td>
                    <td>trevors@gmail.com</td>
                    <td>Aug 14, 2020, 9:11 AM</td>
                    <td>
                      <div class="__chekt-dialog">
                        <div>Edit</div>
                        <div>Download</div>
                        <div class="delete">Delete</div>
                      </div>
                      <div @click="onClickMoreButton($event)" class="more">
                        <MyIcon v-bind:icon="'more'" v-bind:width="18" />
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
          </div>
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
    MyIcon,
  },
  computed: {
    scrollPositon: function () {
      return this.$store.getters.scrollPositon
    },
  },
  data: function() {
    return {
      moreBtnClicked: false,
      dialogEl: null,
      targetEl: null,
    }
  },
  watch: {
    scrollPositon: function () {
      this.onScroll()
    },
  },
  created: function () {
    document.body.addEventListener('click', this.closeButton, true); 
    window.addEventListener("resize", this.onResizeScreen)
    // window.addEventListener('scroll', this.onScroll)
    this.$tool.scrollTo(0, 0)
  },
  mounted: function () {
    var talbe = document.getElementById('table-with-dialog')
    console.log(talbe);
    talbe.addEventListener('scroll', this.onScroll)
    this.onScrollForContetntWidget()
  },
  beforeDestroy: function () {
    document.body.removeEventListener('click', this.closeButton, true);
    window.removeEventListener("resize", this.onResizeScreen)
    window.removeEventListener('scroll', this.onScroll)
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
    onScrollForContetntWidget: function () {
      var sections = ''
      var contentMenus = ''
      sections = document.querySelectorAll('.__dealer-component-content section')
      contentMenus = document.querySelectorAll('.__dealer-contents-widget .__dealer-contents-body div')
      this.$tool.scrollContentsWidgetMoving(sections, contentMenus)
    },
    checkboxAllToggle: function() {
      // INIT - all check box in to array
      var inputElements = document.querySelectorAll('.table-body input')

      // ACTION - all check box check
      if (document.getElementById("header-checkbox").checked) {
        for(var i=0; inputElements[i]; ++i){
          inputElements[i].checked = true
        }
      }
      else {
        for(var j=0; inputElements[j]; ++j){
          inputElements[j].checked = false
        }
      }
    },
    checkboxToggle: function() {
      // INIT - all check box in to array
      var inputElements = document.querySelectorAll('.table-body input')

      // ACTION - if even one checkbox is false, header checkbox to false
      for(var i=0; inputElements[i]; ++i){
        if (!inputElements[i].checked) return document.getElementById("header-checkbox").checked = false
      }
      // ACTION - if all checkbox is true, header checkbox to true
      document.getElementById("header-checkbox").checked = true
    },
    onClickMoreButton: function (e) {

      e.stopPropagation()
      // this.$tool.getisDialogShow(e)
      
      // GET - dialog element
      this.dialogEl = e.currentTarget.parentNode.getElementsByClassName('__chekt-dialog')[0]
      if (!this.dialogEl) return

      // GET - target position
      this.targetEl = e.currentTarget
      if (!this.targetEl) return
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth +'px'

      // ACTION - toggle show/hidden
      this.dialogEl.classList.add('active')
      this.targetEl.classList.add('active')
    },
    closeButton: function (e) {
      if (!this.dialogEl) return
      if (this.dialogEl.classList.contains('active')) e.stopPropagation()
      this.dialogEl.classList.remove('active')
      this.targetEl.classList.remove('active')
    },
    // onResizeScreen: function () {

    //   // GET - dialog element
    //   if (!this.dialogEl) return

    //   // GET - target position
    //   this.targetRect = this.targetEl.getBoundingClientRect();

    //   // ADD - position css
    //   this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
    //   this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth +'px'

    // },
    onScroll: function () {
      // GET - dialog element
      if (!this.dialogEl) return

      // GET - target position
      this.targetRect = this.targetEl.getBoundingClientRect();

      // ADD - position css
      this.dialogEl.style.top = this.targetRect.y - this.dialogEl.offsetHeight - 5 +'px'
      this.dialogEl.style.left = this.targetRect.x - this.dialogEl.offsetWidth + this.targetEl.offsetWidth +'px'

    }
  }
}
</script>

<style scoped>
/* TABLE */
.table {
  width: 100%;
  max-width: 100%;
  max-height: 90%;
  /* border-collapse: collapse; */
  white-space: nowrap;
  overflow: hidden;
  max-height: 100%;
}

/* TABLE SCROLL */
.table:hover {
  overflow-x: auto;
  overflow: overlay;
}
.table::-webkit-scrollbar {
  -webkit-appearance: none;
}
.table::-webkit-scrollbar-track {
  opacity: 0;
}
.table::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, .2);
}
/* ////TABLE SCROLL */

.table > table {
  width: 100%;
  border-collapse: collapse;
  white-space: nowrap;
}
.table-body {
  font-size: 14px;
  font-weight: 400;
  color: var(--chekt-blue-gray-highest);
}
.table-header {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  color: var(--chekt-blue-gray-higher);
  background-color: var(--chekt-blue-gray-low);
}
.table-cell--width--minimized {
  width: 1px;
}
.table-body > tr > td {
  box-shadow: inset 0 1px var(--chekt-border);
}
.table-body > tr:last-child  {
  box-shadow: inset 0 -1px var(--chekt-border);
}
.padding-all--8 > tr > td {
  padding: 8px;
}
.padding-all--12 > tr > td {
  padding: 12px;
}
.padding-all--16 > tr > td {
  padding: 16px;
}

.table-body > tr:hover {
  background-color: var(--chekt-blue-gray-lower);
  cursor: pointer;
}
.table-header > tr > td:first-child, .table-body > tr > td:first-child {
  padding-left: 20px;
}
.table-header > tr > td:last-child, .table-body > tr > td:last-child {
  padding-right: 20px;
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
  margin-left: 7px;
  color: var(--chekt-text-high);
  font-size: 14px;
}
.checkbox-text.small {
  font-size: 12px;
  margin-left: 6px;
}
.checkbox-text.large {
  font-size: 16px;
  margin-left: 8px;
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


/* MORE */

.more:hover {
  box-shadow:rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  background-color: white;
  transition: box-shadow .3s;
}
.more {
  width: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.more:first-child {
  pointer-events: none;
}
.more.active {
  box-shadow:rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px;
  background-color: white;
}
.__chekt-dialog {
  position: fixed;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px var(--chekt-border);
  border: 1px solid var(--chekt-border);
  border-radius: 5px;
  min-width: 100px;
  z-index: 1;
  visibility: hidden;
  background-color: white;
  transform:scale(.8);
  opacity: 0;
  /* inset: auto 18px 98px auto; */
  white-space: nowrap;
}
.__chekt-dialog.active {
  visibility: visible;
  transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1) ,opacity .3s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform:scale(1);
  opacity: 1;
}
.__chekt-dialog > div {
  padding: 8px 20px 8px 10px;
  font-size: 14px;
  cursor: pointer;
  color: var(--chekt-primary-shadow-color);
}
.__chekt-dialog div.delete {
  color: var(--chekt-danger-shadow-color);
}
.__chekt-dialog div:hover {
  background-color: var(--chekt-blue-gray-lower);
  color: var(--chekt-text-high);
}
</style>
