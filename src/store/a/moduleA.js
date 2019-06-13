export const ModuleA = {
  state:{
    condition:'a',
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
    acyncIncrement({state, commit} ){
      setTimeout(()=>{
        commit('upDateUserA','testUser')
        console.log('acyncIncrement', state)
      },3000)
    }
  }
}