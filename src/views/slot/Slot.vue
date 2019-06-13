<template>
  <div class="parent">
    slot component
    <SlotChild :data="items">
      <template slot="title">테스트</template>
      <ul slot="content" slot-scope="{item}">
        <li v-for="items in item" :key="items.id">{{items.text}} / {{items.id}}</li>
      </ul>
      
      <div slot="footer">
        푸터입니다.
      </div>
    </SlotChild>
  </div>
</template>

<script>
import SlotChild from './SlotChild.vue'
export default {
  components:{
    SlotChild
  },
  data(){
    return{
      items: [
        {id:0,text:'space'},
        {id:1,text:'space1'},
        {id:2,text:'space2'},
        {id:3,text:'space3'}
      ]
    }
  }
}
</script>

<style scoped>
  .parent{
    margin:10px;
    border:5px solid blue
  }
</style>
