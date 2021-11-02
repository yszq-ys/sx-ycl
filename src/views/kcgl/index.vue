<template>
  <div id="page-home" class="device">
    <MyHeader :showCartIcon="true">首页列表</MyHeader>

    <div class="page">
      <CartTab />

      <CartFilter />

      <GoodsList />
    </div>
  </div>
</template>
<script>
import MyHeader from "@/components/header";
import CartTab from "@/components/cate-tab";
import CartFilter from "@/components/cate-filter";
import GoodsList from "@/components/goods-list";
export default {
  name: "Home",
  components: {
    MyHeader,
    CartTab,
    CartFilter,
    GoodsList
  },
  created(){
    this.$store.dispatch('setGoods');
  }
};
</script>
<style lang="scss" scoped>
.device {
  position: relative;
  float: left;
  width: 100%;
  height: 6.67rem;
  background-color: #eee;
  border-radius: 0.04rem;
  overflow: hidden;
}



</style>