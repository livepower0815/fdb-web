<template>
  <div class="empty" :style="{ height: `${height}px` }">
    <img class="empty-img" src="@/assets/img/common/empty.png" alt="empty" style="width: 100px" />
    <div class="empty-text">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'Empty',
  props: {
    height: {
      type: String,
      default: '320'
    },
    message: {
      type: String,
      default: 'No Data'
    }
  }
}
</script>

<style lang="scss" scoped>
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .empty-img {
    width: 100px;
  }

  .empty-text {
    font-size: 18px;
    line-height: 0px;
    text-align: center;
    letter-spacing: 0.1em;
  }
}
</style>
