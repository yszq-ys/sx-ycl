<template>
    <ul class="goods-list cart-list">
        <CartItem  v-for="item in cartData" :key="item.id" :item="item"/>
      </ul>
</template>
<script>
import { mapState } from 'vuex'
import CartItem from './CartItem.vue'

export default {
    name:"CartList",
    components:{
        CartItem
    },
    computed:{
        ...mapState(['cartData'])
        // cartData(){
        //     return this.$store.state.cartData;
        // }
    }
}
</script>
<style lang="scss" scoped>
    .cart-list .goods-info {
  width: 68%;
}


.goods-list {
    padding-top: .08rem;
    height: 5.13rem;
    overflow-y: scroll;
}

.cart-list {
    height: 5.60rem;
}

</style>