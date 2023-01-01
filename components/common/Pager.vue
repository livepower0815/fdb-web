<template>
  <!-- eslint-disable vue/no-mutating-props -->
  <el-pagination
    :current-page.sync="pager.pageIndex"
    :page-size.sync="pager.pageSize"
    :total="pager.totalCount"
    class="fdb-pager"
    v-bind="customAttr"
    @current-change="pagerEvent($event, 'pageChange')"
  />
</template>

<script>
export default {
  name: 'Pager',
  props: {
    pager: {
      type: Object,
      required: true,
      default: function () {
        console.error(`Please set pagination "props: pager" in route.name: ${this.$parent.$route.name}`)
        return {
          pageIndex: 1,
          pageSize: 25,
          totalCount: 0
        }
      }
    },
    getData: {
      type: Function,
      required: true,
      default: function () {
        console.error(`Please set pagination "props: getData" in route.name: ${this.$parent.$route.name}`)
      }
    }
  },
  computed: {
    customAttr() {
      return {
        small: false,
        layout: 'prev, pager, next',
        pagerCount: 5,
        ...this.$attrs
      }
    }
  },
  methods: {
    pagerEvent(e, type) {
      if (type === 'pageChange') {
        // eslint-disable-next-line vue/no-mutating-props
        this.pager.pageIndex = e
      }
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
.fdb-pager {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;

  ::v-deep {
    .btn-prev {
      height: 32px;
      line-height: 32px;
      color: #c0c4cc;
      background-color: unset;
    }

    .el-pager {
      li {
        min-width: 32px;
        height: 32px;
        margin: 0 4px;
        font-family: 'Noto Sans CJK TC';
        line-height: 30px;
        color: #c0c4cc;
        background-color: unset;
        border-radius: 5px;

        &:hover {
          box-sizing: border-box;
          border: 1px solid #62ffff;
        }

        &.active {
          box-sizing: border-box;
          cursor: default;
          border: 1px solid #62ffff;
        }
      }
    }

    .btn-next {
      height: 32px;
      line-height: 32px;
      color: #c0c4cc;
      background-color: unset;
    }
  }
}
</style>
