<template>
    <div class="action-btn del-btn" @click="delectData">删除({{totalMount}})</div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  name:"Delete",
  computed:{
    ...mapState(['totalMount'])
  },
  methods:{
    ...mapActions(['delectData'])
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



.del-btn {
  background-color: #ff4069;
}
</style>