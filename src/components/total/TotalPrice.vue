<template>
    <div class="total">
        合计：<span>¥<b>{{totalPrice}}</b></span>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:"TotalPrice",
    computed:{
      ...mapState(['totalPrice'])
    }
}
</script>
<style lang="scss" scoped>
    
.total {
  float: right;
  color: #363636;
  font-size: 14px;
  line-height: 50px;
  margin-right: 20px;
}

.total span {
  color: #7a45e5;
}

.total b {
  font-size: 17px;
  margin-left: 4px;
}

</style>