<template>
  <ul class="goods-list">
      <GoodsItem  v-for="item in showGoods" :key="item.id" :item="item"/>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
import GoodsItem from "./GoodsItem.vue"

export default {
    name:"GoodsList",
    components:{
        GoodsItem
    },
    computed:{
      ...mapState(['goods','type','status']),
      showGoods(){
        let data=null;
        if(this.type==0){
          data=this.goods.map(item=>item);
        }else{
          data=this.goods.filter(item=>item.type==this.type);
        }

        switch(this.status){
          case 'all':
            return data;
          case "sales":
            return data.sort((a,b)=>b.sales-a.sales);
          case "priceMax":
            return data.sort((a,b)=>b.price-a.price);
          case "priceMin":
            return data.sort((a,b)=>a.price-b.price);
        }
       

      }
    }
}
</script>
<style lang="scss" scoped>
.goods-list {
  padding-top: 0.08rem;
  height: 5.13rem;
  overflow-y: scroll;
}

.cart-list {
  height: 5.6rem;
}

</style>