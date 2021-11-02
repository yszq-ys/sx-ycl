<template>
  <div class="tab-wrap">
    <ul class="cate-tab">
      <!-- <li class="cate tab-active">推荐</li>
      <li class="cate">母婴</li>
      <li class="cate">鞋包饰品</li>
      <li class="cate">食品</li>
      <li class="cate">数码家电</li>
      <li class="cate">居家百货</li> -->
      <li class="cate" :class="{'tab-active':item.type==type}" v-for="item in tabs" :key="item.id" @click="setType(item.type)">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
const tabs=[
  {
    id:0,
    title:"推荐",
    type:0
  },
  {
    id:1,
    title:"母婴",
    type:1
  },
  {
    id:2,
    title:"鞋包服饰",
    type:2
  },
  {
    id:3,
    title:"食品",
    type:3
  },
  {
    id:4,
    title:"数码家电",
    type:4
  },
  {
    id:5,
    title:"居家百货",
    type:5
  }
]
export default {
  name:"CateTab",
  data(){
    return {
      tabs,
      
    }
  },
  computed:{
    ...mapState(['type'])
  },
  methods:{
    ...mapActions(['setType'])
  }
}
</script>
<style lang="scss" scoped>
    
.tab-wrap {
  width: 100%;
  height: 0.6rem;
  background: red;
  overflow: hidden;
}

.cate-tab {
  white-space: nowrap;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  background-color: #5d4285;
}

.cate {
  display: inline-block;
  width: 0.8rem;
  height: 0.7rem;
  color: #fff;
  line-height: 0.6rem;
  text-align: center;
}

.tab-active {
  background-color: #9a51ff;
}
</style>