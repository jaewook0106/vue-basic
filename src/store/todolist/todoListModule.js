export const TodoListModule = {
  namespaced:true,
  state:{
    todoListData:[
      {
        infoText:'지구 / 푸르고 아름다운 행성',
        basicSetting:true,
        reviseSetting:false
      }
    ]
  },
  getters:{
    
  },
  mutations:{
    addListChangeData(state,val){
      console.log('val',val)
      console.log('state',state)
      this.state.todoListData = state.todoListData.push({infoText:val,basicSetting:true,reviseSetting:false})

    },
    deleteListChangeData(state,idx){
      console.log('te',this.state.todoListData)
      this.state.todoListData = state.todoListData.splice(idx,1)
    },
    riviseStartData(state,idx){
      let resultArr  = []
      state.todoListData.map((item,num)=>{
        if(idx === num){
          item.basicSetting = false
          item.reviseSetting = true
        }
        resultArr.push(item)
      })
      this.state.todoListData = resultArr
    },
    confirmData(state,idx){
      console.log('xman',state)
      let resultArr  = []
      state.todoListData.map((item,num)=>{
        if(idx === num){
          item.basicSetting = true
          item.reviseSetting = false
        }
        resultArr.push(item)
      })
      // console.log('test',confirmMapping)
      this.state.todoListData = resultArr
    }


    
  },
  actions:{
    clickAddList(context,val){
      console.log(val)
      console.log(context)
      if(val.length > 0){
        context.commit('addListChangeData', val) 
      }else{
        alert('글자입력하세요')
      }
      
    },
    clickDeleteList(context,idx){
      console.log(context)
      console.log(idx)
      context.commit('deleteListChangeData', idx)
    },
    clickReviseList(context,idx){
      context.commit('riviseStartData', idx)
    },
    clickConfirm(context,idx){
      // console.log(context)
      // console.log(idx)
      context.commit('confirmData', idx)
    },

    // testTest({state, commit, getters, rootGetters} ){
    //   console.log('acyncIncrement', state, getters, rootGetters, commit)
    // }
  }
}