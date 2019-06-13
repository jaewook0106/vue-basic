<template>
  <div>
    <h1>factorial 컴포넌트</h1>
    <div>
      <input type="text" name="" id="" placeholder="숫자를 입력하세요" v-model="inputValue">
      <button @click="doFactorial">계산하기</button>
    </div>
    <p>{{result}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      result:0,
      inputValue:0
    }
  },
  methods: {
    doFactorial(){
      this.result = this.factorial(this.inputValue);
    },
    factorial(num){
      console.log(num)
      if(num > 1){
        return num * this.factorial(num - 1)
      }else{
        return 1;
      }
      
    }
  },
}
</script>

<style>

</style>
