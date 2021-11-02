<template>
    <li class="goods-item">
          <div class="item-selector">
            <div class="icon-selector" :class="{'selector-active':item.select}">
              <input type="checkbox" @click="setSelectHandle(item)">
            </div>
          </div>
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
            <span class="des">库存{{item.stock}}件</span>
            <div class="goods-num">
              <div class="num-btn" @click="setCartHandle(item,'PLUS')">+</div>
              <div class="show-num">{{item.mount}}</div>
              <div class="num-btn"  @click="setCartHandle(item,'REDUCE')">-</div>
            </div>
          </div>
        </li>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:"CartItem",
    props:['item'],
    methods:{
        ...mapActions(['setCart','setSelect','setTotal']),
        setCartHandle(item,_type){
            
              this.setCart({
                id:item.id,
                price:item.price,
                _type
            });

            if(item.select){
              if(_type=="PLUS"){
                this.setTotal({
                  select:item.select,
                  tPrice:item.price,
                  mount:1
                });
              }else if(_type=="REDUCE"){
                if(item.mount>1){
                  this.setTotal({
                    select:item.select,
                    tPrice:-item.price,
                    mount:-1
                  });
                }
              }
              
            }

          

      
        },
        setSelectHandle(item){
          this.setSelect(item.id);

          this.setTotal({
            select:item.select,
            tPrice:item.tPrice,
            mount:item.mount
          });
        }
    }
}
</script>
<style lang="scss" scoped>


.goods-item {
    display: flex;
    margin-bottom: .08rem;
    padding: .1rem .06rem;
    min-height: .62rem;
    background: #fff;
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
    width: .2rem;
    height: .2rem;
    font-size: .12rem;
    color: #fff;
    text-align: center;
    line-height: .2rem;
    background-color: #FC5951;
    border-radius: 50%;
}

.goods-info {
    position: relative;
    width: 80%;
    text-align: left;
}

.goods-title {
    width: 80%;
    height: .38rem;
    color: #363636;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}

.goods-price {
    margin-top: .06rem;
    line-height: 1;
}

.goods-price span {
    font-size: .15rem;
    color: #7a45e5;
    /*   background: linear-gradient(90deg, #03D2B3 0, #2181FB 80%, #2181FB 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

.des {
    font-size: .12rem;
    color: #888;
}

.save {
    position: absolute;
    right: .1rem;
    bottom: .02rem;
    width: .32rem;
    height: .22rem;
    background-color: #7a45e5;
    font-size: .16rem;
    line-height: .19rem;
    text-align: center;
    color: #fff;
    border-radius: .12rem;
    overflow: hidden;
}

.item-selector {
  width: 12%;
}

.icon-selector {
  position: relative;
  margin: .16rem auto 0 auto;
  width: .16rem;
  height: .16rem;
  border-radius: 50%;
  border: .02rem solid #ccc;
  cursor: pointer;
  input{
    width: .16rem;
    height: .16rem;
    opacity: 0;
  }
}

.selector-active {
  background-color: #7a45e5;
  border-color: #7a45e5;
}

.selector-active .icon {
  position: absolute;
  top: .02rem;
  left: .02rem;
}

.goods-num {
  position: absolute;
  right: 10px;
  top: 4px;
  width: .302rem;
  color: #999;
  text-align: center;
}

.show-num {
  line-height: 28px;
}

.num-btn {
  width: 100%;
  height: 24px;
  font-size: 20px;
  line-height: 20px;
  cursor: pointer;
}
</style>