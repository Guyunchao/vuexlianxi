<template>

<div>
    come
    <!-- {{count}}{{msg}} -->
    <!-- {{this.$store.state.moduleA.age}} <br> -->
    <!-- {{this.$store.state.moduleB.hero}} -->
    <br>
    <hr>
    {{name}}
    <!-- {{this.$store.state.moduleA.age}} -->
    {{ge}}
    <br>
    {{hero}}
    {{age}}
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['count','msg']),
        // module 命名空间作用：简化我们访问模块中的成员的代码
        // 映射模块A中的成员
        ...mapState('moduleA',['name','ge']),
        ...mapState('moduleB',['hero','age'])
    }
}
</script>

<style>

</style>
