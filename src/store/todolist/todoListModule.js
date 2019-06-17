export const TodoListModule = {
  namespaced:true,
  state:{
    spaceText:'',
    todoListData:[
      {
        infoText:'지구 / 푸르고 아름다운 행성',
      }
    ]
  },
  getters:{

  },
  mutations:{
    addListChangeData(state,val){
      console.log('val',val)
      console.log('state',state)
      this.state.todoListData = state.todoListData.push({infoText:val})
      this.state.spaceText = ''

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
      
    }
  }
}