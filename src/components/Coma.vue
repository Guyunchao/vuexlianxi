<template>
<div>
<!-- {{$store.state.count}} -->
{{c}}
</div>

</template>

<script>
export default {

  data () {
    return {
    }
  },
// 简化$store.state.count写法用计算属性
computed:{
   c(){
       return this.$store.state.count;
   },
   
},
  methods: {}
}
</script>

<style>

</style>
