<template>
  <div>
    <h1>다이나믹 컴포넌트 입니다.</h1>
    <component :is="myComponent" class="dynamic" />

    <select name="" id="" v-model="myComponent">
      <option value="DynamicA">A</option>
      <option value="DynamicB">B</option>
      <option value="DynamicC">C</option>
    </select>
  </div>
</template>

<script>
import DynamicA from '../../components/dynamic/DynamicA'
import DynamicB from '@/components/dynamic/DynamicB'
import DynamicC from '@/components/dynamic/DynamicC'
export default {
  components:{
    DynamicA,
    DynamicB,
    DynamicC
  },
  data(){
    return{
      myComponent:'DynamicA'
    }
  }
}
</script>

<style>
  .dynamic{
    border:5px solid rgb(229, 255, 83)
  }
</style>
