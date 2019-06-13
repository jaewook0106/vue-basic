export const ModuleB = {
  namespaced:true,
  state:{
    condition:'b',
    count:0,
    userName:''
  },
  getters:{
    doubleCount(state){
      return state.count * 2
    }
  },
  mutations:{
    increment(state){
      state.count++
    },
    upDateUserA(state,val){
      state.userName = val
    }
  },
  actions:{
    acyncIncrement({state, commit, getters, rootGetters} ){
      setTimeout(()=>{
        commit('upDateUserA','testUser')
        console.log('acyncIncrement', state, getters, rootGetters)
      },3000)
    }
  }
}