<template>
  <div class="coin-select">
    <div class="icon icon-container" :class="{ active: coinType === 0 }" @click.prevent="coinTypeVm = 0">
      <img src="@/assets/img/dashboard/all.png" alt="all" class="all-icon" />
    </div>
    <CoinIcon class="icon" coin-type="BTC" :class="{ active: coinType === 1 }" @click.prevent="coinTypeVm = 1" />
    <CoinIcon class="icon" coin-type="ETH" :class="{ active: coinType === 2 }" @click.prevent="coinTypeVm = 2" />
    <CoinIcon class="icon" coin-type="XRP" :class="{ active: coinType === 3 }" @click.prevent="coinTypeVm = 3" />
    <CoinIcon class="icon" coin-type="EOS" :class="{ active: coinType === 4 }" @click.prevent="coinTypeVm = 4" />
    <CoinIcon class="icon" coin-type="USDT" :class="{ active: coinType === 5 }" @click.prevent="coinTypeVm = 5" />
  </div>
</template>

<script>
import CoinIcon from '@/components/common/CoinIcon.vue'

export default {
  name: 'CoinSelector',
  model: {
    prop: 'coinType',
    event: 'typeChange'
  },
  props: {
    coinType: {
      type: Number,
      default: 1
    }
  },
  computed: {
    coinTypeVm: {
      get() {
        return this.coinType
      },
      set(val) {
        this.$emit('typeChange', val)
      }
    }
  },
  components: {
    CoinIcon
  }
}
</script>

<style lang="scss" scoped>
.coin-select {
  display: flex;
  padding: 0 12px;
  @media screen and (max-width: 1200px) {
    padding: 0 8px;
  }
  .icon {
    width: 30px;
    margin-right: 10px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 4px;
    transition: border 0.4s;
    @media screen and (max-width: 1200px) {
      width: 28px;
    }
    &:hover {
      border: 1px solid #62ffff;
    }
    &.active {
      border: 1px solid #62ffff;
    }
  }
}
.icon-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1e2533;
  .all-icon {
    width: 75%;
  }
}
</style>
