<template>
  <div id="page-cart" class="device">
    <MyHeader :showBackIcon="true">购物车列表</MyHeader>

    <div class="page">
      <!-- <div class="empty-states"><span>这里是空的，快去逛逛吧</span></div> -->
      <CartList />
    </div>
    <Total />
    

  </div>
  
</template>
<script>
import MyHeader from "@/components/header"
import CartList from "@/components/cart-list"
import Total from "@/components/total"
export default {
  name:"Cart",
  components:{
    MyHeader,
    CartList,
    Total
  },
  created(){
    this.$store.dispatch('setCartData');
  }
}
</script>
<style lang="scss">
   .device {
    position: relative;
    float: left;
    width: 100%;
    height: 6.67rem;
    background-color: #eee;
    border-radius: .04rem;
    overflow: hidden;
  }

  
.empty-states {
  padding-top: .6rem;
  font-size: .18rem;
  color: #aeb0b7;
  text-align: center;
}





</style>