<template>
  <div class="ad-list">
    <a v-for="(ad, index) in listData" class="ad-list__item" :key="index" :href="ad.url" target="_blank">
      <!-- 1 2 3 上中下 titlePosition -->
      <div class="item-title" :class="{ '-top': ad.titlePosition === 1, '-bottom': ad.titlePosition === 3 }">
        <h3 class="item-title__text" :style="{ color: ad.titleColor }">{{ ad.title }}</h3>
      </div>
      <img class="item-img" :src="ad.img" :alt="ad.imgAlt" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'AdList',
  props: {
    listData: {
      type: Array,
      required: true
    }
  }
}
</script>
