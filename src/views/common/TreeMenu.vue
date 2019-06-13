<template>
  <div>
    <h1>재귀컴포넌트</h1>
    <tree :items="menuItems" />
  </div>
</template>

<script>
import Tree from '../../components/common/Tree.vue'

export default {
  components:{
    Tree
  },
  data(){
    return{
      menuItems:[
        {id:'0', title:'메뉴1'},
        {id:'1', title:'메뉴2',
          child:[
            {id:'00', title:'vuejs'},
            {id:'01', title:'react'},
            {id:'02', title:'angular'}
          ]
        },
        {id:'3', title:'메뉴3'}
      ]
    }
  }
}
</script>

<style>

</style>
