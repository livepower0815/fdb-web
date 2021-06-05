<template>
  <!--Dashboar 開始-->
  <div class="outline dashboard-block">
    <!--Title 開始-->
    <div class="dashboard-title">Dashboard</div>
    <!--Title 結束-->

    <!--線條圖 開始-->
    <div class="dashboard-chart-block">
      <div class="dashboard-chart-title">
        <div class="block">
          <div class="title">
            <div class="icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.7681 12.9141C14.3997 12.0414 13.865 11.2486 13.1939 10.5801C12.5248 9.90959 11.7322 9.37501 10.8599 9.00586C10.8521 9.00195 10.8443 9 10.8365 8.99609C12.0533 8.11719 12.8443 6.68555 12.8443 5.07031C12.8443 2.39453 10.6763 0.226562 8.00054 0.226562C5.32476 0.226562 3.15679 2.39453 3.15679 5.07031C3.15679 6.68555 3.9478 8.11719 5.1646 8.99805C5.15679 9.00195 5.14897 9.00391 5.14116 9.00781C4.26616 9.37695 3.48101 9.90625 2.80718 10.582C2.13669 11.2511 1.60211 12.0437 1.23296 12.916C0.870307 13.77 0.674721 14.6856 0.656787 15.6133C0.656266 15.6341 0.659922 15.6549 0.667541 15.6743C0.675159 15.6937 0.686586 15.7114 0.701147 15.7263C0.715709 15.7412 0.73311 15.7531 0.752327 15.7612C0.771543 15.7693 0.792185 15.7734 0.813037 15.7734H1.98491C2.07085 15.7734 2.13921 15.7051 2.14116 15.6211C2.18022 14.1133 2.78569 12.7012 3.85601 11.6309C4.96343 10.5234 6.43413 9.91406 8.00054 9.91406C9.56694 9.91406 11.0376 10.5234 12.1451 11.6309C13.2154 12.7012 13.8208 14.1133 13.8599 15.6211C13.8619 15.707 13.9302 15.7734 14.0162 15.7734H15.188C15.2089 15.7734 15.2295 15.7693 15.2487 15.7612C15.268 15.7531 15.2854 15.7412 15.2999 15.7263C15.3145 15.7114 15.3259 15.6937 15.3335 15.6743C15.3412 15.6549 15.3448 15.6341 15.3443 15.6133C15.3248 14.6797 15.1314 13.7715 14.7681 12.9141ZM8.00054 8.42969C7.10405 8.42969 6.2603 8.08008 5.62554 7.44531C4.99077 6.81055 4.64116 5.9668 4.64116 5.07031C4.64116 4.17383 4.99077 3.33008 5.62554 2.69531C6.2603 2.06055 7.10405 1.71094 8.00054 1.71094C8.89702 1.71094 9.74077 2.06055 10.3755 2.69531C11.0103 3.33008 11.3599 4.17383 11.3599 5.07031C11.3599 5.9668 11.0103 6.81055 10.3755 7.44531C9.74077 8.08008 8.89702 8.42969 8.00054 8.42969Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="word">個人返佣數量</div>
          </div>
          <div class="sub green">{{ dashboardChart.personValue }}</div>
        </div>

        <div class="block">
          <div class="title">
            <div class="icon">
              <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.1875 0.8125C3.91875 0.8125 2.0625 2.66875 2.0625 4.9375C2.0625 6.3015 2.73419 7.51562 3.75994 8.26775C1.947 9.167 0.6875 11.0315 0.6875 13.1875H2.0625C2.0625 10.9023 3.90225 9.0625 6.1875 9.0625C8.47275 9.0625 10.3125 10.9023 10.3125 13.1875H11.6875C11.6875 10.9023 13.5273 9.0625 15.8125 9.0625C18.0977 9.0625 19.9375 10.9023 19.9375 13.1875H21.3125C21.3125 11.0308 20.053 9.167 18.2401 8.26775C18.765 7.88526 19.1923 7.38435 19.4872 6.8057C19.7821 6.22705 19.9364 5.58698 19.9375 4.9375C19.9375 2.66875 18.0812 0.8125 15.8125 0.8125C13.5437 0.8125 11.6875 2.66875 11.6875 4.9375C11.6875 6.3015 12.3592 7.51562 13.3849 8.26775C12.3805 8.76161 11.549 9.548 11 10.5234C10.451 9.548 9.61955 8.76161 8.61506 8.26775C9.13997 7.88526 9.56725 7.38435 9.86219 6.8057C10.1571 6.22705 10.3114 5.58698 10.3125 4.9375C10.3125 2.66875 8.45625 0.8125 6.1875 0.8125ZM6.1875 2.1875C7.71581 2.1875 8.9375 3.40919 8.9375 4.9375C8.9375 6.46581 7.71581 7.6875 6.1875 7.6875C4.65919 7.6875 3.4375 6.46581 3.4375 4.9375C3.4375 3.40919 4.65919 2.1875 6.1875 2.1875ZM15.8125 2.1875C17.3408 2.1875 18.5625 3.40919 18.5625 4.9375C18.5625 6.46581 17.3408 7.6875 15.8125 7.6875C14.2842 7.6875 13.0625 6.46581 13.0625 4.9375C13.0625 3.40919 14.2842 2.1875 15.8125 2.1875Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="word">推薦人返佣數量</div>
          </div>
          <div class="sub orange">{{ dashboardChart.recommenderValue }}</div>
        </div>

        <div class="block">
          <div class="title">
            <div class="icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.197266 11.6855C0.204242 11.6661 0.214996 11.6483 0.228908 11.633C0.242819 11.6178 0.25961 11.6055 0.278314 11.5967C0.297017 11.588 0.317263 11.5831 0.33788 11.5823C0.358498 11.5814 0.37908 11.5846 0.398438 11.5918L1.59375 12.0273V1.51562C1.59375 0.78125 2.1875 0.1875 2.92188 0.1875H13.0781C13.8125 0.1875 14.4062 0.78125 14.4062 1.51562V12.0273L15.6035 11.5918C15.6211 11.5859 15.6387 11.582 15.6562 11.582C15.7422 11.582 15.8125 11.6523 15.8125 11.7383V12.9023C15.8125 12.9668 15.7715 13.0254 15.709 13.0488L8.21484 15.7754C8.07617 15.8262 7.92578 15.8262 7.78711 15.7754L0.291016 13.0508C0.228516 13.0273 0.1875 12.9688 0.1875 12.9043V11.7402C0.1875 11.7207 0.191406 11.7031 0.197266 11.6855ZM8 14.3574L13 12.5391V1.59375H3V12.5391L8 14.3574Z"
                  fill="white"
                />
                <path
                  d="M10.3333 8.33333H6.66667C6.57826 8.33333 6.49348 8.29821 6.43096 8.2357C6.36845 8.17319 6.33333 8.08841 6.33333 8C6.33333 7.91159 6.36845 7.82681 6.43096 7.7643C6.49348 7.70179 6.57826 7.66667 6.66667 7.66667H9.33333C9.77536 7.66667 10.1993 7.49107 10.5118 7.17851C10.8244 6.86595 11 6.44203 11 6C11 5.55797 10.8244 5.13405 10.5118 4.82149C10.1993 4.50893 9.77536 4.33333 9.33333 4.33333H8.66667V3H7.33333V4.33333H5.66667V5.66667H9.33333C9.42174 5.66667 9.50652 5.70179 9.56904 5.7643C9.63155 5.82681 9.66667 5.91159 9.66667 6C9.66667 6.08841 9.63155 6.17319 9.56904 6.2357C9.50652 6.29821 9.42174 6.33333 9.33333 6.33333H6.66667C6.22464 6.33333 5.80072 6.50893 5.48816 6.82149C5.17559 7.13405 5 7.55797 5 8C5 8.44203 5.17559 8.86595 5.48816 9.17851C5.80072 9.49107 6.22464 9.66667 6.66667 9.66667H7.33333V11H8.66667V9.66667H10.3333V8.33333Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="word">出金數量</div>
          </div>
          <div class="sub red">{{ dashboardChart.withdrawValue }}</div>
        </div>
      </div>

      <div class="dashboard-chart-filiter-block">
        <div class="menu">
          <a
            :class="{ active: dashboardChart.chartSelect === 'all' }"
            style="cursor: pointer;"
            @click.prevent="dashboardChart.chartSelect = 'all'"
            >全部</a
          >
          <a
            :class="{ active: dashboardChart.chartSelect === 'person' }"
            style="cursor: pointer;"
            @click.prevent="dashboardChart.chartSelect = 'person'"
            >個人返佣數量</a
          >
          <a
            :class="{ active: dashboardChart.chartSelect === 'recommender' }"
            style="cursor: pointer;"
            @click.prevent="dashboardChart.chartSelect = 'recommender'"
            >推薦人返佣數量</a
          >
          <a
            :class="{ active: dashboardChart.chartSelect === 'withdraw' }"
            style="cursor: pointer;"
            @click.prevent="dashboardChart.chartSelect = 'withdraw'"
            >出金數量</a
          >
        </div>
        <div class="btn">
          <select v-model="dashboardChart.dateRange">
            <option value="week">一週</option>
            <option value="mouth">一月</option>
            <option value="quarter">一季</option>
          </select>
          <select v-model="dashboardChart.currencyType">
            <option value="BTC">BTC</option>
            <option value="USID">USID</option>
            <option value="ETH">ETH</option>
            <option value="XRP">XRP</option>
            <option value="EOS">EOS</option>
          </select>
        </div>
      </div>

      <!--Chart-->
      <div class="dashboard-chart-main">
        <div id="container">
          <LineChart ref="linechart" :options="lineChartOptions" :chart-style="{ width: '100%', height: '100%' }" />
        </div>
      </div>
    </div>
    <!--線條圖 結束-->

    <!--幣 開始-->
    <div class="dashboard-coin-block">
      <div class="exchange">
        <div class="title">交易所</div>
        <a href="javasscrip:void(0)" class="drop">
          <svg
            width="118"
            height="46"
            viewBox="0 0 118 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect x="0.0117188" width="117.142" height="46" fill="url(#pattern0)" />
            <defs>
              <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0" transform="translate(0 -0.00931188) scale(0.002 0.00509312)" />
              </pattern>
              <image
                id="image0"
                width="500"
                height="200"
                xlink:href="data:image/png;base64,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"
              />
            </defs>
          </svg>
          <div class="drop-icon"></div>
        </a>
      </div>

      <div class="earn">
        <div class="title">
          您的盈利
          <el-tooltip effect="dark" content="前往錢包" placement="top">
            <a href="javasscrip:void(0)">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 -4.37114e-07C12.6522 -5.53044e-07 15.1957 1.05357 17.0711 2.92893C18.9464 4.80429 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 -3.21184e-07 12.6522 -4.37114e-07 10C-5.53044e-07 7.34783 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34783 -3.21184e-07 10 -4.37114e-07ZM5.625 9.375C5.45924 9.375 5.30027 9.44085 5.18306 9.55806C5.06585 9.67527 5 9.83424 5 10C5 10.1658 5.06585 10.3247 5.18306 10.4419C5.30027 10.5592 5.45924 10.625 5.625 10.625L12.8662 10.625L10.1825 13.3075C10.0651 13.4249 9.99921 13.584 9.99921 13.75C9.99921 13.916 10.0651 14.0751 10.1825 14.1925C10.2999 14.3099 10.459 14.3758 10.625 14.3758C10.791 14.3758 10.9501 14.3099 11.0675 14.1925L14.8175 10.4425C14.8757 10.3844 14.9219 10.3155 14.9534 10.2395C14.9849 10.1636 15.0011 10.0822 15.0011 10C15.0011 9.91779 14.9849 9.83639 14.9534 9.76046C14.9219 9.68453 14.8757 9.61556 14.8175 9.5575L11.0675 5.8075C10.9501 5.69014 10.791 5.62421 10.625 5.62421C10.459 5.62421 10.2999 5.69014 10.1825 5.8075C10.0651 5.92486 9.99921 6.08403 9.99921 6.25C9.99921 6.41597 10.0651 6.57514 10.1825 6.6925L12.8662 9.375L5.625 9.375Z"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </el-tooltip>
          <!-- <a href="javasscrip:void(0)">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 -4.37114e-07C12.6522 -5.53044e-07 15.1957 1.05357 17.0711 2.92893C18.9464 4.80429 20 7.34783 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 -3.21184e-07 12.6522 -4.37114e-07 10C-5.53044e-07 7.34783 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34783 -3.21184e-07 10 -4.37114e-07ZM5.625 9.375C5.45924 9.375 5.30027 9.44085 5.18306 9.55806C5.06585 9.67527 5 9.83424 5 10C5 10.1658 5.06585 10.3247 5.18306 10.4419C5.30027 10.5592 5.45924 10.625 5.625 10.625L12.8662 10.625L10.1825 13.3075C10.0651 13.4249 9.99921 13.584 9.99921 13.75C9.99921 13.916 10.0651 14.0751 10.1825 14.1925C10.2999 14.3099 10.459 14.3758 10.625 14.3758C10.791 14.3758 10.9501 14.3099 11.0675 14.1925L14.8175 10.4425C14.8757 10.3844 14.9219 10.3155 14.9534 10.2395C14.9849 10.1636 15.0011 10.0822 15.0011 10C15.0011 9.91779 14.9849 9.83639 14.9534 9.76046C14.9219 9.68453 14.8757 9.61556 14.8175 9.5575L11.0675 5.8075C10.9501 5.69014 10.791 5.62421 10.625 5.62421C10.459 5.62421 10.2999 5.69014 10.1825 5.8075C10.0651 5.92486 9.99921 6.08403 9.99921 6.25C9.99921 6.41597 10.0651 6.57514 10.1825 6.6925L12.8662 9.375L5.625 9.375Z"
                fill="#ffffff"
              />
            </svg>
          </a> -->
        </div>
        <div v-for="currency in exchangeList" :key="currency.currencyType" class="main">
          <div class="icon">
            <img :src="require(`@/img/svg/${currency.currencyType}.svg`)" alt="" style="width: 70%; height: 70%; margin: 15%;" />
          </div>
          <div class="title">{{ currency.currencyType }}</div>
          <div class="main">{{ currency.coinCount }}</div>
          <div v-if="currency.bindStatus === 0" class="status">
            <span>未綁定</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.0605 8L11.1823 10.121C11.323 10.2617 11.402 10.4526 11.402 10.6516C11.402 10.8506 11.323 11.0415 11.1823 11.1823C11.0415 11.323 10.8506 11.402 10.6516 11.402C10.4526 11.402 10.2617 11.323 10.121 11.1823L8 9.0605L5.879 11.1823C5.73827 11.323 5.5474 11.402 5.34838 11.402C5.14935 11.402 4.95848 11.323 4.81775 11.1823C4.67702 11.0415 4.59796 10.8506 4.59796 10.6516C4.59796 10.5531 4.61737 10.4555 4.65508 10.3645C4.69279 10.2734 4.74807 10.1907 4.81775 10.121L6.9395 8L4.81775 5.879C4.67702 5.73827 4.59796 5.5474 4.59796 5.34838C4.59796 5.24983 4.61737 5.15225 4.65508 5.0612C4.69279 4.97016 4.74807 4.88743 4.81775 4.81775C4.88743 4.74807 4.97016 4.69279 5.0612 4.65508C5.15225 4.61737 5.24983 4.59796 5.34838 4.59796C5.5474 4.59796 5.73827 4.67702 5.879 4.81775L8 6.9395L10.121 4.81775C10.2617 4.67702 10.4526 4.59796 10.6516 4.59796C10.8506 4.59796 11.0415 4.67702 11.1823 4.81775C11.323 4.95848 11.402 5.14935 11.402 5.34838C11.402 5.5474 11.323 5.73827 11.1823 5.879L9.0605 8ZM8 15.5C3.85775 15.5 0.5 12.1423 0.5 8C0.5 3.85775 3.85775 0.5 8 0.5C12.1423 0.5 15.5 3.85775 15.5 8C15.5 12.1423 12.1423 15.5 8 15.5ZM8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.4087 13.3679 4.88258 12.2426 3.75736C11.1174 2.63214 9.5913 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.5913 2.63214 11.1174 3.75736 12.2426C4.88258 13.3679 6.4087 14 8 14Z"
                fill="#EB5757"
              />
            </svg>
          </div>
          <div v-else class="status already">
            <span>已綁定</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM7.0001 12.9999C10.3138 12.9999 13.0001 10.3136 13.0001 6.99987C13.0001 3.68616 10.3138 0.99987 7.0001 0.99987C3.68639 0.99987 1.0001 3.68616 1.0001 6.99987C1.0001 10.3136 3.68639 12.9999 7.0001 12.9999Z"
                fill="#05D394"
              />
              <path
                d="M9.74171 4.20074C9.73469 4.20711 9.72812 4.2139 9.72201 4.22106L6.30257 8.30785L4.24184 6.3739C4.10186 6.25154 3.91671 6.18493 3.72541 6.1881C3.5341 6.19126 3.35158 6.26396 3.21628 6.39087C3.08099 6.51778 3.00349 6.689 3.00012 6.86845C2.99674 7.0479 3.06775 7.22157 3.19819 7.35288L5.80339 9.79757C5.87357 9.86328 5.95714 9.91506 6.04912 9.94982C6.1411 9.98458 6.2396 10.0016 6.33875 9.99988C6.43789 9.99816 6.53565 9.97772 6.6262 9.93979C6.71674 9.90185 6.79821 9.8472 6.86575 9.7791L10.7962 5.17049C10.93 5.03872 11.0032 4.86284 10.9999 4.68087C10.9966 4.4989 10.9171 4.32546 10.7785 4.19805C10.64 4.07064 10.4535 3.9995 10.2595 4C10.0655 4.0005 9.8795 4.07261 9.74171 4.20074Z"
                fill="#05D394"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <!--幣 結束-->
  </div>
  <!--Dashboar 結束-->
</template>

<script>
import LineChart from '@/components/charts/LineChart'
import moment from 'moment'
import { formatMoneyInt } from '@/utils/number.js'

// 生產隨機數字
const randomNumber = (int = 1, dec = 0) => {
  const numAry = []
  for (let step = 0; step < int; step++) {
    if (int > 1 && step === int - 1) {
      numAry.push(Math.floor(Math.random() * 9) + 1 + '')
    } else {
      numAry.push(Math.floor(Math.random() * 10) + '')
    }
  }
  if (dec > 0) {
    numAry.push('.')
    for (let step = 0; step < dec; step++) {
      numAry.push(Math.floor(Math.random() * 10) + '')
    }
  }
  return numAry.join('')
}

// 產生天數
const getDatePeriodRange = (days = 1) => {
  const dayList = []
  for (let i = 0; i < days; i++) {
    dayList.push(
      moment()
        .subtract(days - i, 'days')
        .format('M/D')
    )
  }
  return dayList
}

// 儀錶板圖表ＡＰＩ
const getDashboardChart = async ({ dateRange, currencyType }) => {
  let days = 7
  if (dateRange === 'week') {
    days = 7
  }
  if (dateRange === 'mouth') {
    days = 30
  }
  if (dateRange === 'quarter') {
    days = 90
  }

  return {
    personValue: randomNumber(4),
    recommenderValue: randomNumber(4),
    withdrawValue: randomNumber(4),
    dates: getDatePeriodRange(days).map(item => {
      return {
        date: item,
        personValue: randomNumber(3),
        recommenderValue: randomNumber(3),
        withdrawValue: randomNumber(3)
      }
    })
  }
}

// 交易所
const getExchangeInfo = ({ exchangeId }) => {
  return {
    data: [
      {
        currencyType: 'BTC',
        coinCount: randomNumber(1, 8),
        bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
      },
      {
        currencyType: 'USDT',
        coinCount: randomNumber(1, 4),
        bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
      },
      {
        currencyType: 'ETH',
        coinCount: randomNumber(1, 8),
        bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
      },
      {
        currencyType: 'XRP',
        coinCount: randomNumber(1, 8),
        bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
      },
      {
        currencyType: 'EOS',
        coinCount: randomNumber(1, 8),
        bindStatus: Math.floor(Math.random() * 2) // 0 未綁定 1 綁定
      }
    ]
  }
}

export default {
  name: 'DashboardHeader',
  components: {
    LineChart
  },
  data() {
    return {
      dashboardChart: {
        personValue: '0',
        recommenderValue: '0',
        withdrawValue: '0',
        chartSelect: 'all',
        dateRange: 'week',
        currencyType: 'BTC'
      },
      lineChartOptions: {
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '0%',
          top: '4%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [],
          axisLabel: {
            color: '#888888'
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#888888'
          }
        },
        series: []
      },
      seriesData: [
        {
          name: '個人返佣數量',
          type: 'line',
          // stack: '总量',
          smooth: true,
          color: '#05d394',
          data: []
        },
        {
          name: '推薦人返佣數量',
          type: 'line',
          // stack: '总量',
          smooth: true,
          color: '#e78f0a',
          data: []
        },
        {
          name: '出金數量',
          type: 'line',
          // stack: '总量',
          smooth: true,
          color: '#eb4664',
          data: []
        }
      ],
      exchangeSelected: 'test123',
      exchangeList: []
    }
  },
  watch: {
    'dashboardChart.chartSelect'(value) {
      this.setChartData(value)
    },
    'dashboardChart.dateRange'() {
      this.getDashboardChart()
    },
    'dashboardChart.currencyType'() {
      this.getDashboardChart()
    }
  },
  mounted() {
    this.getDashboardChart()
    this.getExchangeInfo()
  },
  methods: {
    async getDashboardChart() {
      try {
        const queryData = {
          dateRange: this.dashboardChart.dateRange,
          currencyType: this.dashboardChart.currencyType
        }
        const res = await getDashboardChart(queryData)
        this.dashboardChart.personValue = formatMoneyInt(res.personValue)
        this.dashboardChart.recommenderValue = formatMoneyInt(res.recommenderValue)
        this.dashboardChart.withdrawValue = formatMoneyInt(res.withdrawValue)
        this.lineChartOptions.xAxis.data = res.dates.map(item => item.date)
        this.seriesData[0].data = res.dates.map(item => item.personValue)
        this.seriesData[1].data = res.dates.map(item => item.recommenderValue)
        this.seriesData[2].data = res.dates.map(item => item.withdrawValue)
        this.setChartData(this.dashboardChart.chartSelect)
      } catch (error) {
        console.error(error)
      }
    },
    async getExchangeInfo() {
      try {
        const queryData = {
          exchangeId: this.exchangeSelected
        }
        const res = await getExchangeInfo(queryData)
        this.exchangeList = res.data
      } catch (error) {
        console.error(error)
      }
    },
    setChartData(mode) {
      switch (mode) {
        case 'all':
          this.lineChartOptions.series = this.seriesData.filter(item => true)
          break
        case 'person':
          this.lineChartOptions.series = this.seriesData.filter(item => {
            return item.name === '個人返佣數量'
          })
          break
        case 'recommender':
          this.lineChartOptions.series = this.seriesData.filter(item => {
            return item.name === '推薦人返佣數量'
          })
          break
        case 'withdraw':
          this.lineChartOptions.series = this.seriesData.filter(item => {
            return item.name === '出金數量'
          })
          break
        default:
          this.lineChartOptions.series = this.seriesData.filter(item => true)
          break
      }
      this.$refs.linechart.$refs.LineChart.refresh()
    }
  }
}
</script>

<style scoped></style>
