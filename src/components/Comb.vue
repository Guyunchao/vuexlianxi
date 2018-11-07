<template>
    <div>

        <!-- {{$store.state.count}} -->
        {{count}}
    </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
export default {
    data() {
        return {};
    },
    // 使用mapState生成计算属性 简化插值长度
    // mapState返回一个对象
    // 括号里面写你映射状态的名字
    computed: {
        ...mapState(["count"])
    }
};
</script>

<style>
</style>
