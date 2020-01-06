import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import Resource from 'vue-resource'

Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(Resource)

Vue.config.productionTip = false

var store = new Vuex.Store({
  state:{
    orderList:[]
  },
  getters:{
    totalPrice(state){
      var t=0
      state.orderList.forEach(el=>{
        t += el.jg*(el.num || 1)
      })
      return t;
    }
  },
  mutations:{
    addOrder(state,item){
      state.orderList=item
    }
  },
  actions:{
    actionChangeUsername(){
      setTimeout(()=>{
        this.commit('changeUsername')
      },1000)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
