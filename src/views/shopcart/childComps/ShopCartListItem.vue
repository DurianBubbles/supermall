<template>
  <div class="listitem">
    <!-- isChecked：商品是否选中 -->
    <CheckBotton
      :isChecked="item.checked"
      @click.native="changeChecked"
    ></CheckBotton>
    <div class="goodsimage">
      <img :src="item.image" alt="" />
    </div>
    <div class="info">
      <p class="tittle">{{ item.tittle }}</p>
      <p class="desc">{{ item.desc }}</p>
      <div class="priceAndCount">
        <span class="price">￥{{ item.price | priceToFixed }}</span>
        <span class="count">数量：{{ item.count | countFormat}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBotton from "./CheckBotton.vue";
export default {
  name: "ShopCartListItem",
  components: { CheckBotton },
  props: {
    // 单个商品数据
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeChecked() {
      //切换商品选中与未选中状态
      this.item.checked = !this.item.checked;
    },
  },
  filters: {
    //   给价格加上两个小数点
    priceToFixed(price) {
      return parseFloat(price).toFixed(2);
    },
    // 商品数量格式化
    countFormat(count){
        return 'x' + count
    }
  },
};
</script>

<style scoped>
.listitem {
  height: 15vh;
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.goodsimage {
  height: 100%;
  width: 20%;
  text-align: center;
  margin-right: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.goodsimage img {
  width: 100%;
  height: 100%;
}

.info {
  width: 70%;
  height: 100%;
  position: relative;
}

.info .tittle {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info .desc {
  font-size: 14px;
  line-height: 50px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.info .priceAndCount {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>