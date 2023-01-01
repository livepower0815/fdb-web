<template>
  <div class="g-mask">
    <img class="twinkling" src="@/assets/img/nav/logo.png" alt="nav-icon" />
  </div>
</template>

<script>
export default {
  name: 'InitMask'
}
</script>

<style lang="scss" scoped>
.g-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #050608;

  img {
    width: 300px;
  }
}
</style>
