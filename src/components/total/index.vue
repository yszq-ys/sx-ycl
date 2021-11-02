<template>
    <div class="action-bar">
        <SelectAll/>
        <Buy  v-show="editBoo"/>
        <Delete  v-show="!editBoo"/>
        <TotalPrice  v-show="editBoo"/>
    </div>
</template>
<script>
import SelectAll from './SelectAll.vue'
import Buy from './Buy.vue'
import Delete from './Delect.vue'
import TotalPrice from './TotalPrice.vue'
import { mapState } from 'vuex'
export default {
    name:"Total",
    components:{
        SelectAll,
        Buy,
        Delete,
        TotalPrice
    },
    computed:{
        ...mapState(['editBoo'])
    }
}
</script>
<style lang="scss" scoped>
    
.action-bar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .52rem;
  font-size: 15px;
  background-color: #fff;
  border-top: 1px solid #ddd;
}


</style>