<template>
  <div style="position: relative; float: left">
    <img
      v-if="pt === 'password'"
      style="position: absolute; top: 13px; right: 12px; box-sizing: content-box; width: auto; height: 7px; padding: 3px 0"
      src="@/assets/img/svg/close-eye.svg"
      alt="colse-eye"
      @click="togglePwd"
    />
    <i
      v-if="pt === 'text'"
      style="position: absolute; top: 13px; right: 12px; box-sizing: content-box"
      class="el-icon-view"
      @click="togglePwd"
    ></i>
  </div>
</template>

<script>
export default {
  name: 'PasswordIcon',
  props: {
    pwdType: {
      type: String,
      default: 'password'
    }
  },
  computed: {
    pt: {
      get() {
        return this.pwdType
      },
      set(value) {
        this.$emit('update:pwdType', value)
      }
    }
  },
  methods: {
    togglePwd() {
      this.pt = this.pt === 'password' ? 'text' : 'password'
    }
  }
}
</script>
