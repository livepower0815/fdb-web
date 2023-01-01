<template>
  <div class="star-score">
    <div v-for="num in maxNumber" :key="num" class="star-score__item" :class="starts[num - 1]"></div>
  </div>
</template>

<script>
export default {
  name: 'StarScore',
  props: {
    score: {
      type: Number,
      default: 0
    },
    // 最大數量
    maxNumber: {
      type: Number,
      default: 5
    }
  },
  computed: {
    starts() {
      const result = []
      let mult2 = Math.floor(this.score * 2)
      while (mult2 > 0) {
        if (mult2 >= 2) {
          result.push('star-score__item--active')
          mult2 -= 2
        } else {
          result.push('star-score__item--helf')
          mult2 -= 1
        }
      }
      return result
    }
  }
}
</script>
