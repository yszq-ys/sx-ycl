<template>
    <span class="header-edit">
        <span v-show="editBoo" @click="setEditBoo(false)">编辑</span>
        <span v-show="!editBoo" @click="setEditBoo(true)">完成</span>
    </span>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
    name:"Edit",
    computed:{
        ...mapState(['editBoo'])
    },
    methods:{
        ...mapActions(['setEditBoo'])
    }
}
</script>
<style lang="scss" scoped>
    .header-edit {
        float: right;
        padding: 0 .1rem;
        cursor: pointer;
    }
</style>
