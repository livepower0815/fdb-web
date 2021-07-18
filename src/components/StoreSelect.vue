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
    <div class="store-info">
      <div class="info-header">
        <div class="title">您的盈利</div>
        <div class="link">
          <el-tooltip effect="dark" content="前往錢包" placement="top">
            <img src="@/assets/img/common/arrow-right.png" alt="arrow-right" />
          </el-tooltip>
        </div>
      </div>
      <div class="info-body">
        <div v-for="(coinData, index) in coinList" :key="index" class="info-item">
          <CoinIcon class="coin-icon" :coin-type="currencyMap[coinData.currencyType]" />
          <div class="coin-name">{{ currencyMap[coinData.currencyType] }}</div>
          <div class="coin-count">{{ coinData.coinCount }}</div>
          <div v-if="coinData.bindStatus === 0" class="coin-status unbind">未綁定</div>
          <div v-if="coinData.bindStatus === 1" class="coin-status bind">已綁定</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 交易所結束 -->
</template>

<script>
import CoinIcon from '@/components/common/CoinIcon'
import { currencyMap } from '@/utils/map.js'
export default {
  name: 'StoreSelect',
  components: {
    CoinIcon
  },
  data() {
    return {
      currencyMap: currencyMap,
      coinList: [
        { currencyType: '1', coinCount: 0.390849378, bindStatus: 1 },
        { currencyType: '5', coinCount: 0.390849378, bindStatus: 0 },
        { currencyType: '2', coinCount: 0.390849378, bindStatus: 1 },
        { currencyType: '3', coinCount: 0.390849378, bindStatus: 1 },
        { currencyType: '4', coinCount: 0.390849378, bindStatus: 0 }
      ]
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
    .title {
      font-size: 24px;
      font-weight: bold;
    }
    .select {
      display: flex;
      align-items: center;
      img {
        width: 100px;
      }
      .bottom-icon {
        font-size: 22px;
        margin-left: 22px;
      }
    }
  }
  &-info {
    background-color: #151923;
    border-radius: 6px;
    padding: 0px 32px 32px 32px;
    .info-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      .title {
        font-size: 24px;
        font-weight: bold;
      }
      .link {
        cursor: pointer;
        img {
          width: 20px;
        }
      }
    }
    .info-body {
      .info-item {
        display: flex;
        align-items: center;
        height: 60px;
        .coin-icon {
          width: 36px;
          margin-right: 18px;
        }
        .coin-name {
          width: 80px;
          margin-right: 12px;
          font-family: Avenir;
          font-weight: 500;
          font-size: 18px;
        }
        .coin-count {
          flex: 2;
          font-family: Avenir;
          font-weight: 800;
          font-size: 18px;
          color: #62ffff;
        }
        .coin-status {
          flex: 1;
          text-align: end;
          font-size: 18px;
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
