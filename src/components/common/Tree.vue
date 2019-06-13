<template>
  <ul>
    <li v-for="item in items" :key="item.id" @click="isOpen = !isOpen">{{item.title}}
      
      <tree 
        v-show="isOpen"
        v-if="item.child"
        :items = "item.child"
       /> 
    </li>
  </ul>
</template>

<script>
export default {
  name:'tree',
  props:['items'],
  data(){
    return{
      isOpen: true
    }
  }
}
</script>

<style>

</style>
