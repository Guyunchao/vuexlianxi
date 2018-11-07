import Vue from 'vue'
import Vuex, { mapState } from 'vuex'
Vue.use(Vuex)
// mapState生成计算属性简化插值的长度
// Vuex创建store
const moduleA={
    // 开启命名空间 命名空间默认没有开启
    namespaced:true,
    state:{
        name:'章三',
        ge:'17'
    },
    mutations:{

    }
}
const moduleB={
    namespaced:true,
    state:{
        hero:'ban',
        age:'20'
    }
}

const store = new Vuex.Store({
    // 注册modules 注册2个写好的模块
    modules:{
        // 这里是命名空间
        moduleA,
        moduleB,
    },



    //  状态 （数据）
    state: {
        count: 0,
        msg:'hello'
    },
    // mutations是改变store里面的数据的
    mutations: {
        // 括号里面传的形参是状态的名字
        // setcount是改变状态的方法
        //   setcount(state) {
        //     state.count++
        //   },
        add(state) {
            state.count++
        },
        sub(state) {
            state.count--
        },
        //   演示mutation的使用
        // 第一个参数是我们的状态
        // 第二个参数就是额外的参数
        setCount(state, payload) {
            state.count = state.count + payload;
        }

    }
});

//   导出这个文件
export default store;