<template>
  <ul class="filter-bar">
    <li class="filter-opt  price-up" :class="{'filter-active':status=='all'}" @click="setStatus('all')">综合排序</li>
    <li class="filter-opt price-up" :class="{'filter-active':status=='sales'}" @click="setStatus('sales')">销量优先</li>
    <li class="filter-opt filter-price price-up" :class="{'filter-active':status=='priceMax'||status=='priceMin'}"  @click="setStatusHandle">价格</li>
  </ul>
</template>
<script>
import { mapActions, mapState } from 'vuex'
let boo=true;
export default {
  name:"CateFilter",
  computed:{
    ...mapState(['status'])
  },
  methods:{
    ...mapActions(['setStatus']),
    setStatusHandle(){
      if(boo){
        this.setStatus('priceMax');
        boo=false;
      }else{
        this.setStatus('priceMin');
        boo=true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-bar {
  display: flex;
  height: 0.4rem;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  line-height: 0.4rem;
}

.filter-opt {
  position: relative;
  width: 33.3%;
  color: #5f646e;
  text-align: center;
}

.filter-active {
  color: #7b57c5;
}

.filter-price:after {
  position: absolute;
  top: 0.13rem;
  margin-left: 0.04rem;
  content: "";
  display: inline-block;
  width: 0.08rem;
  height: 0.14rem;
  background: url("http://ov52d8mm7.bkt.clouddn.com/arrow-default.png")
    no-repeat;
  background-size: 0.08rem 0.14rem;
}

.filter-active.price-up:after {
  background: url("http://ov52d8mm7.bkt.clouddn.com/arrow-down.png") no-repeat;
  background-size: 0.08rem 0.14rem;
}

.filter-active.price-down:after {
  background: url("http://ov52d8mm7.bkt.clouddn.com/arrow-up.png") no-repeat;
  background-size: 0.08rem 0.14rem;
}
</style>