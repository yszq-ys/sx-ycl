<template>
    <header>
        <CartIcon v-show="showCartIcon" />
        <BackIcon v-show="showBackIcon"/>

        <span class="header-title">
            <slot></slot>
        </span>
        <Edit v-show="showBackIcon"/>
    </header>
</template>
<script>
import CartIcon from "./CartIcon.vue"
import BackIcon from "./BackIcon.vue"
import Edit from "./Edit.vue"
export default {
    name:"MyHeader",
    components:{
        CartIcon,
        BackIcon,
        Edit
    },
    props:['showCartIcon','showBackIcon']
}
</script>
<style lang="scss" scoped>
    header {
        padding: 0 4%;
        position: relative;
        height: .44rem;
        line-height: .44rem;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        text-align: center;
    }

    .header-title {
        font-size: .16rem;
        text-align: center;
    }
</style>