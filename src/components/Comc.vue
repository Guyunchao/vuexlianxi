<template>

<div><button @click="handle">按钮</button>
{{count}}{{msg}}
</div>

</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
   methods:{
        handle(){
        // 让state中的count按钮点一次增加5
        // 调用mutation的方法  更改state的值
        // this.$store.commit('setCount',5)
        // 简化调用
        // this.setCount(6);
        // mutation的简化方式就是mapMutations
        this['setCount'](7)
    },
    // mapMutations函数，返回一个对象
    // 可以简化mutation的调用，生成方法 setCount
    ...mapMutations(['setCount'])
   },
    computed:{
        ...mapState(['count','msg'])
    }
}
</script>

<style>

</style>
