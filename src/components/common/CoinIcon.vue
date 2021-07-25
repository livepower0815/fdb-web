<template>
  <div v-bind="$attrs" v-on="$listeners" class="container" :class="{ disabled: disabled }">
    <img v-if="coinType === 'BTC'" src="@/assets/img/currency-icon/BTC-icon.png" alt="BTC" />
    <img v-if="coinType === 'EOS'" src="@/assets/img/currency-icon/EOS-icon.png" alt="EOS" />
    <img v-if="coinType === 'ETH'" src="@/assets/img/currency-icon/ETH-icon.png" alt="ETH" />
    <img v-if="coinType === 'USDT'" src="@/assets/img/currency-icon/USDT-icon.png" alt="USDT" />
    <img v-if="coinType === 'XRP'" src="@/assets/img/currency-icon/XRP-icon.png" alt="XRP" />
  </div>
</template>

<script>
export default {
  name: 'CoinIcon',
  props: {
    coinType: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: inline-flex;
}
.disabled {
  filter: opacity(0.3);
  pointer-events: none;
}
</style>
