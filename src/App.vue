<template>
  <div id="app">
    <!-- 调用mutations里面改变状态的方法 -->
    <button @click="$store.commit('add')">ads</button>
    {{$store.state.count}}
  <coma></coma>
  <comb></comb>
  <comc></comc>
  <come></come>
  </div>
</template>

<script>
import Coma from './components/Coma'
import Comb from './components/Comb'
import Comc from './components/Comc'
import Come from './components/Come'
export default {
  name: 'App',
  components:{
    Coma,
    Comb,
    Comc,
    Come
  }
}
</script>

<style>

</style>
