<template>
  <!-- 交易所開始 -->
  <div class="store">
    <div class="store-select">
      <div class="title">交易所</div>
      <div class="select">
        <img src="@/assets/img/footer/bybit.png" alt="bybit" />
        <i class="el-icon-caret-bottom bottom-icon"></i>
      </div>
    </div>
    <div v-loading="exchangeLoading" element-loading-background="rgba(0, 0, 0, 0.5)" class="store-info">
      <div class="info-header">
        <div class="title">您的盈利</div>
        <div class="link">
          <el-tooltip effect="dark" content="前往錢包" placement="top">
            <img src="@/assets/img/common/arrow-right.png" alt="arrow-right" />
          </el-tooltip>
        </div>
      </div>
      <div class="info-body">
        <div v-for="(coinData, index) in exchangeList" :key="index" class="info-item">
          <CoinIcon class="coin-icon" :coin-type="currencyMap[coinData.currencyType]" />
          <div class="coin-name">{{ currencyMap[coinData.currencyType] }}</div>
          <div class="coin-count">{{ coinData.coinCount }}</div>
          <template v-if="deviceWidth > 800">
            <div v-if="coinData.bindStatus === 0" class="coin-status unbind">未綁定</div>
            <div v-if="coinData.bindStatus === 1" class="coin-status bind">已綁定</div>
          </template>
          <template v-else>
            <img v-if="coinData.bindStatus === 0" src="@/assets/img/dashboard/check-circle.png" alt="check-circle" style="width: 15px" />
            <img v-if="coinData.bindStatus === 1" src="@/assets/img/dashboard/close-circle.png" alt="close-circle" style="width: 15px" />
          </template>
        </div>
      </div>
    </div>
  </div>
  <!-- 交易所結束 -->
</template>

<script>
import CoinIcon from '@/components/common/CoinIcon'
import { currencyMap } from '@/utils/map.js'
import { getExchangeInfo } from '@/apis/dashboard.js'

export default {
  name: 'StoreSelect',
  components: {
    CoinIcon
  },
  data() {
    return {
      currencyMap: currencyMap,
      exchangeLoading: false,
      exchangeList: []
    }
  },
  computed: {
    deviceWidth() {
      return this.$store.state.app.deviceWidth
    }
  },
  async mounted() {
    this.getExchangeInfo()
  },
  methods: {
    // 交易所
    async getExchangeInfo() {
      this.exchangeLoading = true
      try {
        const queryData = {
          // exchangeId: '', // 目前寫死不傳
          currencyType: 0,
          startDate: '',
          endDate: '',
          pageIndex: 0,
          pageSize: 0,
          sortKey: '',
          order: ''
        }
        const res = await getExchangeInfo(queryData)
        this.exchangeList = res
      } catch (error) {
        console.error(error)
      }
      this.exchangeLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.store {
  flex: 1;
  &-select {
    height: 80px;
    margin-bottom: 8px;
    background-color: #151923;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 32px;
    @media screen and (max-width: 800px) {
      height: 56px;
      padding: 0px 12px;
    }
    @media screen and (max-width: 600px) {
      margin-bottom: 16px;
    }
    .title {
      font-size: 24px;
      font-weight: bold;
      @media screen and (max-width: 800px) {
        font-size: 18px;
      }
    }
    .select {
      display: flex;
      align-items: center;
      img {
        width: 100px;
        @media screen and (max-width: 800px) {
          width: 78px;
        }
      }
      .bottom-icon {
        font-size: 22px;
        margin-left: 22px;
        @media screen and (max-width: 800px) {
          font-size: 18px;
          margin-left: 18px;
        }
      }
    }
  }
  &-info {
    background-color: #151923;
    border-radius: 6px;
    padding: 0px 32px 32px 32px;
    min-height: 400px;
    @media screen and (max-width: 800px) {
      padding: 0px 12px 12px 12px;
      min-height: 320px;
    }
    @media screen and (max-width: 600px) {
      margin-bottom: 16px;
    }
    .info-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      @media screen and (max-width: 800px) {
        height: 50px;
      }
      .title {
        font-size: 24px;
        font-weight: bold;
        @media screen and (max-width: 800px) {
          font-size: 18px;
        }
      }
      .link {
        cursor: pointer;
        img {
          width: 20px;
          @media screen and (max-width: 800px) {
            width: 16px;
          }
        }
      }
    }
    .info-body {
      .info-item {
        display: flex;
        align-items: center;
        height: 60px;
        @media screen and (max-width: 800px) {
          height: 50px;
        }
        .coin-icon {
          width: 36px;
          margin-right: 14px;
          @media screen and (max-width: 800px) {
            width: 28px;
            margin-right: 14px;
          }
        }
        .coin-name {
          width: 80px;
          margin-right: 12px;
          font-family: Avenir;
          font-weight: 500;
          font-size: 18px;
          @media screen and (max-width: 1200px) {
            width: 50px;
          }
          @media screen and (max-width: 800px) {
            width: 36px;
            font-size: 14px;
          }
        }
        .coin-count {
          flex: 2;
          font-family: Avenir;
          font-weight: 800;
          font-size: 18px;
          color: #62ffff;
          @media screen and (max-width: 800px) {
            font-size: 14px;
          }
        }
        .coin-status {
          flex: 1;
          text-align: end;
          font-size: 18px;
          @media screen and (max-width: 800px) {
            font-size: 16px;
          }
          &.bind {
            color: #62ffffb3;
          }
          &.unbind {
            color: #eb4664;
          }
        }
      }
    }
  }
}
</style>
