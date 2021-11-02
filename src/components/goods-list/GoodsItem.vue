<template>
     <li class="goods-item">
      <div class="goods-img">
        <img
          :src="item.img"
          :alt="item.name"
        />
      </div>
      <div class="goods-info">
        <p class="goods-title">{{item.name}}</p>
        <div class="goods-price">
          <span>¥<b>{{item.price}}</b></span>
        </div>
        <span class="des">{{item.sales}}人付款</span> <span class="save" @click="setCartHandle(item,'PLUS')">+</span>
      </div>
    </li>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name:"GoodsItem",
  props:['item'],
  methods:{
    ...mapActions(['setCart']),
    setCartHandle(item,_type){
      this.setCart({
        id:item.id,
        img:item.img,
        name:item.name,
        stock:item.stock,
        price:item.price,
        _type
      })
    }
    
  }
}
</script>
<style lang="scss" scoped>
    
.goods-item {
  display: flex;
  margin-bottom: 0.08rem;
  padding: 0.1rem 0.06rem;
  min-height: 0.62rem;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
}

.goods-img {
  position: relative;
  margin-right: 4%;
  display: block;
  width: 16%;
}

.goods-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.goods-item .flag {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.2rem;
  height: 0.2rem;
  font-size: 0.12rem;
  color: #fff;
  text-align: center;
  line-height: 0.2rem;
  background-color: #fc5951;
  border-radius: 50%;
}

.goods-info {
  position: relative;
  width: 80%;
  text-align: left;
}

.goods-title {
  width: 80%;
  height: 0.38rem;
  color: #363636;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.goods-price {
  margin-top: 0.06rem;
  line-height: 1;
}

.goods-price span {
  font-size: 0.15rem;
  color: #7a45e5;
  /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
  font-size: 0.12rem;
  color: #888;
}

.save {
  position: absolute;
  right: 0.1rem;
  bottom: 0.02rem;
  width: 0.32rem;
  height: 0.22rem;
  background-color: #7a45e5;
  font-size: 0.16rem;
  line-height: 0.19rem;
  text-align: center;
  color: #fff;
  border-radius: 0.12rem;
  overflow: hidden;
}
</style>