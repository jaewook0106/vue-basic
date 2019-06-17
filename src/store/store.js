import Vue from 'vue'
import Vuex from 'vuex'
import {ModuleA} from './a/moduleA'
import {ModuleB} from './b/moduleB'
import {TodoListModule} from './todolist/todoListModule'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'edward',
    phoneNumber:'010-1234-5678'
  },
  getters:{
    getsSplitPhoneNumber(state){
      return state.phoneNumber.split('-')
    },
    getPhoneNumber1(state, getters){
      return getters.getsSplitPhoneNumber[0]
    },
    getPhoneNumber2(state,getters){
      return getters.getsSplitPhoneNumber[1]
    },
    getPhoneNumber3(state,getters){
      return getters.getsSplitPhoneNumber[2]
    }
  },
  mutations: {
    updateUser(state, val){
      state.user = val
    },
    updatePhoneNumber(state, val){
      state.phoneNumber = val
    }
  },
  actions: {
    updateUser(context, val){

      setTimeout(()=>{
        console.log('update')
        context.commit('updateUser', val)
      },1000)

      
    }
  },
  modules:{
    a:ModuleA,
    b:ModuleB,
    TodoListModule
  }
})
