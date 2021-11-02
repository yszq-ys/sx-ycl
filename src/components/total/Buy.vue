<template>
    <div class="action-btn buy-btn">去结算({{totalMount}})</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"Buy",
  computed:{
    ...mapState(['totalMount'])
  }
}
</script>
<style lang="scss" scoped>
    .action-btn {
  float: right;
  width: 120px;
  height: 100%;
  color: #fff;
  text-align: center;
  font-weight: 300;
  line-height: .52rem;
  cursor: pointer;
}

.buy-btn {
  background-color: #7a45e5;
}
</style>