<template>
  <div class="help">
    <!--Banner開始-->
    <div class="title-banner">
      <div class="title-banner__content">
        <div class="banner-title">{{ $t('what_is_problem') }}</div>
        <div class="banner-search">
          <img src="@/assets/img/common/vector.png" alt="" class="banner-search__icon" />
          <input v-model="searchKey" type="text" :placeholder="$t('enter_keywords')" class="banner-search__input" @input="filterKeyword" />
        </div>
      </div>
    </div>
    <!--Banner結束-->

    <!--內容 開始-->
    <div class="layout-content">
      <div class="help-centre">
        <!-- menu -->
        <div class="help-centre__lf">
          <div class="help-collapse">
            <el-collapse v-model="activeNames">
              <el-collapse-item v-for="(item, index) in filterTree" :key="index" :title="item.title" :name="`collapse-name-${index}`">
                <div
                  v-for="(subItem, subIndex) in item.subItem"
                  class="collapse-item"
                  :class="{ '-actived': activedId === subItem.articleId }"
                  :key="subIndex"
                  @click="setArticleId(subItem)"
                >
                  {{ subItem.title }}
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
        <!-- menu end -->

        <!-- 文章內容 -->
        <div class="help-centre__rt">
          <!-- 文章標題 -->
          <h3 v-if="articleTitle" class="help-title">{{ articleTitle }}</h3>

          <!-- loading 效果 -->
          <div v-if="articleIsLoading" v-loading="true" class="help-list">
            <div style="height: 500px"></div>
          </div>

          <!-- 內文ＨＴＭＬ -->
          <div v-else-if="articleInfo" class="help-list" v-html="articleInfo.desc"></div>

          <!-- 查無資料 -->
          <CommonEmpty v-else :message="$t('empty_data')" />

          <!-- 置頂按鈕 -->
          <div class="back-top-btn">
            <img src="@/assets/img/common/back-to-top-2.png" alt="scroll top" class="back-top-btn__img cursor-point" @click="scrollTop" />
          </div>
        </div>
        <!-- 文章內容 end -->
      </div>
    </div>
    <!--內容 結束-->
  </div>
</template>

<script>
import { debounce } from '@/utils/debounce.js'

export default {
  name: 'Helps',
  data() {
    return {
      activeNames: ['collapse-name-0'],
      helpTree: [],
      filterTree: [],
      searchKey: '',
      activedId: '',
      articleTitle: null,
      articleInfo: null,
      articleIsLoading: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      try {
        await this.getHelps()
        await this.filterKeyword()
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getHelps() {
      try {
        const res = await this.$api.help.getHelps()
        this.helpTree = res
      } catch (error) {
        return Promise.reject(error)
      }
    },
    // 過濾關鍵字
    filterKeyword: debounce(async function () {
      try {
        const keyword = this.searchKey
        let filterData = []
        for (let i = 0; i < this.helpTree.length; i++) {
          const node = this.helpTree[i]
          let filterSubs = []
          for (let j = 0; j < node.subItem.length; j++) {
            if (node.subItem[j].title.includes(keyword)) {
              filterSubs.push(node.subItem[j])
            }
          }
          if (filterSubs.length > 0) {
            filterData.push({ title: node.title, subItem: filterSubs })
          }
        }
        this.filterTree = filterData
        this.activeNames = ['collapse-name-0']

        // 初始化使用第一個節點的第一篇文章
        if (this.filterTree.length > 0 && this.filterTree[0].subItem.length > 0) {
          this.activedId = this.filterTree[0].subItem[0].articleId
          this.articleTitle = this.filterTree[0].subItem[0].title
          await this.getArticleInfo()
        } else {
          this.resetArticleArea()
        }
      } catch (error) {
        return Promise.reject(error)
      }
    }, 1000),
    async getArticleInfo() {
      try {
        this.articleIsLoading = true
        const reqBody = { id: String(this.activedId) }
        const res = await this.$api.help.getHelpDetails(reqBody)
        this.articleInfo = res
      } catch (error) {
        this.resetArticleArea()
        return Promise.reject(error)
      } finally {
        this.articleIsLoading = false
      }
    },
    async setArticleId(subItem) {
      if (this.activedId === subItem.articleId) return
      try {
        this.activedId = subItem.articleId
        this.articleTitle = subItem.title
        await this.getArticleInfo()
      } catch (error) {
        return Promise.reject(error)
      }
    },
    resetArticleArea() {
      this.articleInfo = null
      this.articleTitle = null
    },
    scrollTop() {
      window.scroll({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>
