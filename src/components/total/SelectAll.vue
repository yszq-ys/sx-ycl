<template>
     <div class="g-selector">
        <div class="item-selector">
          <div class="icon-selector" :class="{'selector-active':selectAll}">
            <input type="checkbox" v-model="selectAll">
          </div>
        </div>
        <span>全选</span>
      </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name:"SelectAll",
    computed:{
      ...mapState(['cartData']),
      selectAll:{
        get(){
          return this.cartData.every(item=>item.select);
        },
        set(value){
          this.setSelectAll(value);
        }
      }
    },
    methods:{
      ...mapActions(['setSelectAll'])
    }
}
</script>
<style lang="scss" scoped>
    
.g-selector {
  float: left;
  width: 70px;
  margin-left: 4%;
  height: 5.02rem;
  cursor: pointer;
}

.g-selector .item-selector {
  position: relative;
  display: inline-block;
}

.g-selector span {
  position: absolute;
  margin-left: 20px;
  color: #5f646e;
  top: 15px;
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


</style>