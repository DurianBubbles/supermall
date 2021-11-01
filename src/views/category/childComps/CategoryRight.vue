<template>
  <div class="scroll-right">
    <div class="category-item" v-for="(item, index) in item" :key="index">
      <img :src="item.url" alt="" />
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryRight",
  props: {
    // 详细栏图片、文本数据
    item: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.scroll-right {
  flex: 3;
  height: 100%;
  overflow-y: scroll;
}

/* 隐藏滚动条 */
.scroll-right::-webkit-scrollbar {
  display: none;
}

.category-item {
  width: 33%;
  float: left;
  text-align: center;
  margin-bottom: 10px;
}

.category-item img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

.category-item p {
  font-size: 12px;
}
</style>